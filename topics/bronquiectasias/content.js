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
  subtitulo: 'Modulo 59 · Medicina Interna',
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
    <strong style="color:#2e6b8a;">Las bronquiectasias son una DILATACION BRONQUIAL IRREVERSIBLE, no una enfermedad.</strong> <span style="color:var(--ink-dim);">Son el resultado final de causas muy distintas, y ese es el motivo por el que el diagnostico radiologico solo es la mitad del trabajo: la otra mitad es averiguar por que estan ahi.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 14px 1fr;gap:4px;align-items:stretch;margin-bottom:4px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:3px;">1 · INFECCION</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Las bacterias colonizan una via aerea que ya no se limpia bien y forman biopelicula. <em>Haemophilus influenzae</em> es el patogeno mas frecuente, y <em>Pseudomonas aeruginosa</em> el que peor pronostico marca.</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&rarr;</div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:3px;">2 · INFLAMACION</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Llegan neutrofilos y liberan elastasa y otras proteasas. La respuesta inmunitaria que intenta controlar la infeccion es la que produce buena parte del da&#241;o.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 14px 1fr;gap:4px;align-items:stretch;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:3px;">4 · ACLARAMIENTO ALTERADO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">El bronquio dilatado y sin cilios funcionantes no puede expulsar el moco, que se estanca. Y ese moco estancado es el medio de cultivo del paso 1: el circulo se cierra.</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&larr;</div>
    <div style="border:1.5px solid #2e6b8a;border-radius:8px;padding:6px 8px;background:#2e6b8a08;">
      <div style="font-weight:700;color:#2e6b8a;text-align:center;margin-bottom:3px;">3 · DA&#209;O DE LA PARED</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Se destruye el cartilago, el musculo liso y el epitelio ciliado. El bronquio se dilata de forma IRREVERSIBLE y pierde su capacidad de limpiarse.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Por que importa el circulo.</strong> Explica el tratamiento entero. Se puede actuar sobre la infeccion (antibioticos dirigidos, erradicacion, supresion a largo plazo), sobre la inflamacion (macrolidos, que actuan mas por su efecto inmunomodulador que por el antibiotico) y sobre el aclaramiento (FISIOTERAPIA RESPIRATORIA diaria, que es la base y la medida mas costoeficaz de todo el tema). Lo que no se puede es revertir la dilatacion: el da&#241;o estructural es permanente y por eso el objetivo es frenar el circulo, no deshacerlo.
  </div>
</div>`;

const etiologiaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;margin-bottom:6px;">
    <strong style="color:#8a6a1f;">Buscar la causa NO es un ejercicio academico.</strong> <span style="color:var(--ink-dim);">En una proporcion importante de los pacientes el estudio cambia el tratamiento: una inmunodeficiencia se sustituye, una aspergilosis se trata, una fibrosis quistica tiene moduladores y una micobacteria contraindica el macrolido en monoterapia.</span>
  </div>
  <div style="border:1.5px solid #2e6b8a;border-radius:8px;padding:6px 9px;background:#2e6b8a08;margin-bottom:6px;">
    <div style="font-weight:700;color:#2e6b8a;margin-bottom:3px;">LO QUE SE PIDE A TODOS</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Hemograma completo</strong> con formula (eosinofilia, linfopenia). <strong style="color:var(--ink);">INMUNOGLOBULINAS sericas</strong> (IgG, IgA e IgM), que detectan la inmunodeficiencia comun variable, una causa tratable que se diagnostica tarde con demasiada frecuencia. <strong style="color:var(--ink);">Estudio de Aspergillus</strong>: IgE total, IgE especifica y precipitinas, para la aspergilosis broncopulmonar alergica. Y <strong style="color:var(--ink);">CULTIVO DE ESPUTO</strong> incluyendo MICOBACTERIAS.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Y segun las pistas.</strong> <strong>Cloro en sudor y estudio del gen CFTR</strong> si hay afectacion de lobulos superiores, infertilidad masculina, malabsorcion, pancreatitis o inicio joven. <strong>Oxido nitrico nasal y estudio ciliar</strong> si hay otitis media cronica de la infancia, situs inversus o infertilidad. <strong>Alfa-1-antitripsina</strong> si hay enfisema. <strong>Autoinmunidad</strong> si hay artritis o sequedad.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que orienta la DISTRIBUCION.</strong> <strong>Lobulos superiores</strong>: fibrosis quistica, aspergilosis broncopulmonar alergica, tuberculosis previa. <strong>Lobulos inferiores</strong>: postinfecciosa, aspiracion, inmunodeficiencia. <strong>Lobulo medio y lingula</strong>: micobacterias no tuberculosas, sobre todo en mujeres mayores no fumadoras. <strong>Una sola zona</strong>: obstruccion bronquial, y obliga a broncoscopia para descartar cuerpo extra&#241;o o tumor.
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3f6b52;border-radius:8px;background:#3f6b5210;color:var(--ink-dim);">
    <strong style="color:#3f6b52;">Idiopaticas, pero solo despues de buscar.</strong> Tras un estudio completo, una parte importante de los casos se queda sin causa identificada. Eso es una conclusion legitima, pero solo cuando se ha hecho el estudio: etiquetar de idiopaticas unas bronquiectasias a las que nunca se les pidio inmunoglobulinas no es lo mismo.
  </div>
</div>`;

const manejoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">BASE<br><span style="font-weight:400;font-size:8.5px;">para todos</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">FISIOTERAPIA RESPIRATORIA DIARIA</strong>, que es la medida mas costoeficaz del tema y la que peor se prescribe. Ejercicio y rehabilitacion respiratoria. Vacunacion antigripal y antineumococica. Y <strong>tratar la causa</strong> si se ha encontrado.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">3 o mas<br><span style="font-weight:400;font-size:8.5px;">exacerbaciones/a&#241;o</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">MACROLIDO a largo plazo</strong> (azitromicina), por su efecto inmunomodulador mas que antibiotico. <strong style="color:#8c3a34;">Antes de empezar hay que DESCARTAR micobacterias no tuberculosas</strong> con cultivos de esputo, porque un macrolido en monoterapia sobre una micobacteria crea resistencia y arruina el tratamiento futuro. Comprobar ademas QT y audicion.</div>
    </div>
    <div style="display:grid;grid-template-columns:100px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">PSEUDOMONAS<br><span style="font-weight:400;font-size:8.5px;">cronica</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">ANTIBIOTICO INHALADO</strong> a largo plazo (colistina, tobramicina o gentamicina) si hay colonizacion cronica y exacerbaciones frecuentes. Primera dosis supervisada por el riesgo de broncoespasmo.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que NO se hace, aunque se haga en la EPOC.</strong> <strong>Corticoides inhalados de rutina</strong>: no estan indicados salvo que coexista asma o EPOC, y aumentan el riesgo de neumonia y de infeccion por micobacterias. Y la <strong>DNasa recombinante</strong>, que funciona en la fibrosis quistica, esta <strong>CONTRAINDICADA</strong> en las bronquiectasias de otras causas: en un ensayo empeoro la funcion pulmonar y aumento las exacerbaciones.
    </div>
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que si puede ayudar.</strong> <strong>Suero salino hipertonico</strong> o manitol inhalado como coadyuvantes del aclaramiento, siempre con broncodilatador previo y primera dosis supervisada. Broncodilatadores solo si hay obstruccion o sintomas que respondan. Y cirugia de reseccion en el caso excepcional de enfermedad localizada, muy sintomatica y refractaria.
    </div>
  </div>
