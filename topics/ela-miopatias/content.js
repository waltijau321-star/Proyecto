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
  titulo: 'ELA y Enfermedades del Músculo',
  subtitulo: 'Módulo 64 · Medicina Interna',
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
    <strong style="color:#5c5a2e;">Ante un paciente débil, cuatro localizaciones posibles y cuatro patrones distintos.</strong> <span style="color:var(--ink-dim);">Se separan con cuatro datos: la DISTRIBUCIÓN de la debilidad, los REFLEJOS, si hay o no alteración SENSITIVA, y la CREATINA CINASA.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5c5a2e22;border:1px solid #5c5a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5c5a2e;">MÚSCULO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">PROXIMAL</strong> y simétrica: cuesta subir escaleras, levantarse de la silla y peinarse. Reflejos conservados hasta fases avanzadas. <strong style="color:var(--ink);">SIN alteración sensitiva</strong>. Creatina cinasa ELEVADA en la mayoría.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#2e6b6b22;border:1px solid #2e6b6b;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#2e6b6b;">NERVIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">DISTAL</strong> (pie caído, torpeza de manos), <strong style="color:var(--ink);">ARREFLEXIA</strong> y <strong style="color:var(--ink);">ALTERACIÓN SENSITIVA</strong>, que es lo que más lo delata. Creatina cinasa normal o poco elevada.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">MOTONEURONA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mezcla que no ocurre en ningún otro sitio: <strong style="color:var(--ink);">FASCICULACIONES y atrofia</strong> (motoneurona inferior) junto con <strong style="color:var(--ink);">HIPERREFLEXIA y Babinski</strong> (superior), <strong>SIN alteración sensitiva</strong>. Creatina cinasa normal o poco elevada.</div>
    </div>
    <div style="display:grid;grid-template-columns:104px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">UNIÓN</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Debilidad <strong style="color:var(--ink);">FLUCTUANTE</strong> y fatigable, con predominio ocular y bulbar, reflejos normales y sin alteración sensitiva. Creatina cinasa NORMAL. Es el terreno de la miastenia y del síndrome de Lambert-Eaton.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos excepciones que rompen la regla y hay que conocer.</strong> La <strong>MIOPATÍA POR CUERPOS DE INCLUSION</strong> da debilidad ASIMÉTRICA y DISTAL (cuádriceps y flexores profundos de los dedos), con creatina cinasa normal o poco elevada, y por eso se confunde con una neuropatía o con una polimiositis que no responde. Y la <strong>MIOPATÍA POR CORTICOIDES</strong> da debilidad proximal con creatina cinasa <strong>NORMAL</strong>, lo que despista si se usa la enzima como criterio de cribado.
  </div>
</div>`;

const elaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">La ELA se diagnostica por una combinación que no ocurre en ninguna otra enfermedad:</strong> <span style="color:var(--ink-dim);">signos de motoneurona SUPERIOR e INFERIOR a la vez, que progresan, sin alteración sensitiva y sin explicación alternativa.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">MOTONEURONA INFERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Atrofia</strong> (muy visible en la primera comisura de la mano y en la lengua), <strong style="color:var(--ink);">FASCICULACIONES</strong>, calambres, debilidad e hipotonía. En el electromiograma, denervación activa y crónica en varias regiones.</div>
    </div>
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:4px;">MOTONEURONA SUPERIOR</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">HIPERREFLEXIA</strong> en un miembro atrófico, que es un hallazgo llamativo y muy característico. Espasticidad, clonus, signo de Babinski, reflejo mentoniano vivo y labilidad emocional.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LO QUE NO ENCAJA CON UNA ELA Y OBLIGA A BUSCAR OTRA COSA</div>
    <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Alteración sensitiva</strong> relevante. <strong style="color:var(--ink);">Disfunción de esfínteres</strong> precoz. <strong style="color:var(--ink);">Oftalmoparesia</strong>. Dolor como síntoma dominante. Ausencia de progresión. Y un patrón puramente de motoneurona INFERIOR, focal y con bloqueos de conducción, que puede ser una <strong style="color:#3f6b52;">NEUROPATÍA MOTORA MULTIFOCAL: es TRATABLE con inmunoglobulinas y confundirla con una ELA es el error más costoso del tema</strong>.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Lo que hay que descartar antes.</strong> Mielopatía cervical espondilotica (que da motoneurona superior en piernas e inferior en brazos y se opera), neuropatía motora multifocal, miastenia de predominio bulbar, miopatía por cuerpos de inclusion, enfermedad de Kennedy, paraproteinemia y linfoma.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Y algo que no siempre se explora: la COGNICIÓN.</strong> Una proporción importante de los pacientes tiene alteración cognitiva o conductual, y una minoría cumple criterios de degeneración frontotemporal. Comparten la expansión en <strong>C9orf72</strong>. Detectarlo cambia la comunicación, la planificación y el apoyo a la familia.
    </div>
  </div>
</div>`;

const manejoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">En la ELA, lo que más prolonga la supervivencia no es el fármaco.</strong> <span style="color:var(--ink-dim);">Es la atención en una unidad multidisciplinar, la ventilación no invasiva y el soporte nutricional. El riluzol añade un beneficio real pero modesto.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">EQUIPO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Unidad <strong style="color:var(--ink);">MULTIDISCIPLINAR</strong>: neurología, neumología, rehabilitación, logopedia, nutrición, terapia ocupacional, trabajo social y paliativos. Es la intervención que más se asocia a mayor supervivencia y mejor calidad de vida, y no es una recomendación decorativa.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RESPIRAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">VENTILACIÓN NO INVASIVA</strong>, que prolonga la supervivencia y mejora la calidad de vida, sobre todo sin afectación bulbar grave. Se valora con capacidad vital forzada, presión inspiratoria nasal, gasometría y oximetría nocturna, y se ofrece ANTE SÍNTOMAS aunque los numeros aun no lo exijan.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">COMER</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">GASTROSTOMÍA</strong>, y aquí el momento importa: hay que colocarla <strong style="color:#8c3a34;">ANTES de que la capacidad vital forzada baje del 50%</strong>, porque después el riesgo del procedimiento aumenta de forma marcada. Esperar a que el paciente ya no coma es esperar demasiado.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Síntomas que si se tratan bien.</strong> Sialorrea (anticolinérgicos, toxina botulínica en glándulas salivales), secreciones espesas, calambres, espasticidad, dolor, insomnio, ansiedad y <strong>labilidad emocional</strong> o afecto pseudobulbar, que angustia mucho al paciente y a la familia y que responde al tratamiento.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">La conversación que no se puede posponer.</strong> Voluntades anticipadas, preferencias sobre traqueostomía y sobre ventilación invasiva, y planificación del final de la vida: hay que abordarlas <strong>PRONTO</strong>, mientras el paciente todavía puede comunicarse con facilidad. Posponerla por no incomodar acaba dejando la decisión en manos de otros y en el peor momento.
    </div>
  </div>
