// topics/bronquiectasias/content.js: Bronquiectasias.
// Cubre el item "Bronquiectasias" del cluster Enfermedad respiratoria cronica (bloque III,
// Neumologia) del temario, incluidas la fibrosis quistica del adulto, la discinesia ciliar
// primaria y la infeccion por micobacterias no tuberculosas.
//
// Fuentes principales: guia de la European Respiratory Society de 2017 para el manejo de las
// bronquiectasias del adulto (la que hay en Bibliografia/); guia de la British Thoracic Society
// de 2019; indice de gravedad de bronquiectasias de Chalmers; definicion de exacerbacion del
// consenso EMBARC de 2017; y la guia ATS/ERS/ESCMID/IDSA de 2020 sobre micobacterias no
// tuberculosas.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'bronquiectasias',
  titulo: 'Bronquiectasias',
  subtitulo: 'Módulo 59 · Medicina Interna',
  accent: '#2e6b8a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const circuloHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #2e6b8a;border-radius:8px;padding:5px 9px;background:#2e6b8a12;margin-bottom:6px;">
    <strong style="color:#2e6b8a;">Las bronquiectasias son una DILATACIÓN BRONQUIAL IRREVERSIBLE, no una enfermedad.</strong> <span style="color:var(--ink-dim);">Son el resultado final de causas muy distintas, y ese es el motivo por el que el diagnóstico radiológico solo es la mitad del trabajo: la otra mitad es averiguar por que están ahi.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 14px 1fr;gap:4px;align-items:stretch;margin-bottom:4px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:3px;">1 · INFECCIÓN</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Las bacterias colonizan una via aérea que ya no se limpia bien y forman biopelicula. <em>Haemophilus influenzae</em> es el patógeno más frecuente, y <em>Pseudomonas aeruginosa</em> el que peor pronóstico marca.</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&rarr;</div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:3px;">2 · INFLAMACIÓN</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Llegan neutrófilos y liberan elastasa y otras proteasas. La respuesta inmunitaria que intenta controlar la infección es la que produce buena parte del daño.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 14px 1fr;gap:4px;align-items:stretch;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">4 · ACLARAMIENTO ALTERADO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">El bronquio dilatado y sin cilios funcionantes no puede expulsar el moco, que se estanca. Y ese moco estancado es el medio de cultivo del paso 1: el círculo se cierra.</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&larr;</div>
    <div style="border:1.5px solid #2e6b8a;border-radius:8px;padding:6px 8px;background:#2e6b8a08;">
      <div style="font-weight:700;color:#2e6b8a;text-align:center;margin-bottom:3px;">3 · DAÑO DE LA PARED</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Se destruye el cartílago, el músculo liso y el epitelio ciliado. El bronquio se dilata de forma IRREVERSIBLE y pierde su capacidad de limpiarse.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Por que importa el círculo.</strong> Explica el tratamiento entero. Se puede actuar sobre la infección (antibióticos dirigidos, erradicación, supresión a largo plazo), sobre la inflamación (macrolidos, que actuan más por su efecto inmunomodulador que por el antibiótico) y sobre el aclaramiento (FISIOTERAPIA RESPIRATORIA diaria, que es la base y la medida más costoeficaz de todo el tema). Lo que no se puede es revertir la dilatación: el daño estructural es permanente y por eso el objetivo es frenar el círculo, no deshacerlo.
  </div>
</div>`;

const etiologiaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;margin-bottom:6px;">
    <strong style="color:#8a6a1f;">Buscar la causa NO es un ejercicio académico.</strong> <span style="color:var(--ink-dim);">En una proporción importante de los pacientes el estudio cambia el tratamiento: una inmunodeficiencia se sustituye, una aspergilosis se trata, una fibrosis quística tiene moduladores y una micobacteria contraindica el macrolido en monoterapia.</span>
  </div>
  <div style="border:1.5px solid #2e6b8a;border-radius:8px;padding:6px 9px;background:#2e6b8a08;margin-bottom:6px;">
    <div style="font-weight:700;color:#2e6b8a;margin-bottom:3px;">LO QUE SE PIDE A TODOS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Hemograma completo</strong> con fórmula (eosinofilia, linfopenia). <strong style="color:var(--ink);">INMUNOGLOBULINAS séricas</strong> (IgG, IgA e IgM), que detectan la inmunodeficiencia común variable, una causa tratable que se diagnostica tarde con demasiada frecuencia. <strong style="color:var(--ink);">Estudio de Aspergillus</strong>: IgE total, IgE específica y precipitinas, para la aspergilosis broncopulmonar alérgica. Y <strong style="color:var(--ink);">CULTIVO DE ESPUTO</strong> incluyendo MICOBACTERIAS.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Y según las pistas.</strong> <strong>Cloro en sudor y estudio del gen CFTR</strong> si hay afectación de lóbulos superiores, infertilidad masculina, malabsorción, pancreatitis o inicio joven. <strong>Óxido nítrico nasal y estudio ciliar</strong> si hay otitis media crónica de la infancia, situs inversus o infertilidad. <strong>Alfa-1-antitripsina</strong> si hay enfisema. <strong>Autoinmunidad</strong> si hay artritis o sequedad.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que orienta la DISTRIBUCIÓN.</strong> <strong>Lóbulos superiores</strong>: fibrosis quística, aspergilosis broncopulmonar alérgica, tuberculosis previa. <strong>Lóbulos inferiores</strong>: postinfecciosa, aspiración, inmunodeficiencia. <strong>Lóbulo medio y lingula</strong>: micobacterias no tuberculosas, sobre todo en mujeres mayores no fumadoras. <strong>Una sola zona</strong>: obstrucción bronquial, y obliga a broncoscopia para descartar cuerpo extraño o tumor.
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3f6b52;border-radius:8px;background:#3f6b5210;color:var(--ink-dim);">
    <strong style="color:#3f6b52;">Idiopáticas, pero solo después de buscar.</strong> Tras un estudio completo, una parte importante de los casos se queda sin causa identificada. Eso es una conclusion legitima, pero solo cuando se ha hecho el estudio: etiquetar de idiopáticas unas bronquiectasias a las que nunca se les pidio inmunoglobulinas no es lo mismo.
  </div>
</div>`;

const manejoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">BASE<br><span style="font-weight:400;font-size:8.5px;">para todos</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">FISIOTERAPIA RESPIRATORIA DIARIA</strong>, que es la medida más costoeficaz del tema y la que peor se prescribe. Ejercicio y rehabilitación respiratoria. Vacunación antigripal y antineumococica. Y <strong>tratar la causa</strong> si se ha encontrado.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">3 o más<br><span style="font-weight:400;font-size:8.5px;">exacerbaciones/año</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">MACROLIDO a largo plazo</strong> (azitromicina), por su efecto inmunomodulador más que antibiótico. <strong style="color:#8c3a34;">Antes de empezar hay que DESCARTAR micobacterias no tuberculosas</strong> con cultivos de esputo, porque un macrolido en monoterapia sobre una micobacteria crea resistencia y arruina el tratamiento futuro. Comprobar además QT y audición.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">PSEUDOMONAS<br><span style="font-weight:400;font-size:8.5px;">crónica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">ANTIBIÓTICO INHALADO</strong> a largo plazo (colistina, tobramicina o gentamicina) si hay colonizacion crónica y exacerbaciones frecuentes. Primera dosis supervisada por el riesgo de broncoespasmo.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que NO se hace, aunque se haga en la EPOC.</strong> <strong>Corticoides inhalados de rutina</strong>: no están indicados salvo que coexista asma o EPOC, y aumentan el riesgo de neumonía y de infección por micobacterias. Y la <strong>DNasa recombinante</strong>, que funciona en la fibrosis quística, esta <strong>CONTRAINDICADA</strong> en las bronquiectasias de otras causas: en un ensayo empeoró la función pulmonar y aumento las exacerbaciones.
    </div>
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que si puede ayudar.</strong> <strong>Suero salino hipertónico</strong> o manitol inhalado como coadyuvantes del aclaramiento, siempre con broncodilatador previo y primera dosis supervisada. Broncodilatadores solo si hay obstrucción o síntomas que respondan. Y cirugía de resección en el caso excepcional de enfermedad localizada, muy sintomática y refractaria.
    </div>
  </div>
