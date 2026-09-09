// topics/meningoencefalitis-infecciosa/content.js: Meningoencefalitis infecciosa.
// Cubre el item "Meningoencefalitis infecciosa" del cluster "Alteracion de conciencia y
// enfermedad neuromuscular" (bloque XII, Neurologia) del temario.
//
// DELIMITACION frente a `delirium-coma-encefalopatias`: alli esta la alteracion de conciencia de
// causa metabolica, toxica y estructural. Aqui esta la de causa INFECCIOSA del sistema nervioso
// central, donde el reloj manda: el retraso del antibiotico y del aciclovir cambia el pronostico.
// Frente a `encefalitis-autoinmune`: alli el mecanismo es inmunitario y el tiempo se mide en
// semanas; aqui es infeccioso y se mide en horas.
//
// Fuentes principales: guias de la Infectious Diseases Society of America sobre meningitis
// bacteriana (2004) y sobre encefalitis (2008), ambas presentes en Bibliografia/; ensayo europeo
// de dexametasona; estudio sobre los criterios de tomografia antes de la puncion lumbar;
// declaracion de consenso del International Encephalitis Consortium; ensayo de dexametasona en
// meningitis tuberculosa; y la guia 2024 de infecciones oportunistas en personas con VIH, que es
// la version disponible en Bibliografia/ para la meningitis criptococica.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'meningoencefalitis-infecciosa',
  titulo: 'Meningoencefalitis Infecciosa',
  subtitulo: 'Modulo 65 · Medicina Interna',
  accent: '#7a3f2e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const relojHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El error que mas cuesta en este tema no es elegir mal el antibiotico: es RETRASARLO.</strong> <span style="color:var(--ink-dim);">Y el motivo del retraso casi siempre es el mismo, esperar a la tomografia o a la puncion lumbar antes de tratar.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">1</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">HEMOCULTIVOS</strong> de inmediato. Tardan un minuto, se pueden sacar a la vez que la via y siguen siendo positivos aunque la puncion se retrase.</div>
    </div>
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">2</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">DEXAMETASONA y ANTIBIOTICO</strong>, en ese orden y en el mismo momento. El corticoide se administra ANTES o CON la primera dosis, nunca despues: pasada esa ventana ya no aporta.</div>
    </div>
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3d5a73;">3</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">TOMOGRAFIA</strong>, solo si hay criterio para ella: inmunodepresion, enfermedad previa del sistema nervioso central, crisis reciente, papiledema, alteracion del nivel de conciencia o focalidad. Sin ninguno de esos datos, se punciona directamente.</div>
    </div>
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">4</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">PUNCION LUMBAR</strong>. Aunque se haga con el antibiotico ya puesto, el liquido sigue informando: la celularidad, la glucosa y las proteinas no se normalizan en unas horas, y quedan la reaccion en cadena de la polimerasa y los hemocultivos ya extraidos.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La triada clasica falla mas de lo que se cree.</strong> Fiebre, rigidez de nuca y alteracion del nivel de conciencia estan las tres presentes en menos de la mitad de los adultos. Lo que si es casi constante es tener al menos <strong>DOS de estos cuatro</strong>: cefalea, fiebre, rigidez de nuca y alteracion del nivel de conciencia. Exigir la triada completa para sospechar el diagnostico es una forma segura de llegar tarde. Y en el anciano y en el inmunodeprimido el cuadro puede reducirse a confusion y febricula.
  </div>
</div>`;

const lcrHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a3f2e;border-radius:8px;padding:5px 9px;background:#7a3f2e12;margin-bottom:6px;">
    <strong style="color:#7a3f2e;">Tres numeros ordenan casi todo el liquido:</strong> <span style="color:var(--ink-dim);">que celula predomina, cuanto vale el COCIENTE de glucosa entre liquido y plasma, y cuanta proteina hay.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">BACTERIANA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Celularidad alta con predominio de <strong style="color:var(--ink);">POLIMORFONUCLEARES</strong>, cociente de glucosa <strong style="color:var(--ink);">BAJO</strong> (por debajo de 0.4) y proteinas elevadas. El cociente bajo es el dato mas util, porque no depende de la glucemia del momento.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">VIRICA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Celularidad moderada con predominio de <strong style="color:var(--ink);">LINFOCITOS</strong>, glucosa <strong style="color:var(--ink);">NORMAL</strong> y proteinas normales o poco elevadas. Ojo: en las primeras horas puede predominar el polimorfonuclear y confundir.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">TB U HONGO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La combinacion que hay que reconocer: predominio <strong style="color:var(--ink);">LINFOCITARIO</strong> con glucosa <strong style="color:#8c3a34;">BAJA</strong> y proteinas <strong style="color:var(--ink);">MUY altas</strong>. Un liquido linfocitario con glucosa baja NO es una meningitis virica y obliga a pensar en tuberculosis, hongos, listeria, brucella y carcinomatosis.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">La puncion traumatica.</strong> Los hematies arrastran leucocitos y proteinas. La correccion habitual es restar <strong>un leucocito por cada 500 a 1000 hematies</strong>, pero es una APROXIMACION: si el resultado corregido queda en el limite, manda la clinica y no la aritmetica. Que el liquido aclare entre tubos apoya la puncion traumatica, pero tampoco lo prueba.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Lo que no se debe olvidar pedir.</strong> <strong>PRESION DE APERTURA</strong>, que es gratis y diagnostica en la criptococica. Tincion de Gram y cultivo. Reaccion en cadena de la polimerasa para virus herpes y enterovirus. Y, segun el contexto, antigeno criptococico, adenosina desaminasa, prueba molecular para tuberculosis y citologia.
    </div>
  </div>
</div>`;

const encefalitisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b4a8c;border-radius:8px;padding:5px 9px;background:#6b4a8c12;margin-bottom:6px;">
    <strong style="color:#6b4a8c;">Meningitis y encefalitis se separan por un dato:</strong> <span style="color:var(--ink-dim);">en la meningitis el paciente esta molesto pero con la funcion cerebral conservada; en la ENCEFALITIS hay alteracion del contenido de la conciencia, de la conducta, del lenguaje o crisis.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #6b4a8c;border-radius:8px;padding:6px 8px;background:#6b4a8c08;">
      <div style="font-weight:700;color:#6b4a8c;text-align:center;margin-bottom:4px;">CUANDO PENSAR EN HERPES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Fiebre con <strong style="color:var(--ink);">cambio de conducta</strong>, alteracion del lenguaje, fallo de memoria reciente, alucinaciones olfativas o crisis focales. Es la encefalitis esporadica grave mas frecuente y no tiene estacionalidad ni requiere viaje ni contacto.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">QUE HACER, Y CUANDO</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">ACICLOVIR INTRAVENOSO YA</strong>, ante la sospecha y sin esperar a la reaccion en cadena de la polimerasa. El pronostico depende del tiempo hasta la primera dosis. Hidratar bien, porque el farmaco puede cristalizar en el ri&#241;on.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LA TRAMPA: UNA PRUEBA MOLECULAR NEGATIVA MUY PRECOZ NO DESCARTA</div>
    <div style="color:var(--ink-dim);line-height:1.6;">En las <strong style="color:var(--ink);">primeras 72 horas</strong> la reaccion en cadena de la polimerasa para virus herpes puede ser negativa. Si la sospecha es alta, se <strong>MANTIENE el aciclovir</strong> y se REPITE la puncion a los pocos dias. Suspender el tratamiento con una unica prueba precoz negativa es un error caro, porque la enfermedad no tratada deja secuelas graves o mata.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">La imagen que orienta.</strong> La <strong>RESONANCIA</strong> es mucho mas sensible que la tomografia y muestra afectacion de los lobulos <strong>TEMPORALES</strong> mediales, la insula y el sistema limbico, con frecuencia asimetrica. Una tomografia normal en las primeras horas no descarta nada.
    </div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Y el electroencefalograma.</strong> Casi siempre anormal, con enlentecimiento focal temporal y a veces descargas periodicas lateralizadas. Sirve ademas para detectar <strong>CRISIS NO CONVULSIVAS</strong>, que explican por que un paciente no despierta y que se pasan por alto si no se busca.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La infeccion del sistema nervioso central es uno de los pocos cuadros en los que el <strong>reloj</strong> forma parte del diagnostico. La eleccion del antibiotico importa, pero lo que mas se asocia a mortalidad y a secuelas es el <strong>retraso</strong> en administrarlo. Por eso este tema se organiza alrededor de una secuencia y no de una lista de germenes.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: la secuencia de las primeras horas.</strong></p>
