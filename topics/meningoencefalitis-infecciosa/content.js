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
  subtitulo: 'Módulo 65 · Medicina Interna',
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
    <strong style="color:#8c3a34;">El error que más cuesta en este tema no es elegir mal el antibiótico: es RETRASARLO.</strong> <span style="color:var(--ink-dim);">Y el motivo del retraso casi siempre es el mismo, esperar a la tomografía o a la punción lumbar antes de tratar.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">1</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">HEMOCULTIVOS</strong> de inmediato. Tardan un minuto, se pueden sacar a la vez que la via y siguen siendo positivos aunque la punción se retrase.</div>
    </div>
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">2</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">DEXAMETASONA y ANTIBIÓTICO</strong>, en ese orden y en el mismo momento. El corticoide se administra ANTES o CON la primera dosis, nunca después: pasada esa ventana ya no aporta.</div>
    </div>
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3d5a73;">3</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">TOMOGRAFÍA</strong>, solo si hay criterio para ella: inmunodepresion, enfermedad previa del sistema nervioso central, crisis reciente, papiledema, alteración del nivel de conciencia o focalidad. Sin ninguno de esos datos, se punciona directamente.</div>
    </div>
    <div style="display:grid;grid-template-columns:26px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">4</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">PUNCIÓN LUMBAR</strong>. Aunque se haga con el antibiótico ya puesto, el líquido sigue informando: la celularidad, la glucosa y las proteínas no se normalizan en unas horas, y quedan la reacción en cadena de la polimerasa y los hemocultivos ya extraídos.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La triada clásica falla más de lo que se cree.</strong> Fiebre, rigidez de nuca y alteración del nivel de conciencia están las tres presentes en menos de la mitad de los adultos. Lo que si es casi constante es tener al menos <strong>DOS de estos cuatro</strong>: cefalea, fiebre, rigidez de nuca y alteración del nivel de conciencia. Exigir la triada completa para sospechar el diagnóstico es una forma segura de llegar tarde. Y en el anciano y en el inmunodeprimido el cuadro puede reducirse a confusión y febrícula.
  </div>
</div>`;

const lcrHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a3f2e;border-radius:8px;padding:5px 9px;background:#7a3f2e12;margin-bottom:6px;">
    <strong style="color:#7a3f2e;">Tres numeros ordenan casi todo el líquido:</strong> <span style="color:var(--ink-dim);">que célula predomina, cuanto vale el COCIENTE de glucosa entre líquido y plasma, y cuanta proteína hay.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">BACTERIANA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Celularidad alta con predominio de <strong style="color:var(--ink);">POLIMORFONUCLEARES</strong>, cociente de glucosa <strong style="color:var(--ink);">BAJO</strong> (por debajo de 0.4) y proteínas elevadas. El cociente bajo es el dato más útil, porque no depende de la glucemia del momento.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">VIRICA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Celularidad moderada con predominio de <strong style="color:var(--ink);">LINFOCITOS</strong>, glucosa <strong style="color:var(--ink);">NORMAL</strong> y proteínas normales o poco elevadas. Ojo: en las primeras horas puede predominar el polimorfonuclear y confundir.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">TB U HONGO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La combinación que hay que reconocer: predominio <strong style="color:var(--ink);">LINFOCITARIO</strong> con glucosa <strong style="color:#8c3a34;">BAJA</strong> y proteínas <strong style="color:var(--ink);">MUY altas</strong>. Un líquido linfocitario con glucosa baja NO es una meningitis virica y obliga a pensar en tuberculosis, hongos, listeria, brucella y carcinomatosis.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">La punción traumática.</strong> Los hematies arrastran leucocitos y proteínas. La corrección habitual es restar <strong>un leucocito por cada 500 a 1000 hematies</strong>, pero es una APROXIMACIÓN: si el resultado corregido queda en el limite, manda la clínica y no la aritmetica. Que el líquido aclare entre tubos apoya la punción traumática, pero tampoco lo prueba.
    </div>
    <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#6b4a8c;">Lo que no se debe olvidar pedir.</strong> <strong>PRESIÓN DE APERTURA</strong>, que es gratis y diagnóstica en la criptococica. Tinción de Gram y cultivo. Reacción en cadena de la polimerasa para virus herpes y enterovirus. Y, según el contexto, antígeno criptococico, adenosina desaminasa, prueba molecular para tuberculosis y citología.
    </div>
  </div>
</div>`;

const encefalitisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #6b4a8c;border-radius:8px;padding:5px 9px;background:#6b4a8c12;margin-bottom:6px;">
    <strong style="color:#6b4a8c;">Meningitis y encefalitis se separan por un dato:</strong> <span style="color:var(--ink-dim);">en la meningitis el paciente esta molesto pero con la función cerebral conservada; en la ENCEFALITIS hay alteración del contenido de la conciencia, de la conducta, del lenguaje o crisis.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #6b4a8c;border-radius:8px;padding:6px 8px;background:#6b4a8c08;">
      <div style="font-weight:700;color:#6b4a8c;text-align:center;margin-bottom:4px;">CUANDO PENSAR EN HERPES</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Fiebre con <strong style="color:var(--ink);">cambio de conducta</strong>, alteración del lenguaje, fallo de memoria reciente, alucinaciones olfativas o crisis focales. Es la encefalitis esporádica grave más frecuente y no tiene estacionalidad ni requiere viaje ni contacto.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">QUE HACER, Y CUANDO</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">ACICLOVIR INTRAVENOSO YA</strong>, ante la sospecha y sin esperar a la reacción en cadena de la polimerasa. El pronóstico depende del tiempo hasta la primera dosis. Hidratar bien, porque el fármaco puede cristalizar en el riñón.</div>
    </div>
  </div>
  <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;margin-bottom:6px;">
    <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">LA TRAMPA: UNA PRUEBA MOLECULAR NEGATIVA MUY PRECOZ NO DESCARTA</div>
    <div style="color:var(--ink-dim);line-height:1.6;">En las <strong style="color:var(--ink);">primeras 72 horas</strong> la reacción en cadena de la polimerasa para virus herpes puede ser negativa. Si la sospecha es alta, se <strong>MANTIENE el aciclovir</strong> y se REPITE la punción a los pocos días. Suspender el tratamiento con una única prueba precoz negativa es un error caro, porque la enfermedad no tratada deja secuelas graves o mata.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">La imagen que orienta.</strong> La <strong>RESONANCIA</strong> es mucho más sensible que la tomografía y muestra afectación de los lóbulos <strong>TEMPORALES</strong> mediales, la insula y el sistema limbico, con frecuencia asimétrica. Una tomografía normal en las primeras horas no descarta nada.
    </div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Y el electroencefalograma.</strong> Casi siempre anormal, con enlentecimiento focal temporal y a veces descargas periódicas lateralizadas. Sirve además para detectar <strong>CRISIS NO CONVULSIVAS</strong>, que explican por que un paciente no despierta y que se pasan por alto si no se busca.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La infección del sistema nervioso central es uno de los pocos cuadros en los que el <strong>reloj</strong> forma parte del diagnóstico. La elección del antibiótico importa, pero lo que más se asocia a mortalidad y a secuelas es el <strong>retraso</strong> en administrarlo. Por eso este tema se organiza alrededor de una secuencia y no de una lista de gérmenes.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: la secuencia de las primeras horas.</strong></p>
