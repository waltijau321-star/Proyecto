// topics/ela-miopatias/content.js: Esclerosis lateral amiotrofica y enfermedades del musculo.
// Cubre dos items del cluster "Alteracion de conciencia y enfermedad neuromuscular" (bloque XII,
// Neurologia) del temario: esclerosis lateral amiotrofica y distrofias musculares.
//
// DELIMITACION frente a `guillain-barre-miastenia`: alli esta la debilidad neuromuscular AGUDA
// que amenaza la respiracion en dias. Aqui esta la debilidad CRONICA y progresiva de la
// motoneurona y del musculo, mas el enfoque general del paciente debil y la rabdomiolisis.
//
// Fuentes principales: guia de la European Academy of Neurology de 2024 sobre el manejo de la
// esclerosis lateral amiotrofica (la que hay en Bibliografia/); criterios diagnosticos de Gold
// Coast; ensayos sobre riluzol y sobre ventilacion no invasiva; recomendaciones sobre distrofia
// miotonica y cribado cardiaco; y las clasificaciones actuales de las miopatias inflamatorias.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'ela-miopatias',
  titulo: 'ELA y Enfermedades del Musculo',
  subtitulo: 'Modulo 64 · Medicina Interna',
  accent: '#5c5a2e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const dondeHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #5c5a2e;border-radius:8px;padding:5px 9px;background:#5c5a2e12;margin-bottom:6px;">
    <strong style="color:#5c5a2e;">Ante un paciente debil, cuatro localizaciones posibles y cuatro patrones distintos.</strong> <span style="color:var(--ink-dim);">Se separan con cuatro datos: la DISTRIBUCION de la debilidad, los REFLEJOS, si hay o no alteracion SENSITIVA, y la CREATINA CINASA.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5c5a2e22;border:1px solid #5c5a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5c5a2e;">MUSCULO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">PROXIMAL</strong> y simetrica: cuesta subir escaleras, levantarse de la silla y peinarse. Reflejos conservados hasta fases avanzadas. <strong style="color:var(--ink);">SIN alteracion sensitiva</strong>. Creatina cinasa ELEVADA en la mayoria.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b6b;">NERVIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">DISTAL</strong> (pie caido, torpeza de manos), <strong style="color:var(--ink);">ARREFLEXIA</strong> y <strong style="color:var(--ink);">ALTERACION SENSITIVA</strong>, que es lo que mas lo delata. Creatina cinasa normal o poco elevada.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">MOTONEURONA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mezcla que no ocurre en ningun otro sitio: <strong style="color:var(--ink);">FASCICULACIONES y atrofia</strong> (motoneurona inferior) junto con <strong style="color:var(--ink);">HIPERREFLEXIA y Babinski</strong> (superior), <strong>SIN alteracion sensitiva</strong>. Creatina cinasa normal o poco elevada.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">UNION</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">FLUCTUANTE</strong> y fatigable, con predominio ocular y bulbar, reflejos normales y sin alteracion sensitiva. Creatina cinasa NORMAL. Es el terreno de la miastenia y del sindrome de Lambert-Eaton.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos excepciones que rompen la regla y hay que conocer.</strong> La <strong>MIOPATIA POR CUERPOS DE INCLUSION</strong> da debilidad ASIMETRICA y DISTAL (cuadriceps y flexores profundos de los dedos), con creatina cinasa normal o poco elevada, y por eso se confunde con una neuropatia o con una polimiositis que no responde. Y la <strong>MIOPATIA POR CORTICOIDES</strong> da debilidad proximal con creatina cinasa <strong>NORMAL</strong>, lo que despista si se usa la enzima como criterio de cribado.
  </div>
</div>`;

const elaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">La ELA se diagnostica por una combinacion que no ocurre en ninguna otra enfermedad:</strong> <span style="color:var(--ink-dim);">signos de motoneurona SUPERIOR e INFERIOR a la vez, que progresan, sin alteracion sensitiva y sin explicacion alternativa.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">MOTONEURONA INFERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Atrofia</strong> (muy visible en la primera comisura de la mano y en la lengua), <strong style="color:var(--ink);">FASCICULACIONES</strong>, calambres, debilidad e hipotonia. En el electromiograma, denervacion activa y cronica en varias regiones.</div>
    </div>
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">MOTONEURONA SUPERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">HIPERREFLEXIA</strong> en un miembro atrofico, que es un hallazgo llamativo y muy caracteristico. Espasticidad, clonus, signo de Babinski, reflejo mentoniano vivo y labilidad emocional.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LO QUE NO ENCAJA CON UNA ELA Y OBLIGA A BUSCAR OTRA COSA</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Alteracion sensitiva</strong> relevante. <strong style="color:var(--ink);">Disfuncion de esfinteres</strong> precoz. <strong style="color:var(--ink);">Oftalmoparesia</strong>. Dolor como sintoma dominante. Ausencia de progresion. Y un patron puramente de motoneurona INFERIOR, focal y con bloqueos de conduccion, que puede ser una <strong style="color:#3f6b52;">NEUROPATIA MOTORA MULTIFOCAL: es TRATABLE con inmunoglobulinas y confundirla con una ELA es el error mas costoso del tema</strong>.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que hay que descartar antes.</strong> Mielopatia cervical espondilotica (que da motoneurona superior en piernas e inferior en brazos y se opera), neuropatia motora multifocal, miastenia de predominio bulbar, miopatia por cuerpos de inclusion, enfermedad de Kennedy, paraproteinemia y linfoma.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Y algo que no siempre se explora: la COGNICION.</strong> Una proporcion importante de los pacientes tiene alteracion cognitiva o conductual, y una minoria cumple criterios de degeneracion frontotemporal. Comparten la expansion en <strong>C9orf72</strong>. Detectarlo cambia la comunicacion, la planificacion y el apoyo a la familia.
    </div>
  </div>
</div>`;

const manejoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">En la ELA, lo que mas prolonga la supervivencia no es el farmaco.</strong> <span style="color:var(--ink-dim);">Es la atencion en una unidad multidisciplinar, la ventilacion no invasiva y el soporte nutricional. El riluzol a&#241;ade un beneficio real pero modesto.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">EQUIPO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Unidad <strong style="color:var(--ink);">MULTIDISCIPLINAR</strong>: neurologia, neumologia, rehabilitacion, logopedia, nutricion, terapia ocupacional, trabajo social y paliativos. Es la intervencion que mas se asocia a mayor supervivencia y mejor calidad de vida, y no es una recomendacion decorativa.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RESPIRAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">VENTILACION NO INVASIVA</strong>, que prolonga la supervivencia y mejora la calidad de vida, sobre todo sin afectacion bulbar grave. Se valora con capacidad vital forzada, presion inspiratoria nasal, gasometria y oximetria nocturna, y se ofrece ANTE SINTOMAS aunque los numeros aun no lo exijan.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">COMER</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">GASTROSTOMIA</strong>, y aqui el momento importa: hay que colocarla <strong style="color:#8c3a34;">ANTES de que la capacidad vital forzada baje del 50%</strong>, porque despues el riesgo del procedimiento aumenta de forma marcada. Esperar a que el paciente ya no coma es esperar demasiado.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Sintomas que si se tratan bien.</strong> Sialorrea (anticolinergicos, toxina botulinica en glandulas salivales), secreciones espesas, calambres, espasticidad, dolor, insomnio, ansiedad y <strong>labilidad emocional</strong> o afecto pseudobulbar, que angustia mucho al paciente y a la familia y que responde al tratamiento.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">La conversacion que no se puede posponer.</strong> Voluntades anticipadas, preferencias sobre traqueostomia y sobre ventilacion invasiva, y planificacion del final de la vida: hay que abordarlas <strong>PRONTO</strong>, mientras el paciente todavia puede comunicarse con facilidad. Posponerla por no incomodar acaba dejando la decision en manos de otros y en el peor momento.
    </div>
  </div>