<p style="margin:0 0 12px;">Hemocultivos, dexametasona y antibiotico, y solo despues la tomografia si hay criterio para ella y la puncion lumbar. La causa habitual del retraso es invertir ese orden y esperar a la imagen o al liquido antes de tratar. Conviene ademas desconfiar de la triada clasica: fiebre, rigidez de nuca y alteracion de la conciencia coinciden en menos de la mitad de los adultos, mientras que <strong>dos de cuatro</strong> (a&#241;adiendo la cefalea) estan presentes en casi todos.</p>
${figBlock('Figura 1', 'Las primeras horas: el orden que no se debe invertir', relojHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: leer el liquido.</strong></p>
<p style="margin:0 0 12px;">Tres numeros ordenan casi todo: que celula predomina, el <strong>cociente</strong> de glucosa entre liquido y plasma, y las proteinas. Hay una combinacion que merece reconocerse de inmediato porque cambia por completo el tratamiento: un liquido <strong>linfocitario con glucosa baja</strong>, que no es una meningitis virica y obliga a pensar en tuberculosis, hongos, listeria o carcinomatosis.</p>
${figBlock('Figura 2', 'Perfiles del liquido cefalorraquideo y la puncion traumatica', lcrHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la encefalitis.</strong></p>
<p style="margin:0 0 12px;">Lo que separa la meningitis de la encefalitis es la <strong>funcion cerebral</strong>: conducta, lenguaje, memoria o crisis. Ante esa sospecha se inicia <strong>aciclovir</strong> sin esperar a la prueba molecular, y hay una trampa concreta que conviene tener presente: una reaccion en cadena de la polimerasa negativa en las primeras 72 horas no descarta el herpes.</p>
${figBlock('Figura 3', 'Encefalitis: cuando pensar en herpes y por que no se espera', encefalitisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No retrasar el antibiotico para hacer la tomografia o la puncion. No exigir la triada completa para sospechar el diagnostico. No dar la dexametasona despues del antibiotico, porque fuera de esa ventana no aporta. No olvidar la ampicilina en el mayor de 50 a&#241;os, en la embarazada y en el inmunodeprimido, porque las cefalosporinas <strong>no cubren Listeria</strong>. No interpretar como virica una meningitis linfocitaria con glucosa baja. No dejar de medir la <strong>presion de apertura</strong>, que es gratis y en la criptococica dicta el tratamiento. No suspender el aciclovir por una prueba molecular precoz negativa si la sospecha sigue alta. No confundir un absceso con un tumor sin mirar la difusion en la resonancia. Y no olvidar el <strong>aislamiento por gotas</strong> ni la profilaxis de los contactos cuando el germen es el meningococo.</p>`;

export const bibliografia = [
  'Tunkel AR, Hartman BJ, Kaplan SL, et al. Practice guidelines for the management of bacterial meningitis. Clin Infect Dis. 2004;39(9):1267-1284.',
  'Tunkel AR, Glaser CA, Bloch KC, et al. The management of encephalitis: clinical practice guidelines by the Infectious Diseases Society of America. Clin Infect Dis. 2008;47(3):303-327.',
  'de Gans J, van de Beek D; European Dexamethasone in Adulthood Bacterial Meningitis Study Investigators. Dexamethasone in adults with bacterial meningitis. N Engl J Med. 2002;347(20):1549-1556.',
  'van de Beek D, de Gans J, Spanjaard L, et al. Clinical features and prognostic factors in adults with bacterial meningitis. N Engl J Med. 2004;351(18):1849-1859.',
  'Hasbun R, Abrahams J, Jekel J, Quagliarello VJ. Computed tomography of the head before lumbar puncture in adults with suspected meningitis. N Engl J Med. 2001;345(24):1727-1733.',
  'van de Beek D, Cabellos C, Dzupova O, et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect. 2016;22 Suppl 3:S37-S62.',
  'Proulx N, Frechette D, Toye B, et al. Delays in the administration of antibiotics are associated with mortality from adult acute bacterial meningitis. QJM. 2005;98(4):291-298.',
  'Brouwer MC, Thwaites GE, Tunkel AR, van de Beek D. Dilemmas in the diagnosis of acute community-acquired bacterial meningitis. Lancet. 2012;380(9854):1684-1692.',
  'Venkatesan A, Tunkel AR, Bloch KC, et al. Case definitions, diagnostic algorithms, and priorities in encephalitis: consensus statement of the International Encephalitis Consortium. Clin Infect Dis. 2013;57(8):1114-1128.',
  'Whitley RJ, Alford CA, Hirsch MS, et al. Vidarabine versus acyclovir therapy in herpes simplex encephalitis. N Engl J Med. 1986;314(3):144-149.',
  'Thwaites GE, Nguyen DB, Nguyen HD, et al. Dexamethasone for the treatment of tuberculous meningitis in adolescents and adults. N Engl J Med. 2004;351(17):1741-1751.',
  'Nahid P, Dorman SE, Alipanah N, et al. Official ATS/CDC/IDSA clinical practice guidelines: treatment of drug-susceptible tuberculosis. Clin Infect Dis. 2016;63(7):e147-e195.',
  'Panel on Opportunistic Infections in Adults and Adolescents with HIV. Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV. National Institutes of Health, HIV Medicine Association and Infectious Diseases Society of America; 2024.',
  'Brouwer MC, Tunkel AR, McKhann GM, van de Beek D. Brain abscess. N Engl J Med. 2014;371(5):447-456.',
  'Nau R, Sorgel F, Eiffert H. Penetration of drugs through the blood-cerebrospinal fluid and blood-brain barrier for treatment of central nervous system infections. Clin Microbiol Rev. 2010;23(4):858-883.',
  'Costerus JM, Brouwer MC, van de Beek D. Technological advances and changing indications for lumbar puncture in neurological disorders. Lancet Neurol. 2018;17(3):268-278.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Sindrome meningeo',
      tituloB: 'Sindrome encefalitico',
      compensada: 'Cefalea intensa y de instauracion rapida, fiebre, rigidez de nuca, fotofobia, nauseas y vomitos. El paciente esta molesto y postrado pero, si es una meningitis pura, la funcion cerebral esta conservada: contesta, se orienta y razona. Los signos de Kernig y Brudzinski son POCO sensibles y su ausencia no descarta nada. Hay que buscar de forma activa el EXANTEMA PETEQUIAL o purpurico del meningococo, porque obliga a aislar por gotas y a dar profilaxis a los contactos, y buscar tambien un foco parameningeo: otitis, sinusitis o mastoiditis. En el anciano y en el inmunodeprimido el cuadro puede reducirse a confusion y febricula, sin rigidez ni fiebre alta.',
      descompensada: 'Aqui lo que falla es el CONTENIDO de la conciencia y no solo el nivel: cambio de conducta o de personalidad, alteracion del lenguaje, fallo de la memoria reciente, alucinaciones (a veces olfativas), agitacion o psicosis, y CRISIS, con frecuencia focales. Puede haber focalidad neurologica y movimientos anormales. Ese perfil define la ENCEFALITIS y cambia el plan: obliga a a&#241;adir aciclovir de inmediato, a pedir resonancia y a solicitar un electroencefalograma que ademas descarte crisis no convulsivas, que explican por que un paciente no despierta y se pasan por alto si no se buscan.'
    },
    laboratorio: [
      { prueba: 'Hemocultivos antes del antibiotico', utilidad: 'Se extraen en el primer minuto y no retrasan nada. Identifican el germen en una proporcion importante de las meningitis bacterianas, incluso cuando la puncion lumbar se difiere o el liquido ya esta esterilizado por una dosis de antibiotico.' },
      { prueba: 'Citoquimica del liquido cefalorraquideo', utilidad: 'Recuento y formula, glucosa y proteinas. Lo mas util es el COCIENTE de glucosa entre liquido y plasma, porque no depende de la glucemia del momento: por debajo de 0.4 apoya con fuerza una causa bacteriana, tuberculosa o fungica.' },
      { prueba: 'Tincion de Gram y cultivo del liquido', utilidad: 'El Gram orienta en minutos y su rendimiento es alto antes del antibiotico. El cultivo confirma y permite ajustar. Ambos pierden sensibilidad tras la primera dosis, lo que NO justifica retrasar el tratamiento sino extraer antes los hemocultivos.' },
      { prueba: 'Reaccion en cadena de la polimerasa en liquido', utilidad: 'Para virus herpes simple, varicela zoster y enterovirus, y en paneles moleculares tambien para las bacterias habituales. Mantiene rendimiento tras el antibiotico. ATENCION: la de herpes puede ser negativa en las primeras 72 horas y hay que repetirla si la sospecha es alta.' },
      { prueba: 'Presion de apertura', utilidad: 'Se mide con el manometro al puncionar, no cuesta nada y se olvida constantemente. En la meningitis criptococica la hipertension intracraneal es la principal causa de muerte precoz y su control con punciones evacuadoras repetidas forma parte del tratamiento.' },
      { prueba: 'Antigeno criptococico', utilidad: 'En suero y en liquido, con sensibilidad muy alta. Es la prueba de eleccion frente a la tinta china, que es mucho menos sensible. Obligada ante meningitis subaguda, linfocitaria o en cualquier paciente con inmunodepresion celular.' },
      { prueba: 'Adenosina desaminasa y prueba molecular para tuberculosis', utilidad: 'La prueba molecular en liquido tiene alta especificidad y rendimiento mejor cuanto MAYOR sea el volumen enviado. La adenosina desaminasa apoya el diagnostico. Ninguna de las dos lo descarta, de modo que ante alta sospecha se trata sin esperar la confirmacion.' },
      { prueba: 'Serologia de VIH y estudio de inmunidad', utilidad: 'La meningitis criptococica, la tuberculosa y la toxoplasmosis cambian por completo la probabilidad segun el estado inmunitario. Un cuadro atipico o subagudo obliga a preguntar por inmunodepresion y a hacer la serologia.' },
      { prueba: 'Procalcitonina y lactato en liquido', utilidad: 'Ayudan cuando el liquido es ambiguo y el paciente ya ha recibido antibiotico. Un lactato elevado en liquido apoya causa bacteriana. Son apoyos, no arbitros: no sustituyen al juicio clinico ni autorizan a retirar el tratamiento empirico.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de tomografia antes de la puncion (calculadora disponible)', interpretacion: 'Reune los datos que predicen una lesion con efecto de masa y que hacen desaconsejable puncionar sin imagen previa, recordando que la imagen NUNCA justifica retrasar el antibiotico.', cutoff: 'Sin ninguno de los criterios, se punciona directamente y sin tomografia' },
      { metodo: 'Perfil del liquido cefalorraquideo (calculadora disponible)', interpretacion: 'Cruza celularidad, formula, cociente de glucosa y proteinas para orientar hacia causa bacteriana, virica o tuberculosa y fungica, con correccion por puncion traumatica.', cutoff: 'Cociente de glucosa por debajo de 0.4: no es una meningitis virica' },
      { metodo: 'Tratamiento empirico por edad y factores (calculadora disponible)', interpretacion: 'Devuelve la combinacion empirica segun edad, inmunodepresion, antecedente neuroquirurgico y sospecha de encefalitis, e indica si corresponde dexametasona.', cutoff: 'Ampicilina si hay mas de 50 a&#241;os, embarazo o inmunodepresion' },
      { metodo: 'Escala de coma de Glasgow', interpretacion: 'Cuantifica el nivel de conciencia al ingreso y en la evolucion. En la meningitis bacteriana del adulto, el nivel de conciencia bajo es uno de los predictores de mal pronostico mas consistentes.', cutoff: 'Puntuacion baja o en descenso: valorar via aerea y unidad de criticos' },
      { metodo: 'Definicion de caso de encefalitis del International Encephalitis Consortium', interpretacion: 'Exige alteracion del estado mental de al menos 24 horas sin otra causa, mas criterios menores como fiebre, crisis, focalidad, pleocitosis, imagen o electroencefalograma alterados.', cutoff: 'Estandariza el diagnostico y ordena el estudio etiologico por prioridades' },
      { metodo: 'Estadios del British Medical Research Council en la meningitis tuberculosa', interpretacion: 'Clasifica en tres estadios segun el nivel de conciencia y la focalidad: consciente sin focalidad, consciente con focalidad o algo obnubilado, y estuporoso o comatoso.', cutoff: 'El estadio al inicio del tratamiento es el mejor predictor de secuelas y muerte' }
    ],
    imagen: [
      { modalidad: 'Tomografia craneal sin contraste', hallazgos: 'Solo antes de la puncion si hay criterio, y NUNCA a costa de retrasar el antibiotico. Busca lesion con efecto de masa, desplazamiento de linea media e hidrocefalia. Una tomografia normal no descarta hipertension intracraneal ni meningitis.' },
      { modalidad: 'Resonancia craneal con contraste y difusion', hallazgos: 'Mucho mas sensible. En la encefalitis herpetica, afectacion de lobulos TEMPORALES mediales, insula y sistema limbico, a menudo asimetrica. En la tuberculosa, realce meningeo BASAL, hidrocefalia, tuberculomas e infartos. Y la DIFUSION restringida separa el absceso del tumor necrotico.' },
      { modalidad: 'Tomografia de senos y pe&#241;asco', hallazgos: 'Busca el foco parameningeo que explica el cuadro y que puede necesitar cirugia: sinusitis, otitis, mastoiditis o una fistula de liquido en la meningitis recurrente. Encontrarlo cambia el tratamiento y previene la recaida.' },
      { modalidad: 'Radiografia y tomografia de torax', hallazgos: 'Busca el origen: neumonia neumococica, tuberculosis pulmonar o un foco supurativo que siembre un absceso. En la sospecha de tuberculosis meningea, la imagen toracica apoya el diagnostico en una parte de los casos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por <strong>sindrome</strong> (meningitis, encefalitis o meningoencefalitis, segun este o no comprometida la funcion cerebral), por <strong>tiempo</strong> (aguda en horas o dias, subaguda o cronica en semanas, que es lo que separa al neumococo de la tuberculosis) y por el <strong>perfil del liquido</strong> (purulento, linfocitario con glucosa normal o linfocitario con glucosa baja). A esto se a&#241;aden el <strong>huesped</strong>, porque la inmunodepresion cambia la lista de germenes y la de farmacos, y el <strong>origen</strong>, comunitario o asociado a neurocirugia y a dispositivos, que cambia por completo el tratamiento empirico.`,
    escalas: [
      { nombre: 'Criterios de tomografia antes de la puncion (calculadora disponible)', componentes: 'Inmunodepresion, enfermedad previa del sistema nervioso central, crisis en la semana previa, papiledema, alteracion del nivel de conciencia y focalidad neurologica. La edad avanzada se a&#241;ade en algunas recomendaciones.', formula: 'Si no hay ninguno de esos datos, la probabilidad de una lesion con efecto de masa es muy baja y se punciona sin imagen previa.', interpretacion: 'Su valor real es EVITAR tomografias innecesarias que retrasan la puncion. Y su regla de oro: si se pide la tomografia, el antibiotico y la dexametasona se administran ANTES de bajar al aparato, no despues.' },
      { nombre: 'Perfil del liquido cefalorraquideo (calculadora disponible)', componentes: 'Celularidad, porcentaje de polimorfonucleares, glucosa en liquido y en plasma, proteinas y hematies.', formula: 'Cociente de glucosa igual a la glucosa del liquido dividida por la del plasma. Correccion de la puncion traumatica restando un leucocito por cada 500 a 1000 hematies.', interpretacion: 'El cociente por debajo de 0.4 es el dato mas util a favor de causa bacteriana, tuberculosa o fungica, porque no depende de la glucemia. Un liquido LINFOCITARIO con glucosa BAJA no es una meningitis virica.' },
      { nombre: 'Tratamiento empirico por edad y factores (calculadora disponible)', componentes: 'Edad, embarazo, inmunodepresion, antecedente de neurocirugia o traumatismo penetrante, presencia de derivacion ventricular y sospecha de encefalitis.', formula: 'Base de vancomicina con cefalosporina de tercera generacion; ampicilina si hay riesgo de Listeria; cobertura antipseudomonica en el postoperatorio; y aciclovir si hay perfil encefalitico.', interpretacion: 'El error mas repetido es olvidar la AMPICILINA en el mayor de 50 a&#241;os, en la embarazada y en el inmunodeprimido: las cefalosporinas no cubren Listeria y esa omision deja al paciente sin tratamiento.' },
      { nombre: 'Escala de coma de Glasgow', componentes: 'Respuesta ocular, verbal y motora.', formula: 'Suma de 3 a 15 puntos.', interpretacion: 'El nivel de conciencia bajo al ingreso es uno de los predictores de mal pronostico mas consistentes en la meningitis bacteriana del adulto, junto con la edad avanzada, la taquicardia, la trombocitopenia y la velocidad de sedimentacion elevada.' },
      { nombre: 'Definicion de caso de encefalitis del International Encephalitis Consortium', componentes: 'Criterio mayor obligatorio: alteracion del estado mental de al menos 24 horas sin causa alternativa. Criterios menores: fiebre, crisis, focalidad nueva, pleocitosis, neuroimagen compatible y electroencefalograma alterado.', formula: 'Caso posible con un criterio menor; probable o confirmado con tres o mas.', interpretacion: 'Ordena el estudio etiologico por prioridades y evita tanto el infradiagnostico como la peticion indiscriminada de serologias. Es tambien el marco donde encaja la sospecha de encefalitis AUTOINMUNE cuando lo infeccioso se descarta.' },
      { nombre: 'Estadios del British Medical Research Council en la meningitis tuberculosa', componentes: 'Nivel de conciencia y presencia de focalidad neurologica.', formula: 'Estadio I: consciente y sin focalidad. Estadio II: consciente con focalidad, o algo obnubilado. Estadio III: estuporoso o en coma.', interpretacion: 'El estadio en el momento de iniciar el tratamiento es el mejor predictor de muerte y secuelas, y por eso el diagnostico precoz importa tanto: se trata ante la sospecha, sin esperar la confirmacion microbiologica.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Meningitis bacteriana aguda: reconocer y no perder tiempo',
      color: '#8c3a34',
      definicion: 'Inflamacion purulenta de las leptomeninges por bacterias, de instauracion en horas o pocos dias, con mortalidad alta y con un pronostico que depende de forma directa del tiempo hasta el antibiotico.',
      fisiopatologia: 'La bacteria alcanza el espacio subaracnoideo por via hematogena o por contiguidad desde un foco parameningeo. Alli encuentra un compartimento con escasas defensas locales y se multiplica sin freno. La lisis bacteriana libera componentes de la pared que desencadenan una respuesta inflamatoria intensa: llegada masiva de neutrofilos, aumento de la permeabilidad de la barrera, edema vasogenico y citotoxico, vasculitis con infartos, trombosis venosa y alteracion de la reabsorcion del liquido, que produce hidrocefalia. Esa cascada explica dos hechos practicos: que el da&#241;o venga en buena parte de la propia inflamacion, y que la dexametasona administrada ANTES o CON el antibiotico module esa respuesta mientras que despues ya no llegue a tiempo.',
      epidemiologia: 'Los germenes mas frecuentes en el adulto de la comunidad son Streptococcus pneumoniae y Neisseria meningitidis. Listeria monocytogenes aparece por encima de los 50 a&#241;os, en el embarazo y en la inmunodepresion. En el paciente con neurocirugia, traumatismo penetrante o derivacion ventricular, la lista cambia a estafilococos y bacilos gramnegativos, incluida Pseudomonas. La mortalidad de la neumococica sigue siendo elevada y las secuelas, sobre todo la hipoacusia, son frecuentes.',
      factores_riesgo: ['Edad avanzada', 'Otitis, sinusitis o mastoiditis no tratadas', 'Neumonia neumococica', 'Esplenectomia o asplenia funcional', 'Deficit del complemento, que predispone al meningococo', 'Inmunodepresion, VIH y tratamiento inmunosupresor', 'Alcoholismo y desnutricion', 'Diabetes mellitus', 'Neurocirugia, traumatismo craneal penetrante o derivacion ventricular', 'Fistula de liquido cefalorraquideo, causa de meningitis RECURRENTE', 'Ausencia de vacunacion frente a neumococo y meningococo', 'Convivencia en espacios cerrados y hacinamiento'],
      clinica: 'Cefalea intensa, fiebre, rigidez de nuca, fotofobia y vomitos. La TRIADA completa esta presente en menos de la mitad de los adultos, pero casi todos tienen DOS de estos cuatro: cefalea, fiebre, rigidez de nuca y alteracion del nivel de conciencia. Hay que buscar el EXANTEMA PETEQUIAL del meningococo, y recordar que en el anciano y en el inmunodeprimido el cuadro puede reducirse a confusion y febricula.',
      criterios_dx: 'Clinica compatible mas liquido cefalorraquideo purulento: celularidad alta con predominio de polimorfonucleares, cociente de glucosa por debajo de 0.4 y proteinas elevadas. El Gram, el cultivo o la prueba molecular confirman. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'HEMOCULTIVOS ANTES del antibiotico, que se extraen en un minuto y no retrasan nada. Citoquimica, Gram, cultivo y prueba molecular del liquido. Hemograma, coagulacion (por la coagulacion intravascular diseminada del meningococo), funcion renal, glucemia SIMULTANEA a la puncion y proteina C reactiva.',
      imagen: 'Tomografia craneal SOLO si hay criterio, y sin que retrase el tratamiento. Tomografia de senos y pe&#241;asco buscando el foco parameningeo. Radiografia de torax buscando neumonia.',
      complementarios: 'Puncion lumbar con PRESION DE APERTURA. Audiometria al alta o en el seguimiento, porque la hipoacusia es la secuela mas frecuente y detectarla a tiempo permite rehabilitarla. Electroencefalograma si hay crisis o si el paciente no despierta como se espera.',
      dx_diferencial: 'Hemorragia subaracnoidea (cefalea en trueno, tomografia y liquido xantocromico), encefalitis virica, meningitis virica, absceso cerebral, empiema subdural, meningitis quimica o medicamentosa, carcinomatosis meningea y meningitis tuberculosa.',
      tx_medico: 'Aislamiento POR GOTAS durante las primeras 24 horas de tratamiento si se sospecha meningococo, y profilaxis a los contactos estrechos. Soporte hemodinamico, control de la glucemia, de la natremia y de la temperatura. Cabecera elevada. Y busqueda activa del foco parameningeo, que puede requerir cirugia.',
      tx_farmacologico: 'DEXAMETASONA seguida de forma inmediata del ANTIBIOTICO EMPIRICO, en la misma actuacion: vancomicina con cefalosporina de tercera generacion, a&#241;adiendo AMPICILINA si hay mas de 50 a&#241;os, embarazo o inmunodepresion. En el postoperatorio, cobertura antipseudomonica. Ajuste posterior segun el germen y su sensibilidad.',
      tx_intervencionista: 'Drenaje del foco parameningeo si existe. Derivacion ventricular si aparece hidrocefalia. Retirada del dispositivo en la meningitis asociada a derivacion, sin la cual el tratamiento antibiotico suele fracasar.',
      criterios_uci: 'Alteracion del nivel de conciencia, crisis, shock septico, purpura fulminante, insuficiencia respiratoria e hipertension intracraneal. La escala de coma de Glasgow baja o en descenso obliga a valorar la via aerea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar en 48 horas: si no hay mejoria, repetir la puncion, sobre todo si se trata de un neumococo resistente tratado con dexametasona, porque el corticoide reduce el paso de la vancomicina al liquido. Vigilar hiponatremia, crisis y focalidad de nueva aparicion.',
      seguimiento_ambulatorio: 'Audiometria, valoracion neuropsicologica si hay quejas cognitivas, vacunacion frente a neumococo y meningococo, y estudio del complemento en la meningococica recurrente. Ante una meningitis RECURRENTE, buscar una fistula de liquido.',
      pronostico: 'Mortalidad elevada en la neumococica y secuelas frecuentes: hipoacusia, deficit cognitivo, epilepsia y focalidad. Son factores de mal pronostico la edad avanzada, el bajo nivel de conciencia al ingreso, el shock y el retraso del antibiotico, que es el unico realmente modificable.',
      algoritmo: ['Sospecharla con DOS de cuatro: cefalea, fiebre, rigidez de nuca o alteracion de conciencia', 'Extraer HEMOCULTIVOS de inmediato', 'Administrar DEXAMETASONA y despues el antibiotico, sin esperar a nada', 'Valorar si hay criterio de tomografia previa a la puncion', 'Si se pide la tomografia, tratar ANTES de bajar al aparato', 'Puncionar y medir la PRESION DE APERTURA', 'Pedir Gram, cultivo, citoquimica y prueba molecular', 'Buscar el exantema petequial y aislar por gotas si procede', 'Buscar el foco parameningeo con imagen dirigida', 'Reevaluar a las 48 horas y repetir la puncion si no mejora']
    },
    {
      nombre: 'Tratamiento empirico y dexametasona',
      color: '#7a3f2e',
      definicion: 'Conjunto de decisiones farmacologicas iniciales, tomadas antes de conocer el germen, cuya correccion y sobre todo cuya PRECOCIDAD determinan el pronostico.',
      fisiopatologia: 'La barrera hematoencefalica limita el paso de la mayoria de los antibioticos, y por eso en la meningitis se usan dosis mas altas de lo habitual y se prefieren farmacos con buena penetracion. La propia inflamacion aumenta transitoriamente esa penetracion, lo que explica una consecuencia poco intuitiva de la dexametasona: al reducir la inflamacion tambien reduce el paso de vancomicina al liquido, y por eso ante un neumococo resistente tratado con corticoide conviene repetir la puncion para comprobar la esterilizacion.',
      epidemiologia: 'El ensayo europeo de dexametasona mostro reduccion de mortalidad y de secuelas en la meningitis bacteriana del adulto, con el beneficio concentrado en la NEUMOCOCICA. Los estudios de retraso terapeutico muestran de forma consistente que cada hora de demora empeora el pronostico, lo que convierte el tiempo hasta la primera dosis en el indicador de calidad de este proceso.',
      factores_riesgo: ['Esperar a la tomografia antes de tratar', 'Esperar al resultado del liquido antes de tratar', 'Administrar la dexametasona despues del antibiotico', 'Olvidar la ampicilina en el mayor de 50 a&#241;os o en la embarazada', 'No cubrir Pseudomonas en el paciente con neurocirugia reciente', 'No a&#241;adir aciclovir cuando hay perfil encefalitico', 'Dosificar por debajo de lo indicado para el sistema nervioso central', 'Insuficiencia renal no considerada al ajustar', 'Retraso en el traslado desde urgencias', 'Alergias mal documentadas que paralizan la prescripcion'],
      clinica: 'La decision se toma con el sindrome y con cuatro datos del paciente: EDAD, situacion inmunitaria, antecedente NEUROQUIRURGICO o de dispositivo, y presencia o no de perfil ENCEFALITICO. Nada de eso requiere pruebas y todo esta disponible en los primeros minutos.',
      criterios_dx: 'No aplica: es la fase de tratamiento. La regla es que el antibiotico se administre en la primera hora desde la sospecha. Ver la Figura 1 de Definicion.',
      laboratorio: 'Funcion renal para el ajuste de dosis y concentraciones de vancomicina cuando se use. Hemocultivos ya extraidos. Cultivo del liquido para desescalar en cuanto se conozca el germen y su sensibilidad.',
      imagen: 'La tomografia previa a la puncion, cuando hay criterio, NUNCA justifica retrasar la primera dosis. Es la regla que mas se incumple y la que mas cuesta.',
      complementarios: 'Registro del TIEMPO desde la llegada hasta la primera dosis, que es el indicador de calidad de este proceso y el que permite mejorarlo en un servicio.',
      dx_diferencial: 'Ante mala respuesta hay que replantear: germen resistente, foco parameningeo no drenado, absceso, empiema, tuberculosis, hongos, causa no infecciosa o encefalitis autoinmune.',
      tx_medico: 'Sueroterapia sin sobrecarga, control de la glucemia y de la natremia, profilaxis de trombosis y manejo de las crisis. Vigilancia neurologica frecuente y estructurada durante las primeras 48 horas.',
      tx_farmacologico: 'DEXAMETASONA ANTES o CON la primera dosis de antibiotico, durante 4 dias, y se SUSPENDE si el germen resulta no ser neumococo. Base empirica: vancomicina con cefalosporina de tercera generacion. AMPICILINA si hay mas de 50 a&#241;os, embarazo o inmunodepresion, porque las cefalosporinas NO cubren Listeria. Cobertura antipseudomonica si hay neurocirugia, traumatismo penetrante o derivacion. ACICLOVIR si el perfil es encefalitico. Todo a dosis de sistema nervioso central.',
      tx_intervencionista: 'Drenaje del foco parameningeo. Retirada del dispositivo infectado. Manejo de la hidrocefalia.',
      criterios_uci: 'Los mismos de la meningitis bacteriana: bajo nivel de conciencia, crisis, shock y compromiso respiratorio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Desescalar en cuanto se conozca el germen. SUSPENDER la dexametasona si no es neumococo. Repetir la puncion a las 48 horas si no hay mejoria clara, especialmente con neumococo resistente tratado con corticoide. Y revisar la duracion total segun el germen.',
      seguimiento_ambulatorio: 'Completar la duracion pautada, vigilar la toxicidad del antibiotico y valorar secuelas. Vacunacion y estudio de inmunidad cuando corresponda.',
      pronostico: 'El tiempo hasta la primera dosis es el factor pronostico modificable mas importante de todo el tema. La eleccion correcta del farmaco importa, pero llegar pronto importa mas.',
      algoritmo: ['Decidir con cuatro datos: edad, inmunidad, neurocirugia y perfil encefalitico', 'Extraer hemocultivos', 'Dar DEXAMETASONA antes o con la primera dosis', 'Iniciar vancomicina con cefalosporina de tercera generacion', 'A&#241;adir AMPICILINA si hay mas de 50 a&#241;os, embarazo o inmunodepresion', 'Cubrir Pseudomonas si hay neurocirugia, traumatismo o derivacion', 'A&#241;adir ACICLOVIR si el perfil es encefalitico', 'No retrasar nada de esto por la tomografia o la puncion', 'Desescalar con el cultivo y suspender el corticoide si no es neumococo', 'Repetir la puncion a las 48 horas si no mejora']
    },
    {
      nombre: 'Encefalitis por virus herpes simple',
      color: '#6b4a8c',
      definicion: 'Inflamacion del parenquima encefalico por virus herpes simple, con predileccion por los lobulos temporales mediales y el sistema limbico, y con un pronostico que depende del tiempo hasta la primera dosis de aciclovir.',
      fisiopatologia: 'El virus alcanza el sistema nervioso central por via neural, probablemente a traves de las ramas del trigemino o del bulbo olfatorio, lo que explica la topografia tan caracteristica: temporal medial, insula y region orbitofrontal. Produce una encefalitis NECROTIZANTE y HEMORRAGICA, y esa necrosis hemorragica explica hallazgos que despistan, como la presencia de hematies en el liquido sin puncion traumatica. El da&#241;o del hipocampo y de la amigdala explica el perfil clinico: fallo de la memoria reciente, cambio de conducta, alucinaciones olfativas y crisis focales.',
      epidemiologia: 'Es la encefalitis esporadica grave mas frecuente. Aparece en cualquier epoca del a&#241;o y en personas sin inmunodepresion, sin necesidad de viaje ni de contacto epidemiologico, y eso es precisamente lo que obliga a pensar en ella siempre. Sin tratamiento la mortalidad es muy alta; con aciclovir precoz mejora de forma sustancial, aunque las secuelas cognitivas siguen siendo frecuentes.',
      factores_riesgo: ['Ninguno necesario: afecta a personas previamente sanas', 'Cualquier edad, con dos picos, en jovenes y en mayores', 'Inmunodepresion, que amplia el diferencial a otros virus', 'Retraso en el inicio del aciclovir, que es el factor pronostico clave', 'Suspender el aciclovir por una prueba molecular precoz negativa', 'Atribuir el cuadro a una causa psiquiatrica y no explorarlo', 'Ausencia de resonancia cuando la tomografia es normal', 'No hacer electroencefalograma ante un paciente que no despierta', 'Crisis no reconocidas por ser no convulsivas', 'Deshidratacion durante el tratamiento, que favorece la toxicidad renal'],
      clinica: 'Fiebre con CAMBIO DE CONDUCTA o de personalidad, alteracion del lenguaje, fallo de la memoria reciente, alucinaciones (a veces olfativas), agitacion o psicosis, y CRISIS con frecuencia focales. La cefalea acompa&#241;a pero no domina. Lo que separa este cuadro de una meningitis es que aqui falla la FUNCION CEREBRAL.',
      criterios_dx: 'Perfil encefalitico compatible mas reaccion en cadena de la polimerasa positiva para virus herpes en liquido. La definicion de caso del International Encephalitis Consortium exige alteracion del estado mental de al menos 24 horas sin otra causa. Ver la Figura 3 de Definicion.',
      laboratorio: 'PRUEBA MOLECULAR PARA VIRUS HERPES en liquido, con la advertencia de que puede ser NEGATIVA en las primeras 72 horas: si la sospecha es alta se mantiene el aciclovir y se REPITE la puncion a los pocos dias. Liquido con pleocitosis linfocitaria, proteinas elevadas, glucosa normal y a veces hematies sin puncion traumatica. Funcion renal seriada durante el tratamiento.',
      imagen: 'RESONANCIA, mucho mas sensible que la tomografia: afectacion de los lobulos TEMPORALES mediales, insula y sistema limbico, con frecuencia asimetrica. Una tomografia normal en las primeras horas no descarta absolutamente nada y no debe tranquilizar.',
      complementarios: 'ELECTROENCEFALOGRAMA, casi siempre anormal, con enlentecimiento focal temporal y a veces descargas periodicas lateralizadas. Sirve ademas para detectar CRISIS NO CONVULSIVAS, que explican por que un paciente no despierta y se pasan por alto si no se buscan.',
      dx_diferencial: 'Encefalitis AUTOINMUNE, sobre todo por anticuerpos frente al receptor de NMDA, que puede aparecer incluso DESPUES de una encefalitis herpetica; otras encefalitis viricas; meningoencefalitis bacteriana o tuberculosa; absceso; ictus del territorio de la cerebral media; estado epileptico no convulsivo; encefalopatia metabolica o toxica; y cuadros psiquiatricos primarios.',
      tx_medico: 'Manejo de las crisis, prevencion de la aspiracion, control de la natremia y de la temperatura, e HIDRATACION generosa durante el aciclovir para prevenir la cristalizacion renal. Rehabilitacion cognitiva precoz, porque las secuelas de memoria son la regla y no la excepcion.',
      tx_farmacologico: 'ACICLOVIR INTRAVENOSO ANTE LA SOSPECHA, sin esperar a la prueba molecular ni a la resonancia. Se mantiene el tiempo indicado y no se suspende por una unica prueba precoz negativa si la sospecha sigue alta. Antiepilepticos si hay crisis. Antibiotico asociado mientras no se descarte una causa bacteriana.',
      tx_intervencionista: 'Excepcional. Craniectomia descompresiva en el edema refractario con riesgo de herniacion, en casos muy seleccionados.',
      criterios_uci: 'Bajo nivel de conciencia, estado epileptico, edema cerebral con riesgo de herniacion e incapacidad para proteger la via aerea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurologica estrecha, funcion renal seriada y electroencefalograma repetido si el nivel de conciencia no mejora. Si el paciente empeora tras una mejoria inicial, pensar en encefalitis AUTOINMUNE posherpetica, que es un fenomeno bien descrito y tiene tratamiento propio.',
      seguimiento_ambulatorio: 'Valoracion neuropsicologica, rehabilitacion cognitiva, control de la epilepsia secundaria y apoyo a la familia, porque el cambio conductual y el deficit de memoria pesan mas que la debilidad.',
      pronostico: 'Sin tratamiento, mortalidad muy alta. Con aciclovir precoz mejora de forma sustancial, pero las secuelas cognitivas y conductuales son frecuentes. El determinante modificable es el TIEMPO hasta la primera dosis.',
      algoritmo: ['Separar meningitis de encefalitis mirando la FUNCION cerebral', 'Iniciar ACICLOVIR ante la sospecha, sin esperar a nada', 'Extraer liquido con prueba molecular para herpes y enterovirus', 'Pedir RESONANCIA, no conformarse con la tomografia', 'Pedir ELECTROENCEFALOGRAMA y buscar crisis no convulsivas', 'Mantener antibiotico mientras no se descarte causa bacteriana', 'Hidratar bien durante el aciclovir', 'NO suspenderlo por una prueba precoz negativa si la sospecha es alta', 'Repetir la puncion a los pocos dias si sigue la duda', 'Si empeora tras mejorar, pensar en encefalitis autoinmune posherpetica']
    },
    {
      nombre: 'Meningitis virica y sindrome meningeo aseptico',
      color: '#3f6b52',
      definicion: 'Inflamacion meningea con liquido linfocitario, glucosa normal y cultivo bacteriano negativo, habitualmente de causa virica y de curso benigno, pero que obliga a descartar las causas que no lo son.',
      fisiopatologia: 'Los enterovirus, que son la causa mas frecuente, alcanzan las meninges por via hematogena tras replicarse en el tubo digestivo. La respuesta inflamatoria es predominantemente linfocitaria y no consume glucosa de forma significativa, lo que explica el perfil caracteristico del liquido: celularidad moderada, linfocitos, glucosa NORMAL y proteinas poco elevadas. En las primeras horas, sin embargo, puede predominar el polimorfonuclear y simular una meningitis bacteriana, lo que obliga a tratar con antibiotico hasta poder descartarla.',
      epidemiologia: 'Es mucho mas frecuente que la bacteriana y tiene un pico estacional en los meses calidos por los enterovirus. Le siguen el virus herpes simple tipo 2 (que puede dar meningitis recurrente), varicela zoster, virus de la primoinfeccion por VIH y arbovirus segun la zona. La mayoria de los casos se resuelven solos en una o dos semanas.',
      factores_riesgo: ['Contacto con casos de enterovirus, sobre todo en verano y oto&#241;o', 'Primoinfeccion por VIH, que hay que buscar activamente', 'Herpes genital, por virus herpes simple tipo 2', 'Farmacos: antiinflamatorios no esteroideos, cotrimoxazol e inmunoglobulinas', 'Enfermedades autoinmunes como el lupus y la sarcoidosis', 'Vacunacion reciente en casos aislados', 'Exposicion a roedores para el virus de la coriomeningitis linfocitaria', 'Picaduras y viajes para los arbovirus', 'Neoplasia conocida, por carcinomatosis meningea', 'Cirugia o procedimiento espinal reciente, por meningitis quimica'],
      clinica: 'Cefalea, fiebre, fotofobia y rigidez de nuca, con el paciente ALERTA y con la funcion cerebral conservada, que es lo que la separa de la encefalitis. Puede haber exantema, faringitis o cuadro digestivo previo. La afectacion del nivel de conciencia, la focalidad o las crisis OBLIGAN a replantear el diagnostico.',
      criterios_dx: 'Liquido linfocitario con glucosa NORMAL, proteinas poco elevadas y ausencia de germen. La prueba molecular para enterovirus o herpes confirma. Ver la Figura 2 de Definicion.',
      laboratorio: 'Citoquimica con GLUCEMIA SIMULTANEA para calcular el cociente. Prueba molecular para enterovirus, virus herpes simple y varicela zoster. SEROLOGIA Y CARGA VIRAL DE VIH, porque la primoinfeccion se presenta asi y se pasa por alto con facilidad. Cultivo bacteriano, siempre.',
      imagen: 'No suele ser necesaria. Se pide si hay focalidad, crisis, alteracion del nivel de conciencia o mala evolucion, situaciones en las que el diagnostico de meningitis virica ya no se sostiene.',
      complementarios: 'Repetir la puncion si el liquido inicial es dudoso o si la evolucion no es la esperada. Antigeno criptococico y estudio de tuberculosis si el cuadro se prolonga o si hay inmunodepresion.',
      dx_diferencial: 'Meningitis bacteriana PARCIALMENTE tratada, que es la trampa clasica; meningitis tuberculosa o fungica (linfocitaria pero con glucosa BAJA); meningitis por farmacos; enfermedades autoinmunes; carcinomatosis meningea; endocarditis; y foco parameningeo.',
      tx_medico: 'Sintomatico: analgesia adecuada, antiemeticos, hidratacion y reposo. La mayoria se maneja de forma ambulatoria si el paciente esta alerta, tolera la via oral y tiene una evolucion clara y un control asegurado.',
      tx_farmacologico: 'Ninguno especifico en la mayoria. Aciclovir si se confirma o se sospecha varicela zoster o un cuadro grave por herpes. Y mantener el antibiotico empirico hasta poder descartar razonablemente la causa bacteriana, sobre todo si el paciente habia recibido antibiotico antes.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Rara vez. Si aparece alteracion del nivel de conciencia o crisis, el diagnostico deja de ser una meningitis virica simple y pasa a manejarse como encefalitis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Observacion hasta descartar la causa bacteriana. Revisar el liquido junto con la clinica y no de forma aislada, sobre todo si hubo antibiotico previo, que puede transformar el perfil purulento en linfocitario.',
      seguimiento_ambulatorio: 'Revision para confirmar la resolucion. En la meningitis RECURRENTE, buscar virus herpes simple tipo 2, una fistula de liquido o una causa autoinmune.',
      pronostico: 'Bueno, con resolucion espontanea en una o dos semanas. Puede quedar cefalea y astenia durante semanas, lo que conviene anticipar al paciente para evitar consultas repetidas y estudios innecesarios.',
      algoritmo: ['Confirmar que la funcion cerebral esta conservada', 'Pedir citoquimica con GLUCEMIA simultanea', 'Comprobar que el cociente de glucosa es NORMAL', 'Pedir prueba molecular para enterovirus y herpes', 'Pedir SEROLOGIA de VIH, que se olvida con frecuencia', 'Revisar la lista de farmacos que producen meningitis aseptica', 'Mantener el antibiotico hasta descartar la causa bacteriana', 'Sospechar tuberculosis u hongo si la glucosa es baja', 'Reevaluar si aparecen crisis, focalidad o somnolencia', 'En la recurrente, buscar herpes tipo 2 o una fistula de liquido']
    },
    {
      nombre: 'Meningitis subaguda y cronica: tuberculosa y criptococica',
      color: '#8a6a1f',
      definicion: 'Inflamacion meningea de instauracion en semanas, con liquido linfocitario y glucosa habitualmente baja, cuyo pronostico depende de tratar ANTES de tener la confirmacion microbiologica.',
      fisiopatologia: 'En la tuberculosa, un foco subependimario (el foco de Rich) se rompe al espacio subaracnoideo y desencadena un exudado espeso y GELATINOSO que se acumula en la BASE del craneo. Ese exudado explica la triada de complicaciones: atrapa los pares craneales, obstruye la circulacion del liquido y produce HIDROCEFALIA, y envuelve las arterias de la base causando vasculitis e INFARTOS. En la criptococica, el hongo se multiplica en el espacio subaracnoideo con escasa respuesta inflamatoria en el inmunodeprimido, y su capsula obstruye la reabsorcion del liquido, lo que eleva la PRESION INTRACRANEAL: esa hipertension, y no la infeccion en si, es la principal causa de muerte precoz.',
      epidemiologia: 'La meningitis tuberculosa es la forma mas grave de tuberculosis y su pronostico depende del estadio del British Medical Research Council en el momento de iniciar el tratamiento. La criptococica aparece sobre todo con inmunodepresion celular avanzada, en particular en la infeccion por VIH con recuento bajo de linfocitos CD4, pero tambien en trasplantados y en tratamiento inmunosupresor.',
      factores_riesgo: ['Infeccion por VIH con inmunodepresion avanzada', 'Contacto con tuberculosis o procedencia de zona de alta incidencia', 'Tratamiento inmunosupresor y corticoterapia prolongada', 'Farmacos anti factor de necrosis tumoral', 'Trasplante de organo solido', 'Diabetes mellitus', 'Alcoholismo y desnutricion', 'Neoplasia hematologica', 'Insuficiencia renal cronica', 'Edad avanzada', 'Retraso diagnostico, que es el determinante mas importante del pronostico'],
      clinica: 'Cefalea que lleva SEMANAS, febricula, perdida de peso, astenia y cambio de caracter, con una rigidez de nuca que puede ser leve o faltar. En la TUBERCULOSA hay que buscar PARALISIS DE PARES CRANEALES (sobre todo el sexto), hidrocefalia y focalidad por infartos. En la CRIPTOCOCICA, la cefalea puede ser el unico sintoma y el signo mas importante no se ve: la PRESION DE APERTURA elevada.',
      criterios_dx: 'Liquido LINFOCITARIO con glucosa BAJA y proteinas MUY elevadas, mas prueba microbiologica. Antigeno criptococico en suero y liquido, de sensibilidad muy alta. Prueba molecular y cultivo para tuberculosis. Ver la Figura 2 de Definicion.',
      laboratorio: 'PRESION DE APERTURA en todos. Antigeno criptococico en suero y en liquido, muy superior a la tinta china. Prueba molecular para tuberculosis y adenosina desaminasa, con VOLUMEN ALTO de liquido para mejorar el rendimiento. Cultivo prolongado. Serologia de VIH y recuento de CD4. Sodio, por la hiponatremia frecuente.',
      imagen: 'RESONANCIA con contraste: realce meningeo BASAL, hidrocefalia, tuberculomas e INFARTOS de los ganglios de la base en la tuberculosa. En la criptococica puede verse muy poco, o dilatacion de los espacios perivasculares y criptococomas. Imagen toracica buscando tuberculosis pulmonar.',
      complementarios: 'PUNCIONES EVACUADORAS REPETIDAS en la criptococica con presion elevada, que forman parte del tratamiento y salvan vidas. Fondo de ojo. Valoracion de pares craneales seriada. Y, en el paciente con VIH, planificar el inicio del tratamiento antirretroviral con cuidado por el riesgo de sindrome inflamatorio de reconstitucion inmunitaria.',
      dx_diferencial: 'Entre ellas dos; meningitis por Listeria, Brucella y sifilis; carcinomatosis meningea; linfoma; sarcoidosis y otras meningitis autoinmunes; y meningitis bacteriana parcialmente tratada.',
      tx_medico: 'Manejo de la hidrocefalia, de la hiponatremia y de las crisis. En la criptococica, control de la presion intracraneal con punciones evacuadoras. Y coordinacion con infecciosas para el momento del tratamiento antirretroviral, que si se inicia demasiado pronto puede desencadenar un sindrome de reconstitucion inmunitaria grave.',
      tx_farmacologico: 'TUBERCULOSA: tratamiento antituberculoso con pauta prolongada mas DEXAMETASONA adyuvante, que reduce la mortalidad. Se inicia ante la SOSPECHA, sin esperar a la confirmacion, porque el retraso se paga en secuelas y en vidas. CRIPTOCOCICA: induccion con anfotericina B liposomal asociada a flucitosina, seguida de consolidacion y mantenimiento con fluconazol.',
      tx_intervencionista: 'Derivacion ventricular en la hidrocefalia de la tuberculosa. Punciones evacuadoras repetidas y, si no bastan, derivacion en la criptococica con hipertension refractaria.',
      criterios_uci: 'Bajo nivel de conciencia, hidrocefalia aguda, estado epileptico e hipertension intracraneal refractaria.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la hidrocefalia (que puede aparecer durante el tratamiento), la hiponatremia, la hepatotoxicidad de los farmacos antituberculosos y las interacciones con el tratamiento antirretroviral. Puncion de control en la criptococica para comprobar la esterilizacion.',
      seguimiento_ambulatorio: 'Tratamiento prolongado con adherencia estrecha. Profilaxis secundaria en la criptococica hasta la reconstitucion inmunitaria. Valoracion de secuelas: pares craneales, cognicion, epilepsia y hipoacusia.',
      pronostico: 'Malo si el diagnostico se retrasa. En la tuberculosa, el estadio al inicio del tratamiento es el mejor predictor de muerte y secuelas. En la criptococica, la mortalidad precoz se relaciona sobre todo con la HIPERTENSION INTRACRANEAL no controlada, que es tratable con algo tan simple como puncionar.',
      algoritmo: ['Sospecharla ante una cefalea de SEMANAS con febricula', 'Medir siempre la PRESION DE APERTURA', 'Comprobar el perfil: linfocitario con glucosa BAJA', 'Pedir antigeno criptococico en suero y en liquido', 'Enviar VOLUMEN ALTO para prueba molecular y cultivo de tuberculosis', 'Pedir serologia de VIH y recuento de CD4', 'Pedir RESONANCIA buscando realce basal, hidrocefalia e infartos', 'Iniciar tratamiento antituberculoso con DEXAMETASONA ante la sospecha', 'En la criptococica, puncionar de forma repetida para bajar la presion', 'Planificar con cuidado el momento del tratamiento antirretroviral']
    },
    {
      nombre: 'Absceso cerebral y complicaciones neurologicas',
      color: '#3d5a73',
      definicion: 'Coleccion supurada intraparenquimatosa encapsulada, junto con el conjunto de complicaciones neurologicas que pueden aparecer durante una infeccion del sistema nervioso central.',
      fisiopatologia: 'El absceso comienza como una cerebritis focal que en una a dos semanas desarrolla una capsula de colageno. Esa organizacion explica lo que se ve en la imagen y el hallazgo que resuelve el diagnostico diferencial: el pus tiene alta celularidad y viscosidad, de modo que RESTRINGE la difusion en la resonancia, mientras que la necrosis de un tumor no lo hace. Llega por contiguidad (otitis, sinusitis, foco dental), por via hematogena (endocarditis, foco pulmonar, cortocircuito derecha a izquierda) o por inoculacion directa tras cirugia o traumatismo, y el origen predice tanto la localizacion como el germen.',
      epidemiologia: 'Suele ser polimicrobiano cuando procede de un foco contiguo, con estreptococos y anaerobios. En el inmunodeprimido se amplia a hongos, nocardia y toxoplasma. Las complicaciones neurologicas de las meningitis son frecuentes y a menudo se atribuyen por error a la propia infeccion sin buscar una causa concreta y tratable.',
      factores_riesgo: ['Otitis media cronica, mastoiditis y sinusitis', 'Foco dental y manipulacion odontologica', 'Endocarditis infecciosa', 'Cortocircuito derecha a izquierda, incluida la fistula arteriovenosa pulmonar', 'Bronquiectasias y absceso pulmonar', 'Neurocirugia y traumatismo craneal penetrante', 'Inmunodepresion, VIH y trasplante', 'Diabetes mellitus', 'Consumo de drogas por via parenteral', 'Meningitis bacteriana previa mal controlada'],
      clinica: 'La triada de fiebre, cefalea y focalidad esta completa en una minoria. Domina la CEFALEA, con frecuencia progresiva y unilateral, y pueden aparecer crisis, focalidad, papiledema y alteracion del nivel de conciencia. La fiebre puede faltar, y esa ausencia es la razon por la que muchos abscesos se estudian primero como un tumor.',
      criterios_dx: 'Lesion con realce en ANILLO y RESTRICCION DE LA DIFUSION en la resonancia, en el contexto clinico adecuado. La confirmacion es microbiologica, por aspiracion.',
      laboratorio: 'HEMOCULTIVOS. Cultivo del material aspirado, que es el que da el diagnostico y permite dirigir el tratamiento. Hemograma, proteina C reactiva y velocidad de sedimentacion, que pueden ser normales. La PUNCION LUMBAR esta CONTRAINDICADA si hay efecto de masa, y ademas aporta poco.',
      imagen: 'RESONANCIA CON CONTRASTE Y DIFUSION, que es la prueba clave: el absceso restringe la difusion y el tumor necrotico no. Tomografia si la resonancia no esta disponible. Y busqueda del origen con imagen de senos, pe&#241;asco, torax y valoracion odontologica, mas ecocardiograma si se sospecha endocarditis.',
      complementarios: 'ELECTROENCEFALOGRAMA ante crisis o bajo nivel de conciencia. Ecocardiograma. Y, ante un absceso sin foco evidente, buscar un CORTOCIRCUITO derecha a izquierda, que es una causa que se pasa por alto y que puede corregirse.',
      dx_diferencial: 'Tumor primario o metastasis con necrosis central, que es el gran diferencial y se resuelve con la difusion; tuberculoma; toxoplasmosis y linfoma primario en el paciente con VIH; empiema subdural; infarto en fase subaguda; y enfermedad desmielinizante tumefacta.',
      tx_medico: 'Manejo de la hipertension intracraneal y de las crisis. Corticoides solo si hay edema con efecto de masa significativo, valorando que pueden reducir la penetracion del antibiotico. Y busqueda y tratamiento del FOCO de origen, sin lo cual la recurrencia es probable.',
      tx_farmacologico: 'Antibiotico de amplio espectro con buena penetracion en el sistema nervioso central y cobertura de anaerobios, ajustado despues al cultivo, durante un periodo PROLONGADO de semanas. Antiepilepticos si hay crisis.',
      tx_intervencionista: 'ASPIRACION ESTEREOTACTICA, que a la vez descomprime y da el diagnostico microbiologico, y es de eleccion en la mayoria. Excision quirurgica en abscesos con capsula gruesa, multiloculados, de origen traumatico o que no responden. Drenaje del foco de origen.',
      criterios_uci: 'Bajo nivel de conciencia, efecto de masa con riesgo de herniacion, estado epileptico y rotura del absceso al ventriculo, que es una complicacion de mortalidad muy alta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Imagen de control seriada para comprobar la reduccion. Vigilancia de crisis, de hidrocefalia y de trombosis venosa cerebral. En cualquier meningitis que no evoluciona bien, buscar de forma activa empiema, absceso, hidrocefalia, infarto o trombosis venosa antes de asumir que es la propia infeccion.',
      seguimiento_ambulatorio: 'Completar el tratamiento prolongado con controles de imagen. Manejo de la epilepsia secundaria. Corregir el foco de origen, incluido el cortocircuito cuando exista, para evitar la recurrencia.',
      pronostico: 'Ha mejorado mucho con la resonancia y la aspiracion estereotactica. La epilepsia secundaria es la secuela mas frecuente. La rotura al sistema ventricular sigue siendo una complicacion de mortalidad muy elevada.',
      algoritmo: ['Sospecharlo ante cefalea progresiva con focalidad o crisis, aunque no haya fiebre', 'Pedir RESONANCIA con contraste y DIFUSION', 'Usar la restriccion de la difusion para separarlo del tumor', 'NO puncionar si hay efecto de masa', 'Extraer hemocultivos antes del antibiotico', 'Aspirar de forma estereotactica para diagnosticar y descomprimir', 'Iniciar antibiotico de amplio espectro con cobertura de anaerobios', 'Buscar el FOCO: senos, oido, boca, pulmon y corazon', 'Descartar un cortocircuito derecha a izquierda si no hay foco', 'Controlar con imagen y tratar la epilepsia secundaria']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este es un tema donde el orden de las acciones importa tanto como el contenido. La mayoria de los errores graves no son de eleccion de farmaco sino de SECUENCIA: esperar a la imagen o al liquido antes de tratar, o dar la dexametasona cuando ya no sirve.',
    parametros: ['Sospechar con DOS de cuatro, sin exigir la triada completa', 'Extraer hemocultivos en el primer minuto', 'Dar dexametasona ANTES o CON el antibiotico, nunca despues', 'No retrasar el antibiotico por la tomografia ni por la puncion', 'Recordar la AMPICILINA si hay mas de 50 a&#241;os, embarazo o inmunodepresion', 'Medir la PRESION DE APERTURA siempre', 'Pedir glucemia SIMULTANEA para calcular el cociente', 'Un liquido linfocitario con glucosa baja NO es virico', 'Iniciar aciclovir ante cualquier perfil encefalitico', 'No suspender el aciclovir por una prueba precoz negativa', 'Aislar por gotas y dar profilaxis si se sospecha meningococo', 'Reevaluar a las 48 horas y buscar complicaciones si no mejora'],
    criterios_uci_general: 'Alteracion del nivel de conciencia o escala de Glasgow en descenso, crisis y estado epileptico, shock septico y purpura fulminante, insuficiencia respiratoria o incapacidad para proteger la via aerea, hipertension intracraneal e hidrocefalia aguda, y edema cerebral con riesgo de herniacion. En el absceso, el efecto de masa significativo y la rotura al sistema ventricular.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema. La infeccion activa del sistema nervioso central es, de hecho, una contraindicacion para el trasplante de organo mientras no se controle.',
    prevencion: 'Primaria: VACUNACION frente a neumococo, meningococo y Haemophilus influenzae tipo b, especialmente en asplenia, deficit del complemento e inmunodepresion; tratamiento correcto de otitis y sinusitis; reparacion de fistulas de liquido en la meningitis recurrente; y cribado y tratamiento de la infeccion tuberculosa latente antes de iniciar farmacos anti factor de necrosis tumoral. Secundaria: QUIMIOPROFILAXIS de los contactos estrechos en la enfermedad meningococica, aislamiento por gotas durante las primeras 24 horas de tratamiento, y profilaxis secundaria en la criptococica hasta la reconstitucion inmunitaria. Terciaria: audiometria y rehabilitacion auditiva, valoracion neuropsicologica, control de la epilepsia secundaria y busqueda de la causa subyacente en toda meningitis recurrente.'
  }
};

export const compCites = {
  'Meningitis bacteriana aguda: reconocer y no perder tiempo': [1, 4, 8, 16],
  'Tratamiento empirico y dexametasona': [1, 3, 6, 7, 15],
  'Encefalitis por virus herpes simple': [2, 9, 10],
  'Meningitis virica y sindrome meningeo aseptico': [8, 16],
  'Meningitis subaguda y cronica: tuberculosa y criptococica': [11, 12, 13],
  'Absceso cerebral y complicaciones neurologicas': [14]
};
export const estigmasTitulo = 'Signos y datos que cambian la conducta';
export const estigmas = [
  { s: 'Exantema petequial o purpurico', p: 'Meningococo', photo: null, desc: 'Obliga a dos cosas que se olvidan con el paciente grave delante: AISLAMIENTO POR GOTAS durante las primeras 24 horas de tratamiento y QUIMIOPROFILAXIS de los contactos estrechos. Si progresa a purpura fulminante, el cuadro es de shock y de coagulacion intravascular diseminada.' },
  { s: 'Dos de cuatro, no la triada', p: 'Como se sospecha', photo: null, desc: 'Fiebre, rigidez de nuca y alteracion de conciencia coinciden en menos de la mitad de los adultos. Lo que si es casi constante es tener al menos dos de estos cuatro: cefalea, fiebre, rigidez de nuca y alteracion del nivel de conciencia.' },
  { s: 'Confusion y febricula en el anciano', p: 'Presentacion enga&#241;osa', photo: null, desc: 'En el mayor y en el inmunodeprimido puede no haber rigidez de nuca ni fiebre alta. Exigir el cuadro clasico en esta poblacion es una forma segura de llegar tarde, y es justamente la poblacion que ademas necesita ampicilina.' },
  { s: 'Cociente de glucosa por debajo de 0.4', p: 'No es virica', photo: null, desc: 'Es el dato mas util del liquido porque no depende de la glucemia del momento, siempre que se extraiga una glucemia SIMULTANEA. Apoya con fuerza una causa bacteriana, tuberculosa o fungica.' },
  { s: 'Linfocitos con glucosa baja', p: 'TB, hongo o Listeria', photo: null, desc: 'La combinacion que hay que reconocer de inmediato, porque cambia todo el tratamiento. Un liquido linfocitario NO es sinonimo de virico: con glucosa baja obliga a pensar en tuberculosis, criptococo, Listeria, Brucella y carcinomatosis.' },
  { s: 'Presion de apertura elevada', p: 'Criptococo', photo: null, desc: 'Se mide con el manometro, no cuesta nada y se olvida constantemente. En la meningitis criptococica la hipertension intracraneal es la principal causa de muerte precoz, y su tratamiento es tan simple como puncionar de forma repetida.' },
  { s: 'Paralisis del sexto par con cefalea de semanas', p: 'Meningitis tuberculosa', photo: null, desc: 'El exudado gelatinoso de la BASE del craneo atrapa los pares craneales, obstruye la circulacion del liquido y envuelve las arterias. De ahi la triada de complicaciones: pares craneales, hidrocefalia e infartos.' },
  { s: 'Cambio de conducta con fiebre', p: 'Encefalitis, no meningitis', photo: null, desc: 'Lo que separa ambas entidades es la FUNCION cerebral: conducta, lenguaje, memoria o crisis. Ese perfil obliga a a&#241;adir aciclovir de inmediato, a pedir resonancia y a solicitar un electroencefalograma.' },
  { s: 'Prueba molecular de herpes negativa el primer dia', p: 'No descarta', photo: null, desc: 'En las primeras 72 horas puede ser negativa. Si la sospecha es alta, se MANTIENE el aciclovir y se repite la puncion a los pocos dias. Suspenderlo con una unica prueba precoz negativa es un error caro.' },
  { s: 'Hematies en el liquido sin puncion traumatica', p: 'Encefalitis necrotizante', photo: null, desc: 'El herpes produce una encefalitis necrotizante y HEMORRAGICA, y por eso pueden aparecer hematies sin que la puncion haya sido traumatica. Que el liquido no aclare entre tubos apoya que la sangre no es del pinchazo.' },
  { s: 'Anillo que restringe la difusion', p: 'Absceso, no tumor', photo: null, desc: 'El pus tiene alta celularidad y viscosidad, de modo que restringe la difusion en la resonancia; la necrosis de un tumor no lo hace. Es el hallazgo que resuelve el diferencial mas importante de una lesion en anillo.' },
  { s: 'Meningitis que se repite', p: 'Buscar la puerta de entrada', photo: null, desc: 'Obliga a buscar una fistula de liquido cefalorraquideo, un deficit del complemento, un foco parameningeo cronico o el virus herpes simple tipo 2. Tratar el episodio sin buscar la causa garantiza el siguiente.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de tomografia antes de la puncion (calculadora disponible)': [5, 1],
  'Perfil del liquido cefalorraquideo (calculadora disponible)': [8, 16],
  'Tratamiento empirico por edad y factores (calculadora disponible)': [1, 6, 15],
  'Escala de coma de Glasgow': [4],
  'Definicion de caso de encefalitis del International Encephalitis Consortium': [9],
  'Estadios del British Medical Research Council en la meningitis tuberculosa': [11]
};
export const escalaCalc = {
  'Criterios de tomografia antes de la puncion (calculadora disponible)': 'tc-antes-puncion',
  'Perfil del liquido cefalorraquideo (calculadora disponible)': 'perfil-lcr',
  'Tratamiento empirico por edad y factores (calculadora disponible)': 'empirico-meningoencefalitis'
};
export const compGroups = [
  { name: 'La urgencia bacteriana', items: ['Meningitis bacteriana aguda: reconocer y no perder tiempo', 'Tratamiento empirico y dexametasona'] },
  { name: 'Cuando falla el cerebro', items: ['Encefalitis por virus herpes simple'] },
  { name: 'El liquido linfocitario', items: ['Meningitis virica y sindrome meningeo aseptico', 'Meningitis subaguda y cronica: tuberculosa y criptococica'] },
  { name: 'La coleccion y sus consecuencias', items: ['Absceso cerebral y complicaciones neurologicas'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la urgencia del tema, separadas a proposito: reconocer la meningitis bacteriana es un problema distinto de tratarla, y en el tratamiento lo que mas pesa no es la eleccion del farmaco sino el orden y la hora. La tercera es la encefalitis herpetica, que se separa de todo lo demas por un dato de la exploracion y se trata sin esperar a la confirmacion. Las dos siguientes comparten un liquido linfocitario y se distinguen por un solo numero, la glucosa: con glucosa normal casi siempre es virica y benigna, con glucosa baja es tuberculosa o fungica y el retraso se paga caro. La ultima reune el absceso y las complicaciones que hay que buscar cuando una infeccion del sistema nervioso no evoluciona como deberia.';
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
  root: { title: 'SOSPECHA DE INFECCION DEL SISTEMA NERVIOSO', color: '#7a3f2e', target: 'definicion' },
  branches: [
    { title: 'LAS PRIMERAS HORAS', sub: 'El orden que no se invierte', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Hemocultivos ya', sub: 'Tardan un minuto', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Dexametasona y antibiotico', sub: 'Antes o con, nunca despues', color: '#7a3f2e', target: 'clasificacion' },
      { title: 'Tomografia solo si hay criterio', sub: 'Y sin retrasar el tratamiento', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Puncion con presion de apertura', sub: 'Sigue informando tras tratar', color: '#6b4a8c', target: 'diagnostico' }
    ] },
    { title: 'LEER EL LIQUIDO', sub: 'Celula, cociente y proteina', color: '#7a3f2e', target: 'clasificacion', leaves: [
      { title: 'Polimorfonucleares y glucosa baja', sub: 'Bacteriana', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Linfocitos y glucosa normal', sub: 'Virica', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Linfocitos y glucosa BAJA', sub: 'Tuberculosa o fungica', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Puncion traumatica', sub: 'Corregir, pero manda la clinica', color: '#3d5a73', target: 'clasificacion' }
    ] },
    { title: 'FALLA EL CEREBRO', sub: 'Conducta, lenguaje o crisis', color: '#6b4a8c', target: 'complicaciones', leaves: [
      { title: 'Aciclovir de inmediato', sub: 'Sin esperar a la prueba', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Resonancia, no tomografia', sub: 'Temporal medial y limbico', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Electroencefalograma', sub: 'Buscar crisis no convulsivas', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Empeora tras mejorar', sub: 'Pensar en autoinmune', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 8, 13], no_invasivos: [5, 9, 11], imagen: [2, 14] };
export const clasificacionCite = [1, 2, 5, 9];
export const seguimientoCite = [1, 3, 7];