</div>`;

const ckHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">RABDOMIÓLISIS</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Elevación marcada de creatina cinasa con mialgias, debilidad y <strong style="color:var(--ink);">ORINA OSCURA</strong>. El dato que la delata en urgencias: <strong>tira reactiva positiva para SANGRE con sedimento SIN hematies</strong>, porque lo que detecta es mioglobina. Riesgo de fracaso renal agudo, HIPERPOTASEMIA, hipocalcemia precoz y coagulopatía.</div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">ELEVACIÓN ASINTOMÁTICA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Hallazgo casual, sin síntomas. Antes de estudiar nada: <strong style="color:var(--ink);">REPETIR tras una semana sin ejercicio</strong>. Y tener en cuenta lo que la eleva sin que haya enfermedad: ejercicio reciente, masa muscular, sexo, origen etnico, inyecciones intramusculares y un electromiograma reciente.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">EL TRATAMIENTO DE LA RABDOMIÓLISIS ES LA HIDRATACIÓN, Y CUANTO ANTES</div>
    <div style="color:var(--ink-dim);line-height:1.6;">Sueroterapia intensa y precoz para mantener una diuresis abundante, con vigilancia estrecha del <strong style="color:var(--ink);">POTASIO</strong>, que es lo que puede matar en las primeras horas, y de la función renal. El bicarbonato y el manitol siguen siendo controvertidos y no sustituyen al volumen. Y hay que <strong>buscar la causa</strong>: aplastamiento, inmovilización prolongada, convulsiones, ejercicio extremo, golpe de calor, fármacos, tóxicos, infecciones y trastornos electrolíticos.</div>
  </div>
  <div style="padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Y en la elevación persistente y asintomática, lo primero es mirar la lista de fármacos.</strong> <strong>ESTATINAS</strong>, que producen desde mialgias con enzima normal hasta una miopatía necrotizante inmunomediada que <strong style="color:#8c3a34;">PERSISTE tras retirar el fármaco</strong> y necesita inmunosupresión. También colchicina, hidroxicloroquina, alcohol, antirretrovirales y, de forma destacada por lo fácil que es olvidarlo, el <strong>HIPOTIROIDISMO</strong>, que eleva la creatina cinasa y se corrige tratando el tiroides.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Este tema agrupa las enfermedades que producen debilidad <strong>crónica y progresiva</strong> por lesión de la motoneurona o del propio músculo. El punto de partida es el mismo para todas: un paciente que refiere que ha perdido fuerza. Lo que ordena el trabajo no es la lista de enfermedades posibles sino un método corto para localizar el problema.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: donde esta el problema.</strong></p>
<p style="margin:0 0 12px;">Cuatro localizaciones y cuatro patrones, que se separan con cuatro datos: la <strong>distribución</strong> (proximal en el músculo, distal en el nervio, fluctuante en la unión), los <strong>reflejos</strong>, la presencia o ausencia de <strong>alteración sensitiva</strong> (que es lo que más delata al nervio) y la <strong>creatina cinasa</strong>. Y conviene conocer dos excepciones que rompen la regla: la miopatía por cuerpos de inclusion, que es distal y asimétrica, y la miopatía por corticoides, que cursa con enzima normal.</p>
${figBlock('Figura 1', 'Músculo, nervio, motoneurona o unión: cuatro datos que los separan', dondeHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: la esclerosis lateral amiotrófica.</strong></p>
<p style="margin:0 0 12px;">Se reconoce por una combinación que no se da en ninguna otra enfermedad: signos de motoneurona <strong>superior e inferior a la vez</strong>, que progresan, sin alteración sensitiva y sin otra explicación. La hiperreflexia en un miembro atrófico es su firma. Y hay una lista de datos que <strong>no encajan</strong> y obligan a buscar otra cosa, entre ellos un patrón puramente de motoneurona inferior con bloqueos de conducción, que puede ser una neuropatía motora multifocal y que si tiene tratamiento.</p>
${figBlock('Figura 2', 'ELA: la combinación que la define y lo que no encaja', elaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: lo que de verdad cambia el curso de la ELA.</strong></p>
<p style="margin:0 0 12px;">No es el fármaco. Lo que más se asocia a mayor supervivencia y mejor calidad de vida es la atención en una <strong>unidad multidisciplinar</strong>, la <strong>ventilación no invasiva</strong> y el <strong>soporte nutricional</strong> con gastrostomía colocada a tiempo, es decir, antes de que la capacidad vital caiga por debajo del 50%. Y hay una conversación, la de las voluntades anticipadas, que hay que abrir pronto y que se pospone con demasiada frecuencia.</p>
${figBlock('Figura 3', 'ELA: equipo, ventilación, nutrición y la conversación que no se pospone', manejoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: la creatina cinasa elevada.</strong></p>
<p style="margin:0 0 12px;">Dos escenarios completamente distintos. La <strong>rabdomiólisis</strong>, donde la prioridad es la hidratación precoz y la vigilancia del potasio, y donde el dato que la delata en urgencias es una tira reactiva positiva para sangre con un sedimento sin hematies. Y la <strong>elevación asintomática</strong>, donde lo primero no es estudiar sino repetir la determinación tras una semana sin ejercicio y mirar la lista de fármacos y la función tiroidea.</p>
${figBlock('Figura 4', 'Rabdomiólisis y elevación asintomática: dos problemas distintos', ckHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar una ELA sin haber descartado la mielopatía cervical y la neuropatía motora multifocal, que son tratables. No dar por buena una debilidad proximal sin pedir creatina cinasa. No descartar una miopatía porque la enzima sea normal, porque la de corticoides y la de cuerpos de inclusion cursan así. No etiquetar de polimiositis resistente al tratamiento lo que puede ser una miopatía por cuerpos de inclusion. No retirar la estatina y olvidarse, porque la miopatía necrotizante inmunomediada persiste y necesita inmunosupresión. No pedir cribado cardiaco solo a las distrofias con debilidad avanzada: en la distrofia miotonica la muerte súbita puede preceder a la incapacidad. No esperar a que el paciente con ELA deje de comer para plantear la gastrostomía. No posponer la conversación sobre voluntades anticipadas. Y no tratar una rabdomiólisis mirando solo la creatina cinasa: lo que mata en las primeras horas es el <strong>potasio</strong>.</p>`;

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
      compensada: 'Debilidad progresiva que suele empezar de forma FOCAL y asimétrica: una mano torpe que deja caer objetos, un pie que se arrastra, o disartria y disfagia en la forma de inicio bulbar. Se acompaña de ATROFIA visible (muy característica en la primera comisura de la mano y en la lengua), FASCICULACIONES y calambres. Y de forma simultánea aparecen signos de motoneurona superior: espasticidad, hiperreflexia en un miembro atrófico, clonus, Babinski y reflejo mentoniano vivo. NO hay alteración sensitiva, NO hay afectación de esfínteres y NO hay oftalmoparesia, y esas tres ausencias son parte del diagnóstico.',
      descompensada: 'Debilidad PROXIMAL y simétrica de instauración lenta: cuesta subir escaleras, levantarse de una silla baja o del inodoro, y peinarse o tender la ropa. Puede haber mialgias, intolerancia al ejercicio y orina oscura tras el esfuerzo. En las distrofias hay que buscar además los datos extramusculares que orientan: en la distrofia miotonica, ptosis, cara alargada, calvicie frontal, cataratas, MIOTONIA (dificultad para relajar la mano tras un apreton), hipersomnia y trastornos de la conducción cardiaca. En la dermatomiositis, las papulas de Gottron y el eritema en heliotropo. Y en la miopatía por cuerpos de inclusion, debilidad ASIMÉTRICA de cuádriceps y de los flexores profundos de los dedos, con disfagia.'
    },
    laboratorio: [
      { prueba: 'Creatina cinasa', utilidad: 'Primera prueba ante toda debilidad proximal. Muy elevada en las distrofias, en la miopatía necrotizante inmunomediada y en la rabdomiólisis. Pero conviene saber que es NORMAL en la miopatía por corticoides y solo poco elevada en la de cuerpos de inclusion, de modo que un valor normal no descarta una miopatía.' },
      { prueba: 'Hormona tiroestimulante', utilidad: 'El HIPOTIROIDISMO produce debilidad proximal, mialgias y elevación de la creatina cinasa, y se corrige tratando el tiroides. Es una de las causas que más se olvida ante una elevación asintomática persistente y de las más fáciles de resolver.' },
      { prueba: 'Iones, calcio, magnesio, fósforo y función renal', utilidad: 'La hipopotasemia, la hipofosfatemia grave y la hipercalcemia producen debilidad. En la rabdomiólisis, la vigilancia del POTASIO es lo prioritario en las primeras horas, junto con la función renal, y le siguen la hipocalcemia precoz y la hipercalcemia de la fase de recuperación.' },
      { prueba: 'Sedimento urinario y tira reactiva', utilidad: 'El dato que delata la rabdomiólisis en urgencias: TIRA POSITIVA PARA SANGRE con sedimento SIN hematies, porque lo que se detecta es mioglobina y no hemoglobina. Es una comprobacion barata que cambia el diagnóstico en minutos.' },
      { prueba: 'Autoanticuerpos de miopatía inflamatoria', utilidad: 'Anti-Jo1 y otros antisintetasa (miositis con enfermedad intersticial, artritis, manos de mecánico y Raynaud), anti-Mi2 y anti-TIF1 gamma en la dermatomiositis (este último asociado a NEOPLASIA), y anti-HMGCR y anti-SRP en la miopatía necrotizante inmunomediada.' },
      { prueba: 'Estudio genético dirigido', utilidad: 'En la distrofia miotonica se busca la expansión CTG en el gen DMPK, que además explica el fenómeno de ANTICIPACIÓN en la familia. En las distrofias de cinturas y en la sospecha de ELA familiar, paneles ampliados. Siempre con consejo genético previo, porque el resultado afecta a los familiares.' },
      { prueba: 'Electroforesis con inmunofijación y anticuerpos anti-GM1', utilidad: 'Obligadas ante un cuadro de motoneurona inferior puro, porque buscan las dos causas TRATABLES que imitan una ELA: la neuropatía asociada a gammapatía monoclonal y la NEUROPATÍA MOTORA MULTIFOCAL, que responde a inmunoglobulinas.' },
      { prueba: 'Analítica básica y vitamina B12', utilidad: 'Hemograma, función hepática y vitamina B12, cuyo déficit produce mieloneuropatia con motoneurona superior en piernas y puede confundirse en parte con una ELA. Forma parte del descarte razonable antes de dar el diagnóstico.' }
    ],
    no_invasivos: [
      { metodo: 'Patrón de la debilidad (calculadora disponible)', interpretacion: 'Cruza distribución, reflejos, alteración sensitiva y creatina cinasa para localizar el problema en músculo, nervio, motoneurona o unión neuromuscular.', cutoff: 'Proximal, sin alteración sensitiva y con enzima alta: músculo. Fasciculaciones con hiperreflexia: motoneurona' },
      { metodo: 'Escala funcional ALSFRS-R (calculadora disponible)', interpretacion: 'Doce ítems de 0 a 4 que miden lenguaje, salivacion, deglución, escritura, alimentación, vestido, cama, marcha, escaleras, disnea, ortopnea y necesidad de soporte respiratorio.', cutoff: 'De 0 a 48 puntos. La VELOCIDAD de pérdida de puntos predice el pronóstico mejor que el valor aislado' },
      { metodo: 'Indicaciones de ventilación y gastrostomía (calculadora disponible)', interpretacion: 'Reúne los criterios respiratorios y nutricionales que deciden cuando ofrecer ventilación no invasiva y cuando colocar la gastrostomía, que es una decisión de MOMENTO y no solo de indicación.', cutoff: 'Gastrostomía ANTES de que la capacidad vital forzada baje del 50%' },
      { metodo: 'Enfoque de la creatina cinasa elevada (calculadora disponible)', interpretacion: 'Separa la rabdomiólisis de la elevación asintomática, cuantifica el riesgo renal y recuerda las causas no musculares y los fármacos.', cutoff: 'Repetir tras 7 días sin ejercicio antes de estudiar una elevación asintomática' },
      { metodo: 'Capacidad vital forzada y presión inspiratoria nasal', interpretacion: 'Son las medidas que gobiernan las decisiones respiratorias en la ELA y en las distrofias. La presión inspiratoria nasal es útil cuando la debilidad facial impide un buen sellado del boquilla y falsea la espirometría.', cutoff: 'Capacidad vital forzada por debajo del 80% con síntomas, o por debajo del 50%: valorar ventilación' },
      { metodo: 'Electromiograma y electroneurograma', interpretacion: 'En la motoneurona, denervación activa y crónica en varias regiones. En la miopatía, potenciales de unidad motora pequeños, breves y polifasicos con reclutamiento precoz. Y BUSCAN los bloqueos de conducción que definen la neuropatía motora multifocal.', cutoff: 'Bloqueos de conducción motora fuera de puntos de atrapamiento: apunta a neuropatía motora multifocal' },
      { metodo: 'Cribado cognitivo y conductual', interpretacion: 'Se hace en la ELA porque una proporción importante de los pacientes tiene alteración cognitiva o conductual y una minoría cumple criterios de degeneración frontotemporal, con la que comparte la expansión en C9orf72.', cutoff: 'Su detección cambia la comunicación, la planificación de decisiones y el apoyo al cuidador' }
    ],
    imagen: [
      { modalidad: 'Resonancia de columna cervical y craneal', hallazgos: 'OBLIGADA antes de diagnosticar una ELA. La mielopatía cervical espondilotica produce motoneurona superior en las piernas e inferior en los brazos, imita muy bien el cuadro y se OPERA. La resonancia craneal descarta lesiones del tronco y de la unión craneocervical.' },
      { modalidad: 'Resonancia muscular', hallazgos: 'Muestra el patrón de afectación (que músculos y en que orden), el edema en las miopatías inflamatorias activas y la sustitución grasa en las crónicas. Sirve además para elegir el músculo que se va a biopsiar, evitando los ya sustituidos por grasa y los normales.' },
      { modalidad: 'Ecografía muscular', hallazgos: 'A pie de cama, detecta FASCICULACIONES con más sensibilidad que la inspección, valora la atrofia y el aumento de ecogenicidad por sustitución fibroadiposa. Es rápida, no invasiva y cada vez más usada en la valoración inicial.' },
      { modalidad: 'Tomografía de tórax y cribado de neoplasia', hallazgos: 'En la dermatomiositis del adulto el cribado tumoral es obligado, sobre todo con anticuerpos anti-TIF1 gamma. En las miopatías inflamatorias, la tomografía de alta resolución busca además la enfermedad intersticial del síndrome antisintetasa, que marca el pronóstico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Estas enfermedades se clasifican primero por <strong>localización</strong>: motoneurona, músculo, nervio o unión. Dentro de la motoneurona, por la combinación de signos superiores e inferiores y por la región de inicio (bulbar, cervical, torácica o lumbosacra), que tiene valor pronóstico. Dentro del músculo, por <strong>mecanismo</strong>: genéticas (distrofias y miopatías metabólicas), inflamatorias, tóxicas y endocrinas, y por el <strong>patrón</strong> de debilidad, que en las miopatías es casi siempre proximal y simétrico con dos excepciones que hay que conocer. Y en paralelo, la <strong>gravedad funcional y respiratoria</strong>, que es lo que gobierna las decisiones prácticas.`,
    escalas: [
      { nombre: 'Patrón de la debilidad (calculadora disponible)', componentes: 'Distribución (proximal, distal, fluctuante), reflejos, presencia de alteración sensitiva, fasciculaciones, signos de motoneurona superior y creatina cinasa.', formula: 'Combinación de esos datos para localizar el problema en una de las cuatro estructuras.', interpretacion: 'La alteración SENSITIVA es lo que más delata al nervio. La combinación de fasciculaciones con hiperreflexia es exclusiva de la motoneurona. Y hay que conocer las excepciones: la miopatía por cuerpos de inclusion es distal y asimétrica, y la miopatía por corticoides cursa con creatina cinasa normal.' },
      { nombre: 'Escala funcional ALSFRS-R (calculadora disponible)', componentes: 'Doce ítems de 0 a 4: lenguaje, salivacion, deglución, escritura, manejo de cubiertos, vestido e higiene, girarse en la cama, caminar, subir escaleras, disnea, ortopnea e insuficiencia respiratoria.', formula: 'Suma de 0 a 48 puntos, donde 48 es función normal.', interpretacion: 'Lo que más informa NO es la puntuación aislada sino la VELOCIDAD de pérdida: la pendiente de caída por mes es uno de los mejores predictores de supervivencia. Se usa además como criterio de inclusion y como desenlace en los ensayos.' },
      { nombre: 'Indicaciones de ventilación y gastrostomía (calculadora disponible)', componentes: 'Síntomas de hipoventilación nocturna, capacidad vital forzada, presión inspiratoria nasal, gasometría, oximetría nocturna, pérdida de peso y disfagia.', formula: 'Ventilación no invasiva ante síntomas o ante deterioro de las medidas respiratorias. Gastrostomía antes de que la capacidad vital forzada caiga por debajo del 50%.', interpretacion: 'La ventilación no invasiva prolonga la supervivencia y mejora la calidad de vida, sobre todo sin afectación bulbar grave. En la gastrostomía lo determinante es el MOMENTO: colocada tarde, el riesgo del procedimiento aumenta mucho.' },
      { nombre: 'Enfoque de la creatina cinasa elevada (calculadora disponible)', componentes: 'Valor de la enzima en multiplos del limite alto, presencia de síntomas musculares, color de la orina, función renal, potasio y fármacos.', formula: 'Rabdomiólisis: elevación marcada con síntomas y riesgo renal. Elevación asintomática: repetir tras 7 días sin ejercicio antes de estudiar.', interpretacion: 'En la rabdomiólisis, la prioridad es la hidratación precoz y el POTASIO. En la elevación asintomática persistente, mirar fármacos (sobre todo estatinas) y función tiroidea antes de pedir nada más.' },
      { nombre: 'Criterios diagnósticos de Gold Coast para la ELA', componentes: 'Debilidad progresiva, signos de motoneurona superior e inferior, distribución por regiones y exclusión de otras causas.', formula: 'Debilidad progresiva documentada, más signos de motoneurona superior e inferior en al menos UNA región, o signos de motoneurona inferior en al menos DOS regiones, con estudios que descarten otras causas.', interpretacion: 'Simplifican y hacen más sensibles los criterios clásicos, lo que permite diagnosticar antes y ofrecer tratamiento y ensayos más pronto. La exclusión de otras causas sigue siendo parte del criterio y no un trámite.' },
      { nombre: 'Clasificación de las miopatías inflamatorias', componentes: 'Clínica, histología y autoanticuerpos.', formula: 'Dermatomiositis, miopatía necrotizante inmunomediada, síndrome antisintetasa, miositis por cuerpos de inclusion y polimiositis (hoy un diagnóstico mucho menos frecuente que antes).', interpretacion: 'La separación importa porque el pronóstico y el tratamiento difieren: la dermatomiositis obliga a cribado tumoral, el síndrome antisintetasa a buscar enfermedad intersticial, y la MIOSITIS POR CUERPOS DE INCLUSION no responde a la inmunosupresión, de modo que insistir con ella solo añade toxicidad.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Esclerosis lateral amiotrófica: diagnóstico',
      color: '#8c3a34',
      definicion: 'Enfermedad neurodegenerativa que afecta simultáneamente a la motoneurona superior y a la inferior, de curso progresivo, sin alteración sensitiva y sin tratamiento curativo.',
      fisiopatologia: 'Se produce degeneración de las motoneuronas del asta anterior medular, de los núcleos motores del tronco y de las neuronas piramidales corticales. El sustrato molecular más constante es la agregación citoplasmática de la proteína TDP-43, que se comparte con la degeneración frontotemporal y explica el solapamiento entre ambas enfermedades. Se han implicado el estrés oxidativo, la excitotoxicidad por glutamato (base racional del riluzol), la disfunción mitocondrial y del transporte axonal, y la propagación de la patología entre regiones contiguas, que explica que la debilidad se extienda desde el punto de inicio hacia las regiones vecinas.',
      epidemiologia: 'Incidencia baja pero de impacto enorme, con edad de inicio habitual entre la sexta y la septima década. Alrededor del 10% de los casos son familiares, y entre las causas genéticas la expansión en C9orf72 es la más frecuente y la que más se asocia a solapamiento con degeneración frontotemporal. La supervivencia mediana se mide en pocos años desde el inicio de los síntomas, con variabilidad amplia.',
      factores_riesgo: ['Edad avanzada', 'Sexo masculino, con diferencia que se atenua con la edad', 'Antecedente familiar de ELA o de degeneración frontotemporal', 'Expansión en C9orf72 y mutaciones en SOD1, TARDBP y FUS', 'Tabaquismo, que es el factor ambiental con más respaldo', 'Traumatismos craneoencefálicos repetidos', 'Exposición a metales pesados y a pesticidas', 'Servicio militar en algunas cohortes', 'Actividad física extrema en algunos estudios', 'Exposición a campos electromagneticos en el ambito laboral'],
      clinica: 'Inicio FOCAL y asimétrico: mano torpe, pie caído o disartria y disfagia en la forma bulbar. Atrofia visible, fasciculaciones y calambres junto con espasticidad, hiperreflexia y Babinski. La HIPERREFLEXIA EN UN MIEMBRO ATRÓFICO es la firma del cuadro. Sin alteración sensitiva, sin afectación de esfínteres y sin oftalmoparesia.',
      criterios_dx: 'Debilidad progresiva documentada con signos de motoneurona superior e inferior en al menos una región, o de motoneurona inferior en al menos dos regiones, tras EXCLUIR otras causas con las pruebas apropiadas. Ver la Figura 2 de Definición.',
      laboratorio: 'ELECTROFORESIS CON INMUNOFIJACIÓN y anticuerpos ANTI-GM1, que buscan las dos causas tratables que imitan el cuadro. Hormona tiroestimulante, vitamina B12, calcio y paratohormona, serología de VIH y creatina cinasa, que puede estar moderadamente elevada por la denervación.',
      imagen: 'RESONANCIA DE COLUMNA CERVICAL, obligada: la mielopatía espondilotica produce motoneurona superior en piernas e inferior en brazos, imita muy bien la ELA y se opera. Resonancia craneal para descartar lesiones del tronco.',
      complementarios: 'ELECTROMIOGRAMA Y ELECTRONEUROGRAMA, que documentan denervación activa y crónica en varias regiones y, sobre todo, BUSCAN BLOQUEOS DE CONDUCCIÓN que apunten a una neuropatía motora multifocal. Cribado cognitivo y conductual. Estudio genético con consejo previo en las formas familiares o de inicio precoz.',
      dx_diferencial: 'NEUROPATÍA MOTORA MULTIFOCAL con bloqueos de conducción, que es tratable con inmunoglobulinas y es el error más costoso; mielopatía cervical espondilotica, que se opera; miastenia gravis de predominio bulbar; miopatía por cuerpos de inclusion; enfermedad de Kennedy; neuropatía asociada a gammapatía monoclonal; hipertiroidismo e hiperparatiroidismo; linfoma; y síndrome pospolio.',
      tx_medico: 'Comunicación del diagnóstico de forma cuidadosa y en varias visitas, no en una sola. Derivación inmediata a una UNIDAD MULTIDISCIPLINAR, que es la intervención que más se asocia a mayor supervivencia. Información sobre asociaciones de pacientes y sobre recursos sociales.',
      tx_farmacologico: 'RILUZOL, que prolonga la supervivencia de forma modesta pero real y se inicia al diagnóstico. En algunos países esta disponible la edaravona. La mayor parte del beneficio terapéutico, sin embargo, viene del manejo de soporte y no del fármaco.',
      tx_intervencionista: 'Se detalla en la ficha de manejo. Nada en la fase diagnóstica.',
      criterios_uci: 'Excepcional y siempre con la voluntad del paciente conocida de antemano. Una insuficiencia respiratoria en un paciente sin decisiones anticipadas documentadas es la peor situación posible, y prevenirla es parte del trabajo clínico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ante un ingreso por cualquier motivo, valorar función respiratoria y deglución, revisar las voluntades anticipadas y evitar fármacos depresores respiratorios sin vigilancia.',
      seguimiento_ambulatorio: 'Revisión cada 2 o 3 meses en la unidad multidisciplinar, con escala funcional y medidas respiratorias en cada visita. Reevaluar el diagnóstico si la evolución no encaja con lo esperado.',
      pronostico: 'Malo, con supervivencia mediana de pocos años, aunque con variabilidad amplia. Son factores de peor pronóstico el inicio bulbar, la edad avanzada, la afectación respiratoria precoz, la pérdida rápida de puntos en la escala funcional y la alteración cognitiva asociada.',
      algoritmo: ['Buscar la combinación de motoneurona SUPERIOR e INFERIOR', 'Comprobar que NO hay alteración sensitiva ni de esfínteres ni oftalmoparesia', 'Documentar la PROGRESIÓN, que forma parte del diagnóstico', 'Hacer RESONANCIA CERVICAL para descartar mielopatía espondilotica', 'Pedir electromiograma en varias regiones', 'Buscar BLOQUEOS DE CONDUCCIÓN en el estudio', 'Pedir inmunofijación y anticuerpos anti-GM1', 'Descartar tiroides, paratiroides, B12 y VIH', 'Explorar la cognición y la conducta', 'Derivar de inmediato a una unidad multidisciplinar']
    },
    {
      nombre: 'ELA: manejo multidisciplinar y decisiones anticipadas',
      color: '#3f6b52',
      definicion: 'Conjunto de intervenciones de soporte que, en ausencia de tratamiento curativo, constituyen lo que más modifica la supervivencia y la calidad de vida en la esclerosis lateral amiotrófica.',
      fisiopatologia: 'La causa de muerte es casi siempre la insuficiencia respiratoria por debilidad diafragmática e intercostal, a la que se suman la tos ineficaz, la retención de secreciones y las neumonías por aspiración cuando hay afectación bulbar. La ventilación no invasiva actúa sobre ese mecanismo: descarga la musculatura respiratoria, corrige la hipoventilación nocturna y mejora el sueño, lo que se traduce en mayor supervivencia. El soporte nutricional actúa sobre otro determinante independiente, la pérdida de peso, que empeora el pronóstico por sí misma.',
      epidemiologia: 'La atención en unidades multidisciplinares se asocia de forma consistente a mayor supervivencia en estudios poblacionales. La ventilación no invasiva demostró beneficio en supervivencia y calidad de vida en un ensayo controlado, con un efecto mucho menor en los pacientes con afectación bulbar grave.',
      factores_riesgo: ['Afectación bulbar, que limita la tolerancia a la ventilación no invasiva', 'Pérdida de peso, que es un predictor independiente de mortalidad', 'Disfagia con atragantamientos', 'Tos ineficaz con retención de secreciones', 'Deterioro cognitivo, que dificulta la adherencia a la ventilación', 'Ausencia de cuidador o de red de apoyo', 'Retraso en la derivación a la unidad multidisciplinar', 'Sialorrea no tratada', 'Depresión y ansiedad no abordadas', 'Ausencia de voluntades anticipadas documentadas'],
      clinica: 'Hay que buscar de forma activa los síntomas de HIPOVENTILACIÓN NOCTURNA, porque el paciente no siempre los refiere: cefalea matutina, sueño poco reparador, somnolencia diurna, despertares frecuentes, pesadillas y ortopnea. La ortopnea es especialmente informativa porque traduce debilidad diafragmática.',
      criterios_dx: 'No aplica: es la fase de manejo. Las decisiones se toman con las medidas respiratorias, el peso y la deglución. Ver la Figura 3 de Definición.',
      laboratorio: 'Gasometría arterial o capilar para detectar hipercapnia, aunque es un signo tardío. Bicarbonato sérico elevado como pista de hipoventilación crónica. Control nutricional con albúmina y parámetros analíticos, siempre junto al peso.',
      imagen: 'Radiografía de tórax ante sospecha de aspiración o de neumonía. Videofluoroscopia de la deglución cuando hay dudas sobre la seguridad de la via oral.',
      complementarios: 'CAPACIDAD VITAL FORZADA en sedestación y en decúbito, PRESIÓN INSPIRATORIA NASAL (útil cuando la debilidad facial impide sellar bien la boquilla y falsea la espirometría) y OXIMETRÍA NOCTURNA. Peso en cada visita. Valoración de la deglución por logopedia.',
      dx_diferencial: 'Ante un deterioro respiratorio brusco, descartar neumonía por aspiración, embolia pulmonar, neumotórax y tapón mucoso, antes de asumir que es la progresión de la enfermedad.',
      tx_medico: 'UNIDAD MULTIDISCIPLINAR. Fisioterapia respiratoria y técnicas de asistencia a la tos, incluido el dispositivo de insuflacion y exuflacion mecánica, que es especialmente útil con tos ineficaz. Rehabilitación adaptada sin llegar a la fatiga. Adaptaciones del domicilio, ayudas técnicas y sistemas de comunicación aumentativa, que hay que introducir ANTES de que el habla se pierda.',
      tx_farmacologico: 'Riluzol. Para la SIALORREA, anticolinérgicos y toxina botulínica en glándulas salivales. Para las secreciones espesas, mucoliticos y buena hidratación. Para los calambres, la espasticidad y el dolor, el tratamiento correspondiente. Para la LABILIDAD EMOCIONAL, que angustia mucho a la familia, existe tratamiento eficaz y conviene ofrecerlo. Morfina y benzodiacepinas para la disnea en la fase final, ajustadas y sin miedo, dentro de un plan paliativo.',
      tx_intervencionista: 'VENTILACIÓN NO INVASIVA, que prolonga la supervivencia y mejora la calidad de vida. GASTROSTOMÍA, con el MOMENTO como factor crítico: antes de que la capacidad vital forzada baje del 50%. Traqueostomía con ventilación invasiva solo tras una decisión informada y anticipada, porque cambia por completo la trayectoria del paciente y de la familia.',
      criterios_uci: 'Solo dentro de un plan acordado previamente con el paciente. Sin voluntades anticipadas documentadas, una insuficiencia respiratoria aguda obliga a decidir en urgencias y sin poder consultar al paciente, que es exactamente lo que hay que evitar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Continuar la ventilación no invasiva domiciliaria durante el ingreso. Prevenir la aspiración. Revisar las voluntades anticipadas al ingreso y no en el momento de la crisis. Evitar opioides y benzodiacepinas sin vigilancia fuera de un contexto paliativo definido.',
      seguimiento_ambulatorio: 'Revisión cada 2 o 3 meses con escala funcional, peso y medidas respiratorias. Adelantarse a las necesidades en lugar de reaccionar a ellas: comunicación, movilidad, nutrición y respiración se planifican antes de que fallen.',
      pronostico: 'La enfermedad sigue siendo progresiva, pero el conjunto de estas medidas modifica de forma clara tanto la supervivencia como la calidad de vida, mucho más que cualquier fármaco disponible hoy.',
      algoritmo: ['Derivar a una unidad MULTIDISCIPLINAR desde el diagnóstico', 'Medir capacidad vital forzada y presión inspiratoria nasal en cada visita', 'Preguntar de forma activa por síntomas de hipoventilación nocturna', 'Ofrecer ventilación no invasiva ante síntomas, sin esperar a los numeros', 'Pesar al paciente en cada visita', 'Plantear la gastrostomía ANTES de que la capacidad vital baje del 50%', 'Tratar sialorrea, secreciones, calambres y labilidad emocional', 'Introducir sistemas de comunicación antes de perder el habla', 'Abrir PRONTO la conversación sobre voluntades anticipadas', 'Integrar cuidados paliativos desde fases tempranas, no al final']
    },
    {
      nombre: 'Enfoque de la debilidad muscular',
      color: '#5c5a2e',
      definicion: 'Método de aproximación al paciente que consulta por pérdida de fuerza, basado en localizar la lesión antes de plantear ninguna etiología.',
      fisiopatologia: 'La distribución de la debilidad refleja la estructura dañada. El músculo esquelético proximal tiene fibras grandes con alta demanda metabólica y se afecta primero en los procesos difusos del músculo, lo que da el patrón proximal y simétrico. El nervio periférico sigue la regla de la longitud y da patrón distal. La motoneurona combina signos superiores e inferiores porque degeneran ambas poblaciones. Y la unión neuromuscular produce fatigabilidad porque el fallo depende del uso repetido.',
      epidemiologia: 'La debilidad es un motivo de consulta frecuente y muchas veces mal caracterizado, porque el paciente llama debilidad tanto a la pérdida de fuerza como al cansancio, al mareo o a la disnea. Precisar de que habla es el primer paso y evita estudios innecesarios.',
      factores_riesgo: ['Consumo de estatinas y de otros fármacos miotoxicos', 'Corticoterapia prolongada', 'Hipotiroidismo e hipertiroidismo', 'Alteraciones electrolíticas: potasio, fósforo, calcio y magnesio', 'Consumo excesivo de alcohol', 'Enfermedad renal crónica', 'Enfermedades autoinmunes', 'Antecedente familiar de enfermedad neuromuscular', 'Neoplasia conocida u oculta', 'Inmovilización prolongada y estancia en cuidados críticos'],
      clinica: 'Primero hay que precisar QUE llama debilidad el paciente. Después, la distribución: dificultad para subir escaleras y levantarse de la silla apunta a proximal y a músculo; tropiezos y torpeza de manos apuntan a distal y a nervio; la fluctuación a lo largo del dia apunta a la unión. Y hay que buscar de forma activa fasciculaciones, atrofia, signos de motoneurona superior y alteración sensitiva.',
      criterios_dx: 'No hay criterios únicos: es un método. Cuatro preguntas ordenan el caso: distribución, reflejos, sensibilidad y creatina cinasa. Ver la Figura 1 de Definición.',
      laboratorio: 'CREATINA CINASA como primera prueba ante debilidad proximal. Hormona tiroestimulante, iones con calcio, magnesio y fósforo, función renal y hepática, hemograma y vitamina D. Autoanticuerpos y estudio genético según la orientación.',
      imagen: 'Resonancia muscular para definir el patrón de afectación y elegir el sitio de biopsia. Ecografía muscular a pie de cama, útil para detectar fasciculaciones y valorar la atrofia.',
      complementarios: 'ELECTROMIOGRAMA Y ELECTRONEUROGRAMA, que separan miopatía de neuropatía y de enfermedad de motoneurona. BIOPSIA MUSCULAR cuando el diagnóstico no se alcanza de otro modo, eligiendo el músculo con ayuda de la imagen y evitando los ya sustituidos por grasa o recientemente pinchados en el electromiograma.',
      dx_diferencial: 'Fatiga sin debilidad real (que es lo más frecuente en la consulta y no requiere este estudio), síndrome de fatiga crónica, depresión, anemia, insuficiencia cardiaca, enfermedad respiratoria, dolor que limita el movimiento y desacondicionamiento físico.',
      tx_medico: 'Retirada de los fármacos implicados. Corrección de las alteraciones metabólicas y endocrinas. Rehabilitación adaptada al tipo de enfermedad, evitando el ejercicio excéntrico intenso en las miopatías.',
      tx_farmacologico: 'El específico de cada causa. La regla general es no iniciar inmunosupresión antes de haber caracterizado bien el cuadro, porque etiquetar de miopatía inflamatoria lo que no lo es expone al paciente a una toxicidad inútil.',
      tx_intervencionista: 'Biopsia muscular en casos seleccionados.',
      criterios_uci: 'Debilidad con afectación respiratoria o bulbar, sea cual sea la causa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'En el paciente crítico, la debilidad adquirida en cuidados intensivos es muy frecuente y se previene con movilización precoz, control glucémico y reducción de la sedación y de los bloqueantes neuromusculares.',
      seguimiento_ambulatorio: 'Reevaluar el patrón si la evolución no encaja: una debilidad proximal que se vuelve asimétrica y distal obliga a replantear el diagnóstico hacia una miopatía por cuerpos de inclusion.',
      pronostico: 'Depende por completo de la causa. Lo que más mejora el pronóstico global es identificar pronto las causas tratables, que son más de las que parece: fármacos, endocrinas, electrolíticas e inflamatorias.',
      algoritmo: ['Precisar QUE llama debilidad el paciente', 'Determinar la DISTRIBUCIÓN: proximal, distal o fluctuante', 'Explorar los REFLEJOS', 'Buscar alteración SENSITIVA, que delata al nervio', 'Buscar fasciculaciones y signos de motoneurona superior', 'Pedir CREATINA CINASA, función tiroidea e iones', 'Revisar la lista de FÁRMACOS, sobre todo estatinas y corticoides', 'Pedir electromiograma para separar miopatía de neuropatía', 'Usar la resonancia muscular para elegir el sitio de biopsia', 'No iniciar inmunosupresión sin haber caracterizado el cuadro']
    },
    {
      nombre: 'Distrofias musculares del adulto',
      color: '#6b4a8c',
      definicion: 'Miopatías hereditarias de curso progresivo, entre las que la distrofia miotonica es la más frecuente en el adulto y la que más afectación extramuscular presenta.',
      fisiopatologia: 'En la distrofia miotonica tipo 1, una expansión de tripletes CTG en la región no traducida del gen DMPK genera un ARN tóxico que secuestra proteínas reguladoras del corte y empalme, lo que altera la maduración de múltiples ARN mensajeros en distintos tejidos. Eso explica que sea una enfermedad MULTISISTÉMICA y no solo muscular: corazón, cristalino, sistema endocrino, sistema nervioso central y músculo liso. La longitud de la expansión se correlaciona con la gravedad y tiende a aumentar entre generaciones, lo que produce el fenómeno de ANTICIPACIÓN.',
      epidemiologia: 'La distrofia miotonica tipo 1 es la distrofia muscular más frecuente del adulto. Las distrofias de cinturas son un grupo heterogéneo y la facioescapulohumeral es también frecuente. Muchos pacientes llegan al diagnóstico tarde, y en la distrofia miotonica no es raro que el diagnóstico se haga a partir de un familiar afectado o de un hallazgo cardiológico.',
      factores_riesgo: ['Antecedente familiar, con patrón autosómico dominante en la distrofia miotonica y en la facioescapulohumeral', 'Fenómeno de ANTICIPACIÓN en la distrofia miotonica', 'Consanguinidad en las formas recesivas', 'Sexo masculino en las distrofinopatias ligadas al cromosoma X', 'Ausencia de consejo genético previo en la familia', 'Retraso diagnóstico', 'Ausencia de cribado cardiaco y respiratorio', 'Anestesia general sin conocer el diagnóstico', 'Embarazo no planificado en la distrofia miotonica', 'Comorbilidad respiratoria añadida'],
      clinica: 'DISTROFIA MIOTONICA TIPO 1: debilidad DISTAL y facial, ptosis, cara alargada, calvicie frontal, MIOTONIA (dificultad para relajar la mano tras un apreton o tras la percusión), cataratas subcapsulares, hipersomnia, diabetes, infertilidad y, sobre todo, TRASTORNOS DE LA CONDUCCIÓN CARDIACA. FACIOESCAPULOHUMERAL: debilidad facial, escapula alada y afectación del humero, con asimetría característica. CINTURAS: debilidad proximal simétrica con creatina cinasa elevada. BECKER: distrofinopatia más leve en varones, con miocardiopatía que puede ser desproporcionada a la debilidad.',
      criterios_dx: 'Clínica compatible más ESTUDIO GENÉTICO dirigido, que ha desplazado a la biopsia en la mayoría de los casos. En la distrofia miotonica, la miotonia clínica y electromiografica orienta de forma casi definitiva.',
      laboratorio: 'Creatina cinasa, muy elevada en las distrofias de cinturas y solo moderadamente en la distrofia miotonica. ESTUDIO GENÉTICO dirigido con consejo previo. En la distrofia miotonica, además: glucemia y hemoglobina glucosilada, función tiroidea, testosterona e inmunoglobulinas.',
      imagen: 'Resonancia muscular para definir el patrón de afectación, que en muchas distrofias es característico y orienta el estudio genético. ECOCARDIOGRAMA como parte del cribado cardiaco.',
      complementarios: 'ELECTROCARDIOGRAMA ANUAL Y HOLTER en la distrofia miotonica, porque los trastornos de la conducción progresan de forma silente y pueden causar MUERTE SÚBITA. Estudio respiratorio con capacidad vital y valoración de hipoventilación nocturna. Valoración oftalmológica para las cataratas. Estudio del sueño ante hipersomnia.',
      dx_diferencial: 'Miopatías inflamatorias, miopatías metabólicas, miopatía por cuerpos de inclusion, distrofias miotonicas entre si, y en la debilidad facial, miastenia y miopatías mitocondriales.',
      tx_medico: 'No hay tratamiento curativo. El manejo es de SOPORTE y de vigilancia de las complicaciones sistémicas, que es donde se gana. Rehabilitación adaptada, ortesis, apoyo respiratorio cuando procede y consejo genético a la familia.',
      tx_farmacologico: 'Sintomático. Para la miotonia sintomática existen opciones farmacológicas, aunque muchos pacientes no la refieren como problema principal. Tratamiento de la diabetes, de la hipersomnia y de las demás manifestaciones sistémicas.',
      tx_intervencionista: 'MARCAPASOS o DESFIBRILADOR en la distrofia miotonica según los hallazgos de la conducción, decisión que puede salvar la vida y que depende del cribado. Ventilación no invasiva ante hipoventilación. Cirugía de cataratas.',
      criterios_uci: 'Insuficiencia respiratoria y arritmias graves. Estos pacientes tienen además RIESGO ANESTÉSICO aumentado, con sensibilidad a sedantes y opioides y riesgo de complicaciones respiratorias posoperatorias.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma habitual, salvo trasplante cardiaco en distrofinopatias con miocardiopatía terminal y situación respiratoria aceptable.',
      seguimiento_hospitalario: 'ALERTA ANESTÉSICA en la historia. Ante cualquier cirugía, informar al equipo del diagnóstico: hay riesgo aumentado de complicaciones respiratorias, sensibilidad a la sedación y arritmias perioperatorias.',
      seguimiento_ambulatorio: 'Cribado CARDIACO y RESPIRATORIO periódico en todas las distrofias, con independencia de que la debilidad de extremidades sea leve. Consejo genético y estudio familiar. Valoración multidisciplinar.',
      pronostico: 'Muy variable según el tipo. En la distrofia miotonica, la mortalidad se concentra en las complicaciones CARDIACAS y RESPIRATORIAS, y no en la debilidad de extremidades, lo que convierte el cribado en la intervención más útil.',
      algoritmo: ['Buscar los datos EXTRAMUSCULARES que orientan el tipo', 'Explorar la MIOTONIA con el apreton de manos y la percusión', 'Preguntar por catarata precoz, calvicie, hipersomnia y diabetes', 'Reconstruir el árbol familiar y buscar ANTICIPACIÓN', 'Pedir creatina cinasa y estudio GENÉTICO dirigido', 'Hacer ELECTROCARDIOGRAMA y valorar Holter y ecocardiograma', 'Repetir el cribado cardiaco de forma ANUAL en la distrofia miotonica', 'Valorar función respiratoria e hipoventilación nocturna', 'Marcar la ALERTA ANESTÉSICA en la historia', 'Ofrecer consejo genético y estudio a la familia']
    },
    {
      nombre: 'Miopatías inflamatorias y tóxicas',
      color: '#8a6a1f',
      definicion: 'Miopatías adquiridas de mecanismo inmunitario o por fármacos y tóxicos, que constituyen el grupo más relevante en la práctica porque muchas son tratables.',
      fisiopatologia: 'En la dermatomiositis, el daño es fundamentalmente vascular y mediado por complemento sobre los capilares del perimisio, lo que produce atrofia perifascicular y explica las manifestaciones cutáneas. En la miopatía necrotizante inmunomediada, los autoanticuerpos (anti-HMGCR, anti-SRP) se dirigen contra el propio músculo y producen necrosis de fibras con escaso infiltrado. En la miositis por cuerpos de inclusion coexisten un componente inflamatorio y otro degenerativo con acumulo proteico, y ese componente degenerativo es el que explica que NO responda a la inmunosupresión.',
      epidemiologia: 'Las miopatías inflamatorias son poco frecuentes pero importantes por su potencial de tratamiento. La miositis por cuerpos de inclusion es la miopatía adquirida más frecuente por encima de los 50 años y se diagnostica tarde, con frecuencia tras años de tratamiento inmunosupresor ineficaz por una etiqueta errónea de polimiositis.',
      factores_riesgo: ['Tratamiento con ESTATINAS para la miopatía necrotizante inmunomediada', 'Corticoterapia prolongada para la miopatía esteroidea', 'Colchicina, hidroxicloroquina, antirretrovirales y alcohol', 'Neoplasia oculta, sobre todo en la dermatomiositis', 'Anticuerpos anti-TIF1 gamma, asociados a neoplasia', 'Enfermedad autoinmune conocida', 'Inhibidores del punto de control inmunitario', 'Edad superior a 50 años para la miositis por cuerpos de inclusion', 'Hipotiroidismo', 'Insuficiencia renal, que aumenta la exposición a fármacos miotoxicos'],
      clinica: 'DERMATOMIOSITIS: debilidad proximal con papulas de Gottron, eritema en heliotropo, signo del chal y manos de mecánico. SÍNDROME ANTISINTETASA: miositis con enfermedad pulmonar intersticial, artritis, fenómeno de Raynaud y fiebre. MIOPATÍA NECROTIZANTE: debilidad proximal marcada con creatina cinasa muy alta. MIOSITIS POR CUERPOS DE INCLUSION: debilidad ASIMÉTRICA de cuádriceps y de FLEXORES PROFUNDOS DE LOS DEDOS, con disfagia, en mayores de 50 años. MIOPATÍA POR CORTICOIDES: debilidad proximal con creatina cinasa NORMAL.',
      criterios_dx: 'Combinación de clínica, creatina cinasa, autoanticuerpos, resonancia muscular, electromiograma y, cuando hace falta, biopsia. Los autoanticuerpos han cambiado la clasificación y con frecuencia evitan la biopsia.',
      laboratorio: 'Creatina cinasa y aldolasa. PANEL DE AUTOANTICUERPOS de miositis: anti-Jo1 y otros antisintetasa, anti-Mi2, anti-TIF1 gamma, anti-MDA5, anti-HMGCR y anti-SRP. Función tiroidea. Hemograma, función hepática y renal.',
      imagen: 'RESONANCIA MUSCULAR con edema en la enfermedad activa y sustitución grasa en la crónica, útil además para elegir el músculo a biopsiar. TOMOGRAFÍA DE ALTA RESOLUCIÓN buscando enfermedad intersticial, sobre todo con anticuerpos antisintetasa o anti-MDA5. CRIBADO DE NEOPLASIA en la dermatomiositis del adulto.',
      complementarios: 'Electromiograma con patrón miopático y actividad espontánea. BIOPSIA MUSCULAR cuando el diagnóstico no queda claro con clínica y anticuerpos, o cuando se sospecha miositis por cuerpos de inclusion, donde es especialmente útil. Capilaroscopia en la sospecha de conectivopatia.',
      dx_diferencial: 'Distrofias musculares de inicio tardío, miopatías metabólicas, hipotiroidismo, miopatía por corticoides, polimialgia reumática (que da dolor y rigidez sin debilidad real ni elevación de la enzima) y enfermedad de motoneurona.',
      tx_medico: 'Rehabilitación, que hoy se recomienda de forma precoz y no después de controlar la inflamación. Protección solar en la dermatomiositis. Valoración de la deglución, porque la disfagia empeora el pronóstico. Cribado de neoplasia y su repetición periódica en la dermatomiositis.',
      tx_farmacologico: 'CORTICOIDES como primera línea en las formas inflamatorias, con un ahorrador (metotrexato, azatioprina o micofenolato) añadido pronto. Inmunoglobulinas intravenosas, especialmente útiles en la dermatomiositis y en la miopatía necrotizante. Rituximab en la refractaria. En la MIOPATÍA POR ESTATINAS: retirar el fármaco; si es una miopatía necrotizante inmunomediada con anti-HMGCR, la debilidad PERSISTE tras la retirada y necesita inmunosupresión. En la MIOSITIS POR CUERPOS DE INCLUSION, la inmunosupresión NO es eficaz y solo añade toxicidad.',
      tx_intervencionista: 'Tratamiento de la neoplasia asociada cuando se identifica. Manejo de la disfagia.',
      criterios_uci: 'Insuficiencia respiratoria por enfermedad intersticial rápidamente progresiva, sobre todo con anticuerpos anti-MDA5, que puede ser fulminante. Debilidad respiratoria grave y aspiración.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante pulmonar en la enfermedad intersticial terminal asociada a miopatía inflamatoria, en casos muy seleccionados.',
      seguimiento_hospitalario: 'Ante una miopatía inflamatoria con disnea, pensar en enfermedad intersticial y no solo en debilidad respiratoria. Con anti-MDA5, la enfermedad intersticial puede progresar en semanas y exige tratamiento agresivo precoz.',
      seguimiento_ambulatorio: 'Seguimiento con fuerza y función, no solo con la creatina cinasa, que puede disociarse de la clínica. Vigilancia de la toxicidad del tratamiento y repetición del cribado tumoral en la dermatomiositis.',
      pronostico: 'Bueno en las formas inflamatorias tratadas a tiempo. Peor con enfermedad intersticial asociada, con neoplasia y en la miositis por cuerpos de inclusion, que progresa de forma lenta pero inexorable y no responde al tratamiento inmunosupresor.',
      algoritmo: ['Confirmar debilidad proximal con creatina cinasa elevada', 'Buscar las lesiones cutáneas de la dermatomiositis', 'Revisar SIEMPRE la lista de fármacos, sobre todo estatinas y corticoides', 'Pedir el panel de autoanticuerpos de miositis', 'Pedir tomografía de alta resolución si hay antisintetasa o disnea', 'Hacer CRIBADO DE NEOPLASIA en la dermatomiositis del adulto', 'Usar resonancia muscular para elegir el sitio de biopsia', 'Sospechar cuerpos de inclusion si es asimétrica y afecta a cuádriceps y dedos', 'Iniciar corticoide con ahorrador precoz en las formas inflamatorias', 'NO insistir con inmunosupresión en la miositis por cuerpos de inclusion']
    },
    {
      nombre: 'Rabdomiólisis y creatina cinasa elevada',
      color: '#8c3a5c',
      definicion: 'Necrosis de fibras musculares con liberación de su contenido a la circulación (rabdomiólisis), y su contrapunto en la práctica ambulatoria, la elevación asintomática y persistente de creatina cinasa.',
      fisiopatologia: 'La lesión de la fibra muscular libera potasio, fósforo, creatina cinasa y MIOGLOBINA. La mioglobina filtra por el glomerulo y daña el riñón por tres vías: obstrucción tubular por cilindros, toxicidad directa sobre el epitelio tubular y vasoconstricción renal, agravadas por la hipovolemia que acompaña al secuestro de líquido en el músculo lesionado. Ese mecanismo explica por que el tratamiento es la HIDRATACIÓN precoz y por que el retraso se traduce en fracaso renal. El potasio liberado puede producir arritmias mortales en las primeras horas.',
      epidemiologia: 'La rabdomiólisis es frecuente en urgencias y en cuidados críticos, con causas que van del traumatismo y la inmovilización prolongada al ejercicio extremo, las convulsiones, el golpe de calor y los fármacos. Una proporción relevante desarrolla fracaso renal agudo, y ese riesgo se reduce de forma clara con hidratación precoz.',
      factores_riesgo: ['Aplastamiento e inmovilización prolongada, incluido el paciente que pasa horas en el suelo', 'Ejercicio extremo o no habituado, sobre todo con calor', 'Convulsiones prolongadas y agitación intensa', 'Golpe de calor y síndrome neuroléptico maligno', 'Consumo de alcohol, cocaína y otras drogas', 'ESTATINAS, sobre todo combinadas con fibratos o con inhibidores del citocromo', 'Hipopotasemia e hipofosfatemia', 'Infecciones, sobre todo viricas', 'Miopatía metabólica de base, que hay que sospechar si es recurrente', 'Deshidratación previa'],
      clinica: 'La triada clásica de mialgias, debilidad y ORINA OSCURA esta completa en una minoría de los pacientes, de modo que hay que sospecharla por el contexto. En la elevación ASINTOMÁTICA no hay síntomas por definición: es un hallazgo casual en una analítica pedida por otro motivo.',
      criterios_dx: 'Elevación marcada de creatina cinasa en el contexto adecuado. El dato practico que la delata en urgencias es una TIRA REACTIVA POSITIVA PARA SANGRE con un SEDIMENTO SIN HEMATIES. Ver la Figura 4 de Definición.',
      laboratorio: 'Creatina cinasa seriada, POTASIO (la prioridad en las primeras horas), calcio, fósforo, ácido úrico, función renal, gasometría, coagulación (por el riesgo de coagulación intravascular diseminada) y sedimento urinario. En la elevación asintomática: repetir tras reposo, función tiroidea y revisión de fármacos.',
      imagen: 'No suele ser necesaria. Resonancia muscular si hay que documentar la extensión o si se sospecha un síndrome compartimental, que es una complicación que requiere cirugía urgente.',
      complementarios: 'Vigilancia de la diuresis y monitorización electrocardiográfica por la hiperpotasemia. En la rabdomiólisis RECURRENTE o desencadenada por esfuerzos moderados, hay que buscar una miopatía metabólica de base con estudio dirigido.',
      dx_diferencial: 'De la orina oscura: hematuria (con hematies en el sedimento), hemoglobinuria, porfiria y algunos fármacos y alimentos. De la elevación asintomática de la enzima: ejercicio reciente, inyección intramuscular, electromiograma reciente, macro-creatina cinasa, hipotiroidismo, fármacos, y las miopatías subclínicas y el estado de portador de distrofinopatia.',
      tx_medico: 'HIDRATACIÓN INTENSA Y PRECOZ con suero salino para mantener una diuresis abundante, que es la intervención que previene el fracaso renal y cuyo retraso lo condiciona. Vigilancia estrecha del potasio y de la función renal. Retirada del fármaco o del tóxico responsable. Corrección de la hipovolemia y del trastorno electrolítico.',
      tx_farmacologico: 'La sueroterapia es el tratamiento. El bicarbonato para alcalinizar la orina y el manitol siguen siendo CONTROVERTIDOS y no sustituyen al volumen. Tratamiento de la hiperpotasemia según protocolo. Evitar fármacos nefrotóxicos.',
      tx_intervencionista: 'Terapia de reemplazo renal si hay fracaso renal con indicación, sobre todo por hiperpotasemia refractaria o sobrecarga de volumen. FASCIOTOMIA urgente en el síndrome compartimental, que hay que buscar de forma activa en la rabdomiólisis por aplastamiento.',
      criterios_uci: 'Hiperpotasemia grave, fracaso renal agudo con indicación de depuración, inestabilidad hemodinámica, coagulación intravascular diseminada y síndrome compartimental.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica; el fracaso renal de la rabdomiólisis suele ser reversible con soporte.',
      seguimiento_hospitalario: 'Balance hídrico estricto y controles analíticos seriados. Vigilar la hipocalcemia de la fase inicial, que NO se corrige de rutina salvo que sea sintomática, porque el calcio se moviliza después y puede producir hipercalcemia en la fase de recuperación.',
      seguimiento_ambulatorio: 'Tras el episodio, revisar la causa y prevenir la recurrencia. En la elevación asintomática persistente: REPETIR tras 7 días sin ejercicio, revisar fármacos y pedir función tiroidea antes de plantear ningún otro estudio.',
      pronostico: 'Bueno con tratamiento precoz. El fracaso renal suele ser reversible. El pronóstico empeora con el retraso en la hidratación, con la causa de base y con las complicaciones electrolíticas.',
      algoritmo: ['Sospecharla por el CONTEXTO, no solo por la triada clásica', 'Pedir creatina cinasa, potasio, función renal y sedimento', 'Comprobar la tira positiva para sangre SIN hematies en el sedimento', 'Iniciar HIDRATACIÓN intensa de inmediato', 'Vigilar el POTASIO, que es lo que mata en las primeras horas', 'Monitorizar el electrocardiograma', 'Buscar y retirar la causa: fármacos, tóxicos, inmovilización, convulsiones', 'Descartar síndrome compartimental si hubo aplastamiento', 'Si es recurrente, buscar una miopatía metabólica de base', 'En la elevación asintomática, repetir tras 7 días sin ejercicio antes de estudiar']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En este tema hay dos errores que cuestan mucho: etiquetar de ELA lo que era una neuropatía motora multifocal o una mielopatía cervical, que si se tratan, y tratar como polimiositis lo que era una miositis por cuerpos de inclusion. Y en la rabdomiólisis, mirar la creatina cinasa y olvidar el potasio.',
    parametros: ['Localizar la debilidad antes de plantear ninguna etiología', 'Buscar alteración SENSITIVA, que es lo que delata al nervio', 'No descartar una miopatía porque la creatina cinasa sea normal', 'Pedir RESONANCIA CERVICAL antes de diagnosticar una ELA', 'Buscar BLOQUEOS DE CONDUCCIÓN: la neuropatía motora multifocal es tratable', 'Pedir inmunofijación y anti-GM1 ante un cuadro de motoneurona inferior puro', 'Explorar la cognición y la conducta en la ELA', 'Plantear la gastrostomía ANTES de que la capacidad vital baje del 50%', 'Abrir pronto la conversación sobre voluntades anticipadas', 'Hacer cribado CARDIACO anual en la distrofia miotonica, aunque la debilidad sea leve', 'Sospechar cuerpos de inclusion en la miositis asimétrica que no responde', 'En la rabdomiólisis, hidratar pronto y vigilar el POTASIO'],
    criterios_uci_general: 'Insuficiencia respiratoria por debilidad de la musculatura respiratoria, siempre dentro de un plan acordado con el paciente cuando la enfermedad es progresiva e incurable. Enfermedad intersticial rápidamente progresiva asociada a miopatía inflamatoria, sobre todo con anticuerpos anti-MDA5. Arritmias graves en la distrofia miotonica. Y en la rabdomiólisis, hiperpotasemia grave, fracaso renal con indicación de depuración, coagulación intravascular diseminada y síndrome compartimental.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Trasplante pulmonar en la enfermedad intersticial terminal asociada a miopatía inflamatoria, en casos muy seleccionados. Trasplante cardiaco en distrofinopatias con miocardiopatía terminal y situación respiratoria aceptable. En la ELA no procede.',
    prevencion: 'Primaria: control de los factores modificables donde existen, como el tabaco en la ELA y la exposición a fármacos miotoxicos, y prevención de la rabdomiólisis con hidratación en el ejercicio extremo, precaución con la combinación de estatinas y fibratos, y búsqueda activa del paciente que ha pasado horas inmovilizado. Secundaria: cribado CARDIACO y RESPIRATORIO periódico en las distrofias, especialmente el electrocardiograma anual en la distrofia miotonica, donde la muerte súbita puede preceder a la incapacidad; y consejo genético y estudio familiar. Terciaria: en la ELA, la atención multidisciplinar, la ventilación no invasiva, el soporte nutricional a tiempo y la planificación anticipada de decisiones, que son las intervenciones que más modifican la supervivencia y la calidad de vida.'
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
  'Esclerosis lateral amiotrófica: diagnóstico': { definicion: [1, 2, 7, 8], criterios_dx: [1, 2, 7, 8], laboratorio: [1, 2, 7, 8], tx_farmacologico: [1, 8] },
  'ELA: manejo multidisciplinar y decisiones anticipadas': { definicion: [1, 3, 4, 5], criterios_dx: [1, 4], laboratorio: [1, 4], tx_farmacologico: [1, 3, 4, 5] },
  'Enfoque de la debilidad muscular': { definicion: [16, 15], criterios_dx: [16, 15], laboratorio: [16, 15], tx_farmacologico: [16, 15] },
  'Distrofias musculares del adulto': { definicion: [9, 10], criterios_dx: [9, 10], laboratorio: [9, 10], tx_farmacologico: [9, 10] },
  'Miopatías inflamatorias y tóxicas': { definicion: [11, 12, 13], criterios_dx: [11, 12, 13], laboratorio: [11, 12, 13], tx_farmacologico: [11, 12, 13] },
  'Rabdomiólisis y creatina cinasa elevada': { definicion: [14, 15], criterios_dx: [14, 15], laboratorio: [14, 15], tx_farmacologico: [14, 15] }
};
export const estigmasTitulo = 'Signos y pistas ante un paciente con debilidad';
export const estigmas = [
  { s: 'Hiperreflexia en un miembro atrófico', p: 'La firma de la ELA', photo: null, desc: 'Es una combinación que no ocurre en ninguna otra enfermedad: la atrofia indica motoneurona inferior y la hiperreflexia, superior. Encontrarla en el mismo miembro es lo que más apoya el diagnóstico en la exploración.' },
  { s: 'Atrofia de la primera comisura de la mano', p: 'Muy visible y precoz', photo: null, desc: 'El músculo interoseo dorsal se atrofia pronto y el hueco entre el pulgar y el índice se hace evidente. Junto con las fasciculaciones y la torpeza para manipular objetos pequeños, es una presentación inicial típica.' },
  { s: 'Fasciculaciones linguales', p: 'Motoneurona bulbar', photo: null, desc: 'Se buscan con la lengua en reposo dentro de la boca, no protruida, porque al sacarla el temblor fisiológico confunde. Su presencia junto con atrofia y disartria apunta a inicio bulbar, que tiene peor pronóstico.' },
  { s: 'Alteración sensitiva relevante', p: 'NO es una ELA', photo: null, desc: 'La ELA no produce alteración sensitiva. Su presencia obliga a buscar otra cosa: mielopatía, neuropatía, o una combinación de procesos. Junto con la disfunción de esfínteres y la oftalmoparesia, forma la triada de lo que no encaja.' },
  { s: 'Bloqueos de conducción en el electroneurograma', p: 'Neuropatía motora multifocal', photo: null, desc: 'Fuera de los puntos habituales de atrapamiento, definen una enfermedad TRATABLE con inmunoglobulinas que imita una ELA de motoneurona inferior. Buscarlos es la razón principal por la que el estudio neurofisiologico es obligado.' },
  { s: 'Debilidad proximal simétrica', p: 'Patrón muscular', photo: null, desc: 'Cuesta subir escaleras, levantarse de una silla baja y peinarse. Con reflejos conservados, sin alteración sensitiva y con creatina cinasa elevada, apunta al músculo. Es el patrón más frecuente de las miopatías.' },
  { s: 'Debilidad de cuádriceps y flexores de los dedos', p: 'Cuerpos de inclusion', photo: null, desc: 'Asimétrica, en mayores de 50 años, con disfagia y creatina cinasa normal o poco elevada. Rompe la regla del patrón proximal y NO responde a la inmunosupresión, de modo que confundirla con una polimiositis expone al paciente a años de tratamiento inútil.' },
  { s: 'No puede soltar la mano tras el apreton', p: 'Miotonia', photo: null, desc: 'La dificultad para relajar el músculo tras la contracción es el sello de la distrofia miotonica. Se explora también con la percusión de la eminencia tenar. Junto con ptosis, calvicie frontal y catarata precoz, dibuja el cuadro.' },
  { s: 'Catarata precoz con calvicie frontal', p: 'Distrofia miotonica', photo: null, desc: 'Son manifestaciones extramusculares de una enfermedad multisistémica. Su reconocimiento importa porque obliga a hacer cribado CARDIACO: los trastornos de la conducción progresan en silencio y pueden causar muerte súbita.' },
  { s: 'Papulas de Gottron y eritema en heliotropo', p: 'Dermatomiositis', photo: null, desc: 'Papulas violáceas sobre los nudillos y coloración violácea de los párpados. Obligan a buscar debilidad proximal, a pedir tomografía por la enfermedad intersticial y a hacer cribado de neoplasia en el adulto.' },
  { s: 'Debilidad proximal con creatina cinasa normal', p: 'Pensar en corticoides', photo: null, desc: 'La miopatía esteroidea cursa con enzima normal, lo que despista si se usa la creatina cinasa como criterio de cribado. También el hipotiroidismo y la miositis por cuerpos de inclusion pueden dar valores poco elevados.' },
  { s: 'Tira positiva para sangre sin hematies', p: 'Mioglobinuria', photo: null, desc: 'Lo que detecta la tira es mioglobina, no hemoglobina. Es el hallazgo que delata una rabdomiólisis en urgencias en cuestión de minutos y con un coste mínimo, y obliga a hidratar y a mirar el potasio de inmediato.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Patrón de la debilidad (calculadora disponible)': [16],
  'Escala funcional ALSFRS-R (calculadora disponible)': [6],
  'Indicaciones de ventilación y gastrostomía (calculadora disponible)': [1, 3],
  'Enfoque de la creatina cinasa elevada (calculadora disponible)': [14, 15],
  'Criterios diagnósticos de Gold Coast para la ELA': [2],
  'Clasificación de las miopatías inflamatorias': [11, 12]
};
export const escalaCalc = {
  'Patrón de la debilidad (calculadora disponible)': 'patron-debilidad',
  'Escala funcional ALSFRS-R (calculadora disponible)': 'alsfrs-r',
  'Indicaciones de ventilación y gastrostomía (calculadora disponible)': 'soporte-ela',
  'Enfoque de la creatina cinasa elevada (calculadora disponible)': 'ck-elevada'
};
export const compGroups = [
  { name: 'La motoneurona', items: ['Esclerosis lateral amiotrófica: diagnóstico', 'ELA: manejo multidisciplinar y decisiones anticipadas'] },
  { name: 'El músculo', items: ['Enfoque de la debilidad muscular', 'Distrofias musculares del adulto', 'Miopatías inflamatorias y tóxicas'] },
  { name: 'La urgencia', items: ['Rabdomiólisis y creatina cinasa elevada'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la esclerosis lateral amiotrófica, separada en diagnóstico y manejo porque son dos problemas distintos: el primero consiste en no confundirla con las dos enfermedades tratables que la imitan, y el segundo en aplicar las medidas de soporte que si modifican la supervivencia. Las tres siguientes son el músculo: el método para localizar la debilidad, las distrofias, cuyo pronóstico depende del cribado cardiaco más que de la fuerza, y las miopatías adquiridas, que son las que más se tratan y las que más se etiquetan mal. La última es la urgencia del tema, donde lo que mata en las primeras horas no es el músculo sino el potasio.';
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
      { title: 'Distal con alteración sensitiva', sub: 'Nervio', color: '#2e6b6b', target: 'complicaciones' },
      { title: 'Fasciculaciones e hiperreflexia', sub: 'Motoneurona', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Fluctuante y fatigable', sub: 'Unión neuromuscular', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'ANTES DE DECIR ELA', sub: 'Descartar lo tratable', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Resonancia cervical', sub: 'La mielopatía se opera', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Buscar bloqueos', sub: 'La motora multifocal se trata', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Sin alteración sensitiva', sub: 'Si la hay, no es ELA', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Explorar la cognición', sub: 'Solapa con frontotemporal', color: '#6b4a8c', target: 'diagnostico' }
    ] },
    { title: 'LO QUE CAMBIA EL CURSO', sub: 'Soporte, no fármaco', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Unidad multidisciplinar', sub: 'Lo que más prolonga la vida', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Ventilación no invasiva', sub: 'Ante síntomas, sin esperar', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Gastrostomía a tiempo', sub: 'Antes de bajar del 50%', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Voluntades anticipadas', sub: 'Pronto, no al final', color: '#6b4a8c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 15], no_invasivos: [1, 6, 16], imagen: [1, 11] };
export const clasificacionCite = [1, 2, 6, 11];
export const seguimientoCite = [1, 10, 14];