</div>`;

const ckHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">RABDOMIOLISIS</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Elevacion marcada de creatina cinasa con mialgias, debilidad y <strong style="color:var(--ink);">ORINA OSCURA</strong>. El dato que la delata en urgencias: <strong>tira reactiva positiva para SANGRE con sedimento SIN hematies</strong>, porque lo que detecta es mioglobina. Riesgo de fracaso renal agudo, HIPERPOTASEMIA, hipocalcemia precoz y coagulopatia.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">ELEVACION ASINTOMATICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hallazgo casual, sin sintomas. Antes de estudiar nada: <strong style="color:var(--ink);">REPETIR tras una semana sin ejercicio</strong>. Y tener en cuenta lo que la eleva sin que haya enfermedad: ejercicio reciente, masa muscular, sexo, origen etnico, inyecciones intramusculares y un electromiograma reciente.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">EL TRATAMIENTO DE LA RABDOMIOLISIS ES LA HIDRATACION, Y CUANTO ANTES</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Sueroterapia intensa y precoz para mantener una diuresis abundante, con vigilancia estrecha del <strong style="color:var(--ink);">POTASIO</strong>, que es lo que puede matar en las primeras horas, y de la funcion renal. El bicarbonato y el manitol siguen siendo controvertidos y no sustituyen al volumen. Y hay que <strong>buscar la causa</strong>: aplastamiento, inmovilizacion prolongada, convulsiones, ejercicio extremo, golpe de calor, farmacos, toxicos, infecciones y trastornos electroliticos.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Y en la elevacion persistente y asintomatica, lo primero es mirar la lista de farmacos.</strong> <strong>ESTATINAS</strong>, que producen desde mialgias con enzima normal hasta una miopatia necrotizante inmunomediada que <strong style="color:#8c3a34;">PERSISTE tras retirar el farmaco</strong> y necesita inmunosupresion. Tambien colchicina, hidroxicloroquina, alcohol, antirretrovirales y, de forma destacada por lo facil que es olvidarlo, el <strong>HIPOTIROIDISMO</strong>, que eleva la creatina cinasa y se corrige tratando el tiroides.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Este tema agrupa las enfermedades que producen debilidad <strong>cronica y progresiva</strong> por lesion de la motoneurona o del propio musculo. El punto de partida es el mismo para todas: un paciente que refiere que ha perdido fuerza. Lo que ordena el trabajo no es la lista de enfermedades posibles sino un metodo corto para localizar el problema.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: donde esta el problema.</strong></p>
<p style="margin:0 0 12px;">Cuatro localizaciones y cuatro patrones, que se separan con cuatro datos: la <strong>distribucion</strong> (proximal en el musculo, distal en el nervio, fluctuante en la union), los <strong>reflejos</strong>, la presencia o ausencia de <strong>alteracion sensitiva</strong> (que es lo que mas delata al nervio) y la <strong>creatina cinasa</strong>. Y conviene conocer dos excepciones que rompen la regla: la miopatia por cuerpos de inclusion, que es distal y asimetrica, y la miopatia por corticoides, que cursa con enzima normal.</p>
${figBlock('Figura 1', 'Musculo, nervio, motoneurona o union: cuatro datos que los separan', dondeHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: la esclerosis lateral amiotrofica.</strong></p>
<p style="margin:0 0 12px;">Se reconoce por una combinacion que no se da en ninguna otra enfermedad: signos de motoneurona <strong>superior e inferior a la vez</strong>, que progresan, sin alteracion sensitiva y sin otra explicacion. La hiperreflexia en un miembro atrofico es su firma. Y hay una lista de datos que <strong>no encajan</strong> y obligan a buscar otra cosa, entre ellos un patron puramente de motoneurona inferior con bloqueos de conduccion, que puede ser una neuropatia motora multifocal y que si tiene tratamiento.</p>
${figBlock('Figura 2', 'ELA: la combinacion que la define y lo que no encaja', elaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: lo que de verdad cambia el curso de la ELA.</strong></p>
<p style="margin:0 0 12px;">No es el farmaco. Lo que mas se asocia a mayor supervivencia y mejor calidad de vida es la atencion en una <strong>unidad multidisciplinar</strong>, la <strong>ventilacion no invasiva</strong> y el <strong>soporte nutricional</strong> con gastrostomia colocada a tiempo, es decir, antes de que la capacidad vital caiga por debajo del 50%. Y hay una conversacion, la de las voluntades anticipadas, que hay que abrir pronto y que se pospone con demasiada frecuencia.</p>
${figBlock('Figura 3', 'ELA: equipo, ventilacion, nutricion y la conversacion que no se pospone', manejoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la creatina cinasa elevada.</strong></p>
<p style="margin:0 0 12px;">Dos escenarios completamente distintos. La <strong>rabdomiolisis</strong>, donde la prioridad es la hidratacion precoz y la vigilancia del potasio, y donde el dato que la delata en urgencias es una tira reactiva positiva para sangre con un sedimento sin hematies. Y la <strong>elevacion asintomatica</strong>, donde lo primero no es estudiar sino repetir la determinacion tras una semana sin ejercicio y mirar la lista de farmacos y la funcion tiroidea.</p>
${figBlock('Figura 4', 'Rabdomiolisis y elevacion asintomatica: dos problemas distintos', ckHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar una ELA sin haber descartado la mielopatia cervical y la neuropatia motora multifocal, que son tratables. No dar por buena una debilidad proximal sin pedir creatina cinasa. No descartar una miopatia porque la enzima sea normal, porque la de corticoides y la de cuerpos de inclusion cursan asi. No etiquetar de polimiositis resistente al tratamiento lo que puede ser una miopatia por cuerpos de inclusion. No retirar la estatina y olvidarse, porque la miopatia necrotizante inmunomediada persiste y necesita inmunosupresion. No pedir cribado cardiaco solo a las distrofias con debilidad avanzada: en la distrofia miotonica la muerte subita puede preceder a la incapacidad. No esperar a que el paciente con ELA deje de comer para plantear la gastrostomia. No posponer la conversacion sobre voluntades anticipadas. Y no tratar una rabdomiolisis mirando solo la creatina cinasa: lo que mata en las primeras horas es el <strong>potasio</strong>.</p>`;

