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
  subtitulo: 'Modulo 57 · Medicina Interna',
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
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:3px;">EXPOSICION</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Contacto con un enfermo bacilifero. La mayoria de los expuestos <strong>NO se infecta</strong>: el sistema inmunitario elimina el bacilo.<br><span style="color:var(--ink);">Prueba de tuberculina o IGRA NEGATIVOS.</span></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&rarr;</div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:3px;">INFECCION LATENTE</div>
      <div style="color:var(--ink-dim);line-height:1.55;">El bacilo queda contenido en granulomas. El paciente esta <strong>ASINTOMATICO y NO contagia</strong>.<br><span style="color:var(--ink);">Tuberculina o IGRA POSITIVOS, radiografia normal, cultivos negativos.</span></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&rarr;</div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:3px;">ENFERMEDAD</div>
      <div style="color:var(--ink-dim);line-height:1.55;">El bacilo se multiplica y produce lesion. El paciente esta <strong>SINTOMATICO y puede contagiar</strong>.<br><span style="color:var(--ink);">Confirmacion MICROBIOLOGICA: molecular, cultivo o baciloscopia.</span></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">El riesgo de pasar de latente a enfermedad.</strong> En el inmunocompetente es de alrededor del <strong>5 al 10% a lo largo de toda la vida</strong>, y la mitad de ese riesgo se concentra en los <strong>2 primeros a&#241;os</strong> tras la infeccion. Por eso los contactos recientes son prioritarios. En el paciente con VIH sin tratamiento, ese mismo riesgo es del orden del <strong>5 al 10% AL A&#209;O</strong>.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que hay que hacer SIEMPRE antes de tratar una latente.</strong> DESCARTAR la enfermedad activa: anamnesis de sintomas, exploracion y <strong>radiografia de torax</strong>, con estudio microbiologico si hay cualquier duda. Tratar como latente a un enfermo activo equivale a darle monoterapia, y la monoterapia es la forma mas rapida de crear una resistencia.
    </div>
  </div>
</div>`;

const diagnosticoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:118px 1fr 62px;gap:6px;align-items:stretch;">
      <div style="background:#5a6b2e22;border:1px solid #5a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5a6b2e;">PRUEBA MOLECULAR rapida</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Es hoy la prueba <strong style="color:var(--ink);">INICIAL</strong> ante la sospecha. Detecta ADN de <em>M. tuberculosis</em> y, a la vez, la <strong>resistencia a rifampicina</strong>, lo que permite empezar bien desde el primer dia. Mas sensible que la baciloscopia.</div>
      <div style="display:flex;align-items:center;justify-content:center;font-weight:700;color:#5a6b2e;text-align:center;">horas</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr 62px;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">BACILOSCOPIA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Barata y disponible, y mide la <strong style="color:var(--ink);">CONTAGIOSIDAD</strong>, que es su papel principal hoy. Pero es POCO SENSIBLE (una negativa no descarta nada) y NO distingue <em>M. tuberculosis</em> de las micobacterias no tuberculosas.</div>
      <div style="display:flex;align-items:center;justify-content:center;font-weight:700;color:#3d5a73;text-align:center;">horas</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr 62px;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">CULTIVO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Sigue siendo la <strong style="color:var(--ink);">REFERENCIA</strong>: es lo mas sensible, identifica la especie y permite el <strong>antibiograma completo</strong>. Se pide SIEMPRE, aunque la prueba molecular ya sea positiva, y es la que confirma la curacion.</div>
      <div style="display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;text-align:center;">semanas</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">La tuberculina y el IGRA NO diagnostican enfermedad.</strong> Miden respuesta inmunitaria frente al bacilo, es decir, que el paciente se ha encontrado con el: no distinguen infeccion latente de enfermedad activa. Un resultado negativo <strong>NO descarta</strong> una tuberculosis activa, y de hecho es frecuente que salgan negativos en la enfermedad grave y en el inmunodeprimido.
    </div>
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Diferencias practicas entre las dos.</strong> La <strong>tuberculina</strong> es barata pero da falsos positivos con la vacuna BCG y con micobacterias ambientales, y exige una segunda visita a las 48 a 72 horas. El <strong>IGRA</strong> no se afecta por la BCG y se resuelve con una sola extraccion, pero es mas caro. Ninguno de los dos sirve para seguir la respuesta al tratamiento.
    </div>
  </div>
</div>`;

const tratamientoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #5a6b2e;border-radius:8px;padding:5px 9px;background:#5a6b2e12;margin-bottom:6px;">
    <strong style="color:#5a6b2e;">PAUTA ESTANDAR: 2 meses de HRZE y 4 meses de HR. Seis meses en total.</strong> <span style="color:var(--ink-dim);">La fase intensiva mata la carga bacilar y la de continuacion elimina los bacilos persistentes, que es lo que evita la recaida. Acortar la segunda fase por cuenta propia es la causa evitable mas frecuente de recaida y de resistencia.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8c3a34;">H · Isoniazida.</strong> HEPATOTOXICIDAD y neuropatia periferica. Se previene la neuropatia con <strong>PIRIDOXINA</strong> en el paciente de riesgo: VIH, diabetes, alcoholismo, embarazo, insuficiencia renal y desnutricion.</div>
    <div style="border:1px solid #8c5a2e;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8c5a2e;">R · Rifampicina.</strong> Hepatotoxicidad, ti&#241;e de naranja orina y lagrimas (avisar, o el paciente lo abandona), y sobre todo es un potente <strong>INDUCTOR ENZIMATICO</strong>: antirretrovirales, anticoagulantes, anticonceptivos e inmunosupresores.</div>
    <div style="border:1px solid #8a6a1f;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8a6a1f;">Z · Pirazinamida.</strong> El mas hepatotoxico de los cuatro. Produce ademas <strong>HIPERURICEMIA</strong>, que casi nunca obliga a suspenderlo salvo que desencadene una crisis gotosa. Artralgias frecuentes.</div>
    <div style="border:1px solid #3d5a73;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#3d5a73;">E · Etambutol.</strong> <strong>NEURITIS OPTICA</strong> dependiente de dosis: hay que comprobar agudeza visual y vision de los colores al inicio y preguntar por ellas en cada revision. Es la toxicidad que mas secuelas deja si se pasa por alto.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Cuando la pauta cambia.</strong> <strong>4 meses</strong> con rifapentina y moxifloxacino en pacientes seleccionados, segun un ensayo de no inferioridad. <strong>9 meses</strong> si hay cavitacion Y el cultivo del segundo mes sigue positivo, porque el riesgo de recaida se dispara. <strong>9 a 12 meses</strong> en la meningitis, y pautas prolongadas en la afectacion osteoarticular.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Cuando se suspende por el higado.</strong> Transaminasas por encima de <strong>3 veces</strong> el limite alto con SINTOMAS o ictericia, o por encima de <strong>5 veces</strong> sin sintomas. Se retiran los hepatotoxicos, se espera la normalizacion y se reintroducen de uno en uno. Elevaciones menores y asintomaticas son frecuentes y NO obligan a parar.
    </div>
  </div>