<p style="margin:0 0 12px;">Hemocultivos, dexametasona y antibiótico, y solo después la tomografía si hay criterio para ella y la punción lumbar. La causa habitual del retraso es invertir ese orden y esperar a la imagen o al líquido antes de tratar. Conviene además desconfiar de la triada clásica: fiebre, rigidez de nuca y alteración de la conciencia coinciden en menos de la mitad de los adultos, mientras que <strong>dos de cuatro</strong> (añadiendo la cefalea) están presentes en casi todos.</p>
${figBlock('Figura 1', 'Las primeras horas: el orden que no se debe invertir', relojHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: leer el líquido.</strong></p>
<p style="margin:0 0 12px;">Tres numeros ordenan casi todo: que célula predomina, el <strong>cociente</strong> de glucosa entre líquido y plasma, y las proteínas. Hay una combinación que merece reconocerse de inmediato porque cambia por completo el tratamiento: un líquido <strong>linfocitario con glucosa baja</strong>, que no es una meningitis virica y obliga a pensar en tuberculosis, hongos, listeria o carcinomatosis.</p>
${figBlock('Figura 2', 'Perfiles del líquido cefalorraquídeo y la punción traumática', lcrHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la encefalitis.</strong></p>
<p style="margin:0 0 12px;">Lo que separa la meningitis de la encefalitis es la <strong>función cerebral</strong>: conducta, lenguaje, memoria o crisis. Ante esa sospecha se inicia <strong>aciclovir</strong> sin esperar a la prueba molecular, y hay una trampa concreta que conviene tener presente: una reacción en cadena de la polimerasa negativa en las primeras 72 horas no descarta el herpes.</p>
${figBlock('Figura 3', 'Encefalitis: cuando pensar en herpes y por que no se espera', encefalitisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No retrasar el antibiótico para hacer la tomografía o la punción. No exigir la triada completa para sospechar el diagnóstico. No dar la dexametasona después del antibiótico, porque fuera de esa ventana no aporta. No olvidar la ampicilina en el mayor de 50 años, en la embarazada y en el inmunodeprimido, porque las cefalosporinas <strong>no cubren Listeria</strong>. No interpretar como virica una meningitis linfocitaria con glucosa baja. No dejar de medir la <strong>presión de apertura</strong>, que es gratis y en la criptococica dicta el tratamiento. No suspender el aciclovir por una prueba molecular precoz negativa si la sospecha sigue alta. No confundir un absceso con un tumor sin mirar la difusión en la resonancia. Y no olvidar el <strong>aislamiento por gotas</strong> ni la profilaxis de los contactos cuando el germen es el meningococo.</p>`;

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
      tituloA: 'Síndrome meníngeo',
      tituloB: 'Síndrome encefalitico',
      compensada: 'Cefalea intensa y de instauración rápida, fiebre, rigidez de nuca, fotofobia, náuseas y vómitos. El paciente esta molesto y postrado pero, si es una meningitis pura, la función cerebral esta conservada: contesta, se orienta y razona. Los signos de Kernig y Brudzinski son POCO sensibles y su ausencia no descarta nada. Hay que buscar de forma activa el EXANTEMA PETEQUIAL o purpúrico del meningococo, porque obliga a aislar por gotas y a dar profilaxis a los contactos, y buscar también un foco parameningeo: otitis, sinusitis o mastoiditis. En el anciano y en el inmunodeprimido el cuadro puede reducirse a confusión y febrícula, sin rigidez ni fiebre alta.',
      descompensada: 'Aquí lo que falla es el CONTENIDO de la conciencia y no solo el nivel: cambio de conducta o de personalidad, alteración del lenguaje, fallo de la memoria reciente, alucinaciones (a veces olfativas), agitación o psicosis, y CRISIS, con frecuencia focales. Puede haber focalidad neurológica y movimientos anormales. Ese perfil define la ENCEFALITIS y cambia el plan: obliga a añadir aciclovir de inmediato, a pedir resonancia y a solicitar un electroencefalograma que además descarte crisis no convulsivas, que explican por que un paciente no despierta y se pasan por alto si no se buscan.'
    },
    laboratorio: [
      { prueba: 'Hemocultivos antes del antibiótico', utilidad: 'Se extraen en el primer minuto y no retrasan nada. Identifican el germen en una proporción importante de las meningitis bacterianas, incluso cuando la punción lumbar se difiere o el líquido ya esta esterilizado por una dosis de antibiótico.' },
      { prueba: 'Citoquimica del líquido cefalorraquídeo', utilidad: 'Recuento y fórmula, glucosa y proteínas. Lo más útil es el COCIENTE de glucosa entre líquido y plasma, porque no depende de la glucemia del momento: por debajo de 0.4 apoya con fuerza una causa bacteriana, tuberculosa o fúngica.' },
      { prueba: 'Tinción de Gram y cultivo del líquido', utilidad: 'El Gram orienta en minutos y su rendimiento es alto antes del antibiótico. El cultivo confirma y permite ajustar. Ambos pierden sensibilidad tras la primera dosis, lo que NO justifica retrasar el tratamiento sino extraer antes los hemocultivos.' },
      { prueba: 'Reacción en cadena de la polimerasa en líquido', utilidad: 'Para virus herpes simple, varicela zóster y enterovirus, y en paneles moleculares también para las bacterias habituales. Mantiene rendimiento tras el antibiótico. ATENCIÓN: la de herpes puede ser negativa en las primeras 72 horas y hay que repetirla si la sospecha es alta.' },
      { prueba: 'Presión de apertura', utilidad: 'Se mide con el manometro al puncionar, no cuesta nada y se olvida constantemente. En la meningitis criptococica la hipertensión intracraneal es la principal causa de muerte precoz y su control con punciones evacuadoras repetidas forma parte del tratamiento.' },
      { prueba: 'Antígeno criptococico', utilidad: 'En suero y en líquido, con sensibilidad muy alta. Es la prueba de elección frente a la tinta china, que es mucho menos sensible. Obligada ante meningitis subaguda, linfocitaria o en cualquier paciente con inmunodepresion celular.' },
      { prueba: 'Adenosina desaminasa y prueba molecular para tuberculosis', utilidad: 'La prueba molecular en líquido tiene alta especificidad y rendimiento mejor cuanto MAYOR sea el volumen enviado. La adenosina desaminasa apoya el diagnóstico. Ninguna de las dos lo descarta, de modo que ante alta sospecha se trata sin esperar la confirmación.' },
      { prueba: 'Serología de VIH y estudio de inmunidad', utilidad: 'La meningitis criptococica, la tuberculosa y la toxoplasmosis cambian por completo la probabilidad según el estado inmunitario. Un cuadro atípico o subagudo obliga a preguntar por inmunodepresion y a hacer la serología.' },
      { prueba: 'Procalcitonina y lactato en líquido', utilidad: 'Ayudan cuando el líquido es ambiguo y el paciente ya ha recibido antibiótico. Un lactato elevado en líquido apoya causa bacteriana. Son apoyos, no arbitros: no sustituyen al juicio clínico ni autorizan a retirar el tratamiento empírico.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de tomografía antes de la punción (calculadora disponible)', interpretacion: 'Reúne los datos que predicen una lesión con efecto de masa y que hacen desaconsejable puncionar sin imagen previa, recordando que la imagen NUNCA justifica retrasar el antibiótico.', cutoff: 'Sin ninguno de los criterios, se punciona directamente y sin tomografía' },
      { metodo: 'Perfil del líquido cefalorraquídeo (calculadora disponible)', interpretacion: 'Cruza celularidad, fórmula, cociente de glucosa y proteínas para orientar hacia causa bacteriana, virica o tuberculosa y fúngica, con corrección por punción traumática.', cutoff: 'Cociente de glucosa por debajo de 0.4: no es una meningitis virica' },
      { metodo: 'Tratamiento empírico por edad y factores (calculadora disponible)', interpretacion: 'Devuelve la combinación empírica según edad, inmunodepresion, antecedente neuroquirúrgico y sospecha de encefalitis, e indica si corresponde dexametasona.', cutoff: 'Ampicilina si hay más de 50 años, embarazo o inmunodepresion' },
      { metodo: 'Escala de coma de Glasgow', interpretacion: 'Cuantifica el nivel de conciencia al ingreso y en la evolución. En la meningitis bacteriana del adulto, el nivel de conciencia bajo es uno de los predictores de mal pronóstico más consistentes.', cutoff: 'Puntuación baja o en descenso: valorar via aérea y unidad de críticos' },
      { metodo: 'Definición de caso de encefalitis del International Encephalitis Consortium', interpretacion: 'Exige alteración del estado mental de al menos 24 horas sin otra causa, más criterios menores como fiebre, crisis, focalidad, pleocitosis, imagen o electroencefalograma alterados.', cutoff: 'Estandariza el diagnóstico y ordena el estudio etiológico por prioridades' },
      { metodo: 'Estadios del British Medical Research Council en la meningitis tuberculosa', interpretacion: 'Clasifica en tres estadios según el nivel de conciencia y la focalidad: consciente sin focalidad, consciente con focalidad o algo obnubilado, y estuporoso o comatoso.', cutoff: 'El estadio al inicio del tratamiento es el mejor predictor de secuelas y muerte' }
    ],
    imagen: [
      { modalidad: 'Tomografía craneal sin contraste', hallazgos: 'Solo antes de la punción si hay criterio, y NUNCA a costa de retrasar el antibiótico. Busca lesión con efecto de masa, desplazamiento de línea media e hidrocefalia. Una tomografía normal no descarta hipertensión intracraneal ni meningitis.' },
      { modalidad: 'Resonancia craneal con contraste y difusión', hallazgos: 'Mucho más sensible. En la encefalitis herpetica, afectación de lóbulos TEMPORALES mediales, insula y sistema limbico, a menudo asimétrica. En la tuberculosa, realce meníngeo BASAL, hidrocefalia, tuberculomas e infartos. Y la DIFUSIÓN restringida separa el absceso del tumor necrótico.' },
      { modalidad: 'Tomografía de senos y peñasco', hallazgos: 'Busca el foco parameningeo que explica el cuadro y que puede necesitar cirugía: sinusitis, otitis, mastoiditis o una fístula de líquido en la meningitis recurrente. Encontrarlo cambia el tratamiento y previene la recaída.' },
      { modalidad: 'Radiografía y tomografía de tórax', hallazgos: 'Busca el origen: neumonía neumocócica, tuberculosis pulmonar o un foco supurativo que siembre un absceso. En la sospecha de tuberculosis meníngea, la imagen torácica apoya el diagnóstico en una parte de los casos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por <strong>síndrome</strong> (meningitis, encefalitis o meningoencefalitis, según este o no comprometida la función cerebral), por <strong>tiempo</strong> (aguda en horas o días, subaguda o crónica en semanas, que es lo que separa al neumococo de la tuberculosis) y por el <strong>perfil del líquido</strong> (purulento, linfocitario con glucosa normal o linfocitario con glucosa baja). A esto se añaden el <strong>huésped</strong>, porque la inmunodepresion cambia la lista de gérmenes y la de fármacos, y el <strong>origen</strong>, comunitario o asociado a neurocirugía y a dispositivos, que cambia por completo el tratamiento empírico.`,
    escalas: [
      { nombre: 'Criterios de tomografía antes de la punción (calculadora disponible)', componentes: 'Inmunodepresion, enfermedad previa del sistema nervioso central, crisis en la semana previa, papiledema, alteración del nivel de conciencia y focalidad neurológica. La edad avanzada se añade en algunas recomendaciones.', formula: 'Si no hay ninguno de esos datos, la probabilidad de una lesión con efecto de masa es muy baja y se punciona sin imagen previa.', interpretacion: 'Su valor real es EVITAR tomografías innecesarias que retrasan la punción. Y su regla de oro: si se pide la tomografía, el antibiótico y la dexametasona se administran ANTES de bajar al aparato, no después.' },
      { nombre: 'Perfil del líquido cefalorraquídeo (calculadora disponible)', componentes: 'Celularidad, porcentaje de polimorfonucleares, glucosa en líquido y en plasma, proteínas y hematies.', formula: 'Cociente de glucosa igual a la glucosa del líquido dividida por la del plasma. Corrección de la punción traumática restando un leucocito por cada 500 a 1000 hematies.', interpretacion: 'El cociente por debajo de 0.4 es el dato más útil a favor de causa bacteriana, tuberculosa o fúngica, porque no depende de la glucemia. Un líquido LINFOCITARIO con glucosa BAJA no es una meningitis virica.' },
      { nombre: 'Tratamiento empírico por edad y factores (calculadora disponible)', componentes: 'Edad, embarazo, inmunodepresion, antecedente de neurocirugía o traumatismo penetrante, presencia de derivación ventricular y sospecha de encefalitis.', formula: 'Base de vancomicina con cefalosporina de tercera generación; ampicilina si hay riesgo de Listeria; cobertura antipseudomónica en el postoperatorio; y aciclovir si hay perfil encefalitico.', interpretacion: 'El error más repetido es olvidar la AMPICILINA en el mayor de 50 años, en la embarazada y en el inmunodeprimido: las cefalosporinas no cubren Listeria y esa omisión deja al paciente sin tratamiento.' },
      { nombre: 'Escala de coma de Glasgow', componentes: 'Respuesta ocular, verbal y motora.', formula: 'Suma de 3 a 15 puntos.', interpretacion: 'El nivel de conciencia bajo al ingreso es uno de los predictores de mal pronóstico más consistentes en la meningitis bacteriana del adulto, junto con la edad avanzada, la taquicardia, la trombocitopenia y la velocidad de sedimentación elevada.' },
      { nombre: 'Definición de caso de encefalitis del International Encephalitis Consortium', componentes: 'Criterio mayor obligatorio: alteración del estado mental de al menos 24 horas sin causa alternativa. Criterios menores: fiebre, crisis, focalidad nueva, pleocitosis, neuroimagen compatible y electroencefalograma alterado.', formula: 'Caso posible con un criterio menor; probable o confirmado con tres o más.', interpretacion: 'Ordena el estudio etiológico por prioridades y evita tanto el infradiagnostico como la peticion indiscriminada de serologías. Es también el marco donde encaja la sospecha de encefalitis AUTOINMUNE cuando lo infeccioso se descarta.' },
      { nombre: 'Estadios del British Medical Research Council en la meningitis tuberculosa', componentes: 'Nivel de conciencia y presencia de focalidad neurológica.', formula: 'Estadio I: consciente y sin focalidad. Estadio II: consciente con focalidad, o algo obnubilado. Estadio III: estuporoso o en coma.', interpretacion: 'El estadio en el momento de iniciar el tratamiento es el mejor predictor de muerte y secuelas, y por eso el diagnóstico precoz importa tanto: se trata ante la sospecha, sin esperar la confirmación microbiológica.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Meningitis bacteriana aguda: reconocer y no perder tiempo',
      color: '#8c3a34',
      definicion: 'Inflamación purulenta de las leptomeninges por bacterias, de instauración en horas o pocos días, con mortalidad alta y con un pronóstico que depende de forma directa del tiempo hasta el antibiótico.',
      fisiopatologia: 'La bacteria alcanza el espacio subaracnoideo por via hematógena o por contiguidad desde un foco parameningeo. Alli encuentra un compartimento con escasas defensas locales y se multiplica sin freno. La lisis bacteriana libera componentes de la pared que desencadenan una respuesta inflamatoria intensa: llegada masiva de neutrófilos, aumento de la permeabilidad de la barrera, edema vasogénico y citotóxico, vasculitis con infartos, trombosis venosa y alteración de la reabsorción del líquido, que produce hidrocefalia. Esa cascada explica dos hechos practicos: que el daño venga en buena parte de la propia inflamación, y que la dexametasona administrada ANTES o CON el antibiótico module esa respuesta mientras que después ya no llegue a tiempo.',
      epidemiologia: 'Los gérmenes más frecuentes en el adulto de la comunidad son Streptococcus pneumoniae y Neisseria meningitidis. Listeria monocytogenes aparece por encima de los 50 años, en el embarazo y en la inmunodepresion. En el paciente con neurocirugía, traumatismo penetrante o derivación ventricular, la lista cambia a estafilococos y bacilos gramnegativos, incluida Pseudomonas. La mortalidad de la neumocócica sigue siendo elevada y las secuelas, sobre todo la hipoacusia, son frecuentes.',
      factores_riesgo: ['Edad avanzada', 'Otitis, sinusitis o mastoiditis no tratadas', 'Neumonía neumocócica', 'Esplenectomía o asplenia funcional', 'Déficit del complemento, que predispone al meningococo', 'Inmunodepresion, VIH y tratamiento inmunosupresor', 'Alcoholismo y desnutrición', 'Diabetes mellitus', 'Neurocirugía, traumatismo craneal penetrante o derivación ventricular', 'Fístula de líquido cefalorraquídeo, causa de meningitis RECURRENTE', 'Ausencia de vacunación frente a neumococo y meningococo', 'Convivencia en espacios cerrados y hacinamiento'],
      clinica: 'Cefalea intensa, fiebre, rigidez de nuca, fotofobia y vómitos. La TRIADA completa esta presente en menos de la mitad de los adultos, pero casi todos tienen DOS de estos cuatro: cefalea, fiebre, rigidez de nuca y alteración del nivel de conciencia. Hay que buscar el EXANTEMA PETEQUIAL del meningococo, y recordar que en el anciano y en el inmunodeprimido el cuadro puede reducirse a confusión y febrícula.',
      criterios_dx: 'Clínica compatible más líquido cefalorraquídeo purulento: celularidad alta con predominio de polimorfonucleares, cociente de glucosa por debajo de 0.4 y proteínas elevadas. El Gram, el cultivo o la prueba molecular confirman. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'HEMOCULTIVOS ANTES del antibiótico, que se extraen en un minuto y no retrasan nada. Citoquimica, Gram, cultivo y prueba molecular del líquido. Hemograma, coagulación (por la coagulación intravascular diseminada del meningococo), función renal, glucemia SIMULTÁNEA a la punción y proteína C reactiva.',
      imagen: 'Tomografía craneal SOLO si hay criterio, y sin que retrase el tratamiento. Tomografía de senos y peñasco buscando el foco parameningeo. Radiografía de tórax buscando neumonía.',
      complementarios: 'Punción lumbar con PRESIÓN DE APERTURA. Audiometría al alta o en el seguimiento, porque la hipoacusia es la secuela más frecuente y detectarla a tiempo permite rehabilitarla. Electroencefalograma si hay crisis o si el paciente no despierta como se espera.',
      dx_diferencial: 'Hemorragia subaracnoidea (cefalea en trueno, tomografía y líquido xantocromico), encefalitis virica, meningitis virica, absceso cerebral, empiema subdural, meningitis química o medicamentosa, carcinomatosis meníngea y meningitis tuberculosa.',
      tx_medico: 'Aislamiento POR GOTAS durante las primeras 24 horas de tratamiento si se sospecha meningococo, y profilaxis a los contactos estrechos. Soporte hemodinámico, control de la glucemia, de la natremia y de la temperatura. Cabecera elevada. Y búsqueda activa del foco parameningeo, que puede requerir cirugía.',
      tx_farmacologico: 'DEXAMETASONA seguida de forma inmediata del ANTIBIÓTICO EMPÍRICO, en la misma actuacion: vancomicina con cefalosporina de tercera generación, añadiendo AMPICILINA si hay más de 50 años, embarazo o inmunodepresion. En el postoperatorio, cobertura antipseudomónica. Ajuste posterior según el germen y su sensibilidad.',
      tx_intervencionista: 'Drenaje del foco parameningeo si existe. Derivación ventricular si aparece hidrocefalia. Retirada del dispositivo en la meningitis asociada a derivación, sin la cual el tratamiento antibiótico suele fracasar.',
      criterios_uci: 'Alteración del nivel de conciencia, crisis, shock séptico, púrpura fulminante, insuficiencia respiratoria e hipertensión intracraneal. La escala de coma de Glasgow baja o en descenso obliga a valorar la via aérea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar en 48 horas: si no hay mejoría, repetir la punción, sobre todo si se trata de un neumococo resistente tratado con dexametasona, porque el corticoide reduce el paso de la vancomicina al líquido. Vigilar hiponatremia, crisis y focalidad de nueva aparición.',
      seguimiento_ambulatorio: 'Audiometría, valoración neuropsicológica si hay quejas cognitivas, vacunación frente a neumococo y meningococo, y estudio del complemento en la meningocócica recurrente. Ante una meningitis RECURRENTE, buscar una fístula de líquido.',
      pronostico: 'Mortalidad elevada en la neumocócica y secuelas frecuentes: hipoacusia, déficit cognitivo, epilepsia y focalidad. Son factores de mal pronóstico la edad avanzada, el bajo nivel de conciencia al ingreso, el shock y el retraso del antibiótico, que es el único realmente modificable.',
      algoritmo: ['Sospecharla con DOS de cuatro: cefalea, fiebre, rigidez de nuca o alteración de conciencia', 'Extraer HEMOCULTIVOS de inmediato', 'Administrar DEXAMETASONA y después el antibiótico, sin esperar a nada', 'Valorar si hay criterio de tomografía previa a la punción', 'Si se pide la tomografía, tratar ANTES de bajar al aparato', 'Puncionar y medir la PRESIÓN DE APERTURA', 'Pedir Gram, cultivo, citoquimica y prueba molecular', 'Buscar el exantema petequial y aislar por gotas si procede', 'Buscar el foco parameningeo con imagen dirigida', 'Reevaluar a las 48 horas y repetir la punción si no mejora']
    },
    {
      nombre: 'Tratamiento empírico y dexametasona',
      color: '#7a3f2e',
      definicion: 'Conjunto de decisiones farmacológicas iniciales, tomadas antes de conocer el germen, cuya corrección y sobre todo cuya PRECOCIDAD determinan el pronóstico.',
      fisiopatologia: 'La barrera hematoencefálica limita el paso de la mayoría de los antibióticos, y por eso en la meningitis se usan dosis más altas de lo habitual y se prefieren fármacos con buena penetración. La propia inflamación aumenta transitoriamente esa penetración, lo que explica una consecuencia poco intuitiva de la dexametasona: al reducir la inflamación también reduce el paso de vancomicina al líquido, y por eso ante un neumococo resistente tratado con corticoide conviene repetir la punción para comprobar la esterilización.',
      epidemiologia: 'El ensayo europeo de dexametasona mostró reducción de mortalidad y de secuelas en la meningitis bacteriana del adulto, con el beneficio concentrado en la NEUMOCÓCICA. Los estudios de retraso terapéutico muestran de forma consistente que cada hora de demora empeora el pronóstico, lo que convierte el tiempo hasta la primera dosis en el indicador de calidad de este proceso.',
      factores_riesgo: ['Esperar a la tomografía antes de tratar', 'Esperar al resultado del líquido antes de tratar', 'Administrar la dexametasona después del antibiótico', 'Olvidar la ampicilina en el mayor de 50 años o en la embarazada', 'No cubrir Pseudomonas en el paciente con neurocirugía reciente', 'No añadir aciclovir cuando hay perfil encefalitico', 'Dosificar por debajo de lo indicado para el sistema nervioso central', 'Insuficiencia renal no considerada al ajustar', 'Retraso en el traslado desde urgencias', 'Alergias mal documentadas que paralizan la prescripcion'],
      clinica: 'La decisión se toma con el síndrome y con cuatro datos del paciente: EDAD, situación inmunitaria, antecedente NEUROQUIRÚRGICO o de dispositivo, y presencia o no de perfil ENCEFALITICO. Nada de eso requiere pruebas y todo esta disponible en los primeros minutos.',
      criterios_dx: 'No aplica: es la fase de tratamiento. La regla es que el antibiótico se administre en la primera hora desde la sospecha. Ver la Figura 1 de Definición.',
      laboratorio: 'Función renal para el ajuste de dosis y concentraciones de vancomicina cuando se use. Hemocultivos ya extraídos. Cultivo del líquido para desescalar en cuanto se conozca el germen y su sensibilidad.',
      imagen: 'La tomografía previa a la punción, cuando hay criterio, NUNCA justifica retrasar la primera dosis. Es la regla que más se incumple y la que más cuesta.',
      complementarios: 'Registro del TIEMPO desde la llegada hasta la primera dosis, que es el indicador de calidad de este proceso y el que permite mejorarlo en un servicio.',
      dx_diferencial: 'Ante mala respuesta hay que replantear: germen resistente, foco parameningeo no drenado, absceso, empiema, tuberculosis, hongos, causa no infecciosa o encefalitis autoinmune.',
      tx_medico: 'Sueroterapia sin sobrecarga, control de la glucemia y de la natremia, profilaxis de trombosis y manejo de las crisis. Vigilancia neurológica frecuente y estructurada durante las primeras 48 horas.',
      tx_farmacologico: 'DEXAMETASONA ANTES o CON la primera dosis de antibiótico, durante 4 días, y se SUSPENDE si el germen resulta no ser neumococo. Base empírica: vancomicina con cefalosporina de tercera generación. AMPICILINA si hay más de 50 años, embarazo o inmunodepresion, porque las cefalosporinas NO cubren Listeria. Cobertura antipseudomónica si hay neurocirugía, traumatismo penetrante o derivación. ACICLOVIR si el perfil es encefalitico. Todo a dosis de sistema nervioso central.',
      tx_intervencionista: 'Drenaje del foco parameningeo. Retirada del dispositivo infectado. Manejo de la hidrocefalia.',
      criterios_uci: 'Los mismos de la meningitis bacteriana: bajo nivel de conciencia, crisis, shock y compromiso respiratorio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Desescalar en cuanto se conozca el germen. SUSPENDER la dexametasona si no es neumococo. Repetir la punción a las 48 horas si no hay mejoría clara, especialmente con neumococo resistente tratado con corticoide. Y revisar la duración total según el germen.',
      seguimiento_ambulatorio: 'Completar la duración pautada, vigilar la toxicidad del antibiótico y valorar secuelas. Vacunación y estudio de inmunidad cuando corresponda.',
      pronostico: 'El tiempo hasta la primera dosis es el factor pronóstico modificable más importante de todo el tema. La elección correcta del fármaco importa, pero llegar pronto importa más.',
      algoritmo: ['Decidir con cuatro datos: edad, inmunidad, neurocirugía y perfil encefalitico', 'Extraer hemocultivos', 'Dar DEXAMETASONA antes o con la primera dosis', 'Iniciar vancomicina con cefalosporina de tercera generación', 'Añadir AMPICILINA si hay más de 50 años, embarazo o inmunodepresion', 'Cubrir Pseudomonas si hay neurocirugía, traumatismo o derivación', 'Añadir ACICLOVIR si el perfil es encefalitico', 'No retrasar nada de esto por la tomografía o la punción', 'Desescalar con el cultivo y suspender el corticoide si no es neumococo', 'Repetir la punción a las 48 horas si no mejora']
    },
    {
      nombre: 'Encefalitis por virus herpes simple',
      color: '#6b4a8c',
      definicion: 'Inflamación del parénquima encefálico por virus herpes simple, con predilección por los lóbulos temporales mediales y el sistema limbico, y con un pronóstico que depende del tiempo hasta la primera dosis de aciclovir.',
      fisiopatologia: 'El virus alcanza el sistema nervioso central por via neural, probablemente a través de las ramas del trigémino o del bulbo olfatorio, lo que explica la topografía tan característica: temporal medial, insula y región orbitofrontal. Produce una encefalitis NECROTIZANTE y HEMORRÁGICA, y esa necrosis hemorrágica explica hallazgos que despistan, como la presencia de hematies en el líquido sin punción traumática. El daño del hipocampo y de la amigdala explica el perfil clínico: fallo de la memoria reciente, cambio de conducta, alucinaciones olfativas y crisis focales.',
      epidemiologia: 'Es la encefalitis esporádica grave más frecuente. Aparece en cualquier epoca del año y en personas sin inmunodepresion, sin necesidad de viaje ni de contacto epidemiológico, y eso es precisamente lo que obliga a pensar en ella siempre. Sin tratamiento la mortalidad es muy alta; con aciclovir precoz mejora de forma sustancial, aunque las secuelas cognitivas siguen siendo frecuentes.',
      factores_riesgo: ['Ninguno necesario: afecta a personas previamente sanas', 'Cualquier edad, con dos picos, en jóvenes y en mayores', 'Inmunodepresion, que amplia el diferencial a otros virus', 'Retraso en el inicio del aciclovir, que es el factor pronóstico clave', 'Suspender el aciclovir por una prueba molecular precoz negativa', 'Atribuir el cuadro a una causa psiquiátrica y no explorarlo', 'Ausencia de resonancia cuando la tomografía es normal', 'No hacer electroencefalograma ante un paciente que no despierta', 'Crisis no reconocidas por ser no convulsivas', 'Deshidratación durante el tratamiento, que favorece la toxicidad renal'],
      clinica: 'Fiebre con CAMBIO DE CONDUCTA o de personalidad, alteración del lenguaje, fallo de la memoria reciente, alucinaciones (a veces olfativas), agitación o psicosis, y CRISIS con frecuencia focales. La cefalea acompaña pero no domina. Lo que separa este cuadro de una meningitis es que aquí falla la FUNCIÓN CEREBRAL.',
      criterios_dx: 'Perfil encefalitico compatible más reacción en cadena de la polimerasa positiva para virus herpes en líquido. La definición de caso del International Encephalitis Consortium exige alteración del estado mental de al menos 24 horas sin otra causa. Ver la Figura 3 de Definición.',
      laboratorio: 'PRUEBA MOLECULAR PARA VIRUS HERPES en líquido, con la advertencia de que puede ser NEGATIVA en las primeras 72 horas: si la sospecha es alta se mantiene el aciclovir y se REPITE la punción a los pocos días. Líquido con pleocitosis linfocitaria, proteínas elevadas, glucosa normal y a veces hematies sin punción traumática. Función renal seriada durante el tratamiento.',
      imagen: 'RESONANCIA, mucho más sensible que la tomografía: afectación de los lóbulos TEMPORALES mediales, insula y sistema limbico, con frecuencia asimétrica. Una tomografía normal en las primeras horas no descarta absolutamente nada y no debe tranquilizar.',
      complementarios: 'ELECTROENCEFALOGRAMA, casi siempre anormal, con enlentecimiento focal temporal y a veces descargas periódicas lateralizadas. Sirve además para detectar CRISIS NO CONVULSIVAS, que explican por que un paciente no despierta y se pasan por alto si no se buscan.',
      dx_diferencial: 'Encefalitis AUTOINMUNE, sobre todo por anticuerpos frente al receptor de NMDA, que puede aparecer incluso DESPUÉS de una encefalitis herpetica; otras encefalitis viricas; meningoencefalitis bacteriana o tuberculosa; absceso; ictus del territorio de la cerebral media; estado epiléptico no convulsivo; encefalopatía metabólica o tóxica; y cuadros psiquiátricos primarios.',
      tx_medico: 'Manejo de las crisis, prevención de la aspiración, control de la natremia y de la temperatura, e HIDRATACIÓN generosa durante el aciclovir para prevenir la cristalizacion renal. Rehabilitación cognitiva precoz, porque las secuelas de memoria son la regla y no la excepción.',
      tx_farmacologico: 'ACICLOVIR INTRAVENOSO ANTE LA SOSPECHA, sin esperar a la prueba molecular ni a la resonancia. Se mantiene el tiempo indicado y no se suspende por una única prueba precoz negativa si la sospecha sigue alta. Antiepilépticos si hay crisis. Antibiótico asociado mientras no se descarte una causa bacteriana.',
      tx_intervencionista: 'Excepcional. Craniectomía descompresiva en el edema refractario con riesgo de herniación, en casos muy seleccionados.',
      criterios_uci: 'Bajo nivel de conciencia, estado epiléptico, edema cerebral con riesgo de herniación e incapacidad para proteger la via aérea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica estrecha, función renal seriada y electroencefalograma repetido si el nivel de conciencia no mejora. Si el paciente empeora tras una mejoría inicial, pensar en encefalitis AUTOINMUNE posherpetica, que es un fenómeno bien descrito y tiene tratamiento propio.',
      seguimiento_ambulatorio: 'Valoración neuropsicológica, rehabilitación cognitiva, control de la epilepsia secundaria y apoyo a la familia, porque el cambio conductual y el déficit de memoria pesan más que la debilidad.',
      pronostico: 'Sin tratamiento, mortalidad muy alta. Con aciclovir precoz mejora de forma sustancial, pero las secuelas cognitivas y conductuales son frecuentes. El determinante modificable es el TIEMPO hasta la primera dosis.',
      algoritmo: ['Separar meningitis de encefalitis mirando la FUNCIÓN cerebral', 'Iniciar ACICLOVIR ante la sospecha, sin esperar a nada', 'Extraer líquido con prueba molecular para herpes y enterovirus', 'Pedir RESONANCIA, no conformarse con la tomografía', 'Pedir ELECTROENCEFALOGRAMA y buscar crisis no convulsivas', 'Mantener antibiótico mientras no se descarte causa bacteriana', 'Hidratar bien durante el aciclovir', 'NO suspenderlo por una prueba precoz negativa si la sospecha es alta', 'Repetir la punción a los pocos días si sigue la duda', 'Si empeora tras mejorar, pensar en encefalitis autoinmune posherpetica']
    },
    {
      nombre: 'Meningitis virica y síndrome meníngeo aseptico',
      color: '#3f6b52',
      definicion: 'Inflamación meníngea con líquido linfocitario, glucosa normal y cultivo bacteriano negativo, habitualmente de causa virica y de curso benigno, pero que obliga a descartar las causas que no lo son.',
      fisiopatologia: 'Los enterovirus, que son la causa más frecuente, alcanzan las meninges por via hematógena tras replicarse en el tubo digestivo. La respuesta inflamatoria es predominantemente linfocitaria y no consume glucosa de forma significativa, lo que explica el perfil característico del líquido: celularidad moderada, linfocitos, glucosa NORMAL y proteínas poco elevadas. En las primeras horas, sin embargo, puede predominar el polimorfonuclear y simular una meningitis bacteriana, lo que obliga a tratar con antibiótico hasta poder descartarla.',
      epidemiologia: 'Es mucho más frecuente que la bacteriana y tiene un pico estacional en los meses calidos por los enterovirus. Le siguen el virus herpes simple tipo 2 (que puede dar meningitis recurrente), varicela zóster, virus de la primoinfeccion por VIH y arbovirus según la zona. La mayoría de los casos se resuelven solos en una o dos semanas.',
      factores_riesgo: ['Contacto con casos de enterovirus, sobre todo en verano y otoño', 'Primoinfeccion por VIH, que hay que buscar activamente', 'Herpes genital, por virus herpes simple tipo 2', 'Fármacos: antiinflamatorios no esteroideos, cotrimoxazol e inmunoglobulinas', 'Enfermedades autoinmunes como el lupus y la sarcoidosis', 'Vacunación reciente en casos aislados', 'Exposición a roedores para el virus de la coriomeningitis linfocitaria', 'Picaduras y viajes para los arbovirus', 'Neoplasia conocida, por carcinomatosis meníngea', 'Cirugía o procedimiento espinal reciente, por meningitis química'],
      clinica: 'Cefalea, fiebre, fotofobia y rigidez de nuca, con el paciente ALERTA y con la función cerebral conservada, que es lo que la separa de la encefalitis. Puede haber exantema, faringitis o cuadro digestivo previo. La afectación del nivel de conciencia, la focalidad o las crisis OBLIGAN a replantear el diagnóstico.',
      criterios_dx: 'Líquido linfocitario con glucosa NORMAL, proteínas poco elevadas y ausencia de germen. La prueba molecular para enterovirus o herpes confirma. Ver la Figura 2 de Definición.',
      laboratorio: 'Citoquimica con GLUCEMIA SIMULTÁNEA para calcular el cociente. Prueba molecular para enterovirus, virus herpes simple y varicela zóster. SEROLOGÍA Y CARGA VIRAL DE VIH, porque la primoinfeccion se presenta así y se pasa por alto con facilidad. Cultivo bacteriano, siempre.',
      imagen: 'No suele ser necesaria. Se pide si hay focalidad, crisis, alteración del nivel de conciencia o mala evolución, situaciones en las que el diagnóstico de meningitis virica ya no se sostiene.',
      complementarios: 'Repetir la punción si el líquido inicial es dudoso o si la evolución no es la esperada. Antígeno criptococico y estudio de tuberculosis si el cuadro se prolonga o si hay inmunodepresion.',
      dx_diferencial: 'Meningitis bacteriana PARCIALMENTE tratada, que es la trampa clásica; meningitis tuberculosa o fúngica (linfocitaria pero con glucosa BAJA); meningitis por fármacos; enfermedades autoinmunes; carcinomatosis meníngea; endocarditis; y foco parameningeo.',
      tx_medico: 'Sintomático: analgesia adecuada, antieméticos, hidratación y reposo. La mayoría se maneja de forma ambulatoria si el paciente esta alerta, tolera la via oral y tiene una evolución clara y un control asegurado.',
      tx_farmacologico: 'Ninguno específico en la mayoría. Aciclovir si se confirma o se sospecha varicela zóster o un cuadro grave por herpes. Y mantener el antibiótico empírico hasta poder descartar razonablemente la causa bacteriana, sobre todo si el paciente había recibido antibiótico antes.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Rara vez. Si aparece alteración del nivel de conciencia o crisis, el diagnóstico deja de ser una meningitis virica simple y pasa a manejarse como encefalitis.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Observación hasta descartar la causa bacteriana. Revisar el líquido junto con la clínica y no de forma aislada, sobre todo si hubo antibiótico previo, que puede transformar el perfil purulento en linfocitario.',
      seguimiento_ambulatorio: 'Revisión para confirmar la resolución. En la meningitis RECURRENTE, buscar virus herpes simple tipo 2, una fístula de líquido o una causa autoinmune.',
      pronostico: 'Bueno, con resolución espontánea en una o dos semanas. Puede quedar cefalea y astenia durante semanas, lo que conviene anticipar al paciente para evitar consultas repetidas y estudios innecesarios.',
      algoritmo: ['Confirmar que la función cerebral esta conservada', 'Pedir citoquimica con GLUCEMIA simultánea', 'Comprobar que el cociente de glucosa es NORMAL', 'Pedir prueba molecular para enterovirus y herpes', 'Pedir SEROLOGÍA de VIH, que se olvida con frecuencia', 'Revisar la lista de fármacos que producen meningitis aseptica', 'Mantener el antibiótico hasta descartar la causa bacteriana', 'Sospechar tuberculosis u hongo si la glucosa es baja', 'Reevaluar si aparecen crisis, focalidad o somnolencia', 'En la recurrente, buscar herpes tipo 2 o una fístula de líquido']
    },
    {
      nombre: 'Meningitis subaguda y crónica: tuberculosa y criptococica',
      color: '#8a6a1f',
      definicion: 'Inflamación meníngea de instauración en semanas, con líquido linfocitario y glucosa habitualmente baja, cuyo pronóstico depende de tratar ANTES de tener la confirmación microbiológica.',
      fisiopatologia: 'En la tuberculosa, un foco subependimario (el foco de Rich) se rompe al espacio subaracnoideo y desencadena un exudado espeso y GELATINOSO que se acumula en la BASE del cráneo. Ese exudado explica la triada de complicaciones: atrapa los pares craneales, obstruye la circulación del líquido y produce HIDROCEFALIA, y envuelve las arterias de la base causando vasculitis e INFARTOS. En la criptococica, el hongo se multiplica en el espacio subaracnoideo con escasa respuesta inflamatoria en el inmunodeprimido, y su capsula obstruye la reabsorción del líquido, lo que eleva la PRESIÓN INTRACRANEAL: esa hipertensión, y no la infección en si, es la principal causa de muerte precoz.',
      epidemiologia: 'La meningitis tuberculosa es la forma más grave de tuberculosis y su pronóstico depende del estadio del British Medical Research Council en el momento de iniciar el tratamiento. La criptococica aparece sobre todo con inmunodepresion celular avanzada, en particular en la infección por VIH con recuento bajo de linfocitos CD4, pero también en trasplantados y en tratamiento inmunosupresor.',
      factores_riesgo: ['Infección por VIH con inmunodepresion avanzada', 'Contacto con tuberculosis o procedencia de zona de alta incidencia', 'Tratamiento inmunosupresor y corticoterapia prolongada', 'Fármacos anti factor de necrosis tumoral', 'Trasplante de órgano sólido', 'Diabetes mellitus', 'Alcoholismo y desnutrición', 'Neoplasia hematológica', 'Insuficiencia renal crónica', 'Edad avanzada', 'Retraso diagnóstico, que es el determinante más importante del pronóstico'],
      clinica: 'Cefalea que lleva SEMANAS, febrícula, pérdida de peso, astenia y cambio de carácter, con una rigidez de nuca que puede ser leve o faltar. En la TUBERCULOSA hay que buscar PARÁLISIS DE PARES CRANEALES (sobre todo el sexto), hidrocefalia y focalidad por infartos. En la CRIPTOCOCICA, la cefalea puede ser el único síntoma y el signo más importante no se ve: la PRESIÓN DE APERTURA elevada.',
      criterios_dx: 'Líquido LINFOCITARIO con glucosa BAJA y proteínas MUY elevadas, más prueba microbiológica. Antígeno criptococico en suero y líquido, de sensibilidad muy alta. Prueba molecular y cultivo para tuberculosis. Ver la Figura 2 de Definición.',
      laboratorio: 'PRESIÓN DE APERTURA en todos. Antígeno criptococico en suero y en líquido, muy superior a la tinta china. Prueba molecular para tuberculosis y adenosina desaminasa, con VOLUMEN ALTO de líquido para mejorar el rendimiento. Cultivo prolongado. Serología de VIH y recuento de CD4. Sodio, por la hiponatremia frecuente.',
      imagen: 'RESONANCIA con contraste: realce meníngeo BASAL, hidrocefalia, tuberculomas e INFARTOS de los ganglios de la base en la tuberculosa. En la criptococica puede verse muy poco, o dilatación de los espacios perivasculares y criptococomas. Imagen torácica buscando tuberculosis pulmonar.',
      complementarios: 'PUNCIONES EVACUADORAS REPETIDAS en la criptococica con presión elevada, que forman parte del tratamiento y salvan vidas. Fondo de ojo. Valoración de pares craneales seriada. Y, en el paciente con VIH, planificar el inicio del tratamiento antirretroviral con cuidado por el riesgo de síndrome inflamatorio de reconstitución inmunitaria.',
      dx_diferencial: 'Entre ellas dos; meningitis por Listeria, Brucella y sífilis; carcinomatosis meníngea; linfoma; sarcoidosis y otras meningitis autoinmunes; y meningitis bacteriana parcialmente tratada.',
      tx_medico: 'Manejo de la hidrocefalia, de la hiponatremia y de las crisis. En la criptococica, control de la presión intracraneal con punciones evacuadoras. Y coordinación con infecciosas para el momento del tratamiento antirretroviral, que si se inicia demasiado pronto puede desencadenar un síndrome de reconstitución inmunitaria grave.',
      tx_farmacologico: 'TUBERCULOSA: tratamiento antituberculoso con pauta prolongada más DEXAMETASONA adyuvante, que reduce la mortalidad. Se inicia ante la SOSPECHA, sin esperar a la confirmación, porque el retraso se paga en secuelas y en vidas. CRIPTOCOCICA: inducción con anfotericina B liposomal asociada a flucitosina, seguida de consolidación y mantenimiento con fluconazol.',
      tx_intervencionista: 'Derivación ventricular en la hidrocefalia de la tuberculosa. Punciones evacuadoras repetidas y, si no bastan, derivación en la criptococica con hipertensión refractaria.',
      criterios_uci: 'Bajo nivel de conciencia, hidrocefalia aguda, estado epiléptico e hipertensión intracraneal refractaria.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la hidrocefalia (que puede aparecer durante el tratamiento), la hiponatremia, la hepatotoxicidad de los fármacos antituberculosos y las interacciones con el tratamiento antirretroviral. Punción de control en la criptococica para comprobar la esterilización.',
      seguimiento_ambulatorio: 'Tratamiento prolongado con adherencia estrecha. Profilaxis secundaria en la criptococica hasta la reconstitución inmunitaria. Valoración de secuelas: pares craneales, cognición, epilepsia y hipoacusia.',
      pronostico: 'Malo si el diagnóstico se retrasa. En la tuberculosa, el estadio al inicio del tratamiento es el mejor predictor de muerte y secuelas. En la criptococica, la mortalidad precoz se relaciona sobre todo con la HIPERTENSIÓN INTRACRANEAL no controlada, que es tratable con algo tan simple como puncionar.',
      algoritmo: ['Sospecharla ante una cefalea de SEMANAS con febrícula', 'Medir siempre la PRESIÓN DE APERTURA', 'Comprobar el perfil: linfocitario con glucosa BAJA', 'Pedir antígeno criptococico en suero y en líquido', 'Enviar VOLUMEN ALTO para prueba molecular y cultivo de tuberculosis', 'Pedir serología de VIH y recuento de CD4', 'Pedir RESONANCIA buscando realce basal, hidrocefalia e infartos', 'Iniciar tratamiento antituberculoso con DEXAMETASONA ante la sospecha', 'En la criptococica, puncionar de forma repetida para bajar la presión', 'Planificar con cuidado el momento del tratamiento antirretroviral']
    },
    {
      nombre: 'Absceso cerebral y complicaciones neurológicas',
      color: '#3d5a73',
      definicion: 'Colección supurada intraparenquimatosa encapsulada, junto con el conjunto de complicaciones neurológicas que pueden aparecer durante una infección del sistema nervioso central.',
      fisiopatologia: 'El absceso comienza como una cerebritis focal que en una a dos semanas desarrolla una capsula de colágeno. Esa organizacion explica lo que se ve en la imagen y el hallazgo que resuelve el diagnóstico diferencial: el pus tiene alta celularidad y viscosidad, de modo que RESTRINGE la difusión en la resonancia, mientras que la necrosis de un tumor no lo hace. Llega por contiguidad (otitis, sinusitis, foco dental), por via hematógena (endocarditis, foco pulmonar, cortocircuito derecha a izquierda) o por inoculacion directa tras cirugía o traumatismo, y el origen predice tanto la localización como el germen.',
      epidemiologia: 'Suele ser polimicrobiano cuando procede de un foco contiguo, con estreptococos y anaerobios. En el inmunodeprimido se amplia a hongos, nocardia y toxoplasma. Las complicaciones neurológicas de las meningitis son frecuentes y a menudo se atribuyen por error a la propia infección sin buscar una causa concreta y tratable.',
      factores_riesgo: ['Otitis media crónica, mastoiditis y sinusitis', 'Foco dental y manipulación odontologica', 'Endocarditis infecciosa', 'Cortocircuito derecha a izquierda, incluida la fístula arteriovenosa pulmonar', 'Bronquiectasias y absceso pulmonar', 'Neurocirugía y traumatismo craneal penetrante', 'Inmunodepresion, VIH y trasplante', 'Diabetes mellitus', 'Consumo de drogas por via parenteral', 'Meningitis bacteriana previa mal controlada'],
      clinica: 'La triada de fiebre, cefalea y focalidad esta completa en una minoría. Domina la CEFALEA, con frecuencia progresiva y unilateral, y pueden aparecer crisis, focalidad, papiledema y alteración del nivel de conciencia. La fiebre puede faltar, y esa ausencia es la razón por la que muchos abscesos se estudian primero como un tumor.',
      criterios_dx: 'Lesión con realce en ANILLO y RESTRICCIÓN DE LA DIFUSIÓN en la resonancia, en el contexto clínico adecuado. La confirmación es microbiológica, por aspiración.',
      laboratorio: 'HEMOCULTIVOS. Cultivo del material aspirado, que es el que da el diagnóstico y permite dirigir el tratamiento. Hemograma, proteína C reactiva y velocidad de sedimentación, que pueden ser normales. La PUNCIÓN LUMBAR esta CONTRAINDICADA si hay efecto de masa, y además aporta poco.',
      imagen: 'RESONANCIA CON CONTRASTE Y DIFUSIÓN, que es la prueba clave: el absceso restringe la difusión y el tumor necrótico no. Tomografía si la resonancia no esta disponible. Y búsqueda del origen con imagen de senos, peñasco, tórax y valoración odontologica, más ecocardiograma si se sospecha endocarditis.',
      complementarios: 'ELECTROENCEFALOGRAMA ante crisis o bajo nivel de conciencia. Ecocardiograma. Y, ante un absceso sin foco evidente, buscar un CORTOCIRCUITO derecha a izquierda, que es una causa que se pasa por alto y que puede corregirse.',
      dx_diferencial: 'Tumor primario o metástasis con necrosis central, que es el gran diferencial y se resuelve con la difusión; tuberculoma; toxoplasmosis y linfoma primario en el paciente con VIH; empiema subdural; infarto en fase subaguda; y enfermedad desmielinizante tumefacta.',
      tx_medico: 'Manejo de la hipertensión intracraneal y de las crisis. Corticoides solo si hay edema con efecto de masa significativo, valorando que pueden reducir la penetración del antibiótico. Y búsqueda y tratamiento del FOCO de origen, sin lo cual la recurrencia es probable.',
      tx_farmacologico: 'Antibiótico de amplio espectro con buena penetración en el sistema nervioso central y cobertura de anaerobios, ajustado después al cultivo, durante un periodo PROLONGADO de semanas. Antiepilépticos si hay crisis.',
      tx_intervencionista: 'ASPIRACIÓN ESTEREOTÁCTICA, que a la vez descomprime y da el diagnóstico microbiológico, y es de elección en la mayoría. Excision quirúrgica en abscesos con capsula gruesa, multiloculados, de origen traumático o que no responden. Drenaje del foco de origen.',
      criterios_uci: 'Bajo nivel de conciencia, efecto de masa con riesgo de herniación, estado epiléptico y rotura del absceso al ventrículo, que es una complicación de mortalidad muy alta.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Imagen de control seriada para comprobar la reducción. Vigilancia de crisis, de hidrocefalia y de trombosis venosa cerebral. En cualquier meningitis que no evoluciona bien, buscar de forma activa empiema, absceso, hidrocefalia, infarto o trombosis venosa antes de asumir que es la propia infección.',
      seguimiento_ambulatorio: 'Completar el tratamiento prolongado con controles de imagen. Manejo de la epilepsia secundaria. Corregir el foco de origen, incluido el cortocircuito cuando exista, para evitar la recurrencia.',
      pronostico: 'Ha mejorado mucho con la resonancia y la aspiración estereotáctica. La epilepsia secundaria es la secuela más frecuente. La rotura al sistema ventricular sigue siendo una complicación de mortalidad muy elevada.',
      algoritmo: ['Sospecharlo ante cefalea progresiva con focalidad o crisis, aunque no haya fiebre', 'Pedir RESONANCIA con contraste y DIFUSIÓN', 'Usar la restricción de la difusión para separarlo del tumor', 'NO puncionar si hay efecto de masa', 'Extraer hemocultivos antes del antibiótico', 'Aspirar de forma estereotáctica para diagnosticar y descomprimir', 'Iniciar antibiótico de amplio espectro con cobertura de anaerobios', 'Buscar el FOCO: senos, oído, boca, pulmón y corazón', 'Descartar un cortocircuito derecha a izquierda si no hay foco', 'Controlar con imagen y tratar la epilepsia secundaria']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Este es un tema donde el orden de las acciones importa tanto como el contenido. La mayoría de los errores graves no son de elección de fármaco sino de SECUENCIA: esperar a la imagen o al líquido antes de tratar, o dar la dexametasona cuando ya no sirve.',
    parametros: ['Sospechar con DOS de cuatro, sin exigir la triada completa', 'Extraer hemocultivos en el primer minuto', 'Dar dexametasona ANTES o CON el antibiótico, nunca después', 'No retrasar el antibiótico por la tomografía ni por la punción', 'Recordar la AMPICILINA si hay más de 50 años, embarazo o inmunodepresion', 'Medir la PRESIÓN DE APERTURA siempre', 'Pedir glucemia SIMULTÁNEA para calcular el cociente', 'Un líquido linfocitario con glucosa baja NO es virico', 'Iniciar aciclovir ante cualquier perfil encefalitico', 'No suspender el aciclovir por una prueba precoz negativa', 'Aislar por gotas y dar profilaxis si se sospecha meningococo', 'Reevaluar a las 48 horas y buscar complicaciones si no mejora'],
    criterios_uci_general: 'Alteración del nivel de conciencia o escala de Glasgow en descenso, crisis y estado epiléptico, shock séptico y púrpura fulminante, insuficiencia respiratoria o incapacidad para proteger la via aérea, hipertensión intracraneal e hidrocefalia aguda, y edema cerebral con riesgo de herniación. En el absceso, el efecto de masa significativo y la rotura al sistema ventricular.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema. La infección activa del sistema nervioso central es, de hecho, una contraindicación para el trasplante de órgano mientras no se controle.',
    prevencion: 'Primaria: VACUNACIÓN frente a neumococo, meningococo y Haemophilus influenzae tipo b, especialmente en asplenia, déficit del complemento e inmunodepresion; tratamiento correcto de otitis y sinusitis; reparación de fístulas de líquido en la meningitis recurrente; y cribado y tratamiento de la infección tuberculosa latente antes de iniciar fármacos anti factor de necrosis tumoral. Secundaria: QUIMIOPROFILAXIS de los contactos estrechos en la enfermedad meningocócica, aislamiento por gotas durante las primeras 24 horas de tratamiento, y profilaxis secundaria en la criptococica hasta la reconstitución inmunitaria. Terciaria: audiometría y rehabilitación auditiva, valoración neuropsicológica, control de la epilepsia secundaria y búsqueda de la causa subyacente en toda meningitis recurrente.'
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
  'Meningitis bacteriana aguda: reconocer y no perder tiempo': { definicion: [1, 4, 8, 16], criterios_dx: [1, 4, 8, 16], laboratorio: [1, 4, 8, 16], tx_farmacologico: [1, 4, 8, 16] },
  'Tratamiento empírico y dexametasona': { definicion: [1, 3, 6, 7, 15], criterios_dx: [1, 3, 6, 7, 15], laboratorio: [1, 3, 6, 7, 15], tx_farmacologico: [1, 3, 6, 7, 15] },
  'Encefalitis por virus herpes simple': { definicion: [2, 9, 10], criterios_dx: [2, 9, 10], laboratorio: [2, 9, 10], tx_farmacologico: [2, 9, 10] },
  'Meningitis virica y síndrome meníngeo aseptico': { definicion: [8, 16], criterios_dx: [8, 16], laboratorio: [8, 16], tx_farmacologico: [8, 16] },
  'Meningitis subaguda y crónica: tuberculosa y criptococica': { definicion: [11, 12, 13], criterios_dx: [11, 12, 13], laboratorio: [11, 12, 13], tx_farmacologico: [11, 12, 13] },
  'Absceso cerebral y complicaciones neurológicas': { definicion: [14], criterios_dx: [14], laboratorio: [14], tx_farmacologico: [14] }
};
export const estigmasTitulo = 'Signos y datos que cambian la conducta';
export const estigmas = [
  { s: 'Exantema petequial o purpúrico', p: 'Meningococo', photo: null, desc: 'Obliga a dos cosas que se olvidan con el paciente grave delante: AISLAMIENTO POR GOTAS durante las primeras 24 horas de tratamiento y QUIMIOPROFILAXIS de los contactos estrechos. Si progresa a púrpura fulminante, el cuadro es de shock y de coagulación intravascular diseminada.' },
  { s: 'Dos de cuatro, no la triada', p: 'Como se sospecha', photo: null, desc: 'Fiebre, rigidez de nuca y alteración de conciencia coinciden en menos de la mitad de los adultos. Lo que si es casi constante es tener al menos dos de estos cuatro: cefalea, fiebre, rigidez de nuca y alteración del nivel de conciencia.' },
  { s: 'Confusión y febrícula en el anciano', p: 'Presentación engañosa', photo: null, desc: 'En el mayor y en el inmunodeprimido puede no haber rigidez de nuca ni fiebre alta. Exigir el cuadro clásico en esta población es una forma segura de llegar tarde, y es justamente la población que además necesita ampicilina.' },
  { s: 'Cociente de glucosa por debajo de 0.4', p: 'No es virica', photo: null, desc: 'Es el dato más útil del líquido porque no depende de la glucemia del momento, siempre que se extraiga una glucemia SIMULTÁNEA. Apoya con fuerza una causa bacteriana, tuberculosa o fúngica.' },
  { s: 'Linfocitos con glucosa baja', p: 'TB, hongo o Listeria', photo: null, desc: 'La combinación que hay que reconocer de inmediato, porque cambia todo el tratamiento. Un líquido linfocitario NO es sinónimo de virico: con glucosa baja obliga a pensar en tuberculosis, criptococo, Listeria, Brucella y carcinomatosis.' },
  { s: 'Presión de apertura elevada', p: 'Criptococo', photo: null, desc: 'Se mide con el manometro, no cuesta nada y se olvida constantemente. En la meningitis criptococica la hipertensión intracraneal es la principal causa de muerte precoz, y su tratamiento es tan simple como puncionar de forma repetida.' },
  { s: 'Parálisis del sexto par con cefalea de semanas', p: 'Meningitis tuberculosa', photo: null, desc: 'El exudado gelatinoso de la BASE del cráneo atrapa los pares craneales, obstruye la circulación del líquido y envuelve las arterias. De ahi la triada de complicaciones: pares craneales, hidrocefalia e infartos.' },
  { s: 'Cambio de conducta con fiebre', p: 'Encefalitis, no meningitis', photo: null, desc: 'Lo que separa ambas entidades es la FUNCIÓN cerebral: conducta, lenguaje, memoria o crisis. Ese perfil obliga a añadir aciclovir de inmediato, a pedir resonancia y a solicitar un electroencefalograma.' },
  { s: 'Prueba molecular de herpes negativa el primer dia', p: 'No descarta', photo: null, desc: 'En las primeras 72 horas puede ser negativa. Si la sospecha es alta, se MANTIENE el aciclovir y se repite la punción a los pocos días. Suspenderlo con una única prueba precoz negativa es un error caro.' },
  { s: 'Hematies en el líquido sin punción traumática', p: 'Encefalitis necrotizante', photo: null, desc: 'El herpes produce una encefalitis necrotizante y HEMORRÁGICA, y por eso pueden aparecer hematies sin que la punción haya sido traumática. Que el líquido no aclare entre tubos apoya que la sangre no es del pinchazo.' },
  { s: 'Anillo que restringe la difusión', p: 'Absceso, no tumor', photo: null, desc: 'El pus tiene alta celularidad y viscosidad, de modo que restringe la difusión en la resonancia; la necrosis de un tumor no lo hace. Es el hallazgo que resuelve el diferencial más importante de una lesión en anillo.' },
  { s: 'Meningitis que se repite', p: 'Buscar la puerta de entrada', photo: null, desc: 'Obliga a buscar una fístula de líquido cefalorraquídeo, un déficit del complemento, un foco parameningeo crónico o el virus herpes simple tipo 2. Tratar el episodio sin buscar la causa garantiza el siguiente.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de tomografía antes de la punción (calculadora disponible)': [5, 1],
  'Perfil del líquido cefalorraquídeo (calculadora disponible)': [8, 16],
  'Tratamiento empírico por edad y factores (calculadora disponible)': [1, 6, 15],
  'Escala de coma de Glasgow': [4],
  'Definición de caso de encefalitis del International Encephalitis Consortium': [9],
  'Estadios del British Medical Research Council en la meningitis tuberculosa': [11]
};
export const escalaCalc = {
  'Criterios de tomografía antes de la punción (calculadora disponible)': 'tc-antes-puncion',
  'Perfil del líquido cefalorraquídeo (calculadora disponible)': 'perfil-lcr',
  'Tratamiento empírico por edad y factores (calculadora disponible)': 'empirico-meningoencefalitis'
};
export const compGroups = [
  { name: 'La urgencia bacteriana', items: ['Meningitis bacteriana aguda: reconocer y no perder tiempo', 'Tratamiento empírico y dexametasona'] },
  { name: 'Cuando falla el cerebro', items: ['Encefalitis por virus herpes simple'] },
  { name: 'El líquido linfocitario', items: ['Meningitis virica y síndrome meníngeo aseptico', 'Meningitis subaguda y crónica: tuberculosa y criptococica'] },
  { name: 'La colección y sus consecuencias', items: ['Absceso cerebral y complicaciones neurológicas'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la urgencia del tema, separadas a propósito: reconocer la meningitis bacteriana es un problema distinto de tratarla, y en el tratamiento lo que más pesa no es la elección del fármaco sino el orden y la hora. La tercera es la encefalitis herpetica, que se separa de todo lo demás por un dato de la exploración y se trata sin esperar a la confirmación. Las dos siguientes comparten un líquido linfocitario y se distinguen por un solo número, la glucosa: con glucosa normal casi siempre es virica y benigna, con glucosa baja es tuberculosa o fúngica y el retraso se paga caro. La última reúne el absceso y las complicaciones que hay que buscar cuando una infección del sistema nervioso no evoluciona como debería.';
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
  root: { title: 'SOSPECHA DE INFECCIÓN DEL SISTEMA NERVIOSO', color: '#7a3f2e', target: 'definicion' },
  branches: [
    { title: 'LAS PRIMERAS HORAS', sub: 'El orden que no se invierte', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Hemocultivos ya', sub: 'Tardan un minuto', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Dexametasona y antibiótico', sub: 'Antes o con, nunca después', color: '#7a3f2e', target: 'clasificacion' },
      { title: 'Tomografía solo si hay criterio', sub: 'Y sin retrasar el tratamiento', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Punción con presión de apertura', sub: 'Sigue informando tras tratar', color: '#6b4a8c', target: 'diagnostico' }
    ] },
    { title: 'LEER EL LÍQUIDO', sub: 'Célula, cociente y proteína', color: '#7a3f2e', target: 'clasificacion', leaves: [
      { title: 'Polimorfonucleares y glucosa baja', sub: 'Bacteriana', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Linfocitos y glucosa normal', sub: 'Virica', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Linfocitos y glucosa BAJA', sub: 'Tuberculosa o fúngica', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Punción traumática', sub: 'Corregir, pero manda la clínica', color: '#3d5a73', target: 'clasificacion' }
    ] },
    { title: 'FALLA EL CEREBRO', sub: 'Conducta, lenguaje o crisis', color: '#6b4a8c', target: 'complicaciones', leaves: [
      { title: 'Aciclovir de inmediato', sub: 'Sin esperar a la prueba', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Resonancia, no tomografía', sub: 'Temporal medial y limbico', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Electroencefalograma', sub: 'Buscar crisis no convulsivas', color: '#8a6a1f', target: 'diagnostico' },
      { title: 'Empeora tras mejorar', sub: 'Pensar en autoinmune', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 8, 13], no_invasivos: [5, 9, 11], imagen: [2, 14] };
export const clasificacionCite = [1, 2, 5, 9];
export const seguimientoCite = [1, 3, 7];