export const bibliografia = [
  'Van Damme P, Al-Chalabi A, Andersen PM, et al. European Academy of Neurology guideline on the management of amyotrophic lateral sclerosis. Eur J Neurol. 2024;31(6):e16264.',
  'Shefner JM, Al-Chalabi A, Baker MR, et al. A proposal for new diagnostic criteria for ALS. Clin Neurophysiol. 2020;131(8):1975-1978.',
  'Bourke SC, Tomlinson M, Williams TL, et al. Effects of non-invasive ventilation on survival and quality of life in patients with amyotrophic lateral sclerosis: a randomised controlled trial. Lancet Neurol. 2006;5(2):140-147.',
  'Miller RG, Mitchell JD, Moore DH. Riluzole for amyotrophic lateral sclerosis (ALS) or motor neuron disease (MND). Cochrane Database Syst Rev. 2012;(3):CD001447.',
  'Traynor BJ, Alexander M, Corr B, et al. Effect of a multidisciplinary amyotrophic lateral sclerosis clinic on ALS survival: a population based study. J Neurol Neurosurg Psychiatry. 2003;74(9):1258-1261.',
  'Cedarbaum JM, Stambler N, Malta E, et al. The ALSFRS-R: a revised ALS functional rating scale that incorporates assessments of respiratory function. J Neurol Sci. 1999;169(1-2):13-21.',
  'Strong MJ, Abrahams S, Goldstein LH, et al. Amyotrophic lateral sclerosis-frontotemporal spectrum disorder: revised diagnostic criteria. Amyotroph Lateral Scler Frontotemporal Degener. 2017;18(3-4):153-174.',
  'Vucic S, Kiernan MC, Menon P, et al. Multifocal motor neuropathy: an update. J Neurol Neurosurg Psychiatry. 2011;82(7):797-803.',
  'Thornton CA. Myotonic dystrophy. Neurol Clin. 2014;32(3):705-719.',
  'Groh WJ, Groh MR, Saha C, et al. Electrocardiographic abnormalities and sudden death in myotonic dystrophy type 1. N Engl J Med. 2008;358(25):2688-2697.',
  'Lundberg IE, Fujimoto M, Vencovsky J, et al. Idiopathic inflammatory myopathies. Nat Rev Dis Primers. 2021;7(1):86.',
  'Greenberg SA. Inclusion body myositis: clinical features and pathogenesis. Nat Rev Rheumatol. 2019;15(5):257-272.',
  'Mammen AL. Statin-associated autoimmune myopathy. N Engl J Med. 2016;374(7):664-669.',
  'Bosch X, Poch E, Grau JM. Rhabdomyolysis and acute kidney injury. N Engl J Med. 2009;361(1):62-72.',
  'Kyriakides T, Angelini C, Schaefer J, et al. EFNS guidelines on the diagnostic approach to pauci- or asymptomatic hyperCKemia. Eur J Neurol. 2010;17(6):767-773.',
  'Barohn RJ, Dimachkie MM, Jackson CE. A pattern recognition approach to patients with a suspected myopathy. Neurol Clin. 2014;32(3):569-593.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Enfermedad de motoneurona',
      tituloB: 'Enfermedad muscular',
      compensada: 'Debilidad progresiva que suele empezar de forma FOCAL y asimetrica: una mano torpe que deja caer objetos, un pie que se arrastra, o disartria y disfagia en la forma de inicio bulbar. Se acompa&#241;a de ATROFIA visible (muy caracteristica en la primera comisura de la mano y en la lengua), FASCICULACIONES y calambres. Y de forma simultanea aparecen signos de motoneurona superior: espasticidad, hiperreflexia en un miembro atrofico, clonus, Babinski y reflejo mentoniano vivo. NO hay alteracion sensitiva, NO hay afectacion de esfinteres y NO hay oftalmoparesia, y esas tres ausencias son parte del diagnostico.',
      descompensada: 'Debilidad PROXIMAL y simetrica de instauracion lenta: cuesta subir escaleras, levantarse de una silla baja o del inodoro, y peinarse o tender la ropa. Puede haber mialgias, intolerancia al ejercicio y orina oscura tras el esfuerzo. En las distrofias hay que buscar ademas los datos extramusculares que orientan: en la distrofia miotonica, ptosis, cara alargada, calvicie frontal, cataratas, MIOTONIA (dificultad para relajar la mano tras un apreton), hipersomnia y trastornos de la conduccion cardiaca. En la dermatomiositis, las papulas de Gottron y el eritema en heliotropo. Y en la miopatia por cuerpos de inclusion, debilidad ASIMETRICA de cuadriceps y de los flexores profundos de los dedos, con disfagia.'
    },
    laboratorio: [
      { prueba: 'Creatina cinasa', utilidad: 'Primera prueba ante toda debilidad proximal. Muy elevada en las distrofias, en la miopatia necrotizante inmunomediada y en la rabdomiolisis. Pero conviene saber que es NORMAL en la miopatia por corticoides y solo poco elevada en la de cuerpos de inclusion, de modo que un valor normal no descarta una miopatia.' },
      { prueba: 'Hormona tiroestimulante', utilidad: 'El HIPOTIROIDISMO produce debilidad proximal, mialgias y elevacion de la creatina cinasa, y se corrige tratando el tiroides. Es una de las causas que mas se olvida ante una elevacion asintomatica persistente y de las mas faciles de resolver.' },
      { prueba: 'Iones, calcio, magnesio, fosforo y funcion renal', utilidad: 'La hipopotasemia, la hipofosfatemia grave y la hipercalcemia producen debilidad. En la rabdomiolisis, la vigilancia del POTASIO es lo prioritario en las primeras horas, junto con la funcion renal, y le siguen la hipocalcemia precoz y la hipercalcemia de la fase de recuperacion.' },
      { prueba: 'Sedimento urinario y tira reactiva', utilidad: 'El dato que delata la rabdomiolisis en urgencias: TIRA POSITIVA PARA SANGRE con sedimento SIN hematies, porque lo que se detecta es mioglobina y no hemoglobina. Es una comprobacion barata que cambia el diagnostico en minutos.' },
      { prueba: 'Autoanticuerpos de miopatia inflamatoria', utilidad: 'Anti-Jo1 y otros antisintetasa (miositis con enfermedad intersticial, artritis, manos de mecanico y Raynaud), anti-Mi2 y anti-TIF1 gamma en la dermatomiositis (este ultimo asociado a NEOPLASIA), y anti-HMGCR y anti-SRP en la miopatia necrotizante inmunomediada.' },
      { prueba: 'Estudio genetico dirigido', utilidad: 'En la distrofia miotonica se busca la expansion CTG en el gen DMPK, que ademas explica el fenomeno de ANTICIPACION en la familia. En las distrofias de cinturas y en la sospecha de ELA familiar, paneles ampliados. Siempre con consejo genetico previo, porque el resultado afecta a los familiares.' },
      { prueba: 'Electroforesis con inmunofijacion y anticuerpos anti-GM1', utilidad: 'Obligadas ante un cuadro de motoneurona inferior puro, porque buscan las dos causas TRATABLES que imitan una ELA: la neuropatia asociada a gammapatia monoclonal y la NEUROPATIA MOTORA MULTIFOCAL, que responde a inmunoglobulinas.' },
      { prueba: 'Analitica basica y vitamina B12', utilidad: 'Hemograma, funcion hepatica y vitamina B12, cuyo deficit produce mieloneuropatia con motoneurona superior en piernas y puede confundirse en parte con una ELA. Forma parte del descarte razonable antes de dar el diagnostico.' }
    ],
    no_invasivos: [
      { metodo: 'Patron de la debilidad (calculadora disponible)', interpretacion: 'Cruza distribucion, reflejos, alteracion sensitiva y creatina cinasa para localizar el problema en musculo, nervio, motoneurona o union neuromuscular.', cutoff: 'Proximal, sin alteracion sensitiva y con enzima alta: musculo. Fasciculaciones con hiperreflexia: motoneurona' },
      { metodo: 'Escala funcional ALSFRS-R (calculadora disponible)', interpretacion: 'Doce items de 0 a 4 que miden lenguaje, salivacion, deglucion, escritura, alimentacion, vestido, cama, marcha, escaleras, disnea, ortopnea y necesidad de soporte respiratorio.', cutoff: 'De 0 a 48 puntos. La VELOCIDAD de perdida de puntos predice el pronostico mejor que el valor aislado' },
      { metodo: 'Indicaciones de ventilacion y gastrostomia (calculadora disponible)', interpretacion: 'Reune los criterios respiratorios y nutricionales que deciden cuando ofrecer ventilacion no invasiva y cuando colocar la gastrostomia, que es una decision de MOMENTO y no solo de indicacion.', cutoff: 'Gastrostomia ANTES de que la capacidad vital forzada baje del 50%' },
      { metodo: 'Enfoque de la creatina cinasa elevada (calculadora disponible)', interpretacion: 'Separa la rabdomiolisis de la elevacion asintomatica, cuantifica el riesgo renal y recuerda las causas no musculares y los farmacos.', cutoff: 'Repetir tras 7 dias sin ejercicio antes de estudiar una elevacion asintomatica' },
      { metodo: 'Capacidad vital forzada y presion inspiratoria nasal', interpretacion: 'Son las medidas que gobiernan las decisiones respiratorias en la ELA y en las distrofias. La presion inspiratoria nasal es util cuando la debilidad facial impide un buen sellado del boquilla y falsea la espirometria.', cutoff: 'Capacidad vital forzada por debajo del 80% con sintomas, o por debajo del 50%: valorar ventilacion' },
      { metodo: 'Electromiograma y electroneurograma', interpretacion: 'En la motoneurona, denervacion activa y cronica en varias regiones. En la miopatia, potenciales de unidad motora peque&#241;os, breves y polifasicos con reclutamiento precoz. Y BUSCAN los bloqueos de conduccion que definen la neuropatia motora multifocal.', cutoff: 'Bloqueos de conduccion motora fuera de puntos de atrapamiento: apunta a neuropatia motora multifocal' },
      { metodo: 'Cribado cognitivo y conductual', interpretacion: 'Se hace en la ELA porque una proporcion importante de los pacientes tiene alteracion cognitiva o conductual y una minoria cumple criterios de degeneracion frontotemporal, con la que comparte la expansion en C9orf72.', cutoff: 'Su deteccion cambia la comunicacion, la planificacion de decisiones y el apoyo al cuidador' }
    ],
    imagen: [
      { modalidad: 'Resonancia de columna cervical y craneal', hallazgos: 'OBLIGADA antes de diagnosticar una ELA. La mielopatia cervical espondilotica produce motoneurona superior en las piernas e inferior en los brazos, imita muy bien el cuadro y se OPERA. La resonancia craneal descarta lesiones del tronco y de la union craneocervical.' },
      { modalidad: 'Resonancia muscular', hallazgos: 'Muestra el patron de afectacion (que musculos y en que orden), el edema en las miopatias inflamatorias activas y la sustitucion grasa en las cronicas. Sirve ademas para elegir el musculo que se va a biopsiar, evitando los ya sustituidos por grasa y los normales.' },
      { modalidad: 'Ecografia muscular', hallazgos: 'A pie de cama, detecta FASCICULACIONES con mas sensibilidad que la inspeccion, valora la atrofia y el aumento de ecogenicidad por sustitucion fibroadiposa. Es rapida, no invasiva y cada vez mas usada en la valoracion inicial.' },
      { modalidad: 'Tomografia de torax y cribado de neoplasia', hallazgos: 'En la dermatomiositis del adulto el cribado tumoral es obligado, sobre todo con anticuerpos anti-TIF1 gamma. En las miopatias inflamatorias, la tomografia de alta resolucion busca ademas la enfermedad intersticial del sindrome antisintetasa, que marca el pronostico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Estas enfermedades se clasifican primero por <strong>localizacion</strong>: motoneurona, musculo, nervio o union. Dentro de la motoneurona, por la combinacion de signos superiores e inferiores y por la region de inicio (bulbar, cervical, toracica o lumbosacra), que tiene valor pronostico. Dentro del musculo, por <strong>mecanismo</strong>: geneticas (distrofias y miopatias metabolicas), inflamatorias, toxicas y endocrinas, y por el <strong>patron</strong> de debilidad, que en las miopatias es casi siempre proximal y simetrico con dos excepciones que hay que conocer. Y en paralelo, la <strong>gravedad funcional y respiratoria</strong>, que es lo que gobierna las decisiones practicas.`,
    escalas: [
      { nombre: 'Patron de la debilidad (calculadora disponible)', componentes: 'Distribucion (proximal, distal, fluctuante), reflejos, presencia de alteracion sensitiva, fasciculaciones, signos de motoneurona superior y creatina cinasa.', formula: 'Combinacion de esos datos para localizar el problema en una de las cuatro estructuras.', interpretacion: 'La alteracion SENSITIVA es lo que mas delata al nervio. La combinacion de fasciculaciones con hiperreflexia es exclusiva de la motoneurona. Y hay que conocer las excepciones: la miopatia por cuerpos de inclusion es distal y asimetrica, y la miopatia por corticoides cursa con creatina cinasa normal.' },
      { nombre: 'Escala funcional ALSFRS-R (calculadora disponible)', componentes: 'Doce items de 0 a 4: lenguaje, salivacion, deglucion, escritura, manejo de cubiertos, vestido e higiene, girarse en la cama, caminar, subir escaleras, disnea, ortopnea e insuficiencia respiratoria.', formula: 'Suma de 0 a 48 puntos, donde 48 es funcion normal.', interpretacion: 'Lo que mas informa NO es la puntuacion aislada sino la VELOCIDAD de perdida: la pendiente de caida por mes es uno de los mejores predictores de supervivencia. Se usa ademas como criterio de inclusion y como desenlace en los ensayos.' },
      { nombre: 'Indicaciones de ventilacion y gastrostomia (calculadora disponible)', componentes: 'Sintomas de hipoventilacion nocturna, capacidad vital forzada, presion inspiratoria nasal, gasometria, oximetria nocturna, perdida de peso y disfagia.', formula: 'Ventilacion no invasiva ante sintomas o ante deterioro de las medidas respiratorias. Gastrostomia antes de que la capacidad vital forzada caiga por debajo del 50%.', interpretacion: 'La ventilacion no invasiva prolonga la supervivencia y mejora la calidad de vida, sobre todo sin afectacion bulbar grave. En la gastrostomia lo determinante es el MOMENTO: colocada tarde, el riesgo del procedimiento aumenta mucho.' },
      { nombre: 'Enfoque de la creatina cinasa elevada (calculadora disponible)', componentes: 'Valor de la enzima en multiplos del limite alto, presencia de sintomas musculares, color de la orina, funcion renal, potasio y farmacos.', formula: 'Rabdomiolisis: elevacion marcada con sintomas y riesgo renal. Elevacion asintomatica: repetir tras 7 dias sin ejercicio antes de estudiar.', interpretacion: 'En la rabdomiolisis, la prioridad es la hidratacion precoz y el POTASIO. En la elevacion asintomatica persistente, mirar farmacos (sobre todo estatinas) y funcion tiroidea antes de pedir nada mas.' },
      { nombre: 'Criterios diagnosticos de Gold Coast para la ELA', componentes: 'Debilidad progresiva, signos de motoneurona superior e inferior, distribucion por regiones y exclusion de otras causas.', formula: 'Debilidad progresiva documentada, mas signos de motoneurona superior e inferior en al menos UNA region, o signos de motoneurona inferior en al menos DOS regiones, con estudios que descarten otras causas.', interpretacion: 'Simplifican y hacen mas sensibles los criterios clasicos, lo que permite diagnosticar antes y ofrecer tratamiento y ensayos mas pronto. La exclusion de otras causas sigue siendo parte del criterio y no un tramite.' },
      { nombre: 'Clasificacion de las miopatias inflamatorias', componentes: 'Clinica, histologia y autoanticuerpos.', formula: 'Dermatomiositis, miopatia necrotizante inmunomediada, sindrome antisintetasa, miositis por cuerpos de inclusion y polimiositis (hoy un diagnostico mucho menos frecuente que antes).', interpretacion: 'La separacion importa porque el pronostico y el tratamiento difieren: la dermatomiositis obliga a cribado tumoral, el sindrome antisintetasa a buscar enfermedad intersticial, y la MIOSITIS POR CUERPOS DE INCLUSION no responde a la inmunosupresion, de modo que insistir con ella solo a&#241;ade toxicidad.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Esclerosis lateral amiotrofica: diagnostico',
      color: '#8c3a34',
      definicion: 'Enfermedad neurodegenerativa que afecta simultaneamente a la motoneurona superior y a la inferior, de curso progresivo, sin alteracion sensitiva y sin tratamiento curativo.',
      fisiopatologia: 'Se produce degeneracion de las motoneuronas del asta anterior medular, de los nucleos motores del tronco y de las neuronas piramidales corticales. El sustrato molecular mas constante es la agregacion citoplasmatica de la proteina TDP-43, que se comparte con la degeneracion frontotemporal y explica el solapamiento entre ambas enfermedades. Se han implicado el estres oxidativo, la excitotoxicidad por glutamato (base racional del riluzol), la disfuncion mitocondrial y del transporte axonal, y la propagacion de la patologia entre regiones contiguas, que explica que la debilidad se extienda desde el punto de inicio hacia las regiones vecinas.',
      epidemiologia: 'Incidencia baja pero de impacto enorme, con edad de inicio habitual entre la sexta y la septima decada. Alrededor del 10% de los casos son familiares, y entre las causas geneticas la expansion en C9orf72 es la mas frecuente y la que mas se asocia a solapamiento con degeneracion frontotemporal. La supervivencia mediana se mide en pocos a&#241;os desde el inicio de los sintomas, con variabilidad amplia.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino, con diferencia que se atenua con la edad', 'Antecedente familiar de ELA o de degeneracion frontotemporal', 'Expansion en C9orf72 y mutaciones en SOD1, TARDBP y FUS', 'Tabaquismo, que es el factor ambiental con mas respaldo', 'Traumatismos craneoencefalicos repetidos', 'Exposicion a metales pesados y a pesticidas', 'Servicio militar en algunas cohortes', 'Actividad fisica extrema en algunos estudios', 'Exposicion a campos electromagneticos en el ambito laboral'],
      clinica: 'Inicio FOCAL y asimetrico: mano torpe, pie caido o disartria y disfagia en la forma bulbar. Atrofia visible, fasciculaciones y calambres junto con espasticidad, hiperreflexia y Babinski. La HIPERREFLEXIA EN UN MIEMBRO ATROFICO es la firma del cuadro. Sin alteracion sensitiva, sin afectacion de esfinteres y sin oftalmoparesia.',
      criterios_dx: 'Debilidad progresiva documentada con signos de motoneurona superior e inferior en al menos una region, o de motoneurona inferior en al menos dos regiones, tras EXCLUIR otras causas con las pruebas apropiadas. Ver la Figura 2 de Definicion.',
      laboratorio: 'ELECTROFORESIS CON INMUNOFIJACION y anticuerpos ANTI-GM1, que buscan las dos causas tratables que imitan el cuadro. Hormona tiroestimulante, vitamina B12, calcio y paratohormona, serologia de VIH y creatina cinasa, que puede estar moderadamente elevada por la denervacion.',
      imagen: 'RESONANCIA DE COLUMNA CERVICAL, obligada: la mielopatia espondilotica produce motoneurona superior en piernas e inferior en brazos, imita muy bien la ELA y se opera. Resonancia craneal para descartar lesiones del tronco.',
      complementarios: 'ELECTROMIOGRAMA Y ELECTRONEUROGRAMA, que documentan denervacion activa y cronica en varias regiones y, sobre todo, BUSCAN BLOQUEOS DE CONDUCCION que apunten a una neuropatia motora multifocal. Cribado cognitivo y conductual. Estudio genetico con consejo previo en las formas familiares o de inicio precoz.',
      dx_diferencial: 'NEUROPATIA MOTORA MULTIFOCAL con bloqueos de conduccion, que es tratable con inmunoglobulinas y es el error mas costoso; mielopatia cervical espondilotica, que se opera; miastenia gravis de predominio bulbar; miopatia por cuerpos de inclusion; enfermedad de Kennedy; neuropatia asociada a gammapatia monoclonal; hipertiroidismo e hiperparatiroidismo; linfoma; y sindrome pospolio.',
      tx_medico: 'Comunicacion del diagnostico de forma cuidadosa y en varias visitas, no en una sola. Derivacion inmediata a una UNIDAD MULTIDISCIPLINAR, que es la intervencion que mas se asocia a mayor supervivencia. Informacion sobre asociaciones de pacientes y sobre recursos sociales.',
      tx_farmacologico: 'RILUZOL, que prolonga la supervivencia de forma modesta pero real y se inicia al diagnostico. En algunos paises esta disponible la edaravona. La mayor parte del beneficio terapeutico, sin embargo, viene del manejo de soporte y no del farmaco.',
      tx_intervencionista: 'Se detalla en la ficha de manejo. Nada en la fase diagnostica.',
      criterios_uci: 'Excepcional y siempre con la voluntad del paciente conocida de antemano. Una insuficiencia respiratoria en un paciente sin decisiones anticipadas documentadas es la peor situacion posible, y prevenirla es parte del trabajo clinico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante un ingreso por cualquier motivo, valorar funcion respiratoria y deglucion, revisar las voluntades anticipadas y evitar farmacos depresores respiratorios sin vigilancia.',
      seguimiento_ambulatorio: 'Revision cada 2 o 3 meses en la unidad multidisciplinar, con escala funcional y medidas respiratorias en cada visita. Reevaluar el diagnostico si la evolucion no encaja con lo esperado.',
      pronostico: 'Malo, con supervivencia mediana de pocos a&#241;os, aunque con variabilidad amplia. Son factores de peor pronostico el inicio bulbar, la edad avanzada, la afectacion respiratoria precoz, la perdida rapida de puntos en la escala funcional y la alteracion cognitiva asociada.',
      algoritmo: ['Buscar la combinacion de motoneurona SUPERIOR e INFERIOR', 'Comprobar que NO hay alteracion sensitiva ni de esfinteres ni oftalmoparesia', 'Documentar la PROGRESION, que forma parte del diagnostico', 'Hacer RESONANCIA CERVICAL para descartar mielopatia espondilotica', 'Pedir electromiograma en varias regiones', 'Buscar BLOQUEOS DE CONDUCCION en el estudio', 'Pedir inmunofijacion y anticuerpos anti-GM1', 'Descartar tiroides, paratiroides, B12 y VIH', 'Explorar la cognicion y la conducta', 'Derivar de inmediato a una unidad multidisciplinar']
    },
    {
      nombre: 'ELA: manejo multidisciplinar y decisiones anticipadas',
      color: '#3f6b52',
      definicion: 'Conjunto de intervenciones de soporte que, en ausencia de tratamiento curativo, constituyen lo que mas modifica la supervivencia y la calidad de vida en la esclerosis lateral amiotrofica.',
      fisiopatologia: 'La causa de muerte es casi siempre la insuficiencia respiratoria por debilidad diafragmatica e intercostal, a la que se suman la tos ineficaz, la retencion de secreciones y las neumonias por aspiracion cuando hay afectacion bulbar. La ventilacion no invasiva actua sobre ese mecanismo: descarga la musculatura respiratoria, corrige la hipoventilacion nocturna y mejora el sue&#241;o, lo que se traduce en mayor supervivencia. El soporte nutricional actua sobre otro determinante independiente, la perdida de peso, que empeora el pronostico por si misma.',
      epidemiologia: 'La atencion en unidades multidisciplinares se asocia de forma consistente a mayor supervivencia en estudios poblacionales. La ventilacion no invasiva demostro beneficio en supervivencia y calidad de vida en un ensayo controlado, con un efecto mucho menor en los pacientes con afectacion bulbar grave.',
      factores_riesgo: ['Afectacion bulbar, que limita la tolerancia a la ventilacion no invasiva', 'Perdida de peso, que es un predictor independiente de mortalidad', 'Disfagia con atragantamientos', 'Tos ineficaz con retencion de secreciones', 'Deterioro cognitivo, que dificulta la adherencia a la ventilacion', 'Ausencia de cuidador o de red de apoyo', 'Retraso en la derivacion a la unidad multidisciplinar', 'Sialorrea no tratada', 'Depresion y ansiedad no abordadas', 'Ausencia de voluntades anticipadas documentadas'],
      clinica: 'Hay que buscar de forma activa los sintomas de HIPOVENTILACION NOCTURNA, porque el paciente no siempre los refiere: cefalea matutina, sue&#241;o poco reparador, somnolencia diurna, despertares frecuentes, pesadillas y ortopnea. La ortopnea es especialmente informativa porque traduce debilidad diafragmatica.',
      criterios_dx: 'No aplica: es la fase de manejo. Las decisiones se toman con las medidas respiratorias, el peso y la deglucion. Ver la Figura 3 de Definicion.',
      laboratorio: 'Gasometria arterial o capilar para detectar hipercapnia, aunque es un signo tardio. Bicarbonato serico elevado como pista de hipoventilacion cronica. Control nutricional con albumina y parametros analiticos, siempre junto al peso.',
      imagen: 'Radiografia de torax ante sospecha de aspiracion o de neumonia. Videofluoroscopia de la deglucion cuando hay dudas sobre la seguridad de la via oral.',
      complementarios: 'CAPACIDAD VITAL FORZADA en sedestacion y en decubito, PRESION INSPIRATORIA NASAL (util cuando la debilidad facial impide sellar bien la boquilla y falsea la espirometria) y OXIMETRIA NOCTURNA. Peso en cada visita. Valoracion de la deglucion por logopedia.',
      dx_diferencial: 'Ante un deterioro respiratorio brusco, descartar neumonia por aspiracion, embolia pulmonar, neumotorax y tapon mucoso, antes de asumir que es la progresion de la enfermedad.',
      tx_medico: 'UNIDAD MULTIDISCIPLINAR. Fisioterapia respiratoria y tecnicas de asistencia a la tos, incluido el dispositivo de insuflacion y exuflacion mecanica, que es especialmente util con tos ineficaz. Rehabilitacion adaptada sin llegar a la fatiga. Adaptaciones del domicilio, ayudas tecnicas y sistemas de comunicacion aumentativa, que hay que introducir ANTES de que el habla se pierda.',
      tx_farmacologico: 'Riluzol. Para la SIALORREA, anticolinergicos y toxina botulinica en glandulas salivales. Para las secreciones espesas, mucoliticos y buena hidratacion. Para los calambres, la espasticidad y el dolor, el tratamiento correspondiente. Para la LABILIDAD EMOCIONAL, que angustia mucho a la familia, existe tratamiento eficaz y conviene ofrecerlo. Morfina y benzodiacepinas para la disnea en la fase final, ajustadas y sin miedo, dentro de un plan paliativo.',
      tx_intervencionista: 'VENTILACION NO INVASIVA, que prolonga la supervivencia y mejora la calidad de vida. GASTROSTOMIA, con el MOMENTO como factor critico: antes de que la capacidad vital forzada baje del 50%. Traqueostomia con ventilacion invasiva solo tras una decision informada y anticipada, porque cambia por completo la trayectoria del paciente y de la familia.',
      criterios_uci: 'Solo dentro de un plan acordado previamente con el paciente. Sin voluntades anticipadas documentadas, una insuficiencia respiratoria aguda obliga a decidir en urgencias y sin poder consultar al paciente, que es exactamente lo que hay que evitar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Continuar la ventilacion no invasiva domiciliaria durante el ingreso. Prevenir la aspiracion. Revisar las voluntades anticipadas al ingreso y no en el momento de la crisis. Evitar opioides y benzodiacepinas sin vigilancia fuera de un contexto paliativo definido.',
      seguimiento_ambulatorio: 'Revision cada 2 o 3 meses con escala funcional, peso y medidas respiratorias. Adelantarse a las necesidades en lugar de reaccionar a ellas: comunicacion, movilidad, nutricion y respiracion se planifican antes de que fallen.',
      pronostico: 'La enfermedad sigue siendo progresiva, pero el conjunto de estas medidas modifica de forma clara tanto la supervivencia como la calidad de vida, mucho mas que cualquier farmaco disponible hoy.',
      algoritmo: ['Derivar a una unidad MULTIDISCIPLINAR desde el diagnostico', 'Medir capacidad vital forzada y presion inspiratoria nasal en cada visita', 'Preguntar de forma activa por sintomas de hipoventilacion nocturna', 'Ofrecer ventilacion no invasiva ante sintomas, sin esperar a los numeros', 'Pesar al paciente en cada visita', 'Plantear la gastrostomia ANTES de que la capacidad vital baje del 50%', 'Tratar sialorrea, secreciones, calambres y labilidad emocional', 'Introducir sistemas de comunicacion antes de perder el habla', 'Abrir PRONTO la conversacion sobre voluntades anticipadas', 'Integrar cuidados paliativos desde fases tempranas, no al final']
    },
    {
      nombre: 'Enfoque de la debilidad muscular',
      color: '#5c5a2e',
      definicion: 'Metodo de aproximacion al paciente que consulta por perdida de fuerza, basado en localizar la lesion antes de plantear ninguna etiologia.',
      fisiopatologia: 'La distribucion de la debilidad refleja la estructura da&#241;ada. El musculo esqueletico proximal tiene fibras grandes con alta demanda metabolica y se afecta primero en los procesos difusos del musculo, lo que da el patron proximal y simetrico. El nervio periferico sigue la regla de la longitud y da patron distal. La motoneurona combina signos superiores e inferiores porque degeneran ambas poblaciones. Y la union neuromuscular produce fatigabilidad porque el fallo depende del uso repetido.',
      epidemiologia: 'La debilidad es un motivo de consulta frecuente y muchas veces mal caracterizado, porque el paciente llama debilidad tanto a la perdida de fuerza como al cansancio, al mareo o a la disnea. Precisar de que habla es el primer paso y evita estudios innecesarios.',
      factores_riesgo: ['Consumo de estatinas y de otros farmacos miotoxicos', 'Corticoterapia prolongada', 'Hipotiroidismo e hipertiroidismo', 'Alteraciones electroliticas: potasio, fosforo, calcio y magnesio', 'Consumo excesivo de alcohol', 'Enfermedad renal cronica', 'Enfermedades autoinmunes', 'Antecedente familiar de enfermedad neuromuscular', 'Neoplasia conocida u oculta', 'Inmovilizacion prolongada y estancia en cuidados criticos'],
      clinica: 'Primero hay que precisar QUE llama debilidad el paciente. Despues, la distribucion: dificultad para subir escaleras y levantarse de la silla apunta a proximal y a musculo; tropiezos y torpeza de manos apuntan a distal y a nervio; la fluctuacion a lo largo del dia apunta a la union. Y hay que buscar de forma activa fasciculaciones, atrofia, signos de motoneurona superior y alteracion sensitiva.',
      criterios_dx: 'No hay criterios unicos: es un metodo. Cuatro preguntas ordenan el caso: distribucion, reflejos, sensibilidad y creatina cinasa. Ver la Figura 1 de Definicion.',
      laboratorio: 'CREATINA CINASA como primera prueba ante debilidad proximal. Hormona tiroestimulante, iones con calcio, magnesio y fosforo, funcion renal y hepatica, hemograma y vitamina D. Autoanticuerpos y estudio genetico segun la orientacion.',
      imagen: 'Resonancia muscular para definir el patron de afectacion y elegir el sitio de biopsia. Ecografia muscular a pie de cama, util para detectar fasciculaciones y valorar la atrofia.',
      complementarios: 'ELECTROMIOGRAMA Y ELECTRONEUROGRAMA, que separan miopatia de neuropatia y de enfermedad de motoneurona. BIOPSIA MUSCULAR cuando el diagnostico no se alcanza de otro modo, eligiendo el musculo con ayuda de la imagen y evitando los ya sustituidos por grasa o recientemente pinchados en el electromiograma.',
      dx_diferencial: 'Fatiga sin debilidad real (que es lo mas frecuente en la consulta y no requiere este estudio), sindrome de fatiga cronica, depresion, anemia, insuficiencia cardiaca, enfermedad respiratoria, dolor que limita el movimiento y desacondicionamiento fisico.',
      tx_medico: 'Retirada de los farmacos implicados. Correccion de las alteraciones metabolicas y endocrinas. Rehabilitacion adaptada al tipo de enfermedad, evitando el ejercicio excentrico intenso en las miopatias.',
      tx_farmacologico: 'El especifico de cada causa. La regla general es no iniciar inmunosupresion antes de haber caracterizado bien el cuadro, porque etiquetar de miopatia inflamatoria lo que no lo es expone al paciente a una toxicidad inutil.',
      tx_intervencionista: 'Biopsia muscular en casos seleccionados.',
      criterios_uci: 'Debilidad con afectacion respiratoria o bulbar, sea cual sea la causa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente critico, la debilidad adquirida en cuidados intensivos es muy frecuente y se previene con movilizacion precoz, control glucemico y reduccion de la sedacion y de los bloqueantes neuromusculares.',
      seguimiento_ambulatorio: 'Reevaluar el patron si la evolucion no encaja: una debilidad proximal que se vuelve asimetrica y distal obliga a replantear el diagnostico hacia una miopatia por cuerpos de inclusion.',
      pronostico: 'Depende por completo de la causa. Lo que mas mejora el pronostico global es identificar pronto las causas tratables, que son mas de las que parece: farmacos, endocrinas, electroliticas e inflamatorias.',
      algoritmo: ['Precisar QUE llama debilidad el paciente', 'Determinar la DISTRIBUCION: proximal, distal o fluctuante', 'Explorar los REFLEJOS', 'Buscar alteracion SENSITIVA, que delata al nervio', 'Buscar fasciculaciones y signos de motoneurona superior', 'Pedir CREATINA CINASA, funcion tiroidea e iones', 'Revisar la lista de FARMACOS, sobre todo estatinas y corticoides', 'Pedir electromiograma para separar miopatia de neuropatia', 'Usar la resonancia muscular para elegir el sitio de biopsia', 'No iniciar inmunosupresion sin haber caracterizado el cuadro']
    },
    {
      nombre: 'Distrofias musculares del adulto',
      color: '#6b4a8c',
      definicion: 'Miopatias hereditarias de curso progresivo, entre las que la distrofia miotonica es la mas frecuente en el adulto y la que mas afectacion extramuscular presenta.',
      fisiopatologia: 'En la distrofia miotonica tipo 1, una expansion de tripletes CTG en la region no traducida del gen DMPK genera un ARN toxico que secuestra proteinas reguladoras del corte y empalme, lo que altera la maduracion de multiples ARN mensajeros en distintos tejidos. Eso explica que sea una enfermedad MULTISISTEMICA y no solo muscular: corazon, cristalino, sistema endocrino, sistema nervioso central y musculo liso. La longitud de la expansion se correlaciona con la gravedad y tiende a aumentar entre generaciones, lo que produce el fenomeno de ANTICIPACION.',
      epidemiologia: 'La distrofia miotonica tipo 1 es la distrofia muscular mas frecuente del adulto. Las distrofias de cinturas son un grupo heterogeneo y la facioescapulohumeral es tambien frecuente. Muchos pacientes llegan al diagnostico tarde, y en la distrofia miotonica no es raro que el diagnostico se haga a partir de un familiar afectado o de un hallazgo cardiologico.',
      factores_riesgo: ['Antecedente familiar, con patron autosomico dominante en la distrofia miotonica y en la facioescapulohumeral', 'Fenomeno de ANTICIPACION en la distrofia miotonica', 'Consanguinidad en las formas recesivas', 'Sexo masculino en las distrofinopatias ligadas al cromosoma X', 'Ausencia de consejo genetico previo en la familia', 'Retraso diagnostico', 'Ausencia de cribado cardiaco y respiratorio', 'Anestesia general sin conocer el diagnostico', 'Embarazo no planificado en la distrofia miotonica', 'Comorbilidad respiratoria a&#241;adida'],
      clinica: 'DISTROFIA MIOTONICA TIPO 1: debilidad DISTAL y facial, ptosis, cara alargada, calvicie frontal, MIOTONIA (dificultad para relajar la mano tras un apreton o tras la percusion), cataratas subcapsulares, hipersomnia, diabetes, infertilidad y, sobre todo, TRASTORNOS DE LA CONDUCCION CARDIACA. FACIOESCAPULOHUMERAL: debilidad facial, escapula alada y afectacion del humero, con asimetria caracteristica. CINTURAS: debilidad proximal simetrica con creatina cinasa elevada. BECKER: distrofinopatia mas leve en varones, con miocardiopatia que puede ser desproporcionada a la debilidad.',
      criterios_dx: 'Clinica compatible mas ESTUDIO GENETICO dirigido, que ha desplazado a la biopsia en la mayoria de los casos. En la distrofia miotonica, la miotonia clinica y electromiografica orienta de forma casi definitiva.',
      laboratorio: 'Creatina cinasa, muy elevada en las distrofias de cinturas y solo moderadamente en la distrofia miotonica. ESTUDIO GENETICO dirigido con consejo previo. En la distrofia miotonica, ademas: glucemia y hemoglobina glucosilada, funcion tiroidea, testosterona e inmunoglobulinas.',
      imagen: 'Resonancia muscular para definir el patron de afectacion, que en muchas distrofias es caracteristico y orienta el estudio genetico. ECOCARDIOGRAMA como parte del cribado cardiaco.',
      complementarios: 'ELECTROCARDIOGRAMA ANUAL Y HOLTER en la distrofia miotonica, porque los trastornos de la conduccion progresan de forma silente y pueden causar MUERTE SUBITA. Estudio respiratorio con capacidad vital y valoracion de hipoventilacion nocturna. Valoracion oftalmologica para las cataratas. Estudio del sue&#241;o ante hipersomnia.',
      dx_diferencial: 'Miopatias inflamatorias, miopatias metabolicas, miopatia por cuerpos de inclusion, distrofias miotonicas entre si, y en la debilidad facial, miastenia y miopatias mitocondriales.',
      tx_medico: 'No hay tratamiento curativo. El manejo es de SOPORTE y de vigilancia de las complicaciones sistemicas, que es donde se gana. Rehabilitacion adaptada, ortesis, apoyo respiratorio cuando procede y consejo genetico a la familia.',
      tx_farmacologico: 'Sintomatico. Para la miotonia sintomatica existen opciones farmacologicas, aunque muchos pacientes no la refieren como problema principal. Tratamiento de la diabetes, de la hipersomnia y de las demas manifestaciones sistemicas.',
      tx_intervencionista: 'MARCAPASOS o DESFIBRILADOR en la distrofia miotonica segun los hallazgos de la conduccion, decision que puede salvar la vida y que depende del cribado. Ventilacion no invasiva ante hipoventilacion. Cirugia de cataratas.',
      criterios_uci: 'Insuficiencia respiratoria y arritmias graves. Estos pacientes tienen ademas RIESGO ANESTESICO aumentado, con sensibilidad a sedantes y opioides y riesgo de complicaciones respiratorias posoperatorias.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma habitual, salvo trasplante cardiaco en distrofinopatias con miocardiopatia terminal y situacion respiratoria aceptable.',
      seguimiento_hospitalario: 'ALERTA ANESTESICA en la historia. Ante cualquier cirugia, informar al equipo del diagnostico: hay riesgo aumentado de complicaciones respiratorias, sensibilidad a la sedacion y arritmias perioperatorias.',
      seguimiento_ambulatorio: 'Cribado CARDIACO y RESPIRATORIO periodico en todas las distrofias, con independencia de que la debilidad de extremidades sea leve. Consejo genetico y estudio familiar. Valoracion multidisciplinar.',
      pronostico: 'Muy variable segun el tipo. En la distrofia miotonica, la mortalidad se concentra en las complicaciones CARDIACAS y RESPIRATORIAS, y no en la debilidad de extremidades, lo que convierte el cribado en la intervencion mas util.',
      algoritmo: ['Buscar los datos EXTRAMUSCULARES que orientan el tipo', 'Explorar la MIOTONIA con el apreton de manos y la percusion', 'Preguntar por catarata precoz, calvicie, hipersomnia y diabetes', 'Reconstruir el arbol familiar y buscar ANTICIPACION', 'Pedir creatina cinasa y estudio GENETICO dirigido', 'Hacer ELECTROCARDIOGRAMA y valorar Holter y ecocardiograma', 'Repetir el cribado cardiaco de forma ANUAL en la distrofia miotonica', 'Valorar funcion respiratoria e hipoventilacion nocturna', 'Marcar la ALERTA ANESTESICA en la historia', 'Ofrecer consejo genetico y estudio a la familia']
    },
    {
      nombre: 'Miopatias inflamatorias y toxicas',
      color: '#8a6a1f',
      definicion: 'Miopatias adquiridas de mecanismo inmunitario o por farmacos y toxicos, que constituyen el grupo mas relevante en la practica porque muchas son tratables.',
      fisiopatologia: 'En la dermatomiositis, el da&#241;o es fundamentalmente vascular y mediado por complemento sobre los capilares del perimisio, lo que produce atrofia perifascicular y explica las manifestaciones cutaneas. En la miopatia necrotizante inmunomediada, los autoanticuerpos (anti-HMGCR, anti-SRP) se dirigen contra el propio musculo y producen necrosis de fibras con escaso infiltrado. En la miositis por cuerpos de inclusion coexisten un componente inflamatorio y otro degenerativo con acumulo proteico, y ese componente degenerativo es el que explica que NO responda a la inmunosupresion.',
      epidemiologia: 'Las miopatias inflamatorias son poco frecuentes pero importantes por su potencial de tratamiento. La miositis por cuerpos de inclusion es la miopatia adquirida mas frecuente por encima de los 50 a&#241;os y se diagnostica tarde, con frecuencia tras a&#241;os de tratamiento inmunosupresor ineficaz por una etiqueta erronea de polimiositis.',
      factores_riesgo: ['Tratamiento con ESTATINAS para la miopatia necrotizante inmunomediada', 'Corticoterapia prolongada para la miopatia esteroidea', 'Colchicina, hidroxicloroquina, antirretrovirales y alcohol', 'Neoplasia oculta, sobre todo en la dermatomiositis', 'Anticuerpos anti-TIF1 gamma, asociados a neoplasia', 'Enfermedad autoinmune conocida', 'Inhibidores del punto de control inmunitario', 'Edad superior a 50 a&#241;os para la miositis por cuerpos de inclusion', 'Hipotiroidismo', 'Insuficiencia renal, que aumenta la exposicion a farmacos miotoxicos'],
      clinica: 'DERMATOMIOSITIS: debilidad proximal con papulas de Gottron, eritema en heliotropo, signo del chal y manos de mecanico. SINDROME ANTISINTETASA: miositis con enfermedad pulmonar intersticial, artritis, fenomeno de Raynaud y fiebre. MIOPATIA NECROTIZANTE: debilidad proximal marcada con creatina cinasa muy alta. MIOSITIS POR CUERPOS DE INCLUSION: debilidad ASIMETRICA de cuadriceps y de FLEXORES PROFUNDOS DE LOS DEDOS, con disfagia, en mayores de 50 a&#241;os. MIOPATIA POR CORTICOIDES: debilidad proximal con creatina cinasa NORMAL.',
      criterios_dx: 'Combinacion de clinica, creatina cinasa, autoanticuerpos, resonancia muscular, electromiograma y, cuando hace falta, biopsia. Los autoanticuerpos han cambiado la clasificacion y con frecuencia evitan la biopsia.',
      laboratorio: 'Creatina cinasa y aldolasa. PANEL DE AUTOANTICUERPOS de miositis: anti-Jo1 y otros antisintetasa, anti-Mi2, anti-TIF1 gamma, anti-MDA5, anti-HMGCR y anti-SRP. Funcion tiroidea. Hemograma, funcion hepatica y renal.',
      imagen: 'RESONANCIA MUSCULAR con edema en la enfermedad activa y sustitucion grasa en la cronica, util ademas para elegir el musculo a biopsiar. TOMOGRAFIA DE ALTA RESOLUCION buscando enfermedad intersticial, sobre todo con anticuerpos antisintetasa o anti-MDA5. CRIBADO DE NEOPLASIA en la dermatomiositis del adulto.',
      complementarios: 'Electromiograma con patron miopatico y actividad espontanea. BIOPSIA MUSCULAR cuando el diagnostico no queda claro con clinica y anticuerpos, o cuando se sospecha miositis por cuerpos de inclusion, donde es especialmente util. Capilaroscopia en la sospecha de conectivopatia.',
      dx_diferencial: 'Distrofias musculares de inicio tardio, miopatias metabolicas, hipotiroidismo, miopatia por corticoides, polimialgia reumatica (que da dolor y rigidez sin debilidad real ni elevacion de la enzima) y enfermedad de motoneurona.',
      tx_medico: 'Rehabilitacion, que hoy se recomienda de forma precoz y no despues de controlar la inflamacion. Proteccion solar en la dermatomiositis. Valoracion de la deglucion, porque la disfagia empeora el pronostico. Cribado de neoplasia y su repeticion periodica en la dermatomiositis.',
      tx_farmacologico: 'CORTICOIDES como primera linea en las formas inflamatorias, con un ahorrador (metotrexato, azatioprina o micofenolato) a&#241;adido pronto. Inmunoglobulinas intravenosas, especialmente utiles en la dermatomiositis y en la miopatia necrotizante. Rituximab en la refractaria. En la MIOPATIA POR ESTATINAS: retirar el farmaco; si es una miopatia necrotizante inmunomediada con anti-HMGCR, la debilidad PERSISTE tras la retirada y necesita inmunosupresion. En la MIOSITIS POR CUERPOS DE INCLUSION, la inmunosupresion NO es eficaz y solo a&#241;ade toxicidad.',
      tx_intervencionista: 'Tratamiento de la neoplasia asociada cuando se identifica. Manejo de la disfagia.',
      criterios_uci: 'Insuficiencia respiratoria por enfermedad intersticial rapidamente progresiva, sobre todo con anticuerpos anti-MDA5, que puede ser fulminante. Debilidad respiratoria grave y aspiracion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante pulmonar en la enfermedad intersticial terminal asociada a miopatia inflamatoria, en casos muy seleccionados.',
      seguimiento_hospitalario: 'Ante una miopatia inflamatoria con disnea, pensar en enfermedad intersticial y no solo en debilidad respiratoria. Con anti-MDA5, la enfermedad intersticial puede progresar en semanas y exige tratamiento agresivo precoz.',
      seguimiento_ambulatorio: 'Seguimiento con fuerza y funcion, no solo con la creatina cinasa, que puede disociarse de la clinica. Vigilancia de la toxicidad del tratamiento y repeticion del cribado tumoral en la dermatomiositis.',
      pronostico: 'Bueno en las formas inflamatorias tratadas a tiempo. Peor con enfermedad intersticial asociada, con neoplasia y en la miositis por cuerpos de inclusion, que progresa de forma lenta pero inexorable y no responde al tratamiento inmunosupresor.',
      algoritmo: ['Confirmar debilidad proximal con creatina cinasa elevada', 'Buscar las lesiones cutaneas de la dermatomiositis', 'Revisar SIEMPRE la lista de farmacos, sobre todo estatinas y corticoides', 'Pedir el panel de autoanticuerpos de miositis', 'Pedir tomografia de alta resolucion si hay antisintetasa o disnea', 'Hacer CRIBADO DE NEOPLASIA en la dermatomiositis del adulto', 'Usar resonancia muscular para elegir el sitio de biopsia', 'Sospechar cuerpos de inclusion si es asimetrica y afecta a cuadriceps y dedos', 'Iniciar corticoide con ahorrador precoz en las formas inflamatorias', 'NO insistir con inmunosupresion en la miositis por cuerpos de inclusion']
    },
    {
      nombre: 'Rabdomiolisis y creatina cinasa elevada',
      color: '#8c3a5c',
      definicion: 'Necrosis de fibras musculares con liberacion de su contenido a la circulacion (rabdomiolisis), y su contrapunto en la practica ambulatoria, la elevacion asintomatica y persistente de creatina cinasa.',
      fisiopatologia: 'La lesion de la fibra muscular libera potasio, fosforo, creatina cinasa y MIOGLOBINA. La mioglobina filtra por el glomerulo y da&#241;a el ri&#241;on por tres vias: obstruccion tubular por cilindros, toxicidad directa sobre el epitelio tubular y vasoconstriccion renal, agravadas por la hipovolemia que acompa&#241;a al secuestro de liquido en el musculo lesionado. Ese mecanismo explica por que el tratamiento es la HIDRATACION precoz y por que el retraso se traduce en fracaso renal. El potasio liberado puede producir arritmias mortales en las primeras horas.',
      epidemiologia: 'La rabdomiolisis es frecuente en urgencias y en cuidados criticos, con causas que van del traumatismo y la inmovilizacion prolongada al ejercicio extremo, las convulsiones, el golpe de calor y los farmacos. Una proporcion relevante desarrolla fracaso renal agudo, y ese riesgo se reduce de forma clara con hidratacion precoz.',
      factores_riesgo: ['Aplastamiento e inmovilizacion prolongada, incluido el paciente que pasa horas en el suelo', 'Ejercicio extremo o no habituado, sobre todo con calor', 'Convulsiones prolongadas y agitacion intensa', 'Golpe de calor y sindrome neuroleptico maligno', 'Consumo de alcohol, cocaina y otras drogas', 'ESTATINAS, sobre todo combinadas con fibratos o con inhibidores del citocromo', 'Hipopotasemia e hipofosfatemia', 'Infecciones, sobre todo viricas', 'Miopatia metabolica de base, que hay que sospechar si es recurrente', 'Deshidratacion previa'],
      clinica: 'La triada clasica de mialgias, debilidad y ORINA OSCURA esta completa en una minoria de los pacientes, de modo que hay que sospecharla por el contexto. En la elevacion ASINTOMATICA no hay sintomas por definicion: es un hallazgo casual en una analitica pedida por otro motivo.',
      criterios_dx: 'Elevacion marcada de creatina cinasa en el contexto adecuado. El dato practico que la delata en urgencias es una TIRA REACTIVA POSITIVA PARA SANGRE con un SEDIMENTO SIN HEMATIES. Ver la Figura 4 de Definicion.',
      laboratorio: 'Creatina cinasa seriada, POTASIO (la prioridad en las primeras horas), calcio, fosforo, acido urico, funcion renal, gasometria, coagulacion (por el riesgo de coagulacion intravascular diseminada) y sedimento urinario. En la elevacion asintomatica: repetir tras reposo, funcion tiroidea y revision de farmacos.',
      imagen: 'No suele ser necesaria. Resonancia muscular si hay que documentar la extension o si se sospecha un sindrome compartimental, que es una complicacion que requiere cirugia urgente.',
      complementarios: 'Vigilancia de la diuresis y monitorizacion electrocardiografica por la hiperpotasemia. En la rabdomiolisis RECURRENTE o desencadenada por esfuerzos moderados, hay que buscar una miopatia metabolica de base con estudio dirigido.',
      dx_diferencial: 'De la orina oscura: hematuria (con hematies en el sedimento), hemoglobinuria, porfiria y algunos farmacos y alimentos. De la elevacion asintomatica de la enzima: ejercicio reciente, inyeccion intramuscular, electromiograma reciente, macro-creatina cinasa, hipotiroidismo, farmacos, y las miopatias subclinicas y el estado de portador de distrofinopatia.',
      tx_medico: 'HIDRATACION INTENSA Y PRECOZ con suero salino para mantener una diuresis abundante, que es la intervencion que previene el fracaso renal y cuyo retraso lo condiciona. Vigilancia estrecha del potasio y de la funcion renal. Retirada del farmaco o del toxico responsable. Correccion de la hipovolemia y del trastorno electrolitico.',
      tx_farmacologico: 'La sueroterapia es el tratamiento. El bicarbonato para alcalinizar la orina y el manitol siguen siendo CONTROVERTIDOS y no sustituyen al volumen. Tratamiento de la hiperpotasemia segun protocolo. Evitar farmacos nefrotoxicos.',
      tx_intervencionista: 'Terapia de reemplazo renal si hay fracaso renal con indicacion, sobre todo por hiperpotasemia refractaria o sobrecarga de volumen. FASCIOTOMIA urgente en el sindrome compartimental, que hay que buscar de forma activa en la rabdomiolisis por aplastamiento.',
      criterios_uci: 'Hiperpotasemia grave, fracaso renal agudo con indicacion de depuracion, inestabilidad hemodinamica, coagulacion intravascular diseminada y sindrome compartimental.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica; el fracaso renal de la rabdomiolisis suele ser reversible con soporte.',
      seguimiento_hospitalario: 'Balance hidrico estricto y controles analiticos seriados. Vigilar la hipocalcemia de la fase inicial, que NO se corrige de rutina salvo que sea sintomatica, porque el calcio se moviliza despues y puede producir hipercalcemia en la fase de recuperacion.',
      seguimiento_ambulatorio: 'Tras el episodio, revisar la causa y prevenir la recurrencia. En la elevacion asintomatica persistente: REPETIR tras 7 dias sin ejercicio, revisar farmacos y pedir funcion tiroidea antes de plantear ningun otro estudio.',
      pronostico: 'Bueno con tratamiento precoz. El fracaso renal suele ser reversible. El pronostico empeora con el retraso en la hidratacion, con la causa de base y con las complicaciones electroliticas.',
      algoritmo: ['Sospecharla por el CONTEXTO, no solo por la triada clasica', 'Pedir creatina cinasa, potasio, funcion renal y sedimento', 'Comprobar la tira positiva para sangre SIN hematies en el sedimento', 'Iniciar HIDRATACION intensa de inmediato', 'Vigilar el POTASIO, que es lo que mata en las primeras horas', 'Monitorizar el electrocardiograma', 'Buscar y retirar la causa: farmacos, toxicos, inmovilizacion, convulsiones', 'Descartar sindrome compartimental si hubo aplastamiento', 'Si es recurrente, buscar una miopatia metabolica de base', 'En la elevacion asintomatica, repetir tras 7 dias sin ejercicio antes de estudiar']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En este tema hay dos errores que cuestan mucho: etiquetar de ELA lo que era una neuropatia motora multifocal o una mielopatia cervical, que si se tratan, y tratar como polimiositis lo que era una miositis por cuerpos de inclusion. Y en la rabdomiolisis, mirar la creatina cinasa y olvidar el potasio.',
    parametros: ['Localizar la debilidad antes de plantear ninguna etiologia', 'Buscar alteracion SENSITIVA, que es lo que delata al nervio', 'No descartar una miopatia porque la creatina cinasa sea normal', 'Pedir RESONANCIA CERVICAL antes de diagnosticar una ELA', 'Buscar BLOQUEOS DE CONDUCCION: la neuropatia motora multifocal es tratable', 'Pedir inmunofijacion y anti-GM1 ante un cuadro de motoneurona inferior puro', 'Explorar la cognicion y la conducta en la ELA', 'Plantear la gastrostomia ANTES de que la capacidad vital baje del 50%', 'Abrir pronto la conversacion sobre voluntades anticipadas', 'Hacer cribado CARDIACO anual en la distrofia miotonica, aunque la debilidad sea leve', 'Sospechar cuerpos de inclusion en la miositis asimetrica que no responde', 'En la rabdomiolisis, hidratar pronto y vigilar el POTASIO'],
    criterios_uci_general: 'Insuficiencia respiratoria por debilidad de la musculatura respiratoria, siempre dentro de un plan acordado con el paciente cuando la enfermedad es progresiva e incurable. Enfermedad intersticial rapidamente progresiva asociada a miopatia inflamatoria, sobre todo con anticuerpos anti-MDA5. Arritmias graves en la distrofia miotonica. Y en la rabdomiolisis, hiperpotasemia grave, fracaso renal con indicacion de depuracion, coagulacion intravascular diseminada y sindrome compartimental.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Trasplante pulmonar en la enfermedad intersticial terminal asociada a miopatia inflamatoria, en casos muy seleccionados. Trasplante cardiaco en distrofinopatias con miocardiopatia terminal y situacion respiratoria aceptable. En la ELA no procede.',
    prevencion: 'Primaria: control de los factores modificables donde existen, como el tabaco en la ELA y la exposicion a farmacos miotoxicos, y prevencion de la rabdomiolisis con hidratacion en el ejercicio extremo, precaucion con la combinacion de estatinas y fibratos, y busqueda activa del paciente que ha pasado horas inmovilizado. Secundaria: cribado CARDIACO y RESPIRATORIO periodico en las distrofias, especialmente el electrocardiograma anual en la distrofia miotonica, donde la muerte subita puede preceder a la incapacidad; y consejo genetico y estudio familiar. Terciaria: en la ELA, la atencion multidisciplinar, la ventilacion no invasiva, el soporte nutricional a tiempo y la planificacion anticipada de decisiones, que son las intervenciones que mas modifican la supervivencia y la calidad de vida.'
  }
};

export const compCites = {
  'Esclerosis lateral amiotrofica: diagnostico': [1, 2, 7, 8],
  'ELA: manejo multidisciplinar y decisiones anticipadas': [1, 3, 4, 5],
  'Enfoque de la debilidad muscular': [16, 15],
  'Distrofias musculares del adulto': [9, 10],
  'Miopatias inflamatorias y toxicas': [11, 12, 13],
  'Rabdomiolisis y creatina cinasa elevada': [14, 15]
};
export const estigmasTitulo = 'Signos y pistas ante un paciente con debilidad';
export const estigmas = [
  { s: 'Hiperreflexia en un miembro atrofico', p: 'La firma de la ELA', photo: null, desc: 'Es una combinacion que no ocurre en ninguna otra enfermedad: la atrofia indica motoneurona inferior y la hiperreflexia, superior. Encontrarla en el mismo miembro es lo que mas apoya el diagnostico en la exploracion.' },
  { s: 'Atrofia de la primera comisura de la mano', p: 'Muy visible y precoz', photo: null, desc: 'El musculo interoseo dorsal se atrofia pronto y el hueco entre el pulgar y el indice se hace evidente. Junto con las fasciculaciones y la torpeza para manipular objetos peque&#241;os, es una presentacion inicial tipica.' },
  { s: 'Fasciculaciones linguales', p: 'Motoneurona bulbar', photo: null, desc: 'Se buscan con la lengua en reposo dentro de la boca, no protruida, porque al sacarla el temblor fisiologico confunde. Su presencia junto con atrofia y disartria apunta a inicio bulbar, que tiene peor pronostico.' },
  { s: 'Alteracion sensitiva relevante', p: 'NO es una ELA', photo: null, desc: 'La ELA no produce alteracion sensitiva. Su presencia obliga a buscar otra cosa: mielopatia, neuropatia, o una combinacion de procesos. Junto con la disfuncion de esfinteres y la oftalmoparesia, forma la triada de lo que no encaja.' },
  { s: 'Bloqueos de conduccion en el electroneurograma', p: 'Neuropatia motora multifocal', photo: null, desc: 'Fuera de los puntos habituales de atrapamiento, definen una enfermedad TRATABLE con inmunoglobulinas que imita una ELA de motoneurona inferior. Buscarlos es la razon principal por la que el estudio neurofisiologico es obligado.' },
  { s: 'Debilidad proximal simetrica', p: 'Patron muscular', photo: null, desc: 'Cuesta subir escaleras, levantarse de una silla baja y peinarse. Con reflejos conservados, sin alteracion sensitiva y con creatina cinasa elevada, apunta al musculo. Es el patron mas frecuente de las miopatias.' },
  { s: 'Debilidad de cuadriceps y flexores de los dedos', p: 'Cuerpos de inclusion', photo: null, desc: 'Asimetrica, en mayores de 50 a&#241;os, con disfagia y creatina cinasa normal o poco elevada. Rompe la regla del patron proximal y NO responde a la inmunosupresion, de modo que confundirla con una polimiositis expone al paciente a a&#241;os de tratamiento inutil.' },
  { s: 'No puede soltar la mano tras el apreton', p: 'Miotonia', photo: null, desc: 'La dificultad para relajar el musculo tras la contraccion es el sello de la distrofia miotonica. Se explora tambien con la percusion de la eminencia tenar. Junto con ptosis, calvicie frontal y catarata precoz, dibuja el cuadro.' },
  { s: 'Catarata precoz con calvicie frontal', p: 'Distrofia miotonica', photo: null, desc: 'Son manifestaciones extramusculares de una enfermedad multisistemica. Su reconocimiento importa porque obliga a hacer cribado CARDIACO: los trastornos de la conduccion progresan en silencio y pueden causar muerte subita.' },
  { s: 'Papulas de Gottron y eritema en heliotropo', p: 'Dermatomiositis', photo: null, desc: 'Papulas violaceas sobre los nudillos y coloracion violacea de los parpados. Obligan a buscar debilidad proximal, a pedir tomografia por la enfermedad intersticial y a hacer cribado de neoplasia en el adulto.' },
  { s: 'Debilidad proximal con creatina cinasa normal', p: 'Pensar en corticoides', photo: null, desc: 'La miopatia esteroidea cursa con enzima normal, lo que despista si se usa la creatina cinasa como criterio de cribado. Tambien el hipotiroidismo y la miositis por cuerpos de inclusion pueden dar valores poco elevados.' },
  { s: 'Tira positiva para sangre sin hematies', p: 'Mioglobinuria', photo: null, desc: 'Lo que detecta la tira es mioglobina, no hemoglobina. Es el hallazgo que delata una rabdomiolisis en urgencias en cuestion de minutos y con un coste minimo, y obliga a hidratar y a mirar el potasio de inmediato.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Patron de la debilidad (calculadora disponible)': [16],
  'Escala funcional ALSFRS-R (calculadora disponible)': [6],
  'Indicaciones de ventilacion y gastrostomia (calculadora disponible)': [1, 3],
  'Enfoque de la creatina cinasa elevada (calculadora disponible)': [14, 15],
  'Criterios diagnosticos de Gold Coast para la ELA': [2],
  'Clasificacion de las miopatias inflamatorias': [11, 12]
};
export const escalaCalc = {
  'Patron de la debilidad (calculadora disponible)': 'patron-debilidad',
  'Escala funcional ALSFRS-R (calculadora disponible)': 'alsfrs-r',
  'Indicaciones de ventilacion y gastrostomia (calculadora disponible)': 'soporte-ela',
  'Enfoque de la creatina cinasa elevada (calculadora disponible)': 'ck-elevada'
};
export const compGroups = [
  { name: 'La motoneurona', items: ['Esclerosis lateral amiotrofica: diagnostico', 'ELA: manejo multidisciplinar y decisiones anticipadas'] },
  { name: 'El musculo', items: ['Enfoque de la debilidad muscular', 'Distrofias musculares del adulto', 'Miopatias inflamatorias y toxicas'] },
  { name: 'La urgencia', items: ['Rabdomiolisis y creatina cinasa elevada'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la esclerosis lateral amiotrofica, separada en diagnostico y manejo porque son dos problemas distintos: el primero consiste en no confundirla con las dos enfermedades tratables que la imitan, y el segundo en aplicar las medidas de soporte que si modifican la supervivencia. Las tres siguientes son el musculo: el metodo para localizar la debilidad, las distrofias, cuyo pronostico depende del cribado cardiaco mas que de la fuerza, y las miopatias adquiridas, que son las que mas se tratan y las que mas se etiquetan mal. La ultima es la urgencia del tema, donde lo que mata en las primeras horas no es el musculo sino el potasio.';
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
  root: { title: 'DEBILIDAD PROGRESIVA', color: '#5c5a2e', target: 'definicion' },
  branches: [
    { title: 'DONDE ESTA', sub: 'Cuatro datos lo localizan', color: '#5c5a2e', target: 'clasificacion', leaves: [
      { title: 'Proximal con enzima alta', sub: 'Musculo', color: '#5c5a2e', target: 'complicaciones' },
      { title: 'Distal con alteracion sensitiva', sub: 'Nervio', color: '#2e6b6b', target: 'complicaciones' },
      { title: 'Fasciculaciones e hiperreflexia', sub: 'Motoneurona', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Fluctuante y fatigable', sub: 'Union neuromuscular', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'ANTES DE DECIR ELA', sub: 'Descartar lo tratable', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Resonancia cervical', sub: 'La mielopatia se opera', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Buscar bloqueos', sub: 'La motora multifocal se trata', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Sin alteracion sensitiva', sub: 'Si la hay, no es ELA', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Explorar la cognicion', sub: 'Solapa con frontotemporal', color: '#6b4a8c', target: 'diagnostico' }
    ] },
    { title: 'LO QUE CAMBIA EL CURSO', sub: 'Soporte, no farmaco', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Unidad multidisciplinar', sub: 'Lo que mas prolonga la vida', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Ventilacion no invasiva', sub: 'Ante sintomas, sin esperar', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Gastrostomia a tiempo', sub: 'Antes de bajar del 50%', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Voluntades anticipadas', sub: 'Pronto, no al final', color: '#6b4a8c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 15], no_invasivos: [1, 6, 16], imagen: [1, 11] };
export const clasificacionCite = [1, 2, 6, 11];
export const seguimientoCite = [1, 10, 14];