</div>`;

const latenteHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;margin-bottom:6px;">
    <strong style="color:#8a6a1f;">Solo se busca la infeccion latente en quien se va a tratar si sale positiva.</strong> <span style="color:var(--ink-dim);">Cribar a poblaciones sin riesgo genera falsos positivos, hepatotoxicidad evitable y ansiedad. La pregunta no es "puedo hacer la prueba" sino "que hare con el resultado".</span>
  </div>
  <div style="display:grid;grid-template-columns:52px 1fr;gap:5px;margin-bottom:4px;align-items:stretch;">
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">5 mm</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Los mas inmunodeprimidos y los mas expuestos: <strong style="color:var(--ink);">VIH</strong>, contacto reciente de un caso bacilifero, lesiones fibroticas en la radiografia compatibles con tuberculosis antigua, trasplantados y pacientes con inmunosupresion (corticoides a dosis altas mantenidas, antagonistas del factor de necrosis tumoral).</div>
  </div>
  <div style="display:grid;grid-template-columns:52px 1fr;gap:5px;margin-bottom:4px;align-items:stretch;">
    <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">10 mm</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Riesgo intermedio: procedencia reciente de <strong>zona de alta incidencia</strong>, uso de drogas por via parenteral, personal y residentes de instituciones cerradas, personal de laboratorio de micobacterias, y enfermedades que aumentan el riesgo (<strong>SILICOSIS</strong>, diabetes, insuficiencia renal cronica, neoplasias hematologicas, gastrectomia, bajo peso).</div>
  </div>
  <div style="display:grid;grid-template-columns:52px 1fr;gap:5px;margin-bottom:6px;align-items:stretch;">
    <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">15 mm</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Personas <strong>sin ningun factor de riesgo</strong>, en las que en principio no habria que haber hecho la prueba. Si aparece un resultado positivo aqui, conviene revisar por que se pidio antes de tratar.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Pautas disponibles.</strong> Las cortas <strong>con rifamicina</strong> se prefieren hoy por mejor cumplimiento y menor hepatotoxicidad: isoniazida mas rifapentina semanal durante 3 meses, o rifampicina diaria durante 4 meses. La isoniazida sola durante 6 a 9 meses sigue siendo valida pero se cumple peor y es mas hepatotoxica.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Las dos trampas.</strong> Primera: tratar una latente sin haber DESCARTADO la enfermedad activa equivale a dar monoterapia y fabrica resistencias. Segunda: dar por descartada la infeccion con una prueba negativa en un inmunodeprimido, en quien tanto la tuberculina como el IGRA pierden sensibilidad y pueden ser indeterminados.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La tuberculosis sigue siendo una de las principales causas infecciosas de muerte en el mundo y una enfermedad que en la practica clinica se diagnostica tarde. Se transmite por via aerea a partir de un enfermo con afectacion pulmonar o laringea, y su rasgo mas caracteristico es que la infeccion y la enfermedad son dos cosas distintas: la mayoria de los infectados nunca enfermara, y el trabajo clinico consiste en identificar tanto al que ya esta enfermo como al que tiene mas riesgo de llegar a estarlo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: exposicion, infeccion y enfermedad no son lo mismo.</strong></p>
<p style="margin:0 0 12px;">La secuencia ordena todo el tema. La mayoria de los expuestos no llega a infectarse. De los infectados, la mayoria queda en una <strong>infeccion latente</strong>: asintomatica, no contagiosa y sin hallazgos radiologicos. Solo una minoria desarrolla <strong>enfermedad</strong>, y ese riesgo se concentra en los dos primeros a&#241;os tras la infeccion y se multiplica en el inmunodeprimido. La regla que no se negocia es que antes de tratar una latente hay que haber DESCARTADO la enfermedad activa, porque tratar a un enfermo con una pauta de latente es darle monoterapia.</p>
${figBlock('Figura 1', 'De la exposicion a la enfermedad, y donde esta el riesgo', cascadaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: que prueba dice que cosa.</strong></p>
<p style="margin:0 0 12px;">La <strong>prueba molecular rapida</strong> es hoy la prueba inicial ante la sospecha: en horas confirma <em>M. tuberculosis</em> y detecta la resistencia a rifampicina, lo que permite empezar bien desde el primer dia. La <strong>baciloscopia</strong> ha quedado sobre todo como medida de contagiosidad. Y el <strong>cultivo</strong> se pide siempre porque es la referencia, identifica la especie, da el antibiograma completo y es lo que confirma la curacion. La tuberculina y el IGRA quedan fuera de este circuito: miden respuesta inmunitaria, no enfermedad, y un resultado negativo no descarta una tuberculosis activa.</p>
${figBlock('Figura 2', 'Molecular, baciloscopia y cultivo: que aporta cada una y en cuanto tiempo', diagnosticoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la pauta y sus efectos adversos.</strong></p>
<p style="margin:0 0 12px;">El esquema clasico son <strong>seis meses</strong>: dos de cuatro farmacos y cuatro de dos. En pacientes seleccionados existe una pauta de cuatro meses con rifapentina y moxifloxacino, y en otros hay que prolongarla. Conocer la toxicidad de cada farmaco es lo que permite distinguir el efecto adverso que obliga a parar del que se puede vigilar: la mayoria de las elevaciones leves de transaminasas no obligan a suspender nada, y en cambio la neuritis optica por etambutol deja secuelas si se pasa por alto.</p>
${figBlock('Figura 3', 'La pauta estandar, sus cuatro farmacos y cuando cambia', tratamientoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: buscar la latente solo donde se va a actuar.</strong></p>
<p style="margin:0 0 12px;">El cribado de infeccion latente tiene sentido en quien tiene riesgo de progresar y en quien se va a tratar si sale positivo. El umbral de induracion de la tuberculina depende del grupo de riesgo, no del tama&#241;o por si solo, y hoy se prefieren las pautas cortas con rifamicina porque se cumplen mejor y son menos hepatotoxicas.</p>
${figBlock('Figura 4', 'Infeccion latente: umbrales por grupo de riesgo y pautas', latenteHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No descartar una tuberculosis por una baciloscopia negativa. No descartarla por una tuberculina o un IGRA negativos, sobre todo en el inmunodeprimido. No dejar de pedir cultivo porque la prueba molecular ya sea positiva. No tratar una infeccion latente sin descartar antes la enfermedad activa. No a&#241;adir un solo farmaco a una pauta que esta fallando, porque eso es monoterapia encubierta. No olvidar la piridoxina en el paciente de riesgo de neuropatia. No pasar por alto las interacciones de la rifampicina, sobre todo con los antirretrovirales. No suspender el tratamiento por una elevacion leve y asintomatica de transaminasas. Y no retirar el aislamiento respiratorio por criterio de tiempo sin comprobar la respuesta clinica y las baciloscopias.</p>`;

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
      compensada: 'TOS de mas de 2 o 3 semanas, al principio seca y despues productiva, que es el sintoma que debe disparar la sospecha en cualquier entorno. Se acompa&#241;a de febricula de predominio vespertino, SUDORACION NOCTURNA, perdida de peso y astenia. La hemoptisis aparece en fases mas avanzadas y no es necesaria para el diagnostico. El cuadro es INSIDIOSO, de semanas o meses, y esa lentitud es justamente la que retrasa la consulta y el diagnostico.',
      descompensada: 'Hemoptisis amenazante por erosion vascular o aneurisma de Rasmussen. Insuficiencia respiratoria por tuberculosis miliar o por sindrome de dificultad respiratoria aguda. Meningitis tuberculosa, que se instaura en semanas con cefalea, fiebre y alteracion progresiva del nivel de conciencia y de los pares craneales, y cuyo pronostico depende de forma directa de la precocidad del tratamiento. Pericarditis con taponamiento o evolucion a constriccion. Y en el paciente con VIH, presentaciones atipicas con radiografia normal o con adenopatias, y formas diseminadas.'
    },
    laboratorio: [
      { prueba: 'Prueba molecular rapida en esputo', utilidad: 'PRUEBA INICIAL ante la sospecha. En horas detecta ADN de M. tuberculosis y, a la vez, la resistencia a rifampicina, lo que permite iniciar la pauta correcta desde el primer dia. Es mas sensible que la baciloscopia, aunque una prueba negativa no descarta la enfermedad si la sospecha es alta.' },
      { prueba: 'Baciloscopia (tincion de Ziehl-Neelsen o auramina)', utilidad: 'Su papel principal hoy es medir la CONTAGIOSIDAD y seguir la respuesta al tratamiento. Es poco sensible, de modo que una negativa no descarta nada, y no distingue M. tuberculosis de las micobacterias no tuberculosas. Se recogen tres muestras en dias distintos, una de ellas matutina.' },
      { prueba: 'Cultivo de micobacterias', utilidad: 'REFERENCIA. Se pide SIEMPRE, aunque la prueba molecular ya sea positiva, porque es lo mas sensible, identifica la especie y permite el antibiograma completo. El cultivo del segundo mes es ademas un dato pronostico que puede obligar a prolongar la pauta. Tarda semanas.' },
      { prueba: 'Antibiograma (estudio de sensibilidad a farmacos)', utilidad: 'Obligado en todo aislamiento inicial. Detecta la resistencia a isoniazida y rifampicina, que define la multirresistencia, y a los farmacos de segunda linea. Se repite si el cultivo sigue positivo a los 3 meses de tratamiento correcto.' },
      { prueba: 'Prueba de la tuberculina o IGRA (calculadora disponible)', utilidad: 'Miden la respuesta inmunitaria frente al bacilo. Sirven para el diagnostico de infeccion LATENTE, no de enfermedad activa: no distinguen una de otra y un resultado negativo NO descarta una tuberculosis activa, sobre todo en el inmunodeprimido y en la enfermedad grave.' },
      { prueba: 'Serologia de VIH', utilidad: 'OBLIGADA en todo paciente con tuberculosis, sin excepcion. Cambia el pronostico, la presentacion, el momento de iniciar el tratamiento antirretroviral y todo el manejo de las interacciones farmacologicas. Es una de las omisiones mas frecuentes y menos justificables.' },
      { prueba: 'Perfil hepatico, funcion renal, hemograma y acido urico basales', utilidad: 'Punto de partida antes de iniciar el tratamiento, imprescindible para poder interpretar despues cualquier alteracion. La hepatotoxicidad es el efecto adverso mas relevante, y sin un basal no se puede saber si una cifra alterada es nueva.' },
      { prueba: 'Adenosina desaminasa en liquidos', utilidad: 'Muy util en el derrame pleural, el liquido ascitico y el pericardico, donde el rendimiento del cultivo es bajo. Un valor elevado en el contexto adecuado apoya con fuerza el diagnostico, pero no lo sustituye: hay que seguir intentando la confirmacion microbiologica.' }
    ],
    no_invasivos: [
      { metodo: 'Dosis de los farmacos de primera linea (calculadora disponible)', interpretacion: 'La isoniazida y la rifampicina se dosifican por peso con un tope; la pirazinamida y el etambutol, por franjas de peso. Los errores de dosificacion, por defecto sobre todo, favorecen el fracaso y la resistencia.', cutoff: 'Isoniazida 5 mg/kg (maximo 300 mg); rifampicina 10 mg/kg (maximo 600 mg)' },
      { metodo: 'Interpretacion de la tuberculina y del IGRA (calculadora disponible)', interpretacion: 'El umbral de induracion depende del GRUPO DE RIESGO y no del tama&#241;o por si solo. El IGRA no se afecta por la vacuna BCG.', cutoff: '5 mm en inmunodeprimidos y contactos recientes; 10 mm en riesgo intermedio; 15 mm sin factores de riesgo' },
      { metodo: 'Manejo de la hepatotoxicidad (calculadora disponible)', interpretacion: 'Distingue la elevacion que obliga a suspender de la que solo se vigila. Las elevaciones leves y asintomaticas son frecuentes en las primeras semanas y suelen resolverse solas.', cutoff: 'Suspender si las transaminasas superan 3 veces el limite alto CON sintomas, o 5 veces sin ellos' },
      { metodo: 'Retirada del aislamiento respiratorio (calculadora disponible)', interpretacion: 'No basta con el criterio de tiempo: hacen falta tratamiento eficaz, mejoria clinica y baciloscopias negativas. Si hay resistencia demostrada o sospechada, los criterios son mas estrictos.', cutoff: 'Al menos 2 semanas de tratamiento eficaz, mejoria clinica y 3 baciloscopias negativas de dias distintos' },
      { metodo: 'Cultivo de esputo del segundo mes', interpretacion: 'Es el marcador pronostico mas util del seguimiento. Un cultivo positivo al final de la fase intensiva identifica al paciente con mas riesgo de recaida.', cutoff: 'Cultivo positivo a los 2 meses JUNTO CON cavitacion: prolongar la fase de continuacion a 7 meses (9 en total)' },
      { metodo: 'Valoracion de la adherencia', interpretacion: 'El tratamiento directamente observado y las estrategias de apoyo son parte del tratamiento, no un extra administrativo. El abandono es la causa principal de fracaso y de resistencia adquirida.', cutoff: 'Sin umbral numerico; se valora en cada visita junto con la tolerancia y la toxicidad' },
      { metodo: 'Agudeza visual y vision de los colores', interpretacion: 'Basales al iniciar etambutol y preguntadas en cada revision. La neuritis optica es dependiente de dosis y de funcion renal, y es la toxicidad que mas secuelas deja si se detecta tarde.', cutoff: 'Cualquier cambio referido por el paciente obliga a suspender el etambutol de inmediato' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'En la forma posprimaria del adulto, infiltrados y CAVITACION en segmentos APICALES y POSTERIORES de los lobulos superiores y en el segmento superior de los inferiores, donde la presion de oxigeno es mayor. En la primaria, adenopatias hiliares y consolidacion en cualquier lobulo. Patron MILIAR con micronodulos difusos en la forma diseminada. Una radiografia normal NO descarta la enfermedad en el inmunodeprimido.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'Mas sensible: detecta cavitaciones peque&#241;as, nodulos centrolobulillares con patron en arbol en brote que indican diseminacion broncogena activa, y adenopatias con centro necrotico. Util cuando la radiografia es dudosa y para valorar secuelas y bronquiectasias residuales.' },
      { modalidad: 'Resonancia craneal con contraste', hallazgos: 'En la meningitis tuberculosa: realce meningeo de predominio BASAL, hidrocefalia, infartos por vasculitis de las arterias perforantes y tuberculomas. Es mas sensible que la tomografia y el hallazgo de realce basal en el contexto adecuado apoya con fuerza el diagnostico.' },
      { modalidad: 'Ecografia y tomografia abdominal', hallazgos: 'Adenopatias con centro necrotico, engrosamiento de la region ileocecal y del peritoneo, ascitis con tabiques y afectacion esplenica en la forma diseminada. La tuberculosis abdominal imita al linfoma y a la enfermedad de Crohn, y esa confusion retrasa el diagnostico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La primera division, y la que mas ordena, es entre <strong>infeccion latente</strong> (asintomatica, no contagiosa, con prueba inmunitaria positiva y radiografia normal) y <strong>enfermedad activa</strong> (sintomatica, con confirmacion microbiologica y potencialmente contagiosa si es pulmonar o laringea). Dentro de la enfermedad, se clasifica por <strong>localizacion</strong> (pulmonar frente a extrapulmonar), por <strong>patron de sensibilidad</strong> (sensible, monorresistente, multirresistente, preextensamente resistente y extensamente resistente) y por <strong>antecedente de tratamiento</strong> (caso nuevo o previamente tratado), que es lo que hace sospechar resistencia.`,
    escalas: [
      { nombre: 'Interpretacion de la tuberculina y del IGRA (calculadora disponible)', componentes: 'Diametro de la INDURACION (no del eritema) a las 48 a 72 horas, o resultado del IGRA, junto con el grupo de riesgo del paciente.', formula: 'Tres umbrales: 5 mm en VIH, contacto reciente, lesiones fibroticas y inmunosupresion; 10 mm en riesgo intermedio; 15 mm sin factores de riesgo.', interpretacion: 'Diagnostican INFECCION, no enfermedad. Un resultado negativo no descarta una tuberculosis activa. El IGRA no se afecta por la vacuna BCG ni por micobacterias ambientales y se resuelve con una sola visita, pero es mas caro.' },
      { nombre: 'Dosificacion de los farmacos de primera linea (calculadora disponible)', componentes: 'Peso del paciente y funcion renal.', formula: 'Isoniazida 5 mg/kg (maximo 300 mg) y rifampicina 10 mg/kg (maximo 600 mg); pirazinamida y etambutol por franjas de peso. En insuficiencia renal avanzada, pirazinamida y etambutol pasan a tres veces por semana.', interpretacion: 'La infradosificacion favorece el fracaso terapeutico y la aparicion de resistencias. La isoniazida y la rifampicina NO requieren ajuste renal; la pirazinamida y el etambutol si.' },
      { nombre: 'Umbrales de hepatotoxicidad (calculadora disponible)', componentes: 'Transaminasas expresadas en multiplos del limite alto de la normalidad, presencia de sintomas y bilirrubina.', formula: 'Suspender los hepatotoxicos si las transaminasas superan 3 veces el limite alto CON sintomas o ictericia, o 5 veces sin sintomas.', interpretacion: 'Las elevaciones leves y asintomaticas son frecuentes en las primeras semanas y suelen normalizarse solas. Tras la normalizacion, los farmacos se reintroducen DE UNO EN UNO para identificar al responsable.' },
      { nombre: 'Criterios de retirada del aislamiento (calculadora disponible)', componentes: 'Duracion del tratamiento eficaz, respuesta clinica, resultado de las baciloscopias seriadas y patron de sensibilidad.', formula: 'Al menos 2 semanas de tratamiento eficaz, mejoria clinica y 3 baciloscopias de esputo negativas obtenidas en dias distintos.', interpretacion: 'No basta el criterio de tiempo aislado. Si hay resistencia demostrada o sospechada, se exige negativizacion del CULTIVO y los criterios son mas estrictos. La decision se toma junto con medicina preventiva.' },
      { nombre: 'Clasificacion por patron de resistencia', componentes: 'Resultado del antibiograma frente a los farmacos de primera y segunda linea.', formula: 'MULTIRRESISTENTE: resistencia al menos a isoniazida Y rifampicina. PREEXTENSAMENTE RESISTENTE: multirresistente mas resistencia a fluoroquinolonas. EXTENSAMENTE RESISTENTE: lo anterior mas resistencia a bedaquilina o a linezolid.', interpretacion: 'Determina por completo el esquema terapeutico y la duracion. Es el motivo por el que la prueba molecular inicial, que detecta la resistencia a rifampicina en horas, ha cambiado la practica.' },
      { nombre: 'Escala de gravedad de la meningitis tuberculosa', componentes: 'Nivel de conciencia y presencia de focalidad neurologica.', formula: 'Grado I: consciente y sin focalidad. Grado II: alteracion del nivel de conciencia o focalidad. Grado III: estupor o coma.', interpretacion: 'El grado al inicio del tratamiento predice el pronostico mejor que cualquier otra variable, lo que convierte el retraso diagnostico en el determinante principal del desenlace. El tratamiento se inicia ante la sospecha, sin esperar confirmacion.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Tuberculosis pulmonar: sospecha y diagnostico',
      color: '#5a6b2e',
      definicion: 'Enfermedad producida por <em>Mycobacterium tuberculosis</em> con afectacion del parenquima pulmonar, que es la forma mas frecuente y la unica junto con la laringea que transmite la infeccion.',
      fisiopatologia: 'El bacilo llega en nucleos goticulares que quedan suspendidos en el aire durante horas y alcanzan el alveolo. Alli es fagocitado por los macrofagos, en cuyo interior sobrevive bloqueando la fusion del fagosoma con el lisosoma. La respuesta inmunitaria celular, mediada por linfocitos T y por interferon gamma, forma el granuloma que contiene la infeccion pero no la elimina. Si esa contencion falla, por inmunosupresion o por una carga bacilar alta, el granuloma se necrosa, se vacia hacia un bronquio y forma una CAVERNA, que es a la vez la lesion tipica de la enfermedad y el mecanismo de su transmision.',
      epidemiologia: 'Es una de las principales causas infecciosas de muerte en el mundo, con la mayor carga en Asia y Africa. La coinfeccion por VIH multiplica el riesgo de progresion, y la resistencia a farmacos es un problema creciente. En paises de baja incidencia, la mayoria de los casos se concentran en poblaciones concretas: migrantes de zonas de alta incidencia, personas sin hogar, instituciones cerradas e inmunodeprimidos.',
      factores_riesgo: ['Infeccion por VIH, que es el factor de riesgo mas potente', 'Contacto estrecho reciente con un caso bacilifero', 'Procedencia de zona de alta incidencia', 'SILICOSIS', 'Tratamiento con antagonistas del factor de necrosis tumoral', 'Corticoides a dosis altas de forma mantenida', 'Trasplante de organo solido o de progenitores hematopoyeticos', 'Diabetes mellitus', 'Insuficiencia renal cronica en dialisis', 'Neoplasias hematologicas', 'Desnutricion, alcoholismo y consumo de drogas', 'Instituciones cerradas: prisiones, albergues, residencias'],
      clinica: 'TOS de mas de 2 o 3 semanas, febricula vespertina, sudoracion nocturna, perdida de peso y astenia. Hemoptisis en fases avanzadas. El curso es insidioso, de semanas o meses, y esa lentitud retrasa la consulta. En el paciente con VIH y linfocitos CD4 bajos, la presentacion puede ser atipica, con radiografia normal, adenopatias o formas diseminadas.',
      criterios_dx: 'Confirmacion MICROBIOLOGICA: prueba molecular rapida como estudio inicial, baciloscopia y CULTIVO, que se pide siempre. Ante alta sospecha con estudios negativos, se puede tratar de forma empirica manteniendo el esfuerzo diagnostico. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'Prueba molecular rapida, baciloscopias seriadas, cultivo con antibiograma. SEROLOGIA DE VIH siempre. Perfil hepatico, funcion renal, hemograma y acido urico basales antes de iniciar el tratamiento.',
      imagen: 'Radiografia de torax con infiltrados y cavitacion de predominio en segmentos apicales y posteriores. Tomografia si la radiografia es dudosa, que a&#241;ade el patron en arbol en brote como signo de diseminacion broncogena activa.',
      complementarios: 'Si el paciente no expectora: esputo inducido con suero salino hipertonico o BRONCOSCOPIA con lavado broncoalveolar. El aspirado gastrico matutino es una alternativa cuando la broncoscopia no esta disponible o el paciente no la tolera.',
      dx_diferencial: 'Neumonia bacteriana de evolucion torpida, absceso pulmonar, micosis endemicas, nocardiosis, actinomicosis, micobacteriosis no tuberculosas, cancer de pulmon (que comparte la presentacion con perdida de peso y hemoptisis), linfoma, granulomatosis con poliangeitis y sarcoidosis.',
      tx_medico: 'AISLAMIENTO RESPIRATORIO desde la sospecha, en habitacion con presion negativa si se dispone, con mascarilla de proteccion respiratoria para el personal y mascarilla quirurgica para el paciente cuando salga de la habitacion. Declaracion obligatoria y ESTUDIO DE CONTACTOS, que es una parte del tratamiento y no un tramite. Soporte nutricional.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. La regla que ordena el inicio es no esperar al cultivo cuando la sospecha es alta y el paciente esta grave: se trata y se sigue estudiando.',
      tx_intervencionista: 'Broncoscopia diagnostica. Embolizacion de arterias bronquiales en la hemoptisis amenazante. Cirugia en casos seleccionados de secuelas o de enfermedad localizada resistente.',
      criterios_uci: 'Insuficiencia respiratoria grave, tuberculosis miliar con sindrome de dificultad respiratoria aguda, hemoptisis amenazante y meningitis con deterioro del nivel de conciencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La tuberculosis activa es contraindicacion para el trasplante hasta completar un tratamiento adecuado.',
      seguimiento_hospitalario: 'Mantener el aislamiento hasta cumplir los criterios de retirada, que exigen mejoria clinica y baciloscopias negativas ademas del tiempo. Vigilar la tolerancia al tratamiento en las primeras semanas, que es cuando aparece la mayor parte de la toxicidad.',
      seguimiento_ambulatorio: 'Revision mensual con valoracion de adherencia, tolerancia y sintomas de toxicidad. Baciloscopia y cultivo de control, con especial atencion al del SEGUNDO MES, que decide si hay que prolongar la pauta.',
      pronostico: 'Excelente con tratamiento completo y correcto en la enfermedad sensible. El pronostico empeora con el retraso diagnostico, la resistencia, la coinfeccion por VIH y el abandono del tratamiento.',
      algoritmo: ['Sospecharla ante tos de mas de 2 o 3 semanas con sintomas generales', 'AISLAR desde la sospecha, sin esperar confirmacion', 'Pedir prueba molecular rapida como estudio inicial', 'Pedir baciloscopias seriadas y CULTIVO con antibiograma', 'Hacer radiografia de torax y tomografia si hay dudas', 'Pedir SEROLOGIA DE VIH a todos', 'Obtener analitica basal antes de iniciar el tratamiento', 'Si no expectora, inducir el esputo o hacer broncoscopia', 'Declarar el caso e iniciar el estudio de contactos', 'Iniciar tratamiento sin esperar al cultivo si la sospecha es alta']
    },
    {
      nombre: 'Tratamiento de la tuberculosis sensible y su toxicidad',
      color: '#3f6b52',
      definicion: 'Esquema terapeutico de la tuberculosis causada por cepas sensibles a los farmacos de primera linea, basado en la combinacion de varios farmacos durante un tiempo prolongado.',
      fisiopatologia: 'La combinacion de farmacos no es una costumbre sino una necesidad matematica: en una poblacion bacilar grande siempre existen mutantes resistentes espontaneos a cualquier farmaco aislado, y la probabilidad de que un mismo bacilo sea resistente a varios a la vez es minima. De ahi que a&#241;adir un solo farmaco a una pauta que esta fallando sea monoterapia encubierta. La duracion prolongada responde a otro problema: los bacilos persistentes, metabolicamente poco activos, sobreviven a la fase intensiva y solo se eliminan con la fase de continuacion, que es la que evita la recaida.',
      epidemiologia: 'La pauta de seis meses cura a la gran mayoria de los pacientes con enfermedad sensible cuando se completa. El abandono y el cumplimiento irregular son las causas principales de fracaso y de resistencia adquirida, y por eso el apoyo a la adherencia forma parte del tratamiento.',
      factores_riesgo: ['Cumplimiento irregular o abandono del tratamiento', 'Cavitacion extensa al diagnostico', 'Cultivo positivo al final del segundo mes', 'Coinfeccion por VIH', 'Diabetes mal controlada', 'Bajo peso y desnutricion', 'Consumo de alcohol y de drogas', 'Hepatopatia previa para la toxicidad', 'Edad avanzada para la hepatotoxicidad', 'Interacciones farmacologicas no revisadas'],
      clinica: 'La respuesta esperable es desaparicion de la fiebre en 1 a 2 semanas y mejoria progresiva de la tos, el apetito y el peso. La persistencia de fiebre mas alla de 2 o 3 semanas obliga a revisar la adherencia, a pensar en resistencia, en una reaccion paradojica o en un diagnostico alternativo o coexistente.',
      criterios_dx: 'No aplica: es la fase terapeutica. Lo que hay que tener antes de empezar es el estudio de sensibilidad en marcha, la serologia de VIH y la analitica basal. Ver la Figura 3 de Definicion.',
      laboratorio: 'Perfil hepatico basal y despues segun sintomas o riesgo. Acido urico si aparecen artralgias. Baciloscopia y cultivo mensuales hasta la negativizacion, y siempre el del segundo mes.',
      imagen: 'Radiografia de control al final del tratamiento como referencia para el futuro. La imagen mejora mas despacio que la clinica y no sirve para decidir la duracion, de modo que no hay que prolongar el tratamiento por una radiografia que aun no se ha normalizado.',
      complementarios: 'Agudeza visual y vision de los colores basales con etambutol. Valoracion de la adherencia en cada visita, con tratamiento directamente observado en los pacientes de riesgo de abandono.',
      dx_diferencial: 'Ante falta de respuesta: mala adherencia (la causa mas frecuente con diferencia), resistencia, malabsorcion de los farmacos, diagnostico alternativo, infeccion concomitante y reaccion paradojica.',
      tx_medico: 'Apoyo a la adherencia con tratamiento directamente observado cuando procede, educacion sobre los efectos adversos esperables (incluido que la rifampicina ti&#241;e la orina de naranja, dato que si no se avisa provoca abandonos), soporte social y nutricional, y abstinencia de alcohol.',
      tx_farmacologico: 'PAUTA ESTANDAR: 2 meses de isoniazida, rifampicina, pirazinamida y etambutol, seguidos de 4 meses de isoniazida y rifampicina. PAUTA DE 4 MESES con rifapentina, moxifloxacino, isoniazida y pirazinamida en pacientes seleccionados. PIRIDOXINA para prevenir la neuropatia por isoniazida en pacientes de riesgo. Se prolonga a 9 meses si hay cavitacion Y cultivo positivo al segundo mes.',
      tx_intervencionista: 'Rara vez necesaria en la enfermedad sensible. Cirugia en secuelas sintomaticas, aspergiloma sobre caverna residual o hemoptisis recurrente.',
      criterios_uci: 'Hepatitis fulminante por farmacos, que es excepcional pero grave, y las complicaciones de la enfermedad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante hepatico en la hepatitis fulminante por farmacos antituberculosos, situacion rara y de manejo en centro especializado.',
      seguimiento_hospitalario: 'Vigilancia de la tolerancia en las primeras semanas. Ante elevacion de transaminasas, aplicar los umbrales: suspender si superan 3 veces el limite alto con sintomas o 5 veces sin ellos, y reintroducir DE UNO EN UNO tras la normalizacion.',
      seguimiento_ambulatorio: 'Revision mensual. Preguntar de forma dirigida por nauseas, dolor abdominal, ictericia, parestesias y cambios en la vision. Confirmar la curacion con cultivos negativos al final del tratamiento.',
      pronostico: 'Curacion en la gran mayoria si se completa la pauta. La recaida es poco frecuente y se concentra en los pacientes con cavitacion y cultivo positivo al segundo mes, que son justamente los que necesitan pauta prolongada.',
      algoritmo: ['Comprobar analitica basal, serologia de VIH y estudio de sensibilidad en marcha', 'Iniciar 2 meses de isoniazida, rifampicina, pirazinamida y etambutol', 'Dosificar por PESO y ajustar pirazinamida y etambutol si hay insuficiencia renal', 'A&#241;adir PIRIDOXINA si hay riesgo de neuropatia', 'Revisar todas las INTERACCIONES de la rifampicina', 'Avisar de que la orina se ti&#241;e de naranja', 'Comprobar el cultivo del SEGUNDO MES', 'Prolongar a 9 meses si hay cavitacion y cultivo positivo', 'Continuar 4 meses con isoniazida y rifampicina', 'Confirmar la curacion con cultivos negativos al terminar']
    },
    {
      nombre: 'Infeccion tuberculosa latente',
      color: '#8a6a1f',
      definicion: 'Estado de respuesta inmunitaria persistente frente a antigenos de <em>M. tuberculosis</em> sin evidencia clinica, radiologica ni microbiologica de enfermedad activa. El paciente esta asintomatico y NO contagia.',
      fisiopatologia: 'El bacilo queda contenido dentro de granulomas en un estado de baja actividad metabolica, en equilibrio con la respuesta inmunitaria del huesped. Ese equilibrio puede romperse a&#241;os despues si la inmunidad celular se deteriora, y de ahi que las situaciones que la comprometen (VIH, antagonistas del factor de necrosis tumoral, corticoides, trasplante, dialisis) sean justamente las que definen a quien hay que buscar y tratar.',
      epidemiologia: 'Una fraccion muy grande de la poblacion mundial esta infectada. El riesgo de progresar a enfermedad es del 5 al 10% a lo largo de la vida en el inmunocompetente, y la mitad de ese riesgo se concentra en los dos primeros a&#241;os tras la infeccion. En el paciente con VIH sin tratamiento, ese riesgo es del orden del 5 al 10% al a&#241;o.',
      factores_riesgo: ['Infeccion por VIH', 'Contacto reciente con un caso bacilifero', 'Conversion reciente de la prueba', 'Lesiones fibroticas en la radiografia compatibles con tuberculosis antigua no tratada', 'Inicio previsto de antagonistas del factor de necrosis tumoral u otros biologicos', 'Trasplante de organo solido o de progenitores', 'Corticoides a dosis altas de forma mantenida', 'Silicosis', 'Insuficiencia renal cronica en dialisis', 'Diabetes mellitus', 'Neoplasias hematologicas y de cabeza y cuello', 'Bajo peso y gastrectomia'],
      clinica: 'ASINTOMATICA por definicion. Cualquier sintoma (tos prolongada, fiebre, sudoracion nocturna, perdida de peso) obliga a descartar enfermedad activa antes de etiquetar el caso como latente y, sobre todo, antes de tratarlo como tal.',
      criterios_dx: 'Prueba de la tuberculina o IGRA positivos, con anamnesis, exploracion y RADIOGRAFIA DE TORAX que descarten enfermedad activa. Se hace estudio microbiologico ante cualquier duda. Ver la Figura 4 de Definicion.',
      laboratorio: 'Tuberculina o IGRA segun el contexto. Perfil hepatico basal antes de iniciar el tratamiento, sobre todo en mayores, hepatopatas y consumidores de alcohol. Serologia de VIH si no se conoce.',
      imagen: 'RADIOGRAFIA DE TORAX obligada en todos antes de tratar. Las lesiones fibroticas apicales compatibles con tuberculosis antigua no tratada suben el riesgo y bajan el umbral de induracion a 5 mm.',
      complementarios: 'Estudio microbiologico de esputo si hay cualquier sintoma o alteracion radiologica. El cribado solo tiene sentido en quien se va a tratar si el resultado es positivo.',
      dx_diferencial: 'Falso positivo de la tuberculina por vacuna BCG o por micobacterias ambientales (no ocurre con el IGRA). Falso negativo por inmunosupresion, enfermedad grave, edad avanzada o infeccion muy reciente, ya que la prueba tarda semanas en positivizarse.',
      tx_medico: 'Informacion clara sobre el sentido del tratamiento: no se trata una enfermedad presente sino que se evita una futura. Esa explicacion es determinante para el cumplimiento de una pauta larga en una persona que se encuentra bien.',
      tx_farmacologico: 'Se prefieren las pautas CORTAS CON RIFAMICINA por mejor cumplimiento y menor hepatotoxicidad: isoniazida mas rifapentina semanal durante 3 meses, o rifampicina diaria durante 4 meses. La isoniazida sola durante 6 a 9 meses sigue siendo valida. A&#241;adir piridoxina con las pautas que incluyan isoniazida en pacientes de riesgo.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El cribado de infeccion latente es obligado ANTES de un trasplante y antes de iniciar biologicos, y el tratamiento debe iniciarse antes de la inmunosupresion siempre que sea posible.',
      seguimiento_hospitalario: 'No aplica salvo hepatotoxicidad.',
      seguimiento_ambulatorio: 'Control clinico mensual con pregunta dirigida sobre sintomas de hepatotoxicidad. Perfil hepatico si hay factores de riesgo o sintomas. Insistir en completar la pauta, que es donde falla el tratamiento de la latente.',
      pronostico: 'El tratamiento reduce de forma sustancial el riesgo de progresar a enfermedad. El beneficio es mayor cuanto mayor es el riesgo basal del paciente, lo que refuerza que el cribado debe dirigirse y no hacerse de forma indiscriminada.',
      algoritmo: ['Decidir a quien se criba: solo a quien se tratara si sale positivo', 'Elegir tuberculina o IGRA segun disponibilidad y antecedente de BCG', 'Aplicar el umbral de induracion segun el GRUPO DE RIESGO', 'DESCARTAR enfermedad activa: sintomas, exploracion y radiografia', 'Ante cualquier duda, estudio microbiologico de esputo', 'Pedir perfil hepatico basal en pacientes de riesgo', 'Elegir preferentemente una pauta corta con rifamicina', 'Revisar interacciones si se usa rifampicina o rifapentina', 'A&#241;adir piridoxina si la pauta lleva isoniazida y hay riesgo', 'Seguimiento mensual y refuerzo del cumplimiento']
    },
    {
      nombre: 'Tuberculosis extrapulmonar',
      color: '#7a2f5c',
      definicion: 'Afectacion por <em>M. tuberculosis</em> de organos distintos del parenquima pulmonar, por diseminacion linfatica o hematogena desde el foco primario.',
      fisiopatologia: 'Durante la primoinfeccion se produce una bacteriemia silente que siembra bacilos en organos con alta perfusion y alta presion de oxigeno: vertices pulmonares, corteza renal, epifisis de huesos largos, cuerpos vertebrales y meninges. Esos focos quedan latentes y pueden reactivarse a&#241;os despues. La forma MILIAR corresponde a una diseminacion hematogena masiva, por progresion de la primoinfeccion o por rotura de un foco a un vaso.',
      epidemiologia: 'Representa una proporcion importante de los casos y su frecuencia relativa aumenta mucho en el paciente con VIH y en otros inmunodeprimidos. La localizacion mas frecuente es la ganglionar, seguida de la pleural. La meningea y la miliar son las de peor pronostico.',
      factores_riesgo: ['Infeccion por VIH con linfocitos CD4 bajos', 'Edad avanzada y edad infantil', 'Inmunosupresion farmacologica', 'Insuficiencia renal cronica', 'Diabetes mellitus', 'Desnutricion', 'Alcoholismo', 'Procedencia de zona de alta incidencia', 'Retraso diagnostico de la forma pulmonar', 'Gastrectomia y sindromes de malabsorcion'],
      clinica: 'Depende del organo. GANGLIONAR: adenopatias cervicales indoloras que pueden fistulizar (escrofula). PLEURAL: derrame unilateral con dolor y fiebre. MENINGEA: cefalea, fiebre y alteracion progresiva del nivel de conciencia y de pares craneales en semanas. OSTEOARTICULAR: espondilitis dorsolumbar con destruccion vertebral y absceso frio (mal de Pott). GENITOURINARIA: piuria esteril y hematuria. PERICARDICA: derrame con riesgo de taponamiento y de constriccion. MILIAR: fiebre prolongada, deterioro general y patron micronodular difuso.',
      criterios_dx: 'Confirmacion microbiologica siempre que sea posible, con MUESTRA DEL ORGANO AFECTADO. El rendimiento del cultivo es bajo en los liquidos, de modo que hay que insistir en la BIOPSIA, cuyo estudio histologico y microbiologico rinde mucho mas.',
      laboratorio: 'Prueba molecular y cultivo de la muestra obtenida. Adenosina desaminasa en liquido pleural, ascitico y pericardico. En el liquido cefalorraquideo: pleocitosis linfocitaria, proteinas MUY elevadas y glucosa baja, un patron muy sugestivo en el contexto adecuado.',
      imagen: 'Resonancia craneal con realce meningeo BASAL, hidrocefalia e infartos por vasculitis en la meningitis. Resonancia de columna en la espondilitis. Ecocardiograma en la pericarditis. Tomografia abdominal en la forma peritoneal e intestinal. Radiografia con patron miliar en la forma diseminada.',
      complementarios: 'BIOPSIA de la lesion: ganglionar, pleural, peritoneal, sinovial, medular o hepatica segun el caso. El hallazgo de granulomas con necrosis caseosa apoya con fuerza el diagnostico, aunque no es especifico y hay que enviar siempre muestra para cultivo.',
      dx_diferencial: 'Linfoma y otras neoplasias, sarcoidosis, micosis, brucelosis, enfermedad de Crohn en la forma intestinal, carcinomatosis peritoneal, meningitis por criptococo o carcinomatosa, y espondilodiscitis bacteriana.',
      tx_medico: 'Ademas del tratamiento antimicrobiano, valoracion por las especialidades implicadas. En la afectacion pulmonar concomitante, aislamiento respiratorio. La tuberculosis extrapulmonar aislada NO es contagiosa por via aerea.',
      tx_farmacologico: 'La misma pauta de primera linea, con dos particularidades. Duracion: 9 a 12 meses en la MENINGITIS y pautas prolongadas en la osteoarticular. CORTICOIDES: indicados en la meningitis, donde reducen la mortalidad, y en la pericarditis, donde reducen la evolucion a constriccion. En la meningitis el tratamiento se inicia ante la sospecha, sin esperar confirmacion.',
      tx_intervencionista: 'Drenaje de abscesos, pericardiocentesis en el taponamiento, ventriculostomia o derivacion en la hidrocefalia de la meningitis, y cirugia en la espondilitis con inestabilidad o compresion medular.',
      criterios_uci: 'Meningitis con deterioro del nivel de conciencia o hidrocefalia aguda, taponamiento cardiaco, forma miliar con insuficiencia respiratoria y sepsis tuberculosa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Igual que en la forma pulmonar: la enfermedad activa contraindica el trasplante hasta completar un tratamiento adecuado.',
      seguimiento_hospitalario: 'En la meningitis, vigilancia neurologica estrecha, control de la hidrocefalia y pauta descendente de corticoides. La reaccion paradojica, con empeoramiento durante un tratamiento correcto, es frecuente y NO indica fracaso.',
      seguimiento_ambulatorio: 'Prolongado, con valoracion de secuelas: neurologicas en la meningitis, funcionales en la osteoarticular y constrictivas en la pericarditis.',
      pronostico: 'Muy variable segun la localizacion. La ganglionar y la pleural tienen excelente pronostico. La meningea sigue teniendo mortalidad alta y secuelas frecuentes, y su desenlace depende sobre todo del grado neurologico al iniciar el tratamiento, es decir, de cuanto se tardo en sospecharla.',
      algoritmo: ['Sospecharla ante fiebre prolongada o afectacion de organo sin explicacion', 'Buscar siempre afectacion pulmonar concomitante', 'Obtener muestra DEL ORGANO afectado, con biopsia si hace falta', 'Enviar la muestra para histologia Y para cultivo', 'Pedir adenosina desaminasa en liquido pleural, ascitico o pericardico', 'En la meningitis, iniciar el tratamiento ante la SOSPECHA', 'A&#241;adir CORTICOIDES en meningitis y pericarditis', 'Prolongar a 9 a 12 meses en la meningitis', 'Valorar drenaje o cirugia segun la localizacion', 'Advertir de la reaccion paradojica, que no significa fracaso']
    },
    {
      nombre: 'Tuberculosis resistente a farmacos',
      color: '#8c3a34',
      definicion: 'Enfermedad producida por cepas resistentes a uno o mas farmacos antituberculosos. La forma que mas cambia el manejo es la MULTIRRESISTENTE, con resistencia al menos a isoniazida y rifampicina.',
      fisiopatologia: 'La resistencia surge por mutaciones cromosomicas espontaneas que la presion selectiva de un tratamiento inadecuado amplifica. Las tres formas de generarla son la monoterapia, el cumplimiento irregular y la adicion de un solo farmaco a una pauta que ya esta fallando. La resistencia PRIMARIA, en cambio, es la que se transmite ya formada de un enfermo a otro, y en muchas zonas es hoy la via principal.',
      epidemiologia: 'Una parte importante de los casos multirresistentes ocurre en pacientes sin tratamiento previo, es decir, por transmision directa. El tratamiento es mas largo, mas toxico y menos eficaz, aunque las pautas totalmente orales de introduccion reciente han mejorado de forma sustancial los resultados y han acortado la duracion.',
      factores_riesgo: ['Tratamiento antituberculoso previo, sobre todo si fue incompleto', 'Contacto con un caso multirresistente conocido', 'Procedencia de zona con alta prevalencia de resistencia', 'Fracaso terapeutico o recaida', 'Cultivo que sigue positivo tras 2 a 3 meses de tratamiento correcto', 'Cumplimiento irregular', 'Infeccion por VIH en algunos contextos', 'Estancia en instituciones cerradas', 'Malabsorcion de los farmacos', 'Uso previo de fluoroquinolonas por otros motivos'],
      clinica: 'Indistinguible de la tuberculosis sensible. La pista no es clinica sino evolutiva y epidemiologica: falta de respuesta al tratamiento, cultivo que no se negativiza, antecedente de tratamiento previo o contacto con un caso resistente.',
      criterios_dx: 'ANTIBIOGRAMA. La prueba molecular rapida inicial detecta la resistencia a rifampicina en horas y es lo que ha cambiado la practica, porque permite reorientar el tratamiento desde el primer dia en lugar de esperar semanas.',
      laboratorio: 'Estudio de sensibilidad de primera y segunda linea, con pruebas moleculares de resistencia ampliadas. Monitorizacion estrecha de la toxicidad de los farmacos de segunda linea: hemograma, funcion renal, funcion tiroidea y electrolitos.',
      imagen: 'Igual que en la forma sensible, con mayor frecuencia de enfermedad extensa y cavitada por el retraso en alcanzar un tratamiento eficaz.',
      complementarios: 'Electrocardiograma seriado por el riesgo de PROLONGACION DEL QT con bedaquilina, fluoroquinolonas y clofazimina. Audiometria si se usan aminoglucosidos. Valoracion oftalmologica y neurologica periodica.',
      dx_diferencial: 'Antes de asumir resistencia hay que descartar mala adherencia, malabsorcion de los farmacos, dosificacion insuficiente, reaccion paradojica y un diagnostico alternativo o concomitante.',
      tx_medico: 'Manejo en centro con experiencia y con comite de expertos. Apoyo intensivo a la adherencia, soporte psicologico y social, y control estricto de la transmision, que en este escenario es especialmente importante.',
      tx_farmacologico: 'Pautas TOTALMENTE ORALES basadas en BEDAQUILINA, con combinaciones que incluyen pretomanid, linezolid y una fluoroquinolona. La pauta de 6 meses con bedaquilina, pretomanid, linezolid y moxifloxacino ha desplazado a los esquemas largos con inyectables en la mayoria de los pacientes. Los aminoglucosidos han quedado relegados por su toxicidad. La composicion exacta se decide segun el antibiograma y en comite.',
      tx_intervencionista: 'Cirugia de reseccion en casos seleccionados con enfermedad localizada y respuesta insuficiente al tratamiento medico.',
      criterios_uci: 'Insuficiencia respiratoria, hemoptisis amenazante y toxicidad grave por los farmacos de segunda linea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Contraindicado hasta control de la enfermedad.',
      seguimiento_hospitalario: 'Aislamiento MAS ESTRICTO y prolongado que en la forma sensible: los criterios de retirada exigen negativizacion del cultivo y no solo de la baciloscopia. Monitorizacion del QT y de la toxicidad hematologica y neurologica del linezolid.',
      seguimiento_ambulatorio: 'Seguimiento mensual con cultivos, control de toxicidad y apoyo a la adherencia. Estudio y seguimiento de contactos, que en la multirresistencia requiere valoracion especializada.',
      pronostico: 'Peor que en la enfermedad sensible, aunque ha mejorado mucho con las pautas orales de introduccion reciente, que ademas son mas cortas y mejor toleradas. El pronostico empeora a medida que se a&#241;ade resistencia a fluoroquinolonas y a los farmacos del nucleo del esquema.',
      algoritmo: ['Sospecharla ante tratamiento previo, contacto con caso resistente o falta de respuesta', 'Pedir prueba molecular rapida, que detecta la resistencia a rifampicina en horas', 'Obtener antibiograma completo de primera y segunda linea', 'NO a&#241;adir nunca un solo farmaco a una pauta que falla', 'Remitir a centro con experiencia y decidir la pauta en comite', 'Usar esquemas totalmente orales basados en bedaquilina', 'Monitorizar el QT con electrocardiogramas seriados', 'Vigilar la toxicidad hematologica y neurologica del linezolid', 'Mantener aislamiento hasta negativizar el CULTIVO', 'Estudiar los contactos con valoracion especializada']
    },
    {
      nombre: 'Poblaciones especiales y control de la transmision',
      color: '#3d5a73',
      definicion: 'Situaciones en las que el diagnostico, el tratamiento o las interacciones cambian de forma sustancial: infeccion por VIH, embarazo, hepatopatia, insuficiencia renal, y todo lo relativo a evitar que la enfermedad se transmita.',
      fisiopatologia: 'En el paciente con VIH, el deficit de linfocitos CD4 impide formar granulomas bien organizados, lo que explica las presentaciones atipicas, la radiografia normal y la mayor frecuencia de formas diseminadas y extrapulmonares. Al recuperar la inmunidad con el tratamiento antirretroviral puede aparecer un SINDROME INFLAMATORIO DE RECONSTITUCION INMUNITARIA: la respuesta inmunitaria recuperada ataca antigenos micobacterianos residuales y produce un empeoramiento clinico que NO significa fracaso del tratamiento.',
      epidemiologia: 'La tuberculosis es una de las principales causas de muerte en personas con VIH. En el embarazo, la enfermedad no tratada es mucho mas peligrosa que los farmacos de primera linea, un balance que a veces se olvida y retrasa el tratamiento.',
      factores_riesgo: ['Infeccion por VIH con linfocitos CD4 bajos', 'Retraso en el inicio del tratamiento antirretroviral', 'Hepatopatia cronica para la toxicidad', 'Insuficiencia renal cronica en dialisis', 'Embarazo y posparto', 'Edad avanzada', 'Alcoholismo', 'Polifarmacia con inductores o sustratos del citocromo', 'Convivencia en espacios cerrados y mal ventilados', 'Retraso en el aislamiento del caso indice'],
      clinica: 'En el VIH avanzado la presentacion es atipica: puede no haber cavitacion, la radiografia puede ser normal y predominan adenopatias y formas diseminadas. La reaccion paradojica o el sindrome de reconstitucion inmunitaria se manifiestan como fiebre, crecimiento de adenopatias o empeoramiento radiologico semanas despues de iniciar el tratamiento.',
      criterios_dx: 'Los mismos, con umbral de sospecha mas bajo y mas insistencia en obtener muestras. En el VIH avanzado hay que buscar la enfermedad de forma activa incluso con radiografia normal.',
      laboratorio: 'Recuento de linfocitos CD4 y carga viral. Perfil hepatico mas estrecho en la hepatopatia. Ajuste de dosis segun funcion renal. Determinacion de niveles de los farmacos si se sospecha malabsorcion.',
      imagen: 'Umbral bajo para hacer tomografia en el paciente con VIH, cuya radiografia puede ser normal o inespecifica. Imagen dirigida segun la sospecha de afectacion extrapulmonar, que aqui es mas frecuente.',
      complementarios: 'Revision sistematica de INTERACCIONES: la rifampicina es un potente inductor enzimatico y reduce las concentraciones de muchos antirretrovirales, anticoagulantes, anticonceptivos, inmunosupresores y antiepilepticos. En algunos esquemas se sustituye por rifabutina, que induce menos.',
      dx_diferencial: 'En el paciente con VIH, considerar micobacterias no tuberculosas, neumonia por <em>Pneumocystis</em>, criptococosis, histoplasmosis, linfoma y sarcoma de Kaposi, que pueden coexistir con la tuberculosis.',
      tx_medico: 'CONTROL DE LA TRANSMISION: aislamiento respiratorio desde la sospecha, habitacion con presion negativa si se dispone, mascarilla de proteccion respiratoria para el personal, mascarilla quirurgica para el paciente al salir, declaracion obligatoria y estudio de contactos. Los criterios de retirada del aislamiento exigen respuesta clinica y baciloscopias negativas, no solo tiempo.',
      tx_farmacologico: 'VIH: tratamiento antituberculoso primero y antirretroviral PRECOZ, en las 2 primeras semanas si los linfocitos CD4 son muy bajos, con la excepcion de la MENINGITIS tuberculosa, en la que el inicio muy precoz se asocio a mas mortalidad y se retrasa. EMBARAZO: la pauta de primera linea se considera segura y el riesgo de no tratar es mucho mayor; los aminoglucosidos estan contraindicados por ototoxicidad fetal. HEPATOPATIA: pautas con menos hepatotoxicos y controles mas estrechos. INSUFICIENCIA RENAL: isoniazida y rifampicina sin cambios; pirazinamida y etambutol tres veces por semana.',
      tx_intervencionista: 'Segun la complicacion. En el sindrome de reconstitucion inmunitaria grave, corticoides, manteniendo tanto el tratamiento antituberculoso como el antirretroviral.',
      criterios_uci: 'Formas diseminadas con insuficiencia respiratoria, sindrome de reconstitucion inmunitaria grave con afectacion del sistema nervioso central, y toxicidad grave por farmacos.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Cribado obligatorio de infeccion latente antes de todo trasplante y antes de iniciar biologicos, con tratamiento previo a la inmunosupresion siempre que sea posible.',
      seguimiento_hospitalario: 'Coordinacion con medicina preventiva para el aislamiento y el estudio de contactos. Revision de interacciones en cada cambio de medicacion. Ante empeoramiento tras iniciar el antirretroviral, pensar en reconstitucion inmunitaria antes que en fracaso.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con la unidad de VIH. Control de la adherencia a los dos tratamientos a la vez, que es una carga considerable para el paciente y donde mas apoyo hace falta.',
      pronostico: 'Bueno con tratamiento completo y precoz, incluso en el paciente con VIH cuando se combina con antirretrovirales. El retraso diagnostico y la falta de control de la transmision son los determinantes que mas pesan a escala poblacional.',
      algoritmo: ['AISLAR desde la sospecha, sin esperar confirmacion', 'Declarar el caso e iniciar el estudio de contactos', 'Pedir serologia de VIH a todos los pacientes', 'En el VIH, iniciar antituberculoso primero y antirretroviral precoz', 'RETRASAR el antirretroviral en la meningitis tuberculosa', 'Revisar todas las interacciones de la rifampicina', 'En el embarazo, tratar: el riesgo de no hacerlo es mayor', 'Ajustar pirazinamida y etambutol en la insuficiencia renal', 'Ante empeoramiento tras el antirretroviral, pensar en reconstitucion inmunitaria', 'Retirar el aislamiento por criterios clinicos y microbiologicos, no solo por tiempo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En tuberculosis los errores se repiten con una regularidad notable: se descarta por una prueba que no sirve para descartar, se trata sin haber excluido la enfermedad activa, se pierde el aislamiento o se abandona el seguimiento a mitad. Lo que sigue es la lista de comprobacion que evita esos fallos.',
    parametros: ['Aislar desde la SOSPECHA, sin esperar confirmacion microbiologica', 'No descartar la enfermedad por una baciloscopia negativa', 'No descartarla por una tuberculina o un IGRA negativos', 'Pedir CULTIVO siempre, aunque la prueba molecular ya sea positiva', 'Pedir SEROLOGIA DE VIH a todo paciente con tuberculosis', 'Obtener analitica basal antes de iniciar el tratamiento', 'DESCARTAR enfermedad activa antes de tratar una infeccion latente', 'No a&#241;adir nunca un solo farmaco a una pauta que esta fallando', 'A&#241;adir piridoxina si hay riesgo de neuropatia por isoniazida', 'Revisar las interacciones de la rifampicina en cada cambio de medicacion', 'Comprobar el cultivo del SEGUNDO MES: decide si hay que prolongar', 'Declarar el caso y hacer el estudio de contactos, que es parte del tratamiento'],
    criterios_uci_general: 'Insuficiencia respiratoria grave, tuberculosis miliar con sindrome de dificultad respiratoria aguda, hemoptisis amenazante, meningitis con deterioro del nivel de conciencia o hidrocefalia aguda, taponamiento pericardico, hepatitis fulminante por farmacos y sindrome de reconstitucion inmunitaria grave.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'La tuberculosis activa contraindica el trasplante hasta completar un tratamiento adecuado. El cribado de infeccion latente es obligado antes de todo trasplante y antes de iniciar biologicos, y el tratamiento debe empezar antes de la inmunosupresion siempre que sea posible. El trasplante hepatico se plantea de forma excepcional en la hepatitis fulminante por farmacos antituberculosos.',
    prevencion: 'Primaria: control de la transmision con deteccion y tratamiento precoz de los casos contagiosos, aislamiento respiratorio, ventilacion adecuada de los espacios y proteccion respiratoria del personal. La vacuna BCG protege sobre todo frente a las formas graves del ni&#241;o (meningitis y miliar) y no evita la infeccion pulmonar del adulto. Secundaria: cribado dirigido y tratamiento de la infeccion latente en los grupos de riesgo, sobre todo contactos recientes, personas con VIH, candidatos a biologicos y a trasplante. Terciaria: adherencia al tratamiento con apoyo activo, tratamiento directamente observado en pacientes de riesgo de abandono, y seguimiento de las secuelas.'
  }
};

export const compCites = {
  'Tuberculosis pulmonar: sospecha y diagnostico': [11, 15, 16],
  'Tratamiento de la tuberculosis sensible y su toxicidad': [1, 3],
  'Infeccion tuberculosa latente': [4, 5, 14],
  'Tuberculosis extrapulmonar': [8, 9],
  'Tuberculosis resistente a farmacos': [2, 6, 7],
  'Poblaciones especiales y control de la transmision': [10, 12, 13]
};
export const estigmasTitulo = 'Signos y pistas que orientan hacia una tuberculosis';
export const estigmas = [
  { s: 'Tos de mas de 2 o 3 semanas', p: 'El sintoma que dispara la sospecha', photo: null, desc: 'Es el criterio de cribado clinico mas usado en el mundo. Su valor no esta en la especificidad, que es baja, sino en que obliga a pensar en la enfermedad y a pedir el estudio microbiologico, que es lo que se pierde cuando no se piensa en ella.' },
  { s: 'Sudoracion nocturna con febricula vespertina', p: 'Muy caracteristica', photo: null, desc: 'La combinacion de sudoracion que empapa la ropa de cama con febricula al final del dia y perdida de peso es el cuadro constitucional clasico. Comparte presentacion con el linfoma y con otras infecciones cronicas.' },
  { s: 'Cavitacion en el vertice pulmonar', p: 'La lesion tipica', photo: null, desc: 'Los segmentos apicales y posteriores tienen la presion de oxigeno mas alta del pulmon, y el bacilo es aerobio estricto. La caverna es a la vez la lesion caracteristica y el mecanismo de contagio, porque se vacia hacia un bronquio.' },
  { s: 'Patron miliar en la radiografia', p: 'Diseminacion hematogena', photo: null, desc: 'Micronodulos de tama&#241;o uniforme distribuidos por todo el pulmon, como granos de mijo. Indica siembra hematogena masiva y obliga a buscar afectacion de otros organos, sobre todo meningea, y a tratar sin demora.' },
  { s: 'Adenopatia cervical que fistuliza', p: 'Escrofula', photo: null, desc: 'Adenitis tuberculosa cervical, indolora y de crecimiento lento, que puede reblandecerse y drenar al exterior. Es la forma extrapulmonar mas frecuente y su diagnostico exige biopsia con estudio histologico y cultivo.' },
  { s: 'Espondilitis dorsolumbar con absceso frio', p: 'Mal de Pott', photo: null, desc: 'Destruccion de cuerpos vertebrales contiguos con conservacion relativa del disco, y absceso paravertebral sin signos inflamatorios locales. Puede producir deformidad en giba y compresion medular, y se confunde con una espondilodiscitis bacteriana.' },
  { s: 'Liquido cefalorraquideo con proteinas muy altas', p: 'Meningitis tuberculosa', photo: null, desc: 'Pleocitosis de predominio linfocitario, proteinas muy elevadas y glucosa baja. En el contexto adecuado el patron es muy sugestivo, y en la meningitis el tratamiento se inicia ante la sospecha porque el pronostico depende de la precocidad.' },
  { s: 'Realce meningeo BASAL en la resonancia', p: 'Muy sugestivo', photo: null, desc: 'La afectacion predomina en las cisternas de la base, lo que explica la hidrocefalia y la afectacion de pares craneales. Se acompa&#241;a de infartos por vasculitis de las arterias perforantes, que son los que dejan secuelas.' },
  { s: 'Piuria esteril con hematuria', p: 'Tuberculosis genitourinaria', photo: null, desc: 'Leucocitos en orina con urocultivo convencional repetidamente negativo. Obliga a pedir cultivo especifico de micobacterias en orina de varias micciones matutinas, que es una peticion que hay que hacer de forma explicita.' },
  { s: 'Derrame pleural con adenosina desaminasa alta', p: 'Apoya el diagnostico', photo: null, desc: 'Exudado de predominio linfocitario con adenosina desaminasa elevada en un paciente joven de zona de alta incidencia. El cultivo del liquido rinde poco, de modo que la biopsia pleural aumenta mucho la rentabilidad.' },
  { s: 'Empeoramiento tras iniciar el antirretroviral', p: 'Reconstitucion inmunitaria', photo: null, desc: 'Fiebre, crecimiento de adenopatias o empeoramiento radiologico semanas despues de empezar el tratamiento antirretroviral. NO significa fracaso: se mantienen ambos tratamientos y se a&#241;aden corticoides en los casos graves.' },
  { s: 'Orina de color naranja', p: 'Rifampicina', photo: null, desc: 'Ti&#241;e orina, lagrimas y sudor. Es inofensivo pero hay que avisarlo antes de empezar, porque si el paciente lo descubre sin explicacion previa abandona el tratamiento. Tambien mancha de forma permanente las lentes de contacto blandas.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Interpretacion de la tuberculina y del IGRA (calculadora disponible)': [4, 11],
  'Dosificacion de los farmacos de primera linea (calculadora disponible)': [1],
  'Umbrales de hepatotoxicidad (calculadora disponible)': [1],
  'Criterios de retirada del aislamiento (calculadora disponible)': [1, 11],
  'Clasificacion por patron de resistencia': [2],
  'Escala de gravedad de la meningitis tuberculosa': [8]
};
export const escalaCalc = {
  'Interpretacion de la tuberculina y del IGRA (calculadora disponible)': 'ppd-igra',
  'Dosificacion de los farmacos de primera linea (calculadora disponible)': 'dosis-tb',
  'Umbrales de hepatotoxicidad (calculadora disponible)': 'hepatotoxicidad-tb',
  'Criterios de retirada del aislamiento (calculadora disponible)': 'aislamiento-tb'
};
export const compGroups = [
  { name: 'Enfermedad pulmonar', items: ['Tuberculosis pulmonar: sospecha y diagnostico', 'Tratamiento de la tuberculosis sensible y su toxicidad'] },
  { name: 'Latente y extrapulmonar', items: ['Infeccion tuberculosa latente', 'Tuberculosis extrapulmonar'] },
  { name: 'Lo que complica el manejo', items: ['Tuberculosis resistente a farmacos', 'Poblaciones especiales y control de la transmision'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la enfermedad pulmonar, separada en sospechar y diagnosticar por un lado y tratar por otro, porque el primer problema es de eleccion de prueba y el segundo, de duracion y toxicidad. Las dos siguientes son las dos caras que no encajan en ese molde: la infeccion latente, que no es enfermedad y se trata para que no llegue a serlo, y la afectacion de otros organos, donde el diagnostico depende de conseguir una muestra. Las dos ultimas recogen lo que mas complica el manejo: la resistencia y los pacientes en los que las reglas cambian.';
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
    { title: 'INFECCION O ENFERMEDAD', sub: 'No son lo mismo', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Latente', sub: 'Asintomatica y no contagia', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Activa', sub: 'Confirmacion microbiologica', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Descartar activa antes', sub: 'Tratar latente a un enfermo es monoterapia', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Umbral por grupo de riesgo', sub: '5, 10 o 15 mm', color: '#3f6b52', target: 'clasificacion' }
    ] },
    { title: 'QUE PRUEBA', sub: 'Y que dice cada una', color: '#5a6b2e', target: 'diagnostico', leaves: [
      { title: 'Molecular rapida', sub: 'Inicial: especie y rifampicina', color: '#5a6b2e', target: 'diagnostico' },
      { title: 'Baciloscopia', sub: 'Mide contagiosidad', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Cultivo', sub: 'Referencia y antibiograma', color: '#8c3a34', target: 'diagnostico' },
      { title: 'VIH a todos', sub: 'La omision menos justificable', color: '#7a2f5c', target: 'diagnostico' }
    ] },
    { title: 'TRATAR', sub: 'Seis meses y cuatro farmacos', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: '2 HRZE + 4 HR', sub: 'La pauta estandar', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Piridoxina', sub: 'Si hay riesgo de neuropatia', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Interacciones', sub: 'La rifampicina induce mucho', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'Cultivo del 2.o mes', sub: 'Decide si se prolonga', color: '#3d5a73', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 11], no_invasivos: [1, 4], imagen: [11, 15] };
export const clasificacionCite = [1, 2, 4, 8];
export const seguimientoCite = [1, 10, 11];