</div>`;

const exacerbacionHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Una exacerbacion es un DETERIORO SOSTENIDO de al menos 48 horas en 3 o mas de estos 6 sintomas</strong> <span style="color:var(--ink-dim);">que lleve al clinico a cambiar el tratamiento. No es "el paciente tose mas hoy".</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">TOS</strong><br>mas frecuente o mas intensa</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">VOLUMEN o CONSISTENCIA</strong><br>del esputo</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">PURULENCIA</strong><br>del esputo</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">DISNEA</strong><br>o tolerancia al ejercicio</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">FATIGA</strong><br>o malestar general</div>
    <div style="border:1px solid #2e6b8a;border-radius:7px;padding:5px 7px;text-align:center;color:var(--ink-dim);"><strong style="color:#2e6b8a;">HEMOPTISIS</strong><br>nueva o aumentada</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">EL ORDEN QUE NO SE INVIERTE</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">1. CULTIVO de esputo ANTES</strong> de dar el antibiotico. Es el gesto que mas se salta y el que mas cuesta despues, porque una vez iniciado el tratamiento el cultivo pierde valor y el paciente se queda sin mapa microbiologico para la siguiente vez.<br><strong style="color:var(--ink);">2. Antibiotico</strong> dirigido al ultimo aislamiento del propio paciente mientras llega el resultado.<br><strong style="color:var(--ink);">3. Intensificar la fisioterapia</strong>, que en la exacerbacion se hace mas veces al dia, no menos.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">14 DIAS, NO 5</div>
      <div style="color:var(--ink-dim);line-height:1.6;">La duracion habitual del antibiotico en una exacerbacion de bronquiectasias es de <strong style="color:var(--ink);">14 dias</strong>, mucho mas larga que en la bronquitis aguda o en la exacerbacion de EPOC. La razon es la biopelicula y la carga bacteriana alta de una via aerea estructuralmente da&#241;ada: las pautas cortas dejan al paciente recayendo a las pocas semanas.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Ante una exacerbacion que no responde</strong>, antes de cambiar de antibiotico a ciegas: revisar el cultivo, pensar en <strong>Pseudomonas</strong> o en una <strong>micobacteria no tuberculosa</strong>, descartar una aspergilosis broncopulmonar alergica y comprobar que el paciente esta haciendo fisioterapia. Y en la hemoptisis amenazante, contactar con radiologia intervencionista para embolizacion de arterias bronquiales.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las bronquiectasias son una <strong>dilatacion anormal e irreversible de los bronquios</strong> con destruccion de su pared. Lo primero que conviene fijar es que no son una enfermedad sino el <strong>resultado final comun</strong> de causas muy distintas: infecciones previas, inmunodeficiencias, enfermedades geneticas, obstruccion, aspiracion o enfermedades sistemicas. De ahi que el trabajo clinico tenga dos mitades: reconocerlas en la imagen y averiguar por que estan ahi.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: el circulo vicioso que lo explica todo.</strong></p>
<p style="margin:0 0 12px;">Una via aerea que no se limpia bien se coloniza; la colonizacion atrae neutrofilos; los neutrofilos da&#241;an la pared; la pared da&#241;ada se dilata y pierde los cilios; y el bronquio dilatado se limpia todavia peor. El circulo se retroalimenta, y entenderlo permite deducir el tratamiento completo: se ataca la infeccion, se modula la inflamacion y, sobre todo, se mejora el <strong>ACLARAMIENTO</strong>, que es donde esta la medida mas costoeficaz de todo el tema.</p>
${figBlock('Figura 1', 'El circulo vicioso, y por que explica el tratamiento entero', circuloHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: buscar la causa cambia el tratamiento.</strong></p>
<p style="margin:0 0 12px;">Hay un estudio minimo que se pide a todos (hemograma, <strong>inmunoglobulinas sericas</strong>, estudio de <em>Aspergillus</em> y cultivo de esputo incluyendo <strong>micobacterias</strong>) y un estudio dirigido segun las pistas clinicas y la distribucion radiologica. No es un ejercicio academico: encontrar una inmunodeficiencia, una aspergilosis, una fibrosis quistica o una micobacteria cambia lo que se hace con el paciente.</p>
${figBlock('Figura 2', 'El estudio etiologico: lo de todos, lo dirigido y lo que dice la distribucion', etiologiaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el manejo cronico, en escalones.</strong></p>
<p style="margin:0 0 12px;">La base para todos es la <strong>fisioterapia respiratoria diaria</strong>, junto con ejercicio, vacunas y tratamiento de la causa. A partir de tres exacerbaciones al a&#241;o se a&#241;ade un <strong>macrolido a largo plazo</strong>, siempre tras descartar micobacterias no tuberculosas. Y si hay colonizacion cronica por <em>Pseudomonas</em> con exacerbaciones frecuentes, un <strong>antibiotico inhalado</strong>. Conviene tener claro tambien lo que NO se hace aqui aunque se haga en la EPOC.</p>
${figBlock('Figura 3', 'Escalones del tratamiento cronico, y lo que no se debe hacer', manejoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la exacerbacion tiene definicion, orden y duracion.</strong></p>
<p style="margin:0 0 12px;">No es cualquier empeoramiento: hace falta un deterioro sostenido de al menos 48 horas en tres o mas de seis sintomas. El orden tampoco es indiferente: <strong>cultivo de esputo ANTES del antibiotico</strong>, siempre. Y la duracion es de <strong>14 dias</strong>, mucho mas que en una bronquitis aguda, porque la carga bacteriana y la biopelicula de una via aerea da&#241;ada no se resuelven con pautas cortas.</p>
${figBlock('Figura 4', 'Definicion de exacerbacion, el orden correcto y los 14 dias', exacerbacionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No quedarse en el diagnostico radiologico sin buscar la causa. No dejar de pedir inmunoglobulinas, que detectan una inmunodeficiencia tratable. No dar antibiotico sin haber recogido antes el cultivo de esputo. No tratar una exacerbacion durante 5 o 7 dias. No iniciar un macrolido a largo plazo sin haber descartado micobacterias no tuberculosas. No usar corticoides inhalados de rutina si no hay asma o EPOC asociada. No usar DNasa recombinante, que en las bronquiectasias no debidas a fibrosis quistica empeora los resultados. No dejar de prescribir fisioterapia respiratoria, que es lo que mas rinde y lo que menos se indica. Y no pasar por alto un primer aislamiento de <em>Pseudomonas</em>, porque es el momento en que todavia se puede intentar erradicarla.</p>`;

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
      tituloA: 'Situacion estable',
      tituloB: 'Exacerbacion y complicaciones',
      compensada: 'TOS PRODUCTIVA CRONICA, que es el sintoma cardinal, con expectoracion diaria de volumen variable y a menudo purulenta, que el paciente lleva a&#241;os describiendo como "bronquitis de siempre". Disnea de esfuerzo, fatiga y sensacion de congestion toracica. Hemoptisis leve recurrente, que es frecuente y suele deberse a la hipertrofia de la circulacion bronquial. En la exploracion, crepitantes gruesos que cambian con la tos y a veces sibilancias o roncus. Las acropaquias son menos frecuentes de lo que sugieren los textos clasicos.',
      descompensada: 'EXACERBACION: deterioro sostenido de al menos 48 horas en 3 o mas de 6 sintomas (tos, volumen o consistencia del esputo, purulencia, disnea, fatiga y hemoptisis) que lleva a cambiar el tratamiento. Y las complicaciones que cambian el plan: HEMOPTISIS AMENAZANTE por erosion de arterias bronquiales hipertrofiadas, insuficiencia respiratoria cronica, cor pulmonale en la enfermedad avanzada, y el deterioro progresivo sin exacerbaciones claras que debe hacer pensar en micobacterias no tuberculosas o en aspergilosis broncopulmonar alergica.'
    },
    laboratorio: [
      { prueba: 'CULTIVO DE ESPUTO con micobacterias', utilidad: 'Es la prueba que mas orienta el tratamiento. Se pide al diagnostico, de forma periodica en el seguimiento y SIEMPRE antes de iniciar un antibiotico en una exacerbacion. Debe incluir de forma explicita el cultivo de micobacterias, que no se hace si no se solicita y cuya omision lleva a dar macrolidos en monoterapia sobre una micobacteria no diagnosticada.' },
      { prueba: 'Inmunoglobulinas sericas (IgG, IgA e IgM)', utilidad: 'Se piden a TODOS los pacientes. Detectan la inmunodeficiencia comun variable, que es una causa tratable con inmunoglobulinas sustitutivas y que se diagnostica con a&#241;os de retraso. Es una de las omisiones mas costosas del estudio etiologico.' },
      { prueba: 'Estudio de Aspergillus: IgE total, IgE especifica y precipitinas', utilidad: 'Cribado de aspergilosis broncopulmonar alergica, que produce bronquiectasias centrales de predominio en lobulos superiores, tapones de moco y eosinofilia. Es tratable con corticoides y antifungicos, y su diagnostico cambia el manejo por completo.' },
      { prueba: 'Cloro en sudor y estudio del gen CFTR', utilidad: 'Ante bronquiectasias de predominio en lobulos superiores, colonizacion por Staphylococcus aureus, infertilidad masculina, malabsorcion, pancreatitis de repeticion o inicio en edad joven. El diagnostico de fibrosis quistica en el adulto es posible y hoy abre la puerta a los moduladores del CFTR.' },
      { prueba: 'Oxido nitrico nasal y estudio de la funcion ciliar', utilidad: 'Ante otitis media cronica en la infancia, rinosinusitis persistente, situs inversus o infertilidad. El oxido nitrico nasal muy bajo es un buen cribado de discinesia ciliar primaria, que se confirma con microscopia y estudio genetico en centros de referencia.' },
      { prueba: 'Alfa-1-antitripsina y autoinmunidad', utilidad: 'La alfa-1-antitripsina si hay enfisema asociado. El factor reumatoide, los anticuerpos anti-peptido citrulinado y los anticuerpos anti-Ro y anti-La ante artritis, sequedad o sospecha de conectivopatia, ya que la artritis reumatoide y el sindrome de Sjogren son causas reconocidas.' },
      { prueba: 'Hemograma con formula', utilidad: 'La eosinofilia orienta hacia aspergilosis broncopulmonar alergica o hacia un fenotipo eosinofilico; la linfopenia, hacia inmunodeficiencia. Es una prueba barata que se pide a todos y cuya lectura completa aporta mas de lo que parece.' },
      { prueba: 'Serologia de VIH e inmunoglobulina E total', utilidad: 'El VIH en el paciente con infecciones de repeticion o factores de riesgo. La inmunoglobulina E total forma parte del cribado de aspergilosis y sus valores muy elevados son uno de los criterios diagnosticos.' }
    ],
    no_invasivos: [
      { metodo: 'Indice de gravedad de bronquiectasias (calculadora disponible)', interpretacion: 'Combina edad, indice de masa corporal, FEV1, ingresos, exacerbaciones, disnea, colonizacion y extension radiologica. Predice mortalidad, ingresos y exacerbaciones futuras.', cutoff: '0 a 4 leve; 5 a 8 moderada; 9 o mas grave' },
      { metodo: 'Estudio etiologico minimo (calculadora disponible)', interpretacion: 'Comprueba que se ha hecho lo que se pide a todos y sugiere el estudio dirigido segun las pistas clinicas y la distribucion radiologica.', cutoff: 'A todos: hemograma, inmunoglobulinas, estudio de Aspergillus y cultivo de esputo con micobacterias' },
      { metodo: 'Criterios de exacerbacion (calculadora disponible)', interpretacion: 'Definicion de consenso: deterioro sostenido de al menos 48 horas en 3 o mas de 6 sintomas, con decision clinica de cambiar el tratamiento.', cutoff: '3 o mas de 6 sintomas durante 48 horas o mas' },
      { metodo: 'Manejo de Pseudomonas aeruginosa (calculadora disponible)', interpretacion: 'Distingue el primer aislamiento, que justifica un intento de ERRADICACION, de la colonizacion cronica, que puede requerir antibiotico inhalado a largo plazo.', cutoff: 'Colonizacion cronica: 2 o mas cultivos positivos separados al menos 3 meses en un a&#241;o' },
      { metodo: 'Pruebas de funcion pulmonar con DLCO', interpretacion: 'Patron habitualmente OBSTRUCTIVO, aunque puede ser normal o mixto. El FEV1 forma parte del indice de gravedad y su caida acelerada identifica al paciente que necesita intensificar el tratamiento.', cutoff: 'Sin umbral unico; se interpreta en la evolucion del propio paciente' },
      { metodo: 'Escala de disnea del Medical Research Council', interpretacion: 'De 1 a 5 segun el grado de esfuerzo que produce disnea. Entra en el indice de gravedad y refleja el impacto real de la enfermedad sobre la vida del paciente.', cutoff: 'Grado 4 o 5: puntua en el indice de gravedad y marca enfermedad avanzada' },
      { metodo: 'Prueba de la marcha de 6 minutos', interpretacion: 'Objetiva la limitacion funcional y detecta desaturacion de esfuerzo. Util para indicar rehabilitacion respiratoria y para seguir la respuesta.', cutoff: 'Desaturacion por debajo del 88%: valorar oxigenoterapia y estudio de hipertension pulmonar' }
    ],
    imagen: [
      { modalidad: 'Tomografia de alta resolucion', hallazgos: 'ES LA PRUEBA DIAGNOSTICA. Cociente broncoarterial mayor de 1 (el bronquio se ve mas grande que la arteria que lo acompa&#241;a, lo que da el signo del anillo de sello), falta de afilamiento progresivo del bronquio hacia la periferia, y bronquios visibles a menos de 1 cm de la pleura. Se a&#241;aden engrosamiento de la pared, tapones de moco y patron en arbol en brote cuando hay infeccion activa.' },
      { modalidad: 'Radiografia de torax', hallazgos: 'Poco sensible: puede ser normal con bronquiectasias extensas, y esa es la razon principal del retraso diagnostico. Cuando muestra algo, son imagenes en rail de tranvia, anillos y perdida de definicion de las marcas broncovasculares.' },
      { modalidad: 'Distribucion en la tomografia', hallazgos: 'Orienta la etiologia: lobulos SUPERIORES en la fibrosis quistica, la aspergilosis broncopulmonar alergica y la tuberculosis previa; lobulos INFERIORES en las postinfecciosas, la aspiracion y la inmunodeficiencia; LOBULO MEDIO y LINGULA en las micobacterias no tuberculosas; y afectacion de UNA SOLA zona en la obstruccion bronquial, que obliga a broncoscopia.' },
      { modalidad: 'Broncoscopia', hallazgos: 'No es rutinaria. Indicada ante bronquiectasias LOCALIZADAS en una sola zona, para descartar cuerpo extra&#241;o, tumor endobronquial o estenosis, y para obtener muestras microbiologicas cuando el paciente no expectora o los cultivos no explican la evolucion.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las bronquiectasias se clasifican por su <strong>morfologia</strong> radiologica (cilindricas, varicosas y quisticas, en orden creciente de da&#241;o), por su <strong>extension</strong> (localizadas frente a difusas, distincion que importa porque la afectacion de una sola zona obliga a descartar obstruccion), por su <strong>etiologia</strong>, que es la clasificacion que mas cambia el tratamiento, y por su <strong>gravedad</strong> con un indice validado que integra clinica, funcion, microbiologia e imagen. En paralelo se define el <strong>estado microbiologico</strong>, que separa al paciente sin colonizacion del colonizado por <em>Pseudomonas aeruginosa</em>, cuyo pronostico es peor.`,
    escalas: [
      { nombre: 'Indice de gravedad de bronquiectasias (calculadora disponible)', componentes: 'Edad, indice de masa corporal, FEV1 en porcentaje del predicho, ingreso hospitalario en los ultimos 2 a&#241;os, exacerbaciones en el ultimo a&#241;o, disnea segun el Medical Research Council, colonizacion por Pseudomonas, colonizacion por otros microorganismos y extension o morfologia radiologica.', formula: 'Suma de 0 a 26 puntos. El ingreso previo aporta 5 puntos y la colonizacion por Pseudomonas 3, que son los dos elementos de mayor peso.', interpretacion: 'De 0 a 4 gravedad leve; de 5 a 8 moderada; 9 o mas grave. Predice mortalidad, ingresos y exacerbaciones. Sirve para priorizar el seguimiento y para decidir a quien se intensifica el tratamiento, no para sustituir el juicio clinico.' },
      { nombre: 'Estudio etiologico minimo (calculadora disponible)', componentes: 'Pruebas realizadas y pistas clinicas: distribucion radiologica, edad de inicio, antecedentes otorrinolaringologicos, infertilidad, malabsorcion, artritis y microorganismo aislado.', formula: 'A todos: hemograma, inmunoglobulinas sericas, estudio de Aspergillus y cultivo de esputo con micobacterias. Dirigido segun las pistas.', interpretacion: 'El objetivo es identificar las causas que cambian el tratamiento: inmunodeficiencia, aspergilosis, fibrosis quistica, discinesia ciliar, micobacterias no tuberculosas y obstruccion. Etiquetar de idiopaticas sin haber hecho el estudio minimo no es una conclusion valida.' },
      { nombre: 'Definicion de exacerbacion (calculadora disponible)', componentes: 'Tos, volumen o consistencia del esputo, purulencia, disnea o tolerancia al ejercicio, fatiga o malestar, y hemoptisis.', formula: 'Deterioro sostenido durante 48 horas o mas en 3 o mas de esos 6 sintomas, con decision clinica de cambiar el tratamiento.', interpretacion: 'La definicion evita tratar como exacerbacion cualquier empeoramiento de un dia. Una vez establecida: cultivo de esputo ANTES del antibiotico, antibiotico dirigido al ultimo aislamiento del paciente y duracion habitual de 14 dias.' },
      { nombre: 'Estado microbiologico frente a Pseudomonas (calculadora disponible)', componentes: 'Numero de cultivos positivos, separacion entre ellos y respuesta a intentos previos de erradicacion.', formula: 'Colonizacion cronica: 2 o mas cultivos positivos separados al menos 3 meses en un periodo de 12 meses. Primer aislamiento: candidato a intento de erradicacion.', interpretacion: 'El primer aislamiento es una oportunidad que no se repite: se intenta erradicar. Establecida la colonizacion cronica, el objetivo pasa a ser suprimir la carga bacteriana con antibiotico inhalado si hay exacerbaciones frecuentes.' },
      { nombre: 'Morfologia radiologica', componentes: 'Aspecto de los bronquios dilatados en la tomografia de alta resolucion.', formula: 'CILINDRICAS: dilatacion uniforme. VARICOSAS: dilatacion irregular con constricciones. QUISTICAS o saculares: dilatacion en racimo con niveles hidroaereos.', interpretacion: 'Refleja el grado de destruccion de la pared y se correlaciona con la gravedad clinica. La forma quistica es la de mayor da&#241;o y la que mas se asocia a colonizacion cronica y a hemoptisis.' },
      { nombre: 'Escala de disnea del Medical Research Council', componentes: 'Grado de esfuerzo que produce disnea en la vida diaria.', formula: 'De 1 (disnea solo con ejercicio intenso) a 5 (disnea que impide salir de casa o al vestirse).', interpretacion: 'Entra en el indice de gravedad, donde el grado 4 aporta 2 puntos y el 5 aporta 3. Es una medida sencilla del impacto real de la enfermedad y refleja la limitacion mejor que el FEV1 aislado.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Bronquiectasias: diagnostico y busqueda de la causa',
      color: '#2e6b8a',
      definicion: 'Dilatacion anormal e irreversible de los bronquios con destruccion de su pared, diagnosticada por tomografia de alta resolucion, que constituye el resultado final comun de causas muy diversas.',
      fisiopatologia: 'El mecanismo central es el circulo vicioso descrito por Cole: una agresion inicial (infeccion, obstruccion, inmunodeficiencia, defecto ciliar) deteriora el aclaramiento mucociliar; el moco retenido permite la colonizacion bacteriana; las bacterias forman biopelicula y atraen neutrofilos; los neutrofilos liberan elastasa y otras proteasas que destruyen el cartilago, el musculo liso y el epitelio ciliado; el bronquio se dilata de forma irreversible y se limpia todavia peor. Cada vuelta del circulo a&#241;ade da&#241;o estructural, y por eso el objetivo terapeutico es frenarlo en varios puntos a la vez.',
      epidemiologia: 'Su prevalencia reconocida ha aumentado de forma marcada con el uso de la tomografia, lo que sugiere que durante a&#241;os estuvieron infradiagnosticadas mas que ausentes. Son mas frecuentes en mujeres y en edades avanzadas, y su prevalencia aumenta mucho en pacientes con EPOC, artritis reumatoide o inmunodeficiencia.',
      factores_riesgo: ['Infeccion respiratoria grave en la infancia', 'Tuberculosis o micobacteriosis previa', 'Inmunodeficiencia primaria, sobre todo la comun variable', 'Inmunodeficiencia secundaria: hematologica, farmacos, VIH', 'EPOC grave', 'Artritis reumatoide y sindrome de Sjogren', 'Enfermedad inflamatoria intestinal', 'Aspergilosis broncopulmonar alergica', 'Fibrosis quistica y discinesia ciliar primaria', 'Deficit de alfa-1-antitripsina', 'Aspiracion cronica y reflujo gastroesofagico', 'Obstruccion bronquial por cuerpo extra&#241;o o tumor'],
      clinica: 'Tos productiva cronica con expectoracion diaria, a menudo purulenta, que el paciente lleva a&#241;os normalizando. Disnea de esfuerzo, fatiga y hemoptisis leve recurrente. En la exploracion, crepitantes gruesos que cambian con la tos. Las acropaquias son menos frecuentes de lo que sugieren los textos clasicos.',
      criterios_dx: 'TOMOGRAFIA DE ALTA RESOLUCION: cociente broncoarterial mayor de 1 con signo del anillo de sello, falta de afilamiento del bronquio hacia la periferia y bronquios visibles a menos de 1 cm de la pleura. La radiografia normal NO descarta la enfermedad. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'A TODOS: hemograma con formula, inmunoglobulinas sericas, estudio de Aspergillus (IgE total, IgE especifica y precipitinas) y cultivo de esputo INCLUYENDO micobacterias. Dirigido: cloro en sudor y CFTR, oxido nitrico nasal, alfa-1-antitripsina y autoinmunidad segun las pistas.',
      imagen: 'Tomografia de alta resolucion, que ademas orienta la etiologia por la DISTRIBUCION: lobulos superiores en fibrosis quistica y aspergilosis, inferiores en las postinfecciosas y la aspiracion, lobulo medio y lingula en micobacterias no tuberculosas, y una sola zona en la obstruccion bronquial.',
      complementarios: 'BRONCOSCOPIA si la afectacion es LOCALIZADA en una sola zona, para descartar cuerpo extra&#241;o, tumor endobronquial o estenosis. Pruebas de funcion pulmonar con DLCO como basal. Valoracion otorrinolaringologica si hay rinosinusitis cronica asociada.',
      dx_diferencial: 'Bronquiolitis, EPOC con tos productiva, asma con tapones de moco, traqueobroncomegalia y las pseudobronquiectasias por traccion de la fibrosis pulmonar, que son un fenomeno distinto y no obligan a este estudio.',
      tx_medico: 'FISIOTERAPIA RESPIRATORIA DIARIA como base de todo, ense&#241;ada por un fisioterapeuta y adaptada al paciente. Ejercicio y rehabilitacion respiratoria. Vacunacion antigripal anual y antineumococica. Abandono del tabaco. Nutricion, porque el bajo peso empeora el pronostico y puntua en el indice de gravedad.',
      tx_farmacologico: 'Se detalla en la ficha de manejo cronico. La regla que ordena el inicio es que el tratamiento se construye sobre el aclaramiento, no sobre el antibiotico.',
      tx_intervencionista: 'Broncoscopia diagnostica en la enfermedad localizada.',
      criterios_uci: 'Hemoptisis amenazante e insuficiencia respiratoria aguda grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante pulmonar en la enfermedad avanzada con insuficiencia respiratoria y deterioro progresivo pese a tratamiento optimo.',
      seguimiento_hospitalario: 'Aprovechar el ingreso para completar el estudio etiologico, que es la ventana en que mejor se hace, y para ense&#241;ar la fisioterapia respiratoria.',
      seguimiento_ambulatorio: 'Revision con funcion pulmonar y cultivo de esputo periodicos, con frecuencia ajustada a la gravedad. Recuento anual de exacerbaciones, que es lo que decide la escalada terapeutica.',
      pronostico: 'Muy variable. Depende de la causa, de la extension, de la funcion pulmonar, de la frecuencia de exacerbaciones y sobre todo de la colonizacion por Pseudomonas, que marca peor evolucion.',
      algoritmo: ['Sospecharlas ante tos productiva cronica de a&#241;os', 'Confirmar con TOMOGRAFIA DE ALTA RESOLUCION, no con radiografia', 'Mirar la DISTRIBUCION, que orienta la etiologia', 'Pedir a todos: hemograma, inmunoglobulinas, Aspergillus y cultivo con micobacterias', 'A&#241;adir estudio dirigido segun las pistas clinicas', 'Hacer broncoscopia si la afectacion es localizada en una sola zona', 'Obtener funcion pulmonar con DLCO como basal', 'Calcular el indice de gravedad para priorizar el seguimiento', 'Prescribir FISIOTERAPIA RESPIRATORIA a todos, desde el primer dia', 'Vacunar y tratar la causa si se ha identificado']
    },
    {
      nombre: 'Manejo cronico: aclaramiento y tratamiento de mantenimiento',
      color: '#3f6b52',
      definicion: 'Conjunto de medidas dirigidas a romper el circulo vicioso en sus tres puntos: mejorar el aclaramiento de secreciones, reducir la carga bacteriana y modular la inflamacion.',
      fisiopatologia: 'La fisioterapia actua sobre el eslabon del aclaramiento movilizando el moco retenido. Los macrolidos a largo plazo actuan sobre la inflamacion: a las dosis usadas, su beneficio se atribuye mas al efecto inmunomodulador (reduccion de la quimiotaxis de neutrofilos y de la produccion de biopelicula) que a su actividad antibiotica directa. Los antibioticos inhalados alcanzan concentraciones muy altas en la via aerea con escasa absorcion sistemica, lo que permite suprimir la carga bacteriana en la colonizacion cronica sin la toxicidad de la via sistemica.',
      epidemiologia: 'La fisioterapia respiratoria es la intervencion mas costoeficaz del tema y a la vez la peor prescrita: una proporcion alta de pacientes nunca ha sido instruida por un fisioterapeuta. Los macrolidos a largo plazo reducen las exacerbaciones en torno a la mitad en los ensayos controlados.',
      factores_riesgo: ['Tres o mas exacerbaciones al a&#241;o', 'Colonizacion cronica por Pseudomonas aeruginosa', 'Mala tecnica o ausencia de fisioterapia respiratoria', 'Bajo peso y desnutricion', 'Causa no identificada ni tratada', 'Falta de vacunacion', 'Tabaquismo activo', 'Reflujo gastroesofagico no tratado', 'Rinosinusitis cronica asociada', 'Falta de adherencia al tratamiento inhalado'],
      clinica: 'El objetivo del tratamiento es reducir la frecuencia de exacerbaciones, mejorar la calidad de vida y frenar la caida del FEV1. La respuesta se mide en exacerbaciones al a&#241;o y en sintomas, no en la imagen: la tomografia no mejora y repetirla para valorar respuesta no aporta nada.',
      criterios_dx: 'No aplica: es la fase terapeutica. La decision de escalar se toma con el recuento de exacerbaciones del ultimo a&#241;o y con el estado microbiologico. Ver la Figura 3 de Definicion.',
      laboratorio: 'Cultivo de esputo periodico, incluyendo micobacterias, sobre todo ANTES de iniciar un macrolido a largo plazo. Funcion hepatica con macrolidos prolongados.',
      imagen: 'Tomografia basal. No se repite para valorar respuesta al tratamiento, porque el da&#241;o estructural no revierte y la imagen no refleja la mejoria clinica.',
      complementarios: 'Electrocardiograma y valoracion de la AUDICION antes y durante el tratamiento con macrolidos, por el riesgo de prolongacion del QT y de ototoxicidad. Primera dosis de antibiotico inhalado y de suero salino hipertonico SUPERVISADA, por el riesgo de broncoespasmo.',
      dx_diferencial: 'Ante falta de respuesta: mala adherencia, tecnica inhalatoria incorrecta, micobacterias no tuberculosas, aspergilosis broncopulmonar alergica, causa no tratada y diagnostico alternativo.',
      tx_medico: 'FISIOTERAPIA RESPIRATORIA DIARIA, que se ense&#241;a, se revisa y se ajusta, y que en la exacerbacion se intensifica en lugar de suspenderse. Rehabilitacion respiratoria y ejercicio regular. Vacunacion. Nutricion. Tratamiento del reflujo y de la rinosinusitis si estan presentes.',
      tx_farmacologico: 'MACROLIDO a largo plazo (azitromicina) si hay 3 o mas exacerbaciones al a&#241;o, SIEMPRE tras descartar micobacterias no tuberculosas y comprobar QT y audicion. ANTIBIOTICO INHALADO (colistina, tobramicina o gentamicina) si hay colonizacion cronica por Pseudomonas con exacerbaciones frecuentes. Suero salino hipertonico o manitol como coadyuvantes del aclaramiento. Broncodilatadores solo si hay obstruccion o sintomas que respondan. <strong>NO corticoides inhalados de rutina</strong> salvo asma o EPOC concomitante. <strong>NO DNasa recombinante</strong>, que en las bronquiectasias no debidas a fibrosis quistica empeoro la funcion pulmonar y aumento las exacerbaciones.',
      tx_intervencionista: 'Cirugia de reseccion en el caso excepcional de enfermedad localizada, muy sintomatica y refractaria al tratamiento medico optimo. Embolizacion de arterias bronquiales en la hemoptisis recurrente.',
      criterios_uci: 'No aplica en la fase estable.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfermedad avanzada con insuficiencia respiratoria, deterioro funcional progresivo o exacerbaciones incapacitantes pese a tratamiento optimo.',
      seguimiento_hospitalario: 'Aprovechar los ingresos para revisar la tecnica de fisioterapia y de los inhaladores, que es donde mas se gana y lo que menos se revisa.',
      seguimiento_ambulatorio: 'Recuento anual de exacerbaciones, funcion pulmonar y cultivo de esputo. Revision de la adherencia y de la tecnica. Reevaluar la indicacion de macrolido y de antibiotico inhalado al menos una vez al a&#241;o.',
      pronostico: 'El tratamiento reduce las exacerbaciones y mejora la calidad de vida, pero no revierte el da&#241;o estructural. El pronostico depende sobre todo del control de las exacerbaciones y de la colonizacion cronica.',
      algoritmo: ['Prescribir FISIOTERAPIA RESPIRATORIA diaria a todos y ense&#241;arla', 'A&#241;adir ejercicio, rehabilitacion, vacunas y soporte nutricional', 'Tratar la causa si se ha identificado', 'Contar las exacerbaciones del ultimo a&#241;o', 'Si son 3 o mas, DESCARTAR micobacterias antes de nada', 'Comprobar QT y audicion e iniciar macrolido a largo plazo', 'Si hay Pseudomonas cronica y exacerbaciones, a&#241;adir antibiotico inhalado', 'Supervisar la primera dosis del inhalado por riesgo de broncoespasmo', 'NO usar corticoides inhalados de rutina ni DNasa recombinante', 'Revisar adherencia y tecnica en cada visita']
    },
    {
      nombre: 'Exacerbacion de bronquiectasias',
      color: '#8c3a34',
      definicion: 'Deterioro sostenido durante al menos 48 horas en 3 o mas de 6 sintomas (tos, volumen o consistencia del esputo, purulencia, disnea o tolerancia al ejercicio, fatiga o malestar, y hemoptisis) que lleva al clinico a cambiar el tratamiento.',
      fisiopatologia: 'Corresponde a un aumento de la carga bacteriana y de la respuesta inflamatoria en una via aerea ya colonizada. No suele ser la llegada de un germen nuevo sino el crecimiento del que ya estaba, lo que explica dos cosas practicas: que el antibiotico empirico deba dirigirse al ultimo aislamiento del propio paciente, y que las pautas cortas dejen carga residual suficiente para recaer a las pocas semanas.',
      epidemiologia: 'Las exacerbaciones son el principal determinante modificable del pronostico: se asocian a caida acelerada del FEV1, a peor calidad de vida, a ingresos y a mortalidad. Su recuento anual es lo que gobierna la escalada del tratamiento cronico.',
      factores_riesgo: ['Exacerbaciones previas, que es el mejor predictor de exacerbaciones futuras', 'Colonizacion cronica por Pseudomonas aeruginosa', 'FEV1 bajo', 'Extension radiologica amplia y morfologia quistica', 'Falta de fisioterapia respiratoria', 'Comorbilidad cardiovascular', 'Bajo peso', 'Rinosinusitis cronica no tratada', 'Reflujo gastroesofagico', 'Infeccion virica intercurrente'],
      clinica: 'Aumento de la tos y del volumen del esputo, cambio de color a purulento, mas disnea, fatiga marcada y a veces hemoptisis. La fiebre puede faltar, y su ausencia NO descarta la exacerbacion, lo que hace que se infravalore con frecuencia.',
      criterios_dx: 'Definicion de consenso: 3 o mas de los 6 sintomas, con deterioro sostenido de 48 horas o mas. La radiografia se hace para descartar neumonia u otra complicacion, no para diagnosticar la exacerbacion. Ver la Figura 4 de Definicion.',
      laboratorio: 'CULTIVO DE ESPUTO ANTES de iniciar el antibiotico: es el gesto que mas se salta y el que mas cuesta despues. Hemograma, proteina C reactiva y funcion renal. Gasometria si hay insuficiencia respiratoria.',
      imagen: 'Radiografia de torax para descartar neumonia, neumotorax u otra complicacion. La tomografia solo si hay sospecha de complicacion o de un proceso nuevo.',
      complementarios: 'Revisar el historico de cultivos del paciente para elegir el antibiotico empirico. Intensificar la fisioterapia respiratoria, que en la exacerbacion se hace mas veces al dia.',
      dx_diferencial: 'Neumonia, insuficiencia cardiaca, embolia pulmonar, neumotorax, aspergilosis broncopulmonar alergica en brote y aparicion de una micobacteria no tuberculosa, que se presenta como deterioro progresivo mas que como exacerbacion tipica.',
      tx_medico: 'Intensificar la fisioterapia respiratoria y asegurar la hidratacion. Oxigenoterapia si hay hipoxemia. Soporte nutricional. Revisar la tecnica inhalatoria antes del alta.',
      tx_farmacologico: 'ANTIBIOTICO dirigido al ultimo aislamiento del propio paciente mientras llega el cultivo actual, con DURACION HABITUAL DE 14 DIAS, mucho mas larga que en la bronquitis aguda o en la exacerbacion de EPOC. En pacientes con Pseudomonas, cubrirla desde el inicio. Ajustar despues segun el antibiograma.',
      tx_intervencionista: 'Embolizacion de arterias bronquiales en la hemoptisis amenazante. Broncoscopia si hay retencion de secreciones que no se resuelve o sospecha de obstruccion.',
      criterios_uci: 'Insuficiencia respiratoria aguda que no responde, hemoptisis amenazante y sepsis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No en la fase aguda; se valora en la enfermedad avanzada con exacerbaciones repetidas.',
      seguimiento_hospitalario: 'Ante falta de respuesta al tercer o cuarto dia, revisar el cultivo, pensar en Pseudomonas o en micobacterias no tuberculosas, descartar aspergilosis y comprobar que se esta haciendo fisioterapia. Cambiar de antibiotico a ciegas sin revisar esto rara vez resuelve nada.',
      seguimiento_ambulatorio: 'Revision tras la exacerbacion para comprobar la recuperacion, revisar el cultivo y reevaluar si procede escalar el tratamiento cronico. Una exacerbacion que lleva al paciente al tercer episodio del a&#241;o cambia el plan.',
      pronostico: 'Cada exacerbacion deja huella: acelera la caida del FEV1 y aumenta el riesgo de la siguiente. Por eso la prevencion es el objetivo central del manejo cronico.',
      algoritmo: ['Comprobar la definicion: 3 o mas de 6 sintomas durante 48 horas o mas', 'RECOGER CULTIVO DE ESPUTO antes de dar el antibiotico', 'Revisar el historico de cultivos del paciente', 'Elegir el antibiotico dirigido al ultimo aislamiento', 'Cubrir Pseudomonas si el paciente la tiene', 'Tratar durante 14 DIAS, no 5 ni 7', 'INTENSIFICAR la fisioterapia respiratoria', 'Hacer radiografia para descartar neumonia u otra complicacion', 'Si no responde, revisar cultivo y pensar en micobacterias o aspergilosis', 'Contar la exacerbacion: si llega a 3 en el a&#241;o, escalar el tratamiento cronico']
    },
    {
      nombre: 'Pseudomonas aeruginosa: erradicacion y supresion',
      color: '#8a6a1f',
      definicion: 'Colonizacion e infeccion cronica de la via aerea por <em>Pseudomonas aeruginosa</em>, el microorganismo que peor pronostico marca en las bronquiectasias.',
      fisiopatologia: 'Pseudomonas forma biopelicula sobre el epitelio da&#241;ado, una matriz que la protege de los antibioticos y del sistema inmunitario y que explica por que, una vez establecida, resulta practicamente imposible eliminarla. Ademas adquiere resistencias con facilidad y adopta un fenotipo mucoide que aumenta todavia mas su persistencia. Ese es el motivo por el que el PRIMER aislamiento es una oportunidad terapeutica distinta de todas las siguientes: antes de que la biopelicula este establecida, la erradicacion todavia es posible.',
      epidemiologia: 'Su presencia se asocia de forma consistente a mas exacerbaciones, mas ingresos, peor funcion pulmonar, peor calidad de vida y mayor mortalidad. Aporta 3 puntos en el indice de gravedad, uno de los pesos mas altos de la escala.',
      factores_riesgo: ['Enfermedad extensa y morfologia quistica', 'FEV1 bajo', 'Exacerbaciones frecuentes con ciclos repetidos de antibiotico', 'Ingresos hospitalarios previos', 'Fibrosis quistica y discinesia ciliar primaria', 'Uso previo de antibioticos de amplio espectro', 'Corticoides inhalados o sistemicos', 'Reflujo gastroesofagico y aspiracion', 'Bajo peso', 'Falta de fisioterapia respiratoria'],
      clinica: 'No hay una clinica propia. Se sospecha por esputo mas abundante y de aspecto verdoso, por exacerbaciones mas frecuentes y por una respuesta peor a los antibioticos habituales. El diagnostico es microbiologico y por eso el cultivo periodico de esputo es imprescindible.',
      criterios_dx: 'PRIMER AISLAMIENTO: un cultivo positivo en un paciente sin aislamientos previos. COLONIZACION CRONICA: 2 o mas cultivos positivos separados al menos 3 meses en un periodo de 12 meses.',
      laboratorio: 'Cultivo de esputo periodico con antibiograma. Determinacion del fenotipo mucoide, que se asocia a mayor persistencia. Repetir cultivos tras un intento de erradicacion para comprobar si ha funcionado.',
      imagen: 'No hay hallazgo especifico, aunque la colonizacion se asocia a enfermedad mas extensa y a morfologia quistica.',
      complementarios: 'Revisar la tecnica de fisioterapia y la adherencia, porque el estancamiento de secreciones es lo que permite la persistencia. Valorar reflujo y aspiracion como fuente de reinfeccion.',
      dx_diferencial: 'Distinguir la colonizacion (presencia sin deterioro) de la infeccion activa. Distinguir tambien la contaminacion orofaringea de la muestra, motivo por el que la calidad del esputo importa.',
      tx_medico: 'Intensificar el aclaramiento de secreciones, que es la medida que mas condiciona el exito de cualquier estrategia antibiotica. Tratar el reflujo y la rinosinusitis si contribuyen.',
      tx_farmacologico: 'PRIMER AISLAMIENTO: intento de ERRADICACION, habitualmente con una fluoroquinolona oral con actividad frente a Pseudomonas durante varias semanas, sola o combinada con un antibiotico inhalado, con cultivos de control posteriores. COLONIZACION CRONICA con exacerbaciones frecuentes: ANTIBIOTICO INHALADO a largo plazo (colistina, tobramicina o gentamicina), con la primera dosis supervisada por el riesgo de broncoespasmo. En la exacerbacion, cubrir Pseudomonas desde el inicio y tratar 14 dias.',
      tx_intervencionista: 'No especifico. Cirugia de reseccion en la enfermedad localizada muy sintomatica con colonizacion refractaria, situacion excepcional.',
      criterios_uci: 'Los de la exacerbacion grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La colonizacion por Pseudomonas no contraindica el trasplante pulmonar, aunque condiciona la profilaxis perioperatoria. Algunos microorganismos multirresistentes si limitan la indicacion.',
      seguimiento_hospitalario: 'Medidas de control de la transmision segun protocolo del centro, sobre todo con cepas multirresistentes y en unidades donde coinciden pacientes con fibrosis quistica.',
      seguimiento_ambulatorio: 'Cultivos periodicos para vigilar la persistencia y la aparicion de resistencias. Reevaluar anualmente la indicacion del antibiotico inhalado y su tolerancia.',
      pronostico: 'Peor que en el paciente no colonizado, con mas exacerbaciones, mas caida del FEV1 y mayor mortalidad. La erradicacion precoz cuando todavia es posible es una de las intervenciones con mas impacto del tema.',
      algoritmo: ['Pedir cultivo de esputo periodico, tambien en fase estable', 'Ante un PRIMER aislamiento, no darlo por perdido: intentar ERRADICAR', 'Usar fluoroquinolona oral sola o con antibiotico inhalado', 'Repetir cultivos para comprobar si la erradicacion ha funcionado', 'Definir colonizacion cronica: 2 cultivos separados 3 meses en un a&#241;o', 'Contar las exacerbaciones del ultimo a&#241;o', 'Si son frecuentes, iniciar ANTIBIOTICO INHALADO a largo plazo', 'Supervisar la primera dosis por riesgo de broncoespasmo', 'En cada exacerbacion, cubrir Pseudomonas desde el inicio y tratar 14 dias', 'Reforzar siempre el aclaramiento de secreciones']
    },
    {
      nombre: 'Fibrosis quistica del adulto y discinesia ciliar primaria',
      color: '#7a2f5c',
      definicion: 'Dos enfermedades geneticas que producen bronquiectasias por un defecto del aclaramiento mucociliar y que pueden diagnosticarse en la edad adulta, con implicaciones terapeuticas y familiares propias.',
      fisiopatologia: 'En la FIBROSIS QUISTICA, las mutaciones del gen CFTR alteran el canal de cloro del epitelio, lo que deshidrata el liquido de superficie de la via aerea y produce un moco espeso que los cilios no pueden movilizar. El defecto es sistemico y afecta tambien al pancreas, al intestino, al higado y al conducto deferente. En la DISCINESIA CILIAR PRIMARIA, el defecto esta en la estructura o en el movimiento del propio cilio: el moco es normal pero no se transporta. Como los cilios tambien determinan la lateralidad durante el desarrollo embrionario, alrededor de la mitad de estos pacientes tiene situs inversus.',
      epidemiologia: 'Una parte de los pacientes con fibrosis quistica se diagnostica en la edad adulta, con formas leves o atipicas asociadas a mutaciones de funcion residual. La discinesia ciliar primaria esta claramente infradiagnosticada, con retrasos de decadas entre los sintomas y el diagnostico.',
      factores_riesgo: ['Antecedente familiar de fibrosis quistica o de discinesia ciliar', 'Consanguinidad', 'Bronquiectasias de predominio en lobulos SUPERIORES', 'Colonizacion por Staphylococcus aureus o Pseudomonas en paciente joven', 'Infertilidad masculina por ausencia de conductos deferentes', 'Pancreatitis de repeticion o insuficiencia pancreatica', 'Malabsorcion y bajo peso desde la infancia', 'Otitis media cronica en la infancia', 'Rinosinusitis cronica con poliposis', 'Situs inversus o dextrocardia'],
      clinica: 'FIBROSIS QUISTICA: bronquiectasias de predominio superior, colonizacion precoz, rinosinusitis con poliposis, insuficiencia pancreatica, diabetes relacionada, hepatopatia e infertilidad masculina. DISCINESIA CILIAR: otitis media cronica desde la infancia, rinosinusitis persistente, bronquiectasias, infertilidad y, en aproximadamente la mitad, situs inversus, que junto con sinusitis y bronquiectasias forma el sindrome de Kartagener.',
      criterios_dx: 'FIBROSIS QUISTICA: cloro en sudor elevado en dos determinaciones, o estudio genetico con dos mutaciones causales, en un contexto clinico compatible. DISCINESIA CILIAR: oxido nitrico nasal muy bajo como cribado, confirmado con microscopia electronica, videomicroscopia de alta velocidad o estudio genetico en centro de referencia.',
      laboratorio: 'Cloro en sudor y panel genetico de CFTR. Oxido nitrico nasal. Elastasa fecal para la insuficiencia pancreatica. Glucemia y sobrecarga oral de glucosa para la diabetes relacionada con la fibrosis quistica. Perfil hepatico y vitaminas liposolubles.',
      imagen: 'Tomografia con bronquiectasias de predominio en lobulos superiores en la fibrosis quistica, y de predominio en lobulos medios e inferiores en la discinesia ciliar. Radiografia o tomografia que muestre situs inversus, hallazgo que por si solo debe hacer pensar en discinesia ciliar.',
      complementarios: 'Estudio de fertilidad y consejo genetico, que forma parte del diagnostico y no es un a&#241;adido. Valoracion otorrinolaringologica. Derivacion a unidad especializada, que en ambas enfermedades mejora el pronostico de forma demostrada.',
      dx_diferencial: 'Inmunodeficiencia comun variable, aspergilosis broncopulmonar alergica (que ademas complica con frecuencia a la fibrosis quistica), deficit de alfa-1-antitripsina y bronquiectasias postinfecciosas.',
      tx_medico: 'Manejo en UNIDAD ESPECIALIZADA multidisciplinar. Fisioterapia respiratoria intensiva. Soporte nutricional agresivo, que en la fibrosis quistica se correlaciona de forma directa con la funcion pulmonar. Enzimas pancreaticas y vitaminas liposolubles si hay insuficiencia pancreatica.',
      tx_farmacologico: 'FIBROSIS QUISTICA: MODULADORES DEL CFTR, que han cambiado el pronostico de la enfermedad de forma radical en los pacientes con mutaciones elegibles; DNasa recombinante, que aqui SI esta indicada al contrario que en las bronquiectasias de otras causas; suero salino hipertonico; antibioticos inhalados. DISCINESIA CILIAR: no hay tratamiento especifico, y el manejo es el general de las bronquiectasias con aclaramiento intensivo.',
      tx_intervencionista: 'Trasplante pulmonar en la enfermedad avanzada. Cirugia otorrinolaringologica de la poliposis. Manejo de las complicaciones digestivas en la fibrosis quistica.',
      criterios_uci: 'Insuficiencia respiratoria aguda, hemoptisis amenazante y complicaciones digestivas graves.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El trasplante pulmonar es una opcion establecida en ambas enfermedades cuando llegan a fase avanzada, y la remision precoz a la unidad de trasplante es determinante.',
      seguimiento_hospitalario: 'Medidas de control de la transmision cruzada, especialmente estrictas en fibrosis quistica: los pacientes no deben coincidir entre si por el riesgo de transmision de patogenos multirresistentes.',
      seguimiento_ambulatorio: 'Seguimiento en unidad especializada con controles frecuentes, cultivos periodicos, funcion pulmonar y valoracion nutricional. Consejo genetico a la familia.',
      pronostico: 'El de la fibrosis quistica ha mejorado de forma radical con los moduladores del CFTR. En la discinesia ciliar, la supervivencia suele ser mejor que en la fibrosis quistica, pero la morbilidad respiratoria y otologica es importante y el retraso diagnostico sigue siendo el problema principal.',
      algoritmo: ['Sospechar fibrosis quistica ante bronquiectasias superiores en paciente joven', 'Sospecharla tambien ante infertilidad masculina, malabsorcion o pancreatitis', 'Pedir cloro en sudor y estudio genetico de CFTR', 'Sospechar discinesia ciliar ante otitis cronica infantil y rinosinusitis', 'Sospecharla siempre ante situs inversus con bronquiectasias', 'Pedir oxido nitrico nasal como cribado', 'Confirmar en centro de referencia con microscopia o genetica', 'Derivar a UNIDAD ESPECIALIZADA en ambos casos', 'Valorar moduladores del CFTR si hay mutaciones elegibles', 'Ofrecer consejo genetico y estudio de fertilidad']
    },
    {
      nombre: 'Micobacterias no tuberculosas en bronquiectasias',
      color: '#5a6b2e',
      definicion: 'Infeccion pulmonar por micobacterias ambientales, sobre todo del complejo <em>Mycobacterium avium</em>, que puede ser causa de bronquiectasias, consecuencia de ellas o ambas cosas a la vez.',
      fisiopatologia: 'Son microorganismos ambientales presentes en el agua y en el suelo que no se transmiten de persona a persona. Colonizan la via aerea da&#241;ada y, en huespedes susceptibles, producen enfermedad progresiva con nodulos, patron en arbol en brote y bronquiectasias. La relacion con las bronquiectasias es bidireccional y a menudo imposible de ordenar cronologicamente: la micobacteria puede haber causado el da&#241;o o haberse instalado sobre un da&#241;o previo, y en ambos casos empeora la evolucion.',
      epidemiologia: 'Su frecuencia esta aumentando. La forma nodular bronquiectasica afecta de manera caracteristica a MUJERES MAYORES, delgadas, no fumadoras, con afectacion del LOBULO MEDIO y de la LINGULA, un cuadro descrito como sindrome de Lady Windermere. Tambien es frecuente en pacientes con fibrosis quistica y con EPOC.',
      factores_riesgo: ['Bronquiectasias preexistentes de cualquier causa', 'Sexo femenino, edad avanzada y habito delgado', 'Deformidad toracica: escoliosis y pectus excavatum', 'Prolapso de la valvula mitral', 'Uso de CORTICOIDES INHALADOS', 'Tratamiento con antagonistas del factor de necrosis tumoral', 'Fibrosis quistica', 'EPOC', 'Reflujo gastroesofagico', 'Exposicion a aerosoles de agua: duchas, jacuzzis, humidificadores'],
      clinica: 'Deterioro PROGRESIVO mas que exacerbaciones tipicas: tos persistente, aumento del esputo, perdida de peso, fatiga y a veces febricula. Lo caracteristico es que el paciente no responde a los ciclos habituales de antibiotico y sigue deteriorandose, y ese patron es la principal pista clinica.',
      criterios_dx: 'Se exigen las tres cosas a la vez: cuadro CLINICO compatible, hallazgos RADIOLOGICOS (nodulos, arbol en brote, bronquiectasias, cavitacion) y criterio MICROBIOLOGICO con 2 cultivos de esputo positivos en muestras distintas, o 1 cultivo positivo de lavado broncoalveolar o de biopsia. Un solo cultivo de esputo positivo NO basta.',
      laboratorio: 'Cultivo de esputo PARA MICOBACTERIAS, que hay que solicitar de forma explicita, en al menos tres muestras de dias distintos. Identificacion de especie y estudio de sensibilidad, sobre todo a macrolidos y a amikacina.',
      imagen: 'Tomografia de alta resolucion con nodulos centrolobulillares, patron en ARBOL EN BROTE, bronquiectasias de LOBULO MEDIO Y LINGULA en la forma nodular, y cavitacion de lobulos superiores en la forma fibrocavitaria, que se parece a la tuberculosis y tiene peor pronostico.',
      complementarios: 'BRONCOSCOPIA con lavado si el paciente no expectora o los esputos no son concluyentes. Valoracion nutricional, porque el bajo peso es a la vez factor de riesgo y consecuencia.',
      dx_diferencial: 'Tuberculosis, que hay que descartar siempre; aspergilosis broncopulmonar alergica; exacerbacion bacteriana habitual; cancer de pulmon en la forma cavitaria; y colonizacion sin enfermedad, que es la razon de que se exijan dos cultivos y criterios clinicos y radiologicos.',
      tx_medico: 'No todo aislamiento se trata: la decision se toma valorando la gravedad, la progresion, la especie y la situacion del paciente, porque el tratamiento es largo, toxico y no siempre necesario. Optimizar el aclaramiento y la nutricion, y retirar los corticoides inhalados si no tienen indicacion clara.',
      tx_farmacologico: 'Combinacion de al menos TRES farmacos durante 12 meses tras la negativizacion de los cultivos, con un MACROLIDO como pilar junto a rifampicina y etambutol, a&#241;adiendo amikacina (intravenosa o inhalada liposomal) en las formas graves o refractarias. La regla que gobierna todo el tema: <strong>NUNCA dar un macrolido en monoterapia</strong>, porque crea resistencia y arruina el unico tratamiento eficaz.',
      tx_intervencionista: 'Cirugia de reseccion en enfermedad localizada refractaria, en centros con experiencia.',
      criterios_uci: 'Raro. Insuficiencia respiratoria en la enfermedad avanzada y hemoptisis amenazante.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Algunas especies, sobre todo <em>Mycobacterium abscessus</em>, complican o limitan la indicacion de trasplante pulmonar por el riesgo de infeccion diseminada postrasplante.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la toxicidad: audicion y funcion vestibular con amikacina, vision con etambutol, interacciones con rifampicina y QT con macrolidos.',
      seguimiento_ambulatorio: 'Cultivos mensuales o bimensuales hasta la negativizacion, y despues durante 12 meses mas. Control de la toxicidad. Seguimiento prolongado por el riesgo de recaida y de reinfeccion.',
      pronostico: 'Variable. La forma nodular bronquiectasica tiene mejor pronostico que la fibrocavitaria. Las recaidas y las reinfecciones son frecuentes, y <em>Mycobacterium abscessus</em> es la especie mas dificil de tratar.',
      algoritmo: ['Sospecharla ante deterioro PROGRESIVO que no responde a los antibioticos', 'Sospecharla ante afectacion de lobulo medio y lingula en mujer mayor delgada', 'Pedir de forma EXPLICITA cultivo de esputo para micobacterias', 'Recoger al menos tres muestras de dias distintos', 'Exigir los tres criterios: clinico, radiologico y microbiologico', 'Descartar tuberculosis', 'Identificar la especie y hacer estudio de sensibilidad', 'Decidir si procede tratar: no todo aislamiento se trata', 'Usar al menos TRES farmacos, nunca un macrolido solo', 'Descartar micobacterias ANTES de iniciar un macrolido a largo plazo por otro motivo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En bronquiectasias los fallos son bastante predecibles: se diagnostica y no se busca la causa, se da antibiotico sin cultivo, se trata cinco dias en lugar de catorce, y no se prescribe lo unico que hay que prescribir a todos. Lo que sigue es la lista que evita esos errores.',
    parametros: ['Confirmar el diagnostico con TOMOGRAFIA DE ALTA RESOLUCION, no con radiografia', 'Mirar la DISTRIBUCION radiologica, que orienta la etiologia', 'Pedir a todos inmunoglobulinas sericas: la inmunodeficiencia es tratable', 'Pedir a todos estudio de Aspergillus y cultivo de esputo CON micobacterias', 'Hacer broncoscopia si la afectacion es localizada en una sola zona', 'Prescribir FISIOTERAPIA RESPIRATORIA diaria a todos y ense&#241;arla', 'Recoger CULTIVO DE ESPUTO antes de iniciar el antibiotico en una exacerbacion', 'Tratar la exacerbacion 14 dias, no 5 ni 7', 'Dirigir el antibiotico empirico al ultimo aislamiento del propio paciente', 'DESCARTAR micobacterias antes de iniciar un macrolido a largo plazo', 'No usar corticoides inhalados de rutina ni DNasa recombinante', 'Ante un primer aislamiento de Pseudomonas, intentar ERRADICARLA'],
    criterios_uci_general: 'Hemoptisis amenazante, que es la complicacion mas temida y que puede requerir embolizacion de arterias bronquiales; insuficiencia respiratoria aguda que no responde al tratamiento; y sepsis de origen respiratorio.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Enfermedad avanzada con insuficiencia respiratoria, deterioro funcional progresivo o exacerbaciones incapacitantes pese a tratamiento optimo. La colonizacion por Pseudomonas no lo contraindica, pero algunos microorganismos multirresistentes, en particular <em>Mycobacterium abscessus</em>, si limitan la indicacion.',
    prevencion: 'Primaria: tratamiento adecuado de las infecciones respiratorias graves de la infancia, vacunacion, y diagnostico precoz de las inmunodeficiencias y de las enfermedades geneticas que las producen. Secundaria: sospechar bronquiectasias en el paciente con tos productiva cronica de a&#241;os, sobre todo si tiene EPOC, artritis reumatoide o infecciones de repeticion, en lugar de aceptar la etiqueta de bronquitis cronica. Terciaria: fisioterapia respiratoria diaria, vacunacion, tratamiento de la causa, erradicacion precoz de Pseudomonas en el primer aislamiento y prevencion de exacerbaciones, que son el principal determinante modificable del pronostico.'
  }
};

export const compCites = {
  'Bronquiectasias: diagnostico y busqueda de la causa': [1, 2, 15, 16],
  'Manejo cronico: aclaramiento y tratamiento de mantenimiento': [1, 6, 7, 8],
  'Exacerbacion de bronquiectasias': [4, 2],
  'Pseudomonas aeruginosa: erradicacion y supresion': [9, 10],
  'Fibrosis quistica del adulto y discinesia ciliar primaria': [11, 12, 13],
  'Micobacterias no tuberculosas en bronquiectasias': [5, 14]
};
export const estigmasTitulo = 'Signos y pistas que orientan en las bronquiectasias';
export const estigmas = [
  { s: 'Tos productiva cronica de a&#241;os', p: 'El sintoma cardinal', photo: null, desc: 'Expectoracion diaria que el paciente ha normalizado y describe como "bronquitis de siempre". Es la presentacion mas frecuente y la que mas veces se acepta sin estudiar, lo que explica buena parte del retraso diagnostico.' },
  { s: 'Signo del anillo de sello', p: 'Diagnostico en la tomografia', photo: null, desc: 'El bronquio dilatado se ve mas grande que la arteria que lo acompa&#241;a, de modo que el corte transversal recuerda a un anillo con su piedra. Es el criterio radiologico central, junto con la falta de afilamiento del bronquio hacia la periferia.' },
  { s: 'Crepitantes gruesos que cambian con la tos', p: 'Hallazgo exploratorio tipico', photo: null, desc: 'Se deben a secreciones en la via aerea y se modifican al toser, a diferencia de los crepitantes finos y fijos de la fibrosis pulmonar. Es de las pocas auscultaciones que orientan de verdad.' },
  { s: 'Radiografia de torax normal', p: 'No descarta nada', photo: null, desc: 'La radiografia es poco sensible y puede ser normal con bronquiectasias extensas. Aceptarla como prueba de exclusion es una de las causas principales del retraso diagnostico, que en estos pacientes se mide en a&#241;os.' },
  { s: 'Bronquiectasias en lobulos superiores', p: 'Orienta la causa', photo: null, desc: 'Sugiere fibrosis quistica, aspergilosis broncopulmonar alergica o secuela de tuberculosis. La distribucion radiologica es una de las pistas etiologicas mas utiles y no cuesta nada mirarla.' },
  { s: 'Afectacion de lobulo medio y lingula', p: 'Micobacterias no tuberculosas', photo: null, desc: 'En una mujer mayor, delgada y no fumadora, este patron es el del sindrome de Lady Windermere. Obliga a pedir de forma explicita cultivo de esputo para micobacterias, que no se hace si no se solicita.' },
  { s: 'Bronquiectasias en una sola zona', p: 'Obliga a broncoscopia', photo: null, desc: 'La afectacion localizada sugiere obstruccion bronquial: cuerpo extra&#241;o, tumor endobronquial o estenosis. Es una de las pocas indicaciones claras de broncoscopia en este tema y no debe posponerse.' },
  { s: 'Esputo purulento con Pseudomonas', p: 'Marcador de peor pronostico', photo: null, desc: 'Se asocia a mas exacerbaciones, peor funcion pulmonar y mayor mortalidad, y aporta 3 puntos en el indice de gravedad. El primer aislamiento es la ultima oportunidad de intentar erradicarla.' },
  { s: 'Situs inversus con bronquiectasias', p: 'Sindrome de Kartagener', photo: null, desc: 'La combinacion de situs inversus, sinusitis cronica y bronquiectasias define el sindrome de Kartagener, que corresponde a una discinesia ciliar primaria. Los cilios determinan la lateralidad durante el desarrollo embrionario, de ahi la asociacion.' },
  { s: 'Otitis media cronica desde la infancia', p: 'Pista de discinesia ciliar', photo: null, desc: 'Junto con la rinosinusitis persistente y la infertilidad, forma el cuadro de la discinesia ciliar primaria. Es una enfermedad muy infradiagnosticada, con retrasos de decadas, y el cribado inicial es el oxido nitrico nasal.' },
  { s: 'Infertilidad masculina con bronquiectasias', p: 'Pensar en fibrosis quistica', photo: null, desc: 'La ausencia bilateral congenita de conductos deferentes se asocia a mutaciones del gen CFTR y puede ser la manifestacion mas llamativa de una fibrosis quistica de expresion leve diagnosticada en la edad adulta.' },
  { s: 'Deterioro que no responde a los antibioticos', p: 'Buscar micobacterias', photo: null, desc: 'Un paciente que se deteriora de forma progresiva pese a ciclos repetidos de antibiotico no esta teniendo exacerbaciones bacterianas habituales. Hay que pensar en micobacterias no tuberculosas y en aspergilosis broncopulmonar alergica.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Indice de gravedad de bronquiectasias (calculadora disponible)': [3],
  'Estudio etiologico minimo (calculadora disponible)': [1, 2],
  'Definicion de exacerbacion (calculadora disponible)': [4],
  'Estado microbiologico frente a Pseudomonas (calculadora disponible)': [10, 1],
  'Morfologia radiologica': [15],
  'Escala de disnea del Medical Research Council': [3]
};
export const escalaCalc = {
  'Indice de gravedad de bronquiectasias (calculadora disponible)': 'bsi',
  'Estudio etiologico minimo (calculadora disponible)': 'etiologia-bronquiectasias',
  'Definicion de exacerbacion (calculadora disponible)': 'exacerbacion-bronquiectasias',
  'Estado microbiologico frente a Pseudomonas (calculadora disponible)': 'pseudomonas-bronquiectasias'
};
export const compGroups = [
  { name: 'Diagnostico y manejo', items: ['Bronquiectasias: diagnostico y busqueda de la causa', 'Manejo cronico: aclaramiento y tratamiento de mantenimiento', 'Exacerbacion de bronquiectasias'] },
  { name: 'Los microorganismos', items: ['Pseudomonas aeruginosa: erradicacion y supresion', 'Micobacterias no tuberculosas en bronquiectasias'] },
  { name: 'Las causas geneticas', items: ['Fibrosis quistica del adulto y discinesia ciliar primaria'] }
];
export const complicacionesIntro = 'Las tres primeras fichas recorren el tema completo: como se diagnostican y por que hay que buscar la causa, como se manejan en fase estable (donde lo que mas rinde es lo que menos se prescribe) y como se trata una exacerbacion, que tiene definicion, orden y duracion propios. Las dos siguientes son los dos microorganismos que cambian el pronostico y el tratamiento: Pseudomonas, cuyo primer aislamiento es una oportunidad que no se repite, y las micobacterias no tuberculosas, que hay que descartar antes de dar un macrolido. La ultima recoge las dos causas geneticas que se pueden diagnosticar en el adulto y que tienen manejo propio.';
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
    { title: 'DIAGNOSTICAR', sub: 'Y buscar por que estan ahi', color: '#2e6b8a', target: 'complicaciones', leaves: [
      { title: 'Tomografia de alta resolucion', sub: 'La radiografia no descarta', color: '#2e6b8a', target: 'diagnostico' },
      { title: 'Mirar la distribucion', sub: 'Orienta la etiologia', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Inmunoglobulinas a todos', sub: 'Causa tratable que se olvida', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Localizada: broncoscopia', sub: 'Descartar obstruccion', color: '#8c3a34', target: 'diagnostico' }
    ] },
    { title: 'TRATAR EN FRIO', sub: 'Sobre el aclaramiento', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Fisioterapia diaria', sub: 'Lo que mas rinde', color: '#3f6b52', target: 'complicaciones' },
      { title: '3 exacerbaciones al a&#241;o', sub: 'Macrolido a largo plazo', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Antes del macrolido', sub: 'Descartar micobacterias', color: '#5a6b2e', target: 'complicaciones' },
      { title: 'Ni corticoide ni DNasa', sub: 'No son la EPOC ni la FQ', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'LA EXACERBACION', sub: 'Definicion, orden y duracion', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: '3 de 6 sintomas, 48 horas', sub: 'No es toser mas hoy', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Cultivo ANTES', sub: 'El gesto que mas se salta', color: '#2e6b8a', target: 'complicaciones' },
      { title: '14 dias', sub: 'No 5 ni 7', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Primer Pseudomonas', sub: 'Intentar erradicar', color: '#7a2f5c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [3, 4, 1], imagen: [1, 15] };
export const clasificacionCite = [1, 3, 4, 10];
export const seguimientoCite = [1, 2, 4];