</div>`;

const exacerbacionHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Una exacerbación es un DETERIORO SOSTENIDO de al menos 48 horas en 3 o más de estos 6 síntomas</strong> <span style="color:var(--ink-dim);">que lleve al clínico a cambiar el tratamiento. No es "el paciente tose más hoy".</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">TOS</strong><br>más frecuente o más intensa</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">VOLUMEN o CONSISTENCIA</strong><br>del esputo</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">PURULENCIA</strong><br>del esputo</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">DISNEA</strong><br>o tolerancia al ejercicio</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">FATIGA</strong><br>o malestar general</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">HEMOPTISIS</strong><br>nueva o aumentada</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">EL ORDEN QUE NO SE INVIERTE</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. CULTIVO de esputo ANTES</strong> de dar el antibiótico. Es el gesto que más se salta y el que más cuesta después, porque una vez iniciado el tratamiento el cultivo pierde valor y el paciente se queda sin mapa microbiológico para la siguiente vez.<br><strong style="color:var(--ink);">2. Antibiótico</strong> dirigido al último aislamiento del propio paciente mientras llega el resultado.<br><strong style="color:var(--ink);">3. Intensificar la fisioterapia</strong>, que en la exacerbación se hace más veces al dia, no menos.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">14 DÍAS, NO 5</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La duración habitual del antibiótico en una exacerbación de bronquiectasias es de <strong style="color:var(--ink);">14 días</strong>, mucho más larga que en la bronquitis aguda o en la exacerbación de EPOC. La razón es la biopelicula y la carga bacteriana alta de una via aérea estructuralmente dañada: las pautas cortas dejan al paciente recayendo a las pocas semanas.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Ante una exacerbación que no responde</strong>, antes de cambiar de antibiótico a ciegas: revisar el cultivo, pensar en <strong>Pseudomonas</strong> o en una <strong>micobacteria no tuberculosa</strong>, descartar una aspergilosis broncopulmonar alérgica y comprobar que el paciente esta haciendo fisioterapia. Y en la hemoptisis amenazante, contactar con radiología intervencionista para embolización de arterias bronquiales.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las bronquiectasias son una <strong>dilatación anormal e irreversible de los bronquios</strong> con destrucción de su pared. Lo primero que conviene fijar es que no son una enfermedad sino el <strong>resultado final común</strong> de causas muy distintas: infecciones previas, inmunodeficiencias, enfermedades genéticas, obstrucción, aspiración o enfermedades sistémicas. De ahi que el trabajo clínico tenga dos mitades: reconocerlas en la imagen y averiguar por que están ahi.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: el círculo vicioso que lo explica todo.</strong></p>
<p style="margin:0 0 12px;">Una via aérea que no se limpia bien se coloniza; la colonizacion atrae neutrófilos; los neutrófilos dañan la pared; la pared dañada se dilata y pierde los cilios; y el bronquio dilatado se limpia todavía peor. El círculo se retroalimenta, y entenderlo permite deducir el tratamiento completo: se ataca la infección, se modula la inflamación y, sobre todo, se mejora el <strong>ACLARAMIENTO</strong>, que es donde esta la medida más costoeficaz de todo el tema.</p>
${figBlock('Figura 1', 'El círculo vicioso, y por que explica el tratamiento entero', circuloHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: buscar la causa cambia el tratamiento.</strong></p>
<p style="margin:0 0 12px;">Hay un estudio mínimo que se pide a todos (hemograma, <strong>inmunoglobulinas séricas</strong>, estudio de <em>Aspergillus</em> y cultivo de esputo incluyendo <strong>micobacterias</strong>) y un estudio dirigido según las pistas clínicas y la distribución radiológica. No es un ejercicio académico: encontrar una inmunodeficiencia, una aspergilosis, una fibrosis quística o una micobacteria cambia lo que se hace con el paciente.</p>
${figBlock('Figura 2', 'El estudio etiológico: lo de todos, lo dirigido y lo que dice la distribución', etiologiaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el manejo crónico, en escalones.</strong></p>
<p style="margin:0 0 12px;">La base para todos es la <strong>fisioterapia respiratoria diaria</strong>, junto con ejercicio, vacunas y tratamiento de la causa. A partir de tres exacerbaciones al año se añade un <strong>macrolido a largo plazo</strong>, siempre tras descartar micobacterias no tuberculosas. Y si hay colonizacion crónica por <em>Pseudomonas</em> con exacerbaciones frecuentes, un <strong>antibiótico inhalado</strong>. Conviene tener claro también lo que NO se hace aquí aunque se haga en la EPOC.</p>
${figBlock('Figura 3', 'Escalones del tratamiento crónico, y lo que no se debe hacer', manejoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la exacerbación tiene definición, orden y duración.</strong></p>
<p style="margin:0 0 12px;">No es cualquier empeoramiento: hace falta un deterioro sostenido de al menos 48 horas en tres o más de seis síntomas. El orden tampoco es indiferente: <strong>cultivo de esputo ANTES del antibiótico</strong>, siempre. Y la duración es de <strong>14 días</strong>, mucho más que en una bronquitis aguda, porque la carga bacteriana y la biopelicula de una via aérea dañada no se resuelven con pautas cortas.</p>
${figBlock('Figura 4', 'Definición de exacerbación, el orden correcto y los 14 días', exacerbacionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No quedarse en el diagnóstico radiológico sin buscar la causa. No dejar de pedir inmunoglobulinas, que detectan una inmunodeficiencia tratable. No dar antibiótico sin haber recogido antes el cultivo de esputo. No tratar una exacerbación durante 5 o 7 días. No iniciar un macrolido a largo plazo sin haber descartado micobacterias no tuberculosas. No usar corticoides inhalados de rutina si no hay asma o EPOC asociada. No usar DNasa recombinante, que en las bronquiectasias no debidas a fibrosis quística empeora los resultados. No dejar de prescribir fisioterapia respiratoria, que es lo que más rinde y lo que menos se indica. Y no pasar por alto un primer aislamiento de <em>Pseudomonas</em>, porque es el momento en que todavía se puede intentar erradicarla.</p>`;

export const bibliografia = [
  'Polverino E, Goeminne PC, McDonnell MJ, et al. European Respiratory Society guidelines for the management of adult bronchiectasis. Eur Respir J. 2017;50(3):1700629.',
  'Hill AT, Sullivan AL, Chalmers JD, et al. British Thoracic Society guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69.',
  'Chalmers JD, Goeminne P, Aliberti S, et al. The bronchiectasis severity index: an international derivation and validation study. Am J Respir Crit Care Med. 2014;189(5):576-585.',
  'Hill AT, Haworth CS, Aliberti S, et al. Pulmonary exacerbation in adults with bronchiectasis: a consensus definition for clinical research. Eur Respir J. 2017;49(6):1700051.',
  'Daley CL, Iaccarino JM, Lange C, et al. Treatment of nontuberculous mycobacterial pulmonary disease: an official ATS/ERS/ESCMID/IDSA clinical practice guideline. Clin Infect Dis. 2020;71(4):e1-e36.',
  'Altenburg J, de Graaff CS, Stienstra Y, et al. Effect of azithromycin maintenance treatment on infectious exacerbations among patients with non-cystic fibrosis bronchiectasis: the BAT randomized controlled trial. JAMA. 2013;309(12):1251-1259.',
  'Serisier DJ, Martin ML, McGuckin MA, et al. Effect of long-term, low-dose erythromycin on pulmonary exacerbations among patients with non-cystic fibrosis bronchiectasis: the BLESS randomized controlled trial. JAMA. 2013;309(12):1260-1267.',
  'ODonnell AE, Barker AF, Ilowite JS, Fick RB. Treatment of idiopathic bronchiectasis with aerosolized recombinant human DNase I. Chest. 1998;113(5):1329-1334.',
  'Haworth CS, Bilton D, Chalmers JD, et al. Inhaled liposomal ciprofloxacin in patients with non-cystic fibrosis bronchiectasis and chronic Pseudomonas aeruginosa infection. Lancet Respir Med. 2019;7(3):213-226.',
  'Finch S, McDonnell MJ, Abo-Leyah H, et al. A comprehensive analysis of the impact of Pseudomonas aeruginosa colonization on prognosis in adult bronchiectasis. Ann Am Thorac Soc. 2015;12(11):1602-1611.',
  'Lucas JS, Barbato A, Collins SA, et al. European Respiratory Society guidelines for the diagnosis of primary ciliary dyskinesia. Eur Respir J. 2017;49(1):1601090.',
  'Farrell PM, White TB, Ren CL, et al. Diagnosis of cystic fibrosis: consensus guidelines from the Cystic Fibrosis Foundation. J Pediatr. 2017;181S:S4-S15.',
  'Middleton PG, Mall MA, Drevinek P, et al. Elexacaftor-tezacaftor-ivacaftor for cystic fibrosis with a single Phe508del allele. N Engl J Med. 2019;381(19):1809-1819.',
  'Agarwal R, Sehgal IS, Dhooria S, et al. Allergic bronchopulmonary aspergillosis. Indian J Med Res. 2020;151(6):529-549.',
  'Chalmers JD, Chang AB, Chotirmall SH, et al. Bronchiectasis. Nat Rev Dis Primers. 2018;4(1):45.',
  'Flume PA, Chalmers JD, Olivier KN. Advances in bronchiectasis: endotyping, genetics, microbiome, and disease heterogeneity. Lancet. 2018;392(10150):880-890.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Situación estable',
      tituloB: 'Exacerbación y complicaciones',
      compensada: 'TOS PRODUCTIVA CRÓNICA, que es el síntoma cardinal, con expectoración diaria de volumen variable y a menudo purulenta, que el paciente lleva años describiendo como "bronquitis de siempre". Disnea de esfuerzo, fatiga y sensación de congestión torácica. Hemoptisis leve recurrente, que es frecuente y suele deberse a la hipertrofia de la circulación bronquial. En la exploración, crepitantes gruesos que cambian con la tos y a veces sibilancias o roncus. Las acropaquias son menos frecuentes de lo que sugieren los textos clásicos.',
      descompensada: 'EXACERBACIÓN: deterioro sostenido de al menos 48 horas en 3 o más de 6 síntomas (tos, volumen o consistencia del esputo, purulencia, disnea, fatiga y hemoptisis) que lleva a cambiar el tratamiento. Y las complicaciones que cambian el plan: HEMOPTISIS AMENAZANTE por erosión de arterias bronquiales hipertrofiadas, insuficiencia respiratoria crónica, cor pulmonale en la enfermedad avanzada, y el deterioro progresivo sin exacerbaciones claras que debe hacer pensar en micobacterias no tuberculosas o en aspergilosis broncopulmonar alérgica.'
    },
    laboratorio: [
      { prueba: 'CULTIVO DE ESPUTO con micobacterias', utilidad: 'Es la prueba que más orienta el tratamiento. Se pide al diagnóstico, de forma periódica en el seguimiento y SIEMPRE antes de iniciar un antibiótico en una exacerbación. Debe incluir de forma explícita el cultivo de micobacterias, que no se hace si no se solicita y cuya omisión lleva a dar macrolidos en monoterapia sobre una micobacteria no diagnosticada.' },
      { prueba: 'Inmunoglobulinas séricas (IgG, IgA e IgM)', utilidad: 'Se piden a TODOS los pacientes. Detectan la inmunodeficiencia común variable, que es una causa tratable con inmunoglobulinas sustitutivas y que se diagnostica con años de retraso. Es una de las omisiones más costosas del estudio etiológico.' },
      { prueba: 'Estudio de Aspergillus: IgE total, IgE específica y precipitinas', utilidad: 'Cribado de aspergilosis broncopulmonar alérgica, que produce bronquiectasias centrales de predominio en lóbulos superiores, tapones de moco y eosinofilia. Es tratable con corticoides y antifúngicos, y su diagnóstico cambia el manejo por completo.' },
      { prueba: 'Cloro en sudor y estudio del gen CFTR', utilidad: 'Ante bronquiectasias de predominio en lóbulos superiores, colonizacion por Staphylococcus aureus, infertilidad masculina, malabsorción, pancreatitis de repetición o inicio en edad joven. El diagnóstico de fibrosis quística en el adulto es posible y hoy abre la puerta a los moduladores del CFTR.' },
      { prueba: 'Óxido nítrico nasal y estudio de la función ciliar', utilidad: 'Ante otitis media crónica en la infancia, rinosinusitis persistente, situs inversus o infertilidad. El óxido nítrico nasal muy bajo es un buen cribado de discinesia ciliar primaria, que se confirma con microscopia y estudio genético en centros de referencia.' },
      { prueba: 'Alfa-1-antitripsina y autoinmunidad', utilidad: 'La alfa-1-antitripsina si hay enfisema asociado. El factor reumatoide, los anticuerpos anti-péptido citrulinado y los anticuerpos anti-Ro y anti-La ante artritis, sequedad o sospecha de conectivopatia, ya que la artritis reumatoide y el síndrome de Sjogren son causas reconocidas.' },
      { prueba: 'Hemograma con fórmula', utilidad: 'La eosinofilia orienta hacia aspergilosis broncopulmonar alérgica o hacia un fenotipo eosinofilico; la linfopenia, hacia inmunodeficiencia. Es una prueba barata que se pide a todos y cuya lectura completa aporta más de lo que parece.' },
      { prueba: 'Serología de VIH e inmunoglobulina E total', utilidad: 'El VIH en el paciente con infecciones de repetición o factores de riesgo. La inmunoglobulina E total forma parte del cribado de aspergilosis y sus valores muy elevados son uno de los criterios diagnósticos.' }
    ],
    no_invasivos: [
      { metodo: 'Índice de gravedad de bronquiectasias (calculadora disponible)', interpretacion: 'Combina edad, índice de masa corporal, FEV1, ingresos, exacerbaciones, disnea, colonizacion y extensión radiológica. Predice mortalidad, ingresos y exacerbaciones futuras.', cutoff: '0 a 4 leve; 5 a 8 moderada; 9 o más grave' },
      { metodo: 'Estudio etiológico mínimo (calculadora disponible)', interpretacion: 'Comprueba que se ha hecho lo que se pide a todos y sugiere el estudio dirigido según las pistas clínicas y la distribución radiológica.', cutoff: 'A todos: hemograma, inmunoglobulinas, estudio de Aspergillus y cultivo de esputo con micobacterias' },
      { metodo: 'Criterios de exacerbación (calculadora disponible)', interpretacion: 'Definición de consenso: deterioro sostenido de al menos 48 horas en 3 o más de 6 síntomas, con decisión clínica de cambiar el tratamiento.', cutoff: '3 o más de 6 síntomas durante 48 horas o más' },
      { metodo: 'Manejo de Pseudomonas aeruginosa (calculadora disponible)', interpretacion: 'Distingue el primer aislamiento, que justifica un intento de ERRADICACIÓN, de la colonizacion crónica, que puede requerir antibiótico inhalado a largo plazo.', cutoff: 'Colonizacion crónica: 2 o más cultivos positivos separados al menos 3 meses en un año' },
      { metodo: 'Pruebas de función pulmonar con DLCO', interpretacion: 'Patrón habitualmente OBSTRUCTIVO, aunque puede ser normal o mixto. El FEV1 forma parte del índice de gravedad y su caída acelerada identifica al paciente que necesita intensificar el tratamiento.', cutoff: 'Sin umbral único; se interpreta en la evolución del propio paciente' },
      { metodo: 'Escala de disnea del Medical Research Council', interpretacion: 'De 1 a 5 según el grado de esfuerzo que produce disnea. Entra en el índice de gravedad y refleja el impacto real de la enfermedad sobre la vida del paciente.', cutoff: 'Grado 4 o 5: puntúa en el índice de gravedad y marca enfermedad avanzada' },
      { metodo: 'Prueba de la marcha de 6 minutos', interpretacion: 'Objetiva la limitación funcional y detecta desaturación de esfuerzo. Útil para indicar rehabilitación respiratoria y para seguir la respuesta.', cutoff: 'Desaturación por debajo del 88%: valorar oxigenoterapia y estudio de hipertensión pulmonar' }
    ],
    imagen: [
      { modalidad: 'Tomografía de alta resolución', hallazgos: 'ES LA PRUEBA DIAGNÓSTICA. Cociente broncoarterial mayor de 1 (el bronquio se ve más grande que la arteria que lo acompaña, lo que da el signo del anillo de sello), falta de afilamiento progresivo del bronquio hacia la periferia, y bronquios visibles a menos de 1 cm de la pleura. Se añaden engrosamiento de la pared, tapones de moco y patrón en árbol en brote cuando hay infección activa.' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Poco sensible: puede ser normal con bronquiectasias extensas, y esa es la razón principal del retraso diagnóstico. Cuando muestra algo, son imagenes en rail de tranvia, anillos y pérdida de definición de las marcas broncovasculares.' },
      { modalidad: 'Distribución en la tomografía', hallazgos: 'Orienta la etiología: lóbulos SUPERIORES en la fibrosis quística, la aspergilosis broncopulmonar alérgica y la tuberculosis previa; lóbulos INFERIORES en las postinfecciosas, la aspiración y la inmunodeficiencia; LÓBULO MEDIO y LINGULA en las micobacterias no tuberculosas; y afectación de UNA SOLA zona en la obstrucción bronquial, que obliga a broncoscopia.' },
      { modalidad: 'Broncoscopia', hallazgos: 'No es rutinaria. Indicada ante bronquiectasias LOCALIZADAS en una sola zona, para descartar cuerpo extraño, tumor endobronquial o estenosis, y para obtener muestras microbiológicas cuando el paciente no expectora o los cultivos no explican la evolución.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las bronquiectasias se clasifican por su <strong>morfología</strong> radiológica (cilindricas, varicosas y quísticas, en orden creciente de daño), por su <strong>extensión</strong> (localizadas frente a difusas, distinción que importa porque la afectación de una sola zona obliga a descartar obstrucción), por su <strong>etiología</strong>, que es la clasificación que más cambia el tratamiento, y por su <strong>gravedad</strong> con un índice validado que integra clínica, función, microbiologia e imagen. En paralelo se define el <strong>estado microbiológico</strong>, que separa al paciente sin colonizacion del colonizado por <em>Pseudomonas aeruginosa</em>, cuyo pronóstico es peor.`,
    escalas: [
      { nombre: 'Índice de gravedad de bronquiectasias (calculadora disponible)', componentes: 'Edad, índice de masa corporal, FEV1 en porcentaje del predicho, ingreso hospitalario en los últimos 2 años, exacerbaciones en el último año, disnea según el Medical Research Council, colonizacion por Pseudomonas, colonizacion por otros microorganismos y extensión o morfología radiológica.', formula: 'Suma de 0 a 26 puntos. El ingreso previo aporta 5 puntos y la colonizacion por Pseudomonas 3, que son los dos elementos de mayor peso.', interpretacion: 'De 0 a 4 gravedad leve; de 5 a 8 moderada; 9 o más grave. Predice mortalidad, ingresos y exacerbaciones. Sirve para priorizar el seguimiento y para decidir a quien se intensifica el tratamiento, no para sustituir el juicio clínico.' },
      { nombre: 'Estudio etiológico mínimo (calculadora disponible)', componentes: 'Pruebas realizadas y pistas clínicas: distribución radiológica, edad de inicio, antecedentes otorrinolaringologicos, infertilidad, malabsorción, artritis y microorganismo aislado.', formula: 'A todos: hemograma, inmunoglobulinas séricas, estudio de Aspergillus y cultivo de esputo con micobacterias. Dirigido según las pistas.', interpretacion: 'El objetivo es identificar las causas que cambian el tratamiento: inmunodeficiencia, aspergilosis, fibrosis quística, discinesia ciliar, micobacterias no tuberculosas y obstrucción. Etiquetar de idiopáticas sin haber hecho el estudio mínimo no es una conclusion valida.' },
      { nombre: 'Definición de exacerbación (calculadora disponible)', componentes: 'Tos, volumen o consistencia del esputo, purulencia, disnea o tolerancia al ejercicio, fatiga o malestar, y hemoptisis.', formula: 'Deterioro sostenido durante 48 horas o más en 3 o más de esos 6 síntomas, con decisión clínica de cambiar el tratamiento.', interpretacion: 'La definición evita tratar como exacerbación cualquier empeoramiento de un dia. Una vez establecida: cultivo de esputo ANTES del antibiótico, antibiótico dirigido al último aislamiento del paciente y duración habitual de 14 días.' },
      { nombre: 'Estado microbiológico frente a Pseudomonas (calculadora disponible)', componentes: 'Número de cultivos positivos, separación entre ellos y respuesta a intentos previos de erradicación.', formula: 'Colonizacion crónica: 2 o más cultivos positivos separados al menos 3 meses en un periodo de 12 meses. Primer aislamiento: candidato a intento de erradicación.', interpretacion: 'El primer aislamiento es una oportunidad que no se repite: se intenta erradicar. Establecida la colonizacion crónica, el objetivo pasa a ser suprimir la carga bacteriana con antibiótico inhalado si hay exacerbaciones frecuentes.' },
      { nombre: 'Morfología radiológica', componentes: 'Aspecto de los bronquios dilatados en la tomografía de alta resolución.', formula: 'CILINDRICAS: dilatación uniforme. VARICOSAS: dilatación irregular con constricciones. QUÍSTICAS o saculares: dilatación en racimo con niveles hidroaéreos.', interpretacion: 'Refleja el grado de destrucción de la pared y se correlaciona con la gravedad clínica. La forma quística es la de mayor daño y la que más se asocia a colonizacion crónica y a hemoptisis.' },
      { nombre: 'Escala de disnea del Medical Research Council', componentes: 'Grado de esfuerzo que produce disnea en la vida diaria.', formula: 'De 1 (disnea solo con ejercicio intenso) a 5 (disnea que impide salir de casa o al vestirse).', interpretacion: 'Entra en el índice de gravedad, donde el grado 4 aporta 2 puntos y el 5 aporta 3. Es una medida sencilla del impacto real de la enfermedad y refleja la limitación mejor que el FEV1 aislado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Bronquiectasias: diagnóstico y búsqueda de la causa',
      color: '#2e6b8a',
      definicion: 'Dilatación anormal e irreversible de los bronquios con destrucción de su pared, diagnosticada por tomografía de alta resolución, que constituye el resultado final común de causas muy diversas.',
      fisiopatologia: 'El mecanismo central es el círculo vicioso descrito por Cole: una agresion inicial (infección, obstrucción, inmunodeficiencia, defecto ciliar) deteriora el aclaramiento mucociliar; el moco retenido permite la colonizacion bacteriana; las bacterias forman biopelicula y atraen neutrófilos; los neutrófilos liberan elastasa y otras proteasas que destruyen el cartílago, el músculo liso y el epitelio ciliado; el bronquio se dilata de forma irreversible y se limpia todavía peor. Cada vuelta del círculo añade daño estructural, y por eso el objetivo terapéutico es frenarlo en varios puntos a la vez.',
      epidemiologia: 'Su prevalencia reconocida ha aumentado de forma marcada con el uso de la tomografía, lo que sugiere que durante años estuvieron infradiagnosticadas más que ausentes. Son más frecuentes en mujeres y en edades avanzadas, y su prevalencia aumenta mucho en pacientes con EPOC, artritis reumatoide o inmunodeficiencia.',
      factores_riesgo: ['Infección respiratoria grave en la infancia', 'Tuberculosis o micobacteriosis previa', 'Inmunodeficiencia primaria, sobre todo la común variable', 'Inmunodeficiencia secundaria: hematológica, fármacos, VIH', 'EPOC grave', 'Artritis reumatoide y síndrome de Sjogren', 'Enfermedad inflamatoria intestinal', 'Aspergilosis broncopulmonar alérgica', 'Fibrosis quística y discinesia ciliar primaria', 'Déficit de alfa-1-antitripsina', 'Aspiración crónica y reflujo gastroesofágico', 'Obstrucción bronquial por cuerpo extraño o tumor'],
      clinica: 'Tos productiva crónica con expectoración diaria, a menudo purulenta, que el paciente lleva años normalizando. Disnea de esfuerzo, fatiga y hemoptisis leve recurrente. En la exploración, crepitantes gruesos que cambian con la tos. Las acropaquias son menos frecuentes de lo que sugieren los textos clásicos.',
      criterios_dx: 'TOMOGRAFÍA DE ALTA RESOLUCIÓN: cociente broncoarterial mayor de 1 con signo del anillo de sello, falta de afilamiento del bronquio hacia la periferia y bronquios visibles a menos de 1 cm de la pleura. La radiografía normal NO descarta la enfermedad. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'A TODOS: hemograma con fórmula, inmunoglobulinas séricas, estudio de Aspergillus (IgE total, IgE específica y precipitinas) y cultivo de esputo INCLUYENDO micobacterias. Dirigido: cloro en sudor y CFTR, óxido nítrico nasal, alfa-1-antitripsina y autoinmunidad según las pistas.',
      imagen: 'Tomografía de alta resolución, que además orienta la etiología por la DISTRIBUCIÓN: lóbulos superiores en fibrosis quística y aspergilosis, inferiores en las postinfecciosas y la aspiración, lóbulo medio y lingula en micobacterias no tuberculosas, y una sola zona en la obstrucción bronquial.',
      complementarios: 'BRONCOSCOPIA si la afectación es LOCALIZADA en una sola zona, para descartar cuerpo extraño, tumor endobronquial o estenosis. Pruebas de función pulmonar con DLCO como basal. Valoración otorrinolaringologica si hay rinosinusitis crónica asociada.',
      dx_diferencial: 'Bronquiolitis, EPOC con tos productiva, asma con tapones de moco, traqueobroncomegalia y las pseudobronquiectasias por tracción de la fibrosis pulmonar, que son un fenómeno distinto y no obligan a este estudio.',
      tx_medico: 'FISIOTERAPIA RESPIRATORIA DIARIA como base de todo, enseñada por un fisioterapeuta y adaptada al paciente. Ejercicio y rehabilitación respiratoria. Vacunación antigripal anual y antineumococica. Abandono del tabaco. Nutrición, porque el bajo peso empeora el pronóstico y puntúa en el índice de gravedad.',
      tx_farmacologico: 'Se detalla en la ficha de manejo crónico. La regla que ordena el inicio es que el tratamiento se construye sobre el aclaramiento, no sobre el antibiótico.',
      tx_intervencionista: 'Broncoscopia diagnóstica en la enfermedad localizada.',
      criterios_uci: 'Hemoptisis amenazante e insuficiencia respiratoria aguda grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante pulmonar en la enfermedad avanzada con insuficiencia respiratoria y deterioro progresivo pese a tratamiento óptimo.',
      seguimiento_hospitalario: 'Aprovechar el ingreso para completar el estudio etiológico, que es la ventana en que mejor se hace, y para enseñar la fisioterapia respiratoria.',
      seguimiento_ambulatorio: 'Revisión con función pulmonar y cultivo de esputo periódicos, con frecuencia ajustada a la gravedad. Recuento anual de exacerbaciones, que es lo que decide la escalada terapéutica.',
      pronostico: 'Muy variable. Depende de la causa, de la extensión, de la función pulmonar, de la frecuencia de exacerbaciones y sobre todo de la colonizacion por Pseudomonas, que marca peor evolución.',
      algoritmo: ['Sospecharlas ante tos productiva crónica de años', 'Confirmar con TOMOGRAFÍA DE ALTA RESOLUCIÓN, no con radiografía', 'Mirar la DISTRIBUCIÓN, que orienta la etiología', 'Pedir a todos: hemograma, inmunoglobulinas, Aspergillus y cultivo con micobacterias', 'Añadir estudio dirigido según las pistas clínicas', 'Hacer broncoscopia si la afectación es localizada en una sola zona', 'Obtener función pulmonar con DLCO como basal', 'Calcular el índice de gravedad para priorizar el seguimiento', 'Prescribir FISIOTERAPIA RESPIRATORIA a todos, desde el primer dia', 'Vacunar y tratar la causa si se ha identificado']
    },
    {
      nombre: 'Manejo crónico: aclaramiento y tratamiento de mantenimiento',
      color: '#3f6b52',
      definicion: 'Conjunto de medidas dirigidas a romper el círculo vicioso en sus tres puntos: mejorar el aclaramiento de secreciones, reducir la carga bacteriana y modular la inflamación.',
      fisiopatologia: 'La fisioterapia actúa sobre el eslabon del aclaramiento movilizando el moco retenido. Los macrolidos a largo plazo actuan sobre la inflamación: a las dosis usadas, su beneficio se atribuye más al efecto inmunomodulador (reducción de la quimiotaxis de neutrófilos y de la producción de biopelicula) que a su actividad antibiótica directa. Los antibióticos inhalados alcanzan concentraciones muy altas en la via aérea con escasa absorción sistémica, lo que permite suprimir la carga bacteriana en la colonizacion crónica sin la toxicidad de la via sistémica.',
      epidemiologia: 'La fisioterapia respiratoria es la intervención más costoeficaz del tema y a la vez la peor prescrita: una proporción alta de pacientes nunca ha sido instruida por un fisioterapeuta. Los macrolidos a largo plazo reducen las exacerbaciones en torno a la mitad en los ensayos controlados.',
      factores_riesgo: ['Tres o más exacerbaciones al año', 'Colonizacion crónica por Pseudomonas aeruginosa', 'Mala técnica o ausencia de fisioterapia respiratoria', 'Bajo peso y desnutrición', 'Causa no identificada ni tratada', 'Falta de vacunación', 'Tabaquismo activo', 'Reflujo gastroesofágico no tratado', 'Rinosinusitis crónica asociada', 'Falta de adherencia al tratamiento inhalado'],
      clinica: 'El objetivo del tratamiento es reducir la frecuencia de exacerbaciones, mejorar la calidad de vida y frenar la caída del FEV1. La respuesta se mide en exacerbaciones al año y en síntomas, no en la imagen: la tomografía no mejora y repetirla para valorar respuesta no aporta nada.',
      criterios_dx: 'No aplica: es la fase terapéutica. La decisión de escalar se toma con el recuento de exacerbaciones del último año y con el estado microbiológico. Ver la Figura 3 de Definición.',
      laboratorio: 'Cultivo de esputo periódico, incluyendo micobacterias, sobre todo ANTES de iniciar un macrolido a largo plazo. Función hepática con macrolidos prolongados.',
      imagen: 'Tomografía basal. No se repite para valorar respuesta al tratamiento, porque el daño estructural no revierte y la imagen no refleja la mejoría clínica.',
      complementarios: 'Electrocardiograma y valoración de la AUDICIÓN antes y durante el tratamiento con macrolidos, por el riesgo de prolongación del QT y de ototoxicidad. Primera dosis de antibiótico inhalado y de suero salino hipertónico SUPERVISADA, por el riesgo de broncoespasmo.',
      dx_diferencial: 'Ante falta de respuesta: mala adherencia, técnica inhalatoria incorrecta, micobacterias no tuberculosas, aspergilosis broncopulmonar alérgica, causa no tratada y diagnóstico alternativo.',
      tx_medico: 'FISIOTERAPIA RESPIRATORIA DIARIA, que se enseña, se revisa y se ajusta, y que en la exacerbación se intensifica en lugar de suspenderse. Rehabilitación respiratoria y ejercicio regular. Vacunación. Nutrición. Tratamiento del reflujo y de la rinosinusitis si están presentes.',
      tx_farmacologico: 'MACROLIDO a largo plazo (azitromicina) si hay 3 o más exacerbaciones al año, SIEMPRE tras descartar micobacterias no tuberculosas y comprobar QT y audición. ANTIBIÓTICO INHALADO (colistina, tobramicina o gentamicina) si hay colonizacion crónica por Pseudomonas con exacerbaciones frecuentes. Suero salino hipertónico o manitol como coadyuvantes del aclaramiento. Broncodilatadores solo si hay obstrucción o síntomas que respondan. <strong>NO corticoides inhalados de rutina</strong> salvo asma o EPOC concomitante. <strong>NO DNasa recombinante</strong>, que en las bronquiectasias no debidas a fibrosis quística empeoró la función pulmonar y aumento las exacerbaciones.',
      tx_intervencionista: 'Cirugía de resección en el caso excepcional de enfermedad localizada, muy sintomática y refractaria al tratamiento médico óptimo. Embolización de arterias bronquiales en la hemoptisis recurrente.',
      criterios_uci: 'No aplica en la fase estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfermedad avanzada con insuficiencia respiratoria, deterioro funcional progresivo o exacerbaciones incapacitantes pese a tratamiento óptimo.',
      seguimiento_hospitalario: 'Aprovechar los ingresos para revisar la técnica de fisioterapia y de los inhaladores, que es donde más se gana y lo que menos se revisa.',
      seguimiento_ambulatorio: 'Recuento anual de exacerbaciones, función pulmonar y cultivo de esputo. Revisión de la adherencia y de la técnica. Reevaluar la indicación de macrolido y de antibiótico inhalado al menos una vez al año.',
      pronostico: 'El tratamiento reduce las exacerbaciones y mejora la calidad de vida, pero no revierte el daño estructural. El pronóstico depende sobre todo del control de las exacerbaciones y de la colonizacion crónica.',
      algoritmo: ['Prescribir FISIOTERAPIA RESPIRATORIA diaria a todos y enseñarla', 'Añadir ejercicio, rehabilitación, vacunas y soporte nutricional', 'Tratar la causa si se ha identificado', 'Contar las exacerbaciones del último año', 'Si son 3 o más, DESCARTAR micobacterias antes de nada', 'Comprobar QT y audición e iniciar macrolido a largo plazo', 'Si hay Pseudomonas crónica y exacerbaciones, añadir antibiótico inhalado', 'Supervisar la primera dosis del inhalado por riesgo de broncoespasmo', 'NO usar corticoides inhalados de rutina ni DNasa recombinante', 'Revisar adherencia y técnica en cada visita']
    },
    {
      nombre: 'Exacerbación de bronquiectasias',
      color: '#8c3a34',
      definicion: 'Deterioro sostenido durante al menos 48 horas en 3 o más de 6 síntomas (tos, volumen o consistencia del esputo, purulencia, disnea o tolerancia al ejercicio, fatiga o malestar, y hemoptisis) que lleva al clínico a cambiar el tratamiento.',
      fisiopatologia: 'Corresponde a un aumento de la carga bacteriana y de la respuesta inflamatoria en una via aérea ya colonizada. No suele ser la llegada de un germen nuevo sino el crecimiento del que ya estaba, lo que explica dos cosas prácticas: que el antibiótico empírico deba dirigirse al último aislamiento del propio paciente, y que las pautas cortas dejen carga residual suficiente para recaer a las pocas semanas.',
      epidemiologia: 'Las exacerbaciones son el principal determinante modificable del pronóstico: se asocian a caída acelerada del FEV1, a peor calidad de vida, a ingresos y a mortalidad. Su recuento anual es lo que gobierna la escalada del tratamiento crónico.',
      factores_riesgo: ['Exacerbaciones previas, que es el mejor predictor de exacerbaciones futuras', 'Colonizacion crónica por Pseudomonas aeruginosa', 'FEV1 bajo', 'Extensión radiológica amplia y morfología quística', 'Falta de fisioterapia respiratoria', 'Comorbilidad cardiovascular', 'Bajo peso', 'Rinosinusitis crónica no tratada', 'Reflujo gastroesofágico', 'Infección virica intercurrente'],
      clinica: 'Aumento de la tos y del volumen del esputo, cambio de color a purulento, más disnea, fatiga marcada y a veces hemoptisis. La fiebre puede faltar, y su ausencia NO descarta la exacerbación, lo que hace que se infravalore con frecuencia.',
      criterios_dx: 'Definición de consenso: 3 o más de los 6 síntomas, con deterioro sostenido de 48 horas o más. La radiografía se hace para descartar neumonía u otra complicación, no para diagnosticar la exacerbación. Ver la Figura 4 de Definición.',
      laboratorio: 'CULTIVO DE ESPUTO ANTES de iniciar el antibiótico: es el gesto que más se salta y el que más cuesta después. Hemograma, proteína C reactiva y función renal. Gasometría si hay insuficiencia respiratoria.',
      imagen: 'Radiografía de tórax para descartar neumonía, neumotórax u otra complicación. La tomografía solo si hay sospecha de complicación o de un proceso nuevo.',
      complementarios: 'Revisar el histórico de cultivos del paciente para elegir el antibiótico empírico. Intensificar la fisioterapia respiratoria, que en la exacerbación se hace más veces al dia.',
      dx_diferencial: 'Neumonía, insuficiencia cardiaca, embolia pulmonar, neumotórax, aspergilosis broncopulmonar alérgica en brote y aparición de una micobacteria no tuberculosa, que se presenta como deterioro progresivo más que como exacerbación típica.',
      tx_medico: 'Intensificar la fisioterapia respiratoria y asegurar la hidratación. Oxigenoterapia si hay hipoxemia. Soporte nutricional. Revisar la técnica inhalatoria antes del alta.',
      tx_farmacologico: 'ANTIBIÓTICO dirigido al último aislamiento del propio paciente mientras llega el cultivo actual, con DURACIÓN HABITUAL DE 14 DÍAS, mucho más larga que en la bronquitis aguda o en la exacerbación de EPOC. En pacientes con Pseudomonas, cubrirla desde el inicio. Ajustar después según el antibiograma.',
      tx_intervencionista: 'Embolización de arterias bronquiales en la hemoptisis amenazante. Broncoscopia si hay retención de secreciones que no se resuelve o sospecha de obstrucción.',
      criterios_uci: 'Insuficiencia respiratoria aguda que no responde, hemoptisis amenazante y sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No en la fase aguda; se valora en la enfermedad avanzada con exacerbaciones repetidas.',
      seguimiento_hospitalario: 'Ante falta de respuesta al tercer o cuarto dia, revisar el cultivo, pensar en Pseudomonas o en micobacterias no tuberculosas, descartar aspergilosis y comprobar que se esta haciendo fisioterapia. Cambiar de antibiótico a ciegas sin revisar esto rara vez resuelve nada.',
      seguimiento_ambulatorio: 'Revisión tras la exacerbación para comprobar la recuperación, revisar el cultivo y reevaluar si procede escalar el tratamiento crónico. Una exacerbación que lleva al paciente al tercer episodio del año cambia el plan.',
      pronostico: 'Cada exacerbación deja huella: acelera la caída del FEV1 y aumenta el riesgo de la siguiente. Por eso la prevención es el objetivo central del manejo crónico.',
      algoritmo: ['Comprobar la definición: 3 o más de 6 síntomas durante 48 horas o más', 'RECOGER CULTIVO DE ESPUTO antes de dar el antibiótico', 'Revisar el histórico de cultivos del paciente', 'Elegir el antibiótico dirigido al último aislamiento', 'Cubrir Pseudomonas si el paciente la tiene', 'Tratar durante 14 DÍAS, no 5 ni 7', 'INTENSIFICAR la fisioterapia respiratoria', 'Hacer radiografía para descartar neumonía u otra complicación', 'Si no responde, revisar cultivo y pensar en micobacterias o aspergilosis', 'Contar la exacerbación: si llega a 3 en el año, escalar el tratamiento crónico']
    },
    {
      nombre: 'Pseudomonas aeruginosa: erradicación y supresión',
      color: '#8a6a1f',
      definicion: 'Colonizacion e infección crónica de la via aérea por <em>Pseudomonas aeruginosa</em>, el microorganismo que peor pronóstico marca en las bronquiectasias.',
      fisiopatologia: 'Pseudomonas forma biopelicula sobre el epitelio dañado, una matriz que la protege de los antibióticos y del sistema inmunitario y que explica por que, una vez establecida, resulta prácticamente imposible eliminarla. Además adquiere resistencias con facilidad y adopta un fenotipo mucoide que aumenta todavía más su persistencia. Ese es el motivo por el que el PRIMER aislamiento es una oportunidad terapéutica distinta de todas las siguientes: antes de que la biopelicula este establecida, la erradicación todavía es posible.',
      epidemiologia: 'Su presencia se asocia de forma consistente a más exacerbaciones, más ingresos, peor función pulmonar, peor calidad de vida y mayor mortalidad. Aporta 3 puntos en el índice de gravedad, uno de los pesos más altos de la escala.',
      factores_riesgo: ['Enfermedad extensa y morfología quística', 'FEV1 bajo', 'Exacerbaciones frecuentes con ciclos repetidos de antibiótico', 'Ingresos hospitalarios previos', 'Fibrosis quística y discinesia ciliar primaria', 'Uso previo de antibióticos de amplio espectro', 'Corticoides inhalados o sistémicos', 'Reflujo gastroesofágico y aspiración', 'Bajo peso', 'Falta de fisioterapia respiratoria'],
      clinica: 'No hay una clínica propia. Se sospecha por esputo más abundante y de aspecto verdoso, por exacerbaciones más frecuentes y por una respuesta peor a los antibióticos habituales. El diagnóstico es microbiológico y por eso el cultivo periódico de esputo es imprescindible.',
      criterios_dx: 'PRIMER AISLAMIENTO: un cultivo positivo en un paciente sin aislamientos previos. COLONIZACION CRÓNICA: 2 o más cultivos positivos separados al menos 3 meses en un periodo de 12 meses.',
      laboratorio: 'Cultivo de esputo periódico con antibiograma. Determinación del fenotipo mucoide, que se asocia a mayor persistencia. Repetir cultivos tras un intento de erradicación para comprobar si ha funcionado.',
      imagen: 'No hay hallazgo específico, aunque la colonizacion se asocia a enfermedad más extensa y a morfología quística.',
      complementarios: 'Revisar la técnica de fisioterapia y la adherencia, porque el estancamiento de secreciones es lo que permite la persistencia. Valorar reflujo y aspiración como fuente de reinfeccion.',
      dx_diferencial: 'Distinguir la colonizacion (presencia sin deterioro) de la infección activa. Distinguir también la contaminación orofaringea de la muestra, motivo por el que la calidad del esputo importa.',
      tx_medico: 'Intensificar el aclaramiento de secreciones, que es la medida que más condiciona el éxito de cualquier estrategia antibiótica. Tratar el reflujo y la rinosinusitis si contribuyen.',
      tx_farmacologico: 'PRIMER AISLAMIENTO: intento de ERRADICACIÓN, habitualmente con una fluoroquinolona oral con actividad frente a Pseudomonas durante varias semanas, sola o combinada con un antibiótico inhalado, con cultivos de control posteriores. COLONIZACION CRÓNICA con exacerbaciones frecuentes: ANTIBIÓTICO INHALADO a largo plazo (colistina, tobramicina o gentamicina), con la primera dosis supervisada por el riesgo de broncoespasmo. En la exacerbación, cubrir Pseudomonas desde el inicio y tratar 14 días.',
      tx_intervencionista: 'No específico. Cirugía de resección en la enfermedad localizada muy sintomática con colonizacion refractaria, situación excepcional.',
      criterios_uci: 'Los de la exacerbación grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La colonizacion por Pseudomonas no contraindica el trasplante pulmonar, aunque condiciona la profilaxis perioperatoria. Algunos microorganismos multirresistentes si limitan la indicación.',
      seguimiento_hospitalario: 'Medidas de control de la transmisión según protocolo del centro, sobre todo con cepas multirresistentes y en unidades donde coinciden pacientes con fibrosis quística.',
      seguimiento_ambulatorio: 'Cultivos periódicos para vigilar la persistencia y la aparición de resistencias. Reevaluar anualmente la indicación del antibiótico inhalado y su tolerancia.',
      pronostico: 'Peor que en el paciente no colonizado, con más exacerbaciones, más caída del FEV1 y mayor mortalidad. La erradicación precoz cuando todavía es posible es una de las intervenciones con más impacto del tema.',
      algoritmo: ['Pedir cultivo de esputo periódico, también en fase estable', 'Ante un PRIMER aislamiento, no darlo por perdido: intentar ERRADICAR', 'Usar fluoroquinolona oral sola o con antibiótico inhalado', 'Repetir cultivos para comprobar si la erradicación ha funcionado', 'Definir colonizacion crónica: 2 cultivos separados 3 meses en un año', 'Contar las exacerbaciones del último año', 'Si son frecuentes, iniciar ANTIBIÓTICO INHALADO a largo plazo', 'Supervisar la primera dosis por riesgo de broncoespasmo', 'En cada exacerbación, cubrir Pseudomonas desde el inicio y tratar 14 días', 'Reforzar siempre el aclaramiento de secreciones']
    },
    {
      nombre: 'Fibrosis quística del adulto y discinesia ciliar primaria',
      color: '#7a2f5c',
      definicion: 'Dos enfermedades genéticas que producen bronquiectasias por un defecto del aclaramiento mucociliar y que pueden diagnosticarse en la edad adulta, con implicaciones terapéuticas y familiares propias.',
      fisiopatologia: 'En la FIBROSIS QUÍSTICA, las mutaciones del gen CFTR alteran el canal de cloro del epitelio, lo que deshidrata el líquido de superficie de la via aérea y produce un moco espeso que los cilios no pueden movilizar. El defecto es sistémico y afecta también al páncreas, al intestino, al hígado y al conducto deferente. En la DISCINESIA CILIAR PRIMARIA, el defecto esta en la estructura o en el movimiento del propio cilio: el moco es normal pero no se transporta. Como los cilios también determinan la lateralidad durante el desarrollo embrionario, alrededor de la mitad de estos pacientes tiene situs inversus.',
      epidemiologia: 'Una parte de los pacientes con fibrosis quística se diagnostica en la edad adulta, con formas leves o atípicas asociadas a mutaciones de función residual. La discinesia ciliar primaria esta claramente infradiagnosticada, con retrasos de décadas entre los síntomas y el diagnóstico.',
      factores_riesgo: ['Antecedente familiar de fibrosis quística o de discinesia ciliar', 'Consanguinidad', 'Bronquiectasias de predominio en lóbulos SUPERIORES', 'Colonizacion por Staphylococcus aureus o Pseudomonas en paciente joven', 'Infertilidad masculina por ausencia de conductos deferentes', 'Pancreatitis de repetición o insuficiencia pancreática', 'Malabsorción y bajo peso desde la infancia', 'Otitis media crónica en la infancia', 'Rinosinusitis crónica con poliposis', 'Situs inversus o dextrocardia'],
      clinica: 'FIBROSIS QUÍSTICA: bronquiectasias de predominio superior, colonizacion precoz, rinosinusitis con poliposis, insuficiencia pancreática, diabetes relacionada, hepatopatía e infertilidad masculina. DISCINESIA CILIAR: otitis media crónica desde la infancia, rinosinusitis persistente, bronquiectasias, infertilidad y, en aproximadamente la mitad, situs inversus, que junto con sinusitis y bronquiectasias forma el síndrome de Kartagener.',
      criterios_dx: 'FIBROSIS QUÍSTICA: cloro en sudor elevado en dos determinaciones, o estudio genético con dos mutaciones causales, en un contexto clínico compatible. DISCINESIA CILIAR: óxido nítrico nasal muy bajo como cribado, confirmado con microscopia electrónica, videomicroscopia de alta velocidad o estudio genético en centro de referencia.',
      laboratorio: 'Cloro en sudor y panel genético de CFTR. Óxido nítrico nasal. Elastasa fecal para la insuficiencia pancreática. Glucemia y sobrecarga oral de glucosa para la diabetes relacionada con la fibrosis quística. Perfil hepático y vitaminas liposolubles.',
      imagen: 'Tomografía con bronquiectasias de predominio en lóbulos superiores en la fibrosis quística, y de predominio en lóbulos medios e inferiores en la discinesia ciliar. Radiografía o tomografía que muestre situs inversus, hallazgo que por si solo debe hacer pensar en discinesia ciliar.',
      complementarios: 'Estudio de fertilidad y consejo genético, que forma parte del diagnóstico y no es un añadido. Valoración otorrinolaringologica. Derivación a unidad especializada, que en ambas enfermedades mejora el pronóstico de forma demostrada.',
      dx_diferencial: 'Inmunodeficiencia común variable, aspergilosis broncopulmonar alérgica (que además complica con frecuencia a la fibrosis quística), déficit de alfa-1-antitripsina y bronquiectasias postinfecciosas.',
      tx_medico: 'Manejo en UNIDAD ESPECIALIZADA multidisciplinar. Fisioterapia respiratoria intensiva. Soporte nutricional agresivo, que en la fibrosis quística se correlaciona de forma directa con la función pulmonar. Enzimas pancreáticas y vitaminas liposolubles si hay insuficiencia pancreática.',
      tx_farmacologico: 'FIBROSIS QUÍSTICA: MODULADORES DEL CFTR, que han cambiado el pronóstico de la enfermedad de forma radical en los pacientes con mutaciones elegibles; DNasa recombinante, que aquí SI esta indicada al contrario que en las bronquiectasias de otras causas; suero salino hipertónico; antibióticos inhalados. DISCINESIA CILIAR: no hay tratamiento específico, y el manejo es el general de las bronquiectasias con aclaramiento intensivo.',
      tx_intervencionista: 'Trasplante pulmonar en la enfermedad avanzada. Cirugía otorrinolaringologica de la poliposis. Manejo de las complicaciones digestivas en la fibrosis quística.',
      criterios_uci: 'Insuficiencia respiratoria aguda, hemoptisis amenazante y complicaciones digestivas graves.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El trasplante pulmonar es una opción establecida en ambas enfermedades cuando llegan a fase avanzada, y la remisión precoz a la unidad de trasplante es determinante.',
      seguimiento_hospitalario: 'Medidas de control de la transmisión cruzada, especialmente estrictas en fibrosis quística: los pacientes no deben coincidir entre si por el riesgo de transmisión de patógenos multirresistentes.',
      seguimiento_ambulatorio: 'Seguimiento en unidad especializada con controles frecuentes, cultivos periódicos, función pulmonar y valoración nutricional. Consejo genético a la familia.',
      pronostico: 'El de la fibrosis quística ha mejorado de forma radical con los moduladores del CFTR. En la discinesia ciliar, la supervivencia suele ser mejor que en la fibrosis quística, pero la morbilidad respiratoria y otologica es importante y el retraso diagnóstico sigue siendo el problema principal.',
      algoritmo: ['Sospechar fibrosis quística ante bronquiectasias superiores en paciente joven', 'Sospecharla también ante infertilidad masculina, malabsorción o pancreatitis', 'Pedir cloro en sudor y estudio genético de CFTR', 'Sospechar discinesia ciliar ante otitis crónica infantil y rinosinusitis', 'Sospecharla siempre ante situs inversus con bronquiectasias', 'Pedir óxido nítrico nasal como cribado', 'Confirmar en centro de referencia con microscopia o genética', 'Derivar a UNIDAD ESPECIALIZADA en ambos casos', 'Valorar moduladores del CFTR si hay mutaciones elegibles', 'Ofrecer consejo genético y estudio de fertilidad']
    },
    {
      nombre: 'Micobacterias no tuberculosas en bronquiectasias',
      color: '#5a6b2e',
      definicion: 'Infección pulmonar por micobacterias ambientales, sobre todo del complejo <em>Mycobacterium avium</em>, que puede ser causa de bronquiectasias, consecuencia de ellas o ambas cosas a la vez.',
      fisiopatologia: 'Son microorganismos ambientales presentes en el agua y en el suelo que no se transmiten de persona a persona. Colonizan la via aérea dañada y, en huespedes susceptibles, producen enfermedad progresiva con nódulos, patrón en árbol en brote y bronquiectasias. La relación con las bronquiectasias es bidireccional y a menudo imposible de ordenar cronologicamente: la micobacteria puede haber causado el daño o haberse instalado sobre un daño previo, y en ambos casos empeora la evolución.',
      epidemiologia: 'Su frecuencia esta aumentando. La forma nodular bronquiectasica afecta de manera característica a MUJERES MAYORES, delgadas, no fumadoras, con afectación del LÓBULO MEDIO y de la LINGULA, un cuadro descrito como síndrome de Lady Windermere. También es frecuente en pacientes con fibrosis quística y con EPOC.',
      factores_riesgo: ['Bronquiectasias preexistentes de cualquier causa', 'Sexo femenino, edad avanzada y habito delgado', 'Deformidad torácica: escoliosis y pectus excavatum', 'Prolapso de la valvula mitral', 'Uso de CORTICOIDES INHALADOS', 'Tratamiento con antagonistas del factor de necrosis tumoral', 'Fibrosis quística', 'EPOC', 'Reflujo gastroesofágico', 'Exposición a aerosoles de agua: duchas, jacuzzis, humidificadores'],
      clinica: 'Deterioro PROGRESIVO más que exacerbaciones típicas: tos persistente, aumento del esputo, pérdida de peso, fatiga y a veces febrícula. Lo característico es que el paciente no responde a los ciclos habituales de antibiótico y sigue deteriorandose, y ese patrón es la principal pista clínica.',
      criterios_dx: 'Se exigen las tres cosas a la vez: cuadro CLÍNICO compatible, hallazgos RADIOLÓGICOS (nódulos, árbol en brote, bronquiectasias, cavitación) y criterio MICROBIOLÓGICO con 2 cultivos de esputo positivos en muestras distintas, o 1 cultivo positivo de lavado broncoalveolar o de biopsia. Un solo cultivo de esputo positivo NO basta.',
      laboratorio: 'Cultivo de esputo PARA MICOBACTERIAS, que hay que solicitar de forma explícita, en al menos tres muestras de días distintos. Identificación de especie y estudio de sensibilidad, sobre todo a macrolidos y a amikacina.',
      imagen: 'Tomografía de alta resolución con nódulos centrolobulillares, patrón en ÁRBOL EN BROTE, bronquiectasias de LÓBULO MEDIO Y LINGULA en la forma nodular, y cavitación de lóbulos superiores en la forma fibrocavitaria, que se parece a la tuberculosis y tiene peor pronóstico.',
      complementarios: 'BRONCOSCOPIA con lavado si el paciente no expectora o los esputos no son concluyentes. Valoración nutricional, porque el bajo peso es a la vez factor de riesgo y consecuencia.',
      dx_diferencial: 'Tuberculosis, que hay que descartar siempre; aspergilosis broncopulmonar alérgica; exacerbación bacteriana habitual; cáncer de pulmón en la forma cavitaria; y colonizacion sin enfermedad, que es la razón de que se exijan dos cultivos y criterios clínicos y radiológicos.',
      tx_medico: 'No todo aislamiento se trata: la decisión se toma valorando la gravedad, la progresión, la especie y la situación del paciente, porque el tratamiento es largo, tóxico y no siempre necesario. Optimizar el aclaramiento y la nutrición, y retirar los corticoides inhalados si no tienen indicación clara.',
      tx_farmacologico: 'Combinación de al menos TRES fármacos durante 12 meses tras la negativizacion de los cultivos, con un MACROLIDO como pilar junto a rifampicina y etambutol, añadiendo amikacina (intravenosa o inhalada liposomal) en las formas graves o refractarias. La regla que gobierna todo el tema: <strong>NUNCA dar un macrolido en monoterapia</strong>, porque crea resistencia y arruina el único tratamiento eficaz.',
      tx_intervencionista: 'Cirugía de resección en enfermedad localizada refractaria, en centros con experiencia.',
      criterios_uci: 'Raro. Insuficiencia respiratoria en la enfermedad avanzada y hemoptisis amenazante.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Algunas especies, sobre todo <em>Mycobacterium abscessus</em>, complican o limitan la indicación de trasplante pulmonar por el riesgo de infección diseminada postrasplante.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la toxicidad: audición y función vestibular con amikacina, visión con etambutol, interacciones con rifampicina y QT con macrolidos.',
      seguimiento_ambulatorio: 'Cultivos mensuales o bimensuales hasta la negativizacion, y después durante 12 meses más. Control de la toxicidad. Seguimiento prolongado por el riesgo de recaída y de reinfeccion.',
      pronostico: 'Variable. La forma nodular bronquiectasica tiene mejor pronóstico que la fibrocavitaria. Las recaídas y las reinfecciones son frecuentes, y <em>Mycobacterium abscessus</em> es la especie más difícil de tratar.',
      algoritmo: ['Sospecharla ante deterioro PROGRESIVO que no responde a los antibióticos', 'Sospecharla ante afectación de lóbulo medio y lingula en mujer mayor delgada', 'Pedir de forma EXPLÍCITA cultivo de esputo para micobacterias', 'Recoger al menos tres muestras de días distintos', 'Exigir los tres criterios: clínico, radiológico y microbiológico', 'Descartar tuberculosis', 'Identificar la especie y hacer estudio de sensibilidad', 'Decidir si procede tratar: no todo aislamiento se trata', 'Usar al menos TRES fármacos, nunca un macrolido solo', 'Descartar micobacterias ANTES de iniciar un macrolido a largo plazo por otro motivo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En bronquiectasias los fallos son bastante predecibles: se diagnostica y no se busca la causa, se da antibiótico sin cultivo, se trata cinco días en lugar de catorce, y no se prescribe lo único que hay que prescribir a todos. Lo que sigue es la lista que evita esos errores.',
    parametros: ['Confirmar el diagnóstico con TOMOGRAFÍA DE ALTA RESOLUCIÓN, no con radiografía', 'Mirar la DISTRIBUCIÓN radiológica, que orienta la etiología', 'Pedir a todos inmunoglobulinas séricas: la inmunodeficiencia es tratable', 'Pedir a todos estudio de Aspergillus y cultivo de esputo CON micobacterias', 'Hacer broncoscopia si la afectación es localizada en una sola zona', 'Prescribir FISIOTERAPIA RESPIRATORIA diaria a todos y enseñarla', 'Recoger CULTIVO DE ESPUTO antes de iniciar el antibiótico en una exacerbación', 'Tratar la exacerbación 14 días, no 5 ni 7', 'Dirigir el antibiótico empírico al último aislamiento del propio paciente', 'DESCARTAR micobacterias antes de iniciar un macrolido a largo plazo', 'No usar corticoides inhalados de rutina ni DNasa recombinante', 'Ante un primer aislamiento de Pseudomonas, intentar ERRADICARLA'],
    criterios_uci_general: 'Hemoptisis amenazante, que es la complicación más temida y que puede requerir embolización de arterias bronquiales; insuficiencia respiratoria aguda que no responde al tratamiento; y sepsis de origen respiratorio.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Enfermedad avanzada con insuficiencia respiratoria, deterioro funcional progresivo o exacerbaciones incapacitantes pese a tratamiento óptimo. La colonizacion por Pseudomonas no lo contraindica, pero algunos microorganismos multirresistentes, en particular <em>Mycobacterium abscessus</em>, si limitan la indicación.',
    prevencion: 'Primaria: tratamiento adecuado de las infecciones respiratorias graves de la infancia, vacunación, y diagnóstico precoz de las inmunodeficiencias y de las enfermedades genéticas que las producen. Secundaria: sospechar bronquiectasias en el paciente con tos productiva crónica de años, sobre todo si tiene EPOC, artritis reumatoide o infecciones de repetición, en lugar de aceptar la etiqueta de bronquitis crónica. Terciaria: fisioterapia respiratoria diaria, vacunación, tratamiento de la causa, erradicación precoz de Pseudomonas en el primer aislamiento y prevención de exacerbaciones, que son el principal determinante modificable del pronóstico.'
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
  'Bronquiectasias: diagnóstico y búsqueda de la causa': { definicion: [1, 2, 15, 16], criterios_dx: [1, 2, 15, 16], laboratorio: [1, 2, 15, 16], tx_farmacologico: [1, 2, 15, 16] },
  'Manejo crónico: aclaramiento y tratamiento de mantenimiento': { definicion: [1, 6, 7, 8], criterios_dx: [1], laboratorio: [1], tx_farmacologico: [1, 6, 7, 8] },
  'Exacerbación de bronquiectasias': { definicion: [4, 2], criterios_dx: [4, 2], laboratorio: [4, 2], tx_farmacologico: [4, 2] },
  'Pseudomonas aeruginosa: erradicación y supresión': { definicion: [9, 10], criterios_dx: [9, 10], laboratorio: [9, 10], tx_farmacologico: [9, 10] },
  'Fibrosis quística del adulto y discinesia ciliar primaria': { definicion: [11, 12, 13], criterios_dx: [11, 12, 13], laboratorio: [11, 12, 13], tx_farmacologico: [11, 12, 13] },
  'Micobacterias no tuberculosas en bronquiectasias': { definicion: [5, 14], criterios_dx: [5, 14], laboratorio: [5, 14], tx_farmacologico: [5, 14] }
};
export const estigmasTitulo = 'Signos y pistas que orientan en las bronquiectasias';
export const estigmas = [
  { s: 'Tos productiva crónica de años', p: 'El síntoma cardinal', photo: null, desc: 'Expectoración diaria que el paciente ha normalizado y describe como "bronquitis de siempre". Es la presentación más frecuente y la que más veces se acepta sin estudiar, lo que explica buena parte del retraso diagnóstico.' },
  { s: 'Signo del anillo de sello', p: 'Diagnóstico en la tomografía', photo: null, desc: 'El bronquio dilatado se ve más grande que la arteria que lo acompaña, de modo que el corte transversal recuerda a un anillo con su piedra. Es el criterio radiológico central, junto con la falta de afilamiento del bronquio hacia la periferia.' },
  { s: 'Crepitantes gruesos que cambian con la tos', p: 'Hallazgo exploratorio típico', photo: null, desc: 'Se deben a secreciones en la via aérea y se modifican al toser, a diferencia de los crepitantes finos y fijos de la fibrosis pulmonar. Es de las pocas auscultaciones que orientan de verdad.' },
  { s: 'Radiografía de tórax normal', p: 'No descarta nada', photo: null, desc: 'La radiografía es poco sensible y puede ser normal con bronquiectasias extensas. Aceptarla como prueba de exclusión es una de las causas principales del retraso diagnóstico, que en estos pacientes se mide en años.' },
  { s: 'Bronquiectasias en lóbulos superiores', p: 'Orienta la causa', photo: null, desc: 'Sugiere fibrosis quística, aspergilosis broncopulmonar alérgica o secuela de tuberculosis. La distribución radiológica es una de las pistas etiológicas más útiles y no cuesta nada mirarla.' },
  { s: 'Afectación de lóbulo medio y lingula', p: 'Micobacterias no tuberculosas', photo: null, desc: 'En una mujer mayor, delgada y no fumadora, este patrón es el del síndrome de Lady Windermere. Obliga a pedir de forma explícita cultivo de esputo para micobacterias, que no se hace si no se solicita.' },
  { s: 'Bronquiectasias en una sola zona', p: 'Obliga a broncoscopia', photo: null, desc: 'La afectación localizada sugiere obstrucción bronquial: cuerpo extraño, tumor endobronquial o estenosis. Es una de las pocas indicaciones claras de broncoscopia en este tema y no debe posponerse.' },
  { s: 'Esputo purulento con Pseudomonas', p: 'Marcador de peor pronóstico', photo: null, desc: 'Se asocia a más exacerbaciones, peor función pulmonar y mayor mortalidad, y aporta 3 puntos en el índice de gravedad. El primer aislamiento es la última oportunidad de intentar erradicarla.' },
  { s: 'Situs inversus con bronquiectasias', p: 'Síndrome de Kartagener', photo: null, desc: 'La combinación de situs inversus, sinusitis crónica y bronquiectasias define el síndrome de Kartagener, que corresponde a una discinesia ciliar primaria. Los cilios determinan la lateralidad durante el desarrollo embrionario, de ahi la asociación.' },
  { s: 'Otitis media crónica desde la infancia', p: 'Pista de discinesia ciliar', photo: null, desc: 'Junto con la rinosinusitis persistente y la infertilidad, forma el cuadro de la discinesia ciliar primaria. Es una enfermedad muy infradiagnosticada, con retrasos de décadas, y el cribado inicial es el óxido nítrico nasal.' },
  { s: 'Infertilidad masculina con bronquiectasias', p: 'Pensar en fibrosis quística', photo: null, desc: 'La ausencia bilateral congénita de conductos deferentes se asocia a mutaciones del gen CFTR y puede ser la manifestación más llamativa de una fibrosis quística de expresión leve diagnosticada en la edad adulta.' },
  { s: 'Deterioro que no responde a los antibióticos', p: 'Buscar micobacterias', photo: null, desc: 'Un paciente que se deteriora de forma progresiva pese a ciclos repetidos de antibiótico no esta teniendo exacerbaciones bacterianas habituales. Hay que pensar en micobacterias no tuberculosas y en aspergilosis broncopulmonar alérgica.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Índice de gravedad de bronquiectasias (calculadora disponible)': [3],
  'Estudio etiológico mínimo (calculadora disponible)': [1, 2],
  'Definición de exacerbación (calculadora disponible)': [4],
  'Estado microbiológico frente a Pseudomonas (calculadora disponible)': [10, 1],
  'Morfología radiológica': [15],
  'Escala de disnea del Medical Research Council': [3]
};
export const escalaCalc = {
  'Índice de gravedad de bronquiectasias (calculadora disponible)': 'bsi',
  'Estudio etiológico mínimo (calculadora disponible)': 'etiologia-bronquiectasias',
  'Definición de exacerbación (calculadora disponible)': 'exacerbacion-bronquiectasias',
  'Estado microbiológico frente a Pseudomonas (calculadora disponible)': 'pseudomonas-bronquiectasias'
};
export const compGroups = [
  { name: 'Diagnóstico y manejo', items: ['Bronquiectasias: diagnóstico y búsqueda de la causa', 'Manejo crónico: aclaramiento y tratamiento de mantenimiento', 'Exacerbación de bronquiectasias'] },
  { name: 'Los microorganismos', items: ['Pseudomonas aeruginosa: erradicación y supresión', 'Micobacterias no tuberculosas en bronquiectasias'] },
  { name: 'Las causas genéticas', items: ['Fibrosis quística del adulto y discinesia ciliar primaria'] }
];
export const complicacionesIntro = 'Las tres primeras fichas recorren el tema completo: como se diagnostican y por que hay que buscar la causa, como se manejan en fase estable (donde lo que más rinde es lo que menos se prescribe) y como se trata una exacerbación, que tiene definición, orden y duración propios. Las dos siguientes son los dos microorganismos que cambian el pronóstico y el tratamiento: Pseudomonas, cuyo primer aislamiento es una oportunidad que no se repite, y las micobacterias no tuberculosas, que hay que descartar antes de dar un macrolido. La última recoge las dos causas genéticas que se pueden diagnosticar en el adulto y que tienen manejo propio.';
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
  root: { title: 'BRONQUIECTASIAS', color: '#2e6b8a', target: 'definicion' },
  branches: [
    { title: 'DIAGNOSTICAR', sub: 'Y buscar por que están ahi', color: '#2e6b8a', target: 'complicaciones', leaves: [
      { title: 'Tomografía de alta resolución', sub: 'La radiografía no descarta', color: '#2e6b8a', target: 'diagnostico' },
      { title: 'Mirar la distribución', sub: 'Orienta la etiología', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Inmunoglobulinas a todos', sub: 'Causa tratable que se olvida', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Localizada: broncoscopia', sub: 'Descartar obstrucción', color: '#8c3a34', target: 'diagnostico' }
    ] },
    { title: 'TRATAR EN FRÍO', sub: 'Sobre el aclaramiento', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Fisioterapia diaria', sub: 'Lo que más rinde', color: '#3f6b52', target: 'complicaciones' },
      { title: '3 exacerbaciones al año', sub: 'Macrolido a largo plazo', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Antes del macrolido', sub: 'Descartar micobacterias', color: '#5a6b2e', target: 'complicaciones' },
      { title: 'Ni corticoide ni DNasa', sub: 'No son la EPOC ni la FQ', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'LA EXACERBACIÓN', sub: 'Definición, orden y duración', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: '3 de 6 síntomas, 48 horas', sub: 'No es toser más hoy', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Cultivo ANTES', sub: 'El gesto que más se salta', color: '#2e6b8a', target: 'complicaciones' },
      { title: '14 días', sub: 'No 5 ni 7', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Primer Pseudomonas', sub: 'Intentar erradicar', color: '#7a2f5c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [3, 4, 1], imagen: [1, 15] };
export const clasificacionCite = [1, 3, 4, 10];
export const seguimientoCite = [1, 2, 4];
