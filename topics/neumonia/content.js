// topics/neumonia/content.js: Neumonia adquirida en la comunidad, nosocomial y por aspiracion.
// Cubre los items "Neumonia adquirida en la comunidad y nosocomial" y "Neumonia por aspiracion"
// del cluster Infecciones respiratorias (bloque III, Neumologia) del temario. Tercero de los
// cinco temas troncales de Neumologia.
//
// Fuentes principales: guia ATS 2026 de neumonia adquirida en la comunidad (Jones, Ramirez,
// Restrepo y cols., aprobada en mayo de 2025), que actualiza cuatro preguntas de la guia
// ATS/IDSA de 2019 (ecografia pulmonar, antibiotico ante virus positivo, duracion menor de
// 5 dias y corticoides en la neumonia grave); guia IDSA/ATS 2016 de neumonia nosocomial y
// asociada a la ventilacion; guia ERS/ESICM/ESCMID/ALAT 2017; escalas CURB-65 y PSI; ensayo
// CAPE COD; y los trabajos de Marik y de Mandell sobre aspiracion.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (neumonia comunitaria, neumonia grave) + 6 fichas (comunitaria,
// grave y complicaciones sistemicas, nosocomial y asociada a la ventilacion, aspiracion y
// absceso, viral, del inmunodeprimido). 4 calculadoras, 3 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'neumonia',
  titulo: 'Neumonia',
  subtitulo: 'Modulo 50 · Medicina Interna',
  accent: '#a8562e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const dondeHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #a8562e;border-radius:8px;padding:5px 9px;background:#a8562e12;margin-bottom:6px;">
    <strong style="color:#a8562e;">La primera decision de una neumonia no es que antibiotico, sino DONDE se trata.</strong> <span style="color:var(--ink-dim);">De esa decision dependen el pronostico, el coste y los cultivos que se piden. Las escalas ayudan a tomarla, pero <strong>ninguna sustituye al juicio clinico</strong> ni valora el soporte social, la tolerancia oral ni la comorbilidad descompensada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">CURB-65<br>de cribado</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">C</strong>onfusion, <strong style="color:var(--ink);">U</strong>rea (nitrogeno ureico mayor de 19 mg/dL), <strong style="color:var(--ink);">R</strong>espiraciones de 30 o mas, <strong style="color:var(--ink);">B</strong>lood pressure (sistolica menor de 90 o diastolica de 60 o menos) y edad de <strong style="color:var(--ink);">65</strong> o mas. <strong>0 a 1</strong>: ambulatorio. <strong>2</strong>: valorar ingreso. <strong>3 o mas</strong>: neumonia grave. Rapido y memorizable, pero <strong>sobreestima el riesgo del anciano</strong> por el simple hecho de la edad.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">PSI o PORT<br>el preferido</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Veinte variables de edad, comorbilidad, exploracion, laboratorio y radiografia, en cinco clases de riesgo. Es el que <strong style="color:var(--ink);">recomiendan las guias frente al CURB-65</strong> porque identifica mejor al paciente de bajo riesgo que puede irse a casa. Clases <strong>I y II</strong> ambulatorio, <strong>III</strong> observacion o ingreso corto, <strong>IV y V</strong> ingreso. Su punto debil es el contrario: <strong>infravalora al joven sin comorbilidad</strong> que llega grave.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">Criterios de<br>NAC GRAVE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Un criterio MAYOR</strong> (ventilacion mecanica o choque septico con vasopresores) <strong>o TRES MENORES</strong>: frecuencia respiratoria de 30 o mas, PaO2/FiO2 de 250 o menos, infiltrados multilobares, confusion, nitrogeno ureico de 20 mg/dL o mas, leucocitos menores de 4000, plaquetas menores de 100000, temperatura menor de 36 grados e hipotension que exige reposicion agresiva. Definen el ingreso en cuidados intensivos y, ademas, <strong>seleccionan a quien lleva corticoide y a quien necesita cultivos</strong>.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Novedad de la guia ATS de 2026.</strong> En centros con experiencia, la <strong>ecografia pulmonar</strong> es una alternativa aceptable a la radiografia de torax para diagnosticar la neumonia. Es mas sensible que la radiografia simple para la consolidacion, no irradia y se hace a pie de cama, pero depende por completo de quien la maneja y no valora bien las consolidaciones que no llegan a la pleura.
  </div>
</div>`;

const empiricoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">AMBULATORIA<br>sin comorbilidad</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Amoxicilina a dosis altas</strong>, o doxiciclina. El macrolido en monoterapia solo donde la resistencia local del neumococo sea menor del 25%, condicion que en muchos lugares ya no se cumple.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">AMBULATORIA<br>con comorbilidad</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Amoxicilina-clavulanico o cefalosporina</strong> mas macrolido o doxiciclina, o bien una <strong>fluoroquinolona respiratoria</strong> en monoterapia. Comorbilidad significa aqui cardiopatia, neumopatia, hepatopatia, nefropatia, diabetes, alcoholismo, neoplasia o asplenia.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">INGRESADA<br>no grave</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Betalactamico mas macrolido</strong> (ceftriaxona o ampicilina-sulbactam con azitromicina), o fluoroquinolona respiratoria en monoterapia. La combinacion con macrolido es la opcion preferida por su efecto sobre los germenes atipicos y por su posible efecto inmunomodulador.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">INGRESADA<br>GRAVE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Betalactamico mas macrolido</strong>, o betalactamico mas fluoroquinolona. Aqui SI se piden hemocultivos, cultivo de esputo y antigenos de neumococo y de Legionella antes de la primera dosis, y se a&#241;ade <strong>corticoide sistemico</strong> salvo que la causa sea la gripe.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #5b4a86;border-radius:8px;background:#5b4a8610;color:var(--ink-dim);">
    <strong style="color:#5b4a86;">La cobertura ampliada NO se da por la etiqueta del paciente, se da por factores de riesgo.</strong> La categoria de "neumonia asociada a cuidados sanitarios" se abandono precisamente porque llevaba a tratar con carbapenemico y vancomicina a pacientes que solo eran mayores o venian de una residencia. Hoy se cubre <strong>SARM</strong> o <strong>Pseudomonas aeruginosa</strong> solo si hay <strong>aislamiento previo del germen en via respiratoria</strong>, o <strong>ingreso con antibiotico intravenoso en los ultimos 90 dias</strong> junto con factores locales validados. Y cuando se cubre, se toman cultivos y <strong>se desescala a las 48 a 72 horas</strong> si no aparece el germen.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Que hacer si la prueba de virus respiratorios es positiva (guia de 2026).</strong> <strong>Ambulatorio SIN comorbilidad</strong>: no dar antibiotico. <strong>Ambulatorio CON comorbilidad</strong>: darlo, por el riesgo de coinfeccion bacteriana. <strong>Ingresado, grave o no</strong>: darlo. Un virus positivo no excluye una neumonia bacteriana asociada, y cuanto mas grave es el paciente menos margen hay para equivocarse.
  </div>
</div>`;

const nosocomialHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #7a1f3d;border-radius:8px;padding:6px 8px;background:#7a1f3d08;">
      <div style="font-weight:700;color:#7a1f3d;text-align:center;margin-bottom:4px;">La regla de las 48 HORAS</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Nosocomial</strong>: aparece 48 horas o mas <strong>despues del ingreso</strong> y no estaba incubandose al llegar.<br>
        <strong style="color:var(--ink);">Asociada a la ventilacion</strong>: aparece mas de 48 horas <strong>despues de la intubacion</strong>.<br>
        Antes de esas 48 horas, por muy hospitalizado que este el paciente, la neumonia es <strong>comunitaria</strong> y se trata como tal.
      </div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">Cuando se cubre resistencia</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">SARM</strong>: antibiotico intravenoso en los 90 dias previos, prevalencia local mayor del 20% o desconocida, o alto riesgo de muerte.<br>
        <strong style="color:var(--ink);">Doble cobertura antipseudomonica</strong>: choque septico, necesidad de ventilacion, bronquiectasias o fibrosis quistica, aislamiento previo, o mas del 10% de resistencia local al agente elegido.
      </div>
    </div>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Lo que decide de verdad el tratamiento es el ANTIBIOGRAMA de la unidad</strong>, no una tabla de un libro. Cada servicio debe conocer sus propios porcentajes de resistencia y construir su esquema empirico sobre ellos. Duracion habitual: <strong>7 dias</strong>, con desescalada guiada por cultivos y por la evolucion clinica.
  </div>

  <div style="text-align:center;border:1px solid #6b4a2e;border-radius:8px;padding:5px 9px;background:#6b4a2e12;margin-bottom:6px;">
    <strong style="color:#6b4a2e;">ASPIRACION: dos cuadros distintos que se confunden todo el tiempo.</strong>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">NEUMONITIS quimica</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Aspiracion de contenido gastrico acido, en general presenciada. Inicio en <strong>minutos u horas</strong>, con hipoxemia brusca e infiltrados que aparecen y se resuelven rapido. Es una quemadura quimica, no una infeccion: <strong style="color:var(--ink);">no lleva antibiotico de entrada</strong>. Soporte, aspiracion de la via aerea y observacion 48 horas.</div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">NEUMONIA por aspiracion</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Aspiracion de secrecion orofaringea colonizada, casi nunca presenciada, en el paciente con disfagia o alteracion de la conciencia. Inicio en <strong>dias</strong>, con fiebre y consolidacion en zonas declives. <strong style="color:var(--ink);">Si lleva antibiotico</strong>, pero la cobertura anaerobia de rutina <strong>ya no se recomienda</strong>: se reserva al absceso y al empiema.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La neumonia es la infeccion aguda del parenquima pulmonar. El diagnostico exige <strong>clinica compatible</strong> (fiebre, tos, expectoracion, disnea o dolor pleuritico) <strong>mas un infiltrado</strong> en la imagen: sin imagen se habla de infeccion respiratoria baja, no de neumonia. Es la principal causa infecciosa de muerte en el adulto y la primera causa de ingreso por infeccion, y sigue teniendo una mortalidad hospitalaria en torno al 10% que apenas ha cambiado en decadas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La primera decision es donde, no que.</strong></p>
<p style="margin:0 0 12px;">Antes de elegir antibiotico hay que decidir el lugar de tratamiento, porque de esa decision dependen el pronostico, la mortalidad, el coste y hasta que pruebas microbiologicas tiene sentido pedir. El <strong>CURB-65</strong> se recuerda en cinco segundos y sirve de cribado; el <strong>PSI</strong> es el que recomiendan las guias porque identifica mejor al paciente de bajo riesgo que puede irse a casa; y los <strong>criterios de neumonia grave</strong> definen el ingreso en cuidados intensivos. Ninguno sustituye al juicio: la escala no sabe si el paciente vive solo, si tolera la via oral o si su insuficiencia cardiaca esta descompensada.</p>
${figBlock('Figura 1', 'Donde se trata: las tres escalas y para que sirve cada una', dondeHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento empirico y la categoria que se abandono.</strong></p>
<p style="margin:0 0 12px;">Durante a&#241;os existio la categoria de <strong>neumonia asociada a cuidados sanitarios</strong>, que agrupaba a pacientes de residencias, en dialisis o con ingresos recientes y llevaba a tratarlos a todos con carbapenemico y vancomicina. Se abandono porque no predecia bien la presencia de germenes resistentes y si producia mucho tratamiento excesivo. La regla actual es distinta y mas exigente: se cubre SARM o Pseudomonas <strong>solo con factores de riesgo concretos</strong>, se toman cultivos al hacerlo, y se <strong>desescala en 48 a 72 horas</strong> si esos germenes no aparecen.</p>
${figBlock('Figura 2', 'Tratamiento empirico segun donde se trata, y cuando se amplia la cobertura', empiricoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuatro cosas que ha cambiado la guia de 2026.</strong></p>
<p style="margin:0 0 12px;">La actualizacion de la American Thoracic Society revisa cuatro preguntas concretas y merece la pena aprenderlas juntas. <strong>Uno</strong>: la <strong>ecografia pulmonar</strong> es una alternativa aceptable a la radiografia donde hay experiencia. <strong>Dos</strong>: si la prueba de virus respiratorios sale positiva, se puede prescindir del antibiotico <strong>solo</strong> en el paciente ambulatorio sin comorbilidad; en todos los demas se mantiene por el riesgo de coinfeccion. <strong>Tres</strong>: en el paciente ambulatorio y en el ingresado no grave que alcanza estabilidad clinica, la duracion sugerida es <strong>menor de 5 dias, con un minimo de 3</strong>; en la neumonia grave, en cambio, la recomendacion es fuerte a favor de <strong>5 dias o mas</strong>. <strong>Cuatro</strong>: los <strong>corticoides sistemicos</strong> se recomiendan <strong>en contra</strong> en la neumonia no grave y <strong>a favor</strong> en la grave, con la excepcion explicita de la neumonia gripal.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La regla de las 48 horas y las dos aspiraciones.</strong></p>
<p style="margin:0 0 12px;">La neumonia <strong>nosocomial</strong> aparece 48 horas o mas despues del ingreso, y la <strong>asociada a la ventilacion</strong> mas de 48 horas despues de la intubacion. Antes de ese plazo la neumonia es comunitaria por mucho que el paciente este ingresado. Y en la aspiracion hay que separar dos cuadros que se confunden a diario: la <strong>neumonitis quimica</strong>, que es una quemadura acida de inicio en minutos y no lleva antibiotico, y la <strong>neumonia por aspiracion</strong>, que es bacteriana, tarda dias y si lo lleva, aunque ya no con cobertura anaerobia sistematica.</p>
${figBlock('Figura 3', 'Nosocomial, asociada a la ventilacion y las dos caras de la aspiracion', nosocomialHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La neumonia no termina cuando se va la fiebre.</strong></p>
<p style="margin:0 0 12px;">Un ingreso por neumonia multiplica el riesgo de infarto, arritmia e insuficiencia cardiaca en los 30 dias siguientes, y ese exceso de riesgo cardiovascular persiste durante a&#241;os. La mortalidad al a&#241;o tras un ingreso por neumonia supera con mucho a la hospitalaria. Por eso el alta no es el final: hay que revisar la vacunacion, el tabaco, la disfagia si la hubo, y el riesgo cardiovascular del paciente.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar neumonia sin imagen. No retrasar la primera dosis de antibiotico en el paciente grave por esperar pruebas. No usar la procalcitonina para decidir si se inicia el antibiotico. No cubrir SARM ni Pseudomonas por la mera procedencia del paciente. No mantener la cobertura ampliada si los cultivos no la respaldan. No dar corticoide en la neumonia no grave. No dar cobertura anaerobia de rutina en la aspiracion. Y no pedir radiografia de control sistematica al paciente que se ha recuperado bien.</p>`;

export const bibliografia = [
  'Jones BE, Ramirez JA, Oren E, et al. Diagnosis and management of community-acquired pneumonia: an official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2026.',
  'Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia: an official ATS/IDSA clinical practice guideline. Am J Respir Crit Care Med. 2019;200(7):e45-e67.',
  'Kalil AC, Metersky ML, Klompas M, et al. Management of adults with hospital-acquired and ventilator-associated pneumonia: 2016 clinical practice guidelines by the IDSA and ATS. Clin Infect Dis. 2016;63(5):e61-e111.',
  'Torres A, Niederman MS, Chastre J, et al. International ERS/ESICM/ESCMID/ALAT guidelines for the management of hospital-acquired and ventilator-associated pneumonia. Eur Respir J. 2017;50(3):1700582.',
  'Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study. Thorax. 2003;58(5):377-382.',
  'Fine MJ, Auble TE, Yealy DM, et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. N Engl J Med. 1997;336(4):243-250.',
  'Dequin PF, Meziani F, Quenot JP, et al. Hydrocortisone in severe community-acquired pneumonia. N Engl J Med. 2023;388(21):1931-1941.',
  'Marik PE. Aspiration pneumonitis and aspiration pneumonia. N Engl J Med. 2001;344(9):665-671.',
  'Mandell LA, Niederman MS. Aspiration pneumonia. N Engl J Med. 2019;380(7):651-663.',
  'Uyeki TM, Bernstein HH, Bradley JS, et al. Clinical practice guidelines by the Infectious Diseases Society of America: 2018 update on diagnosis, treatment, chemoprophylaxis and institutional outbreak management of seasonal influenza. Clin Infect Dis. 2019;68(6):e1-e47.',
  'Corrales-Medina VF, Alvarez KN, Weissfeld LA, et al. Association between hospitalization for pneumonia and subsequent risk of cardiovascular disease. JAMA. 2015;313(3):264-274.',
  'Uranga A, Espana PP, Bilbao A, et al. Duration of antibiotic treatment in community-acquired pneumonia: a multicenter randomized clinical trial. JAMA Intern Med. 2016;176(9):1257-1265.',
  'Papazian L, Klompas M, Luyt CE. Ventilator-associated pneumonia in adults: a narrative review. Intensive Care Med. 2020;46(5):888-906.',
  'Ramirez JA, Wiemken TL, Peyrani P, et al. Adults hospitalized with pneumonia in the United States: incidence, epidemiology, and mortality. Clin Infect Dis. 2017;65(11):1806-1812.',
  'Wunderink RG, Waterer GW. Community-acquired pneumonia. N Engl J Med. 2014;370(6):543-551.',
  'Fishman JA. Infection in organ transplantation. Am J Transplant. 2017;17(4):856-879.',
  'Hadid H, Usman M, Thapa S, et al. Lung abscess: contemporary non-conservative management. 2024.',
  'Shumaker AH, Bhimraj A, Gallagher JC, et al. IDSA guidelines on the treatment and management of patients with COVID-19: antiviral therapy. 2026.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Neumonia comunitaria tipica',
      tituloB: 'Neumonia grave',
      compensada: 'Fiebre, tos con expectoracion purulenta, disnea y dolor pleuritico de instauracion en dias. Crepitantes localizados, soplo tubarico, aumento de las vibraciones vocales y matidez a la percusion sobre la zona consolidada. En el ANCIANO el cuadro puede ser enga&#241;oso: caida, confusion, descompensacion de una comorbilidad o simple deterioro funcional SIN fiebre y sin tos, y esa presentacion es la que mas se retrasa. La distincion clasica entre neumonia tipica y atipica no permite predecir el germen y ha dejado de usarse para elegir el antibiotico.',
      descompensada: 'Insuficiencia respiratoria con necesidad de ventilacion, o choque septico con vasopresores (criterios MAYORES). O bien tres o mas criterios menores: frecuencia respiratoria de 30 o mas, PaO2/FiO2 de 250 o menos, infiltrados multilobares, confusion, nitrogeno ureico de 20 mg/dL o mas, leucocitos por debajo de 4000, plaquetas por debajo de 100000, temperatura menor de 36 grados e hipotension que exige reposicion agresiva. La leucopenia y la hipotermia enga&#241;an: parecen tranquilizadoras y son marcadores de gravedad.'
    },
    laboratorio: [
      { prueba: 'Hemocultivos y cultivo de esputo', utilidad: 'NO de rutina en el paciente ambulatorio ni en el ingresado no grave, porque la rentabilidad es baja y los falsos positivos generan tratamiento innecesario. SI en la neumonia grave, en el paciente que va a recibir cobertura empirica de SARM o Pseudomonas, y en el que tiene aislamiento previo de esos germenes. Se extraen ANTES de la primera dosis, sin retrasarla.' },
      { prueba: 'Antigeno urinario de neumococo y de Legionella', utilidad: 'Indicados en la neumonia grave, y el de Legionella ademas ante brote, viaje reciente o cuadro compatible. Permiten desescalar a tratamiento dirigido. El de Legionella detecta solo el serogrupo 1, de modo que un resultado negativo no la descarta, y ambos siguen positivos durante semanas.' },
      { prueba: 'Prueba molecular de virus respiratorios', utilidad: 'Gripe, virus respiratorio sincitial y SARS-CoV-2, sobre todo en temporada. Un resultado positivo permite retirar el antibiotico SOLO en el ambulatorio sin comorbilidad; en el resto se mantiene por el riesgo de coinfeccion bacteriana. La gripe positiva a&#241;ade oseltamivir en todo paciente ingresado, con independencia del tiempo de evolucion.' },
      { prueba: 'Gasometria arterial y lactato', utilidad: 'La relacion PaO2/FiO2 de 250 o menos es criterio menor de gravedad, y el lactato elevado orienta a hipoperfusion. En el paciente sin criterios de gravedad basta la pulsioximetria, que es la primera prueba que hay que mirar en toda neumonia.' },
      { prueba: 'Hemograma, funcion renal, glucemia e iones', utilidad: 'Alimentan las escalas: nitrogeno ureico para el CURB-65 y el PSI, leucopenia y trombocitopenia como criterios menores de gravedad. La hiponatremia importante orienta hacia Legionella junto con la diarrea, la elevacion de la lactato deshidrogenasa y la alteracion hepatica.' },
      { prueba: 'Proteina C reactiva y procalcitonina', utilidad: 'Ayudan a seguir la respuesta al tratamiento y a acortar la duracion, pero NO deben usarse para decidir si se inicia el antibiotico ni para retirarlo en un paciente que sigue inestable: un valor bajo no descarta una neumonia bacteriana.' },
      { prueba: 'Serologia y estudio dirigido segun exposicion', utilidad: 'Ante exposicion a aves (Chlamydia psittaci), a ganado o partos de animales (Coxiella burnetii), a agua estancada o aire acondicionado (Legionella), o a roedores. La historia epidemiologica es lo que orienta, y muchas veces cambia el antibiotico.' },
      { prueba: 'Estudio del inmunodeprimido', utilidad: 'Recuento de linfocitos CD4, serologia de VIH, galactomanano, beta-D-glucano y carga viral de citomegalovirus segun el contexto. En el inmunodeprimido el abanico etiologico se abre a Pneumocystis, hongos y micobacterias, y el umbral para broncoscopia es mucho mas bajo.' }
    ],
    no_invasivos: [
      { metodo: 'CURB-65 (calculadora disponible)', interpretacion: 'Confusion, urea (nitrogeno ureico mayor de 19 mg/dL), frecuencia respiratoria de 30 o mas, presion arterial sistolica menor de 90 o diastolica de 60 o menos, y edad de 65 a&#241;os o mas. Un punto por cada uno.', cutoff: '0 a 1: ambulatorio. 2: valorar ingreso. 3 o mas: neumonia grave, valorar cuidados intensivos' },
      { metodo: 'Indice de gravedad de la neumonia o PSI (calculadora disponible)', interpretacion: 'Veinte variables agrupadas en demografia, comorbilidad, exploracion, laboratorio y radiografia, que definen cinco clases de riesgo. Es el que recomiendan las guias frente al CURB-65 porque identifica mejor al paciente de bajo riesgo.', cutoff: 'Clases I y II: ambulatorio. III: observacion o ingreso corto. IV y V: ingreso' },
      { metodo: 'Criterios ATS/IDSA de neumonia grave (calculadora disponible)', interpretacion: 'Un criterio mayor (ventilacion mecanica o choque septico con vasopresores) o tres menores. Definen el ingreso en cuidados intensivos y seleccionan ademas a quien lleva corticoide sistemico y a quien necesita cultivos completos.', cutoff: '1 criterio mayor o 3 o mas criterios menores' },
      { metodo: 'Factores de riesgo de SARM y Pseudomonas (calculadora disponible)', interpretacion: 'Sustituyen a la desaparecida categoria de neumonia asociada a cuidados sanitarios. Lo que cuenta es el aislamiento previo del germen en via respiratoria y el ingreso con antibiotico intravenoso en los ultimos 90 dias, ponderados con la epidemiologia local.', cutoff: 'Sin factores: no ampliar cobertura. Con factores: ampliar, cultivar y desescalar en 48 a 72 horas' },
      { metodo: 'Criterios de estabilidad clinica', interpretacion: 'Temperatura de 37.8 grados o menos, frecuencia cardiaca de 100 o menos, frecuencia respiratoria de 24 o menos, presion sistolica de 90 o mas, saturacion del 90% o mas, tolerancia oral y estado mental basal. Marcan el momento de pasar a via oral y de contar la duracion del tratamiento.', cutoff: 'Todos cumplidos: paciente estable, valorar paso a via oral y alta' },
      { metodo: 'Ecografia pulmonar a pie de cama', interpretacion: 'Novedad de la guia de 2026: en centros con experiencia es una alternativa aceptable a la radiografia para diagnosticar la neumonia. Busca consolidacion con broncograma aereo dinamico, lineas B focales y derrame acompa&#241;ante.', cutoff: 'Sin umbral numerico; depende por completo de la experiencia del explorador' },
      { metodo: 'Cribado de disfagia', interpretacion: 'Obligado en toda neumonia del anciano, del paciente con ictus o enfermedad neurodegenerativa, y en toda sospecha de aspiracion. La prueba de deglucion de agua a pie de cama es el cribado inicial y la videofluoroscopia el estudio de referencia.', cutoff: 'Un cribado positivo obliga a modificar texturas y a valorar por logopedia antes del alta' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Imprescindible para el diagnostico junto con la clinica. Consolidacion lobar con broncograma aereo (patron alveolar, tipico del neumococo), infiltrados parcheados bilaterales (bronconeumonia, mas propia de estafilococo y gramnegativos) o patron intersticial (virus y germenes atipicos). Puede ser NORMAL en las primeras horas y en el paciente deshidratado o neutropenico. El patron radiologico no permite predecir el germen con fiabilidad.' },
      { modalidad: 'Ecografia pulmonar', hallazgos: 'Consolidacion subpleural con broncograma aereo dinamico, lineas B focales y derrame. Mas sensible que la radiografia simple para la consolidacion perifericamente situada, sin radiacion y a pie de cama; no valora bien lo que no llega a la pleura y depende del explorador.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'Ante duda diagnostica, mala evolucion, sospecha de complicacion (absceso, empiema, neumonia necrotizante), inmunodepresion o sospecha de neoplasia subyacente. Detecta infiltrados que la radiografia no ve y define mejor el derrame y las cavitaciones.' },
      { modalidad: 'Ecografia torax dirigida al derrame', hallazgos: 'Ante todo derrame paraneumonico: mide, localiza, detecta tabiques y guia la toracocentesis. Un derrame de mas de 1 cm en decubito lateral debe puncionarse para descartar empiema, que cambia por completo el manejo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La neumonia se clasifica por <strong>donde se adquiere</strong> (comunitaria, nosocomial, asociada a la ventilacion), por <strong>gravedad</strong> (que decide el lugar de tratamiento y ahora tambien el corticoide y la duracion), por <strong>mecanismo</strong> (inhalacion, aspiracion, diseminacion hematogena) y por el <strong>estado inmunitario</strong> del huesped, que es lo que mas amplia el abanico etiologico. La categoria de <strong>neumonia asociada a cuidados sanitarios se abandono</strong> porque no predecia bien la resistencia y generaba tratamiento excesivo: hoy la cobertura ampliada se decide por factores de riesgo individuales y por la epidemiologia local.`,
    escalas: [
      { nombre: 'CURB-65 (calculadora disponible)', componentes: 'Confusion, urea (nitrogeno ureico mayor de 19 mg/dL), frecuencia respiratoria de 30 o mas, presion arterial baja y edad de 65 a&#241;os o mas.', formula: 'Un punto por cada criterio presente, de 0 a 5.', interpretacion: '0 a 1: mortalidad baja, tratamiento ambulatorio. 2: mortalidad intermedia, valorar ingreso. 3 o mas: mortalidad alta, neumonia grave. Su virtud es que se recuerda; su defecto, que penaliza al anciano solo por la edad y que ignora la hipoxemia y la comorbilidad.' },
      { nombre: 'Indice de gravedad de la neumonia o PSI (calculadora disponible)', componentes: 'Edad, sexo, residencia, cinco comorbilidades, cinco hallazgos de exploracion, siete datos de laboratorio y gasometria, y el derrame pleural en la radiografia.', formula: 'Suma ponderada que define cinco clases de riesgo, de la I a la V.', interpretacion: 'Clases I y II ambulatorio, III observacion o ingreso corto, IV y V ingreso. Es el preferido por las guias porque su fuerza esta en identificar al paciente de bajo riesgo. Su punto debil es el joven sin comorbilidad, al que la edad no penaliza y que puede llegar grave con una clase baja.' },
      { nombre: 'Criterios ATS/IDSA de neumonia grave (calculadora disponible)', componentes: 'Mayores: ventilacion mecanica y choque septico con vasopresores. Menores: frecuencia respiratoria de 30 o mas, PaO2/FiO2 de 250 o menos, infiltrados multilobares, confusion, nitrogeno ureico de 20 mg/dL o mas, leucocitos menores de 4000, plaquetas menores de 100000, temperatura menor de 36 grados e hipotension que exige reposicion agresiva.', formula: '1 criterio mayor o 3 o mas menores.', interpretacion: 'Definen el ingreso en cuidados intensivos, la necesidad de cultivos completos, la indicacion de corticoide sistemico y la duracion minima de 5 dias. Es la escala que mas decisiones concretas cambia de las tres.' },
      { nombre: 'Factores de riesgo de germenes resistentes (calculadora disponible)', componentes: 'Aislamiento previo de SARM o de Pseudomonas en via respiratoria, ingreso con antibiotico intravenoso en los ultimos 90 dias, prevalencia local, bronquiectasias o fibrosis quistica, y gravedad del cuadro.', formula: 'Valoracion categorica, ponderada con el antibiograma de la unidad.', interpretacion: 'Sustituye a la categoria de neumonia asociada a cuidados sanitarios. La regla practica: si se amplia la cobertura, se toman cultivos y se desescala en 48 a 72 horas si el germen no aparece. Ampliar sin desescalar es la peor de las combinaciones.' },
      { nombre: 'Criterios de estabilidad clinica', componentes: 'Temperatura, frecuencia cardiaca, frecuencia respiratoria, presion arterial sistolica, saturacion de oxigeno, tolerancia oral y estado mental.', formula: 'Cumplimiento simultaneo de los siete.', interpretacion: 'Marcan el paso a via oral, el alta y el punto desde el que se cuenta la duracion del tratamiento. La guia de 2026 sugiere menos de 5 dias (minimo 3) en el ambulatorio y en el ingresado no grave que alcanza estabilidad, y 5 o mas en la neumonia grave.' },
      { nombre: 'Definiciones temporales de la neumonia nosocomial', componentes: 'Momento de aparicion respecto al ingreso y a la intubacion.', formula: 'Nosocomial: 48 horas o mas tras el ingreso, sin estar incubandose al llegar. Asociada a la ventilacion: mas de 48 horas tras la intubacion.', interpretacion: 'Antes de esas 48 horas la neumonia es comunitaria por mucho que el paciente este hospitalizado, y se trata como tal. Es una de las distinciones que mas se falla y la que decide todo el esquema antibiotico.' },
      { nombre: 'Escala de riesgo de mortalidad en la neumonia nosocomial', componentes: 'Choque septico, necesidad de ventilacion mecanica por la neumonia, y comorbilidad grave.', formula: 'Valoracion categorica de alto riesgo de muerte.', interpretacion: 'El alto riesgo de muerte justifica por si solo la cobertura de SARM y la doble cobertura antipseudomonica empirica, incluso sin otros factores de riesgo de resistencia, porque el coste de errar el tratamiento inicial es demasiado alto.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Neumonia adquirida en la comunidad',
      color: '#a8562e',
      definicion: 'Infeccion aguda del parenquima pulmonar adquirida fuera del hospital, definida por clinica compatible MAS un infiltrado en la imagen. Sin imagen no se habla de neumonia sino de infeccion respiratoria baja.',
      fisiopatologia: 'El germen llega al alveolo por microaspiracion de secrecion orofaringea (la via mas frecuente con diferencia), por inhalacion de aerosoles o, con menos frecuencia, por diseminacion hematogena. Cuando la carga o la virulencia superan a las defensas locales (aclaramiento mucociliar, macrofago alveolar, inmunidad innata), se desencadena una respuesta inflamatoria que llena el alveolo de exudado y celulas. Ese relleno produce un cortocircuito derecha-izquierda intrapulmonar: los alveolos siguen perfundidos pero no ventilados, y de ahi la hipoxemia que responde mal al oxigeno suplementario.',
      epidemiologia: 'Es la principal causa infecciosa de muerte en el adulto y la primera causa de ingreso por infeccion. La incidencia crece de forma exponencial con la edad. Streptococcus pneumoniae sigue siendo el germen identificado con mas frecuencia, seguido de los virus respiratorios, Haemophilus influenzae, Mycoplasma pneumoniae y Legionella. En una proporcion muy alta de los casos no se identifica ningun germen pese al estudio completo.',
      factores_riesgo: ['Edad avanzada', 'Tabaquismo y consumo de alcohol', 'EPOC, asma y bronquiectasias', 'Insuficiencia cardiaca, diabetes, hepatopatia y nefropatia cronicas', 'Inmunodepresion, incluida la del corticoide sistemico', 'Disfagia y alteracion del nivel de conciencia', 'Mala higiene bucodental', 'Ausencia de vacunacion antineumococica y antigripal', 'Infeccion viral previa, sobre todo gripe', 'Uso de inhibidores de la bomba de protones y de antipsicoticos'],
      clinica: 'Fiebre, tos con expectoracion, disnea y dolor pleuritico en dias. Crepitantes localizados, soplo tubarico, egofonia, aumento de las vibraciones vocales y matidez. En el anciano puede presentarse como caida, confusion o descompensacion de una comorbilidad SIN fiebre ni tos, y esa es la presentacion que mas se retrasa.',
      criterios_dx: 'Clinica compatible mas infiltrado en radiografia de torax o, en centros con experiencia, en ecografia pulmonar. La imagen puede ser normal en las primeras horas, en el deshidratado y en el neutropenico: si la sospecha es alta y la radiografia es normal, se repite o se hace tomografia.',
      laboratorio: 'Hemograma, funcion renal, iones, glucemia y proteina C reactiva. Pulsioximetria en todos y gasometria si es grave. Hemocultivos, cultivo de esputo y antigenos urinarios solo en la neumonia grave o si se va a cubrir SARM o Pseudomonas. Prueba de virus respiratorios en temporada.',
      imagen: 'Radiografia de torax, o ecografia pulmonar donde hay experiencia. Tomografia ante duda, mala evolucion o sospecha de complicacion o de neoplasia. Ecografia del derrame si lo hay.',
      complementarios: 'Calcular CURB-65 o PSI para decidir el lugar de tratamiento, y criterios de gravedad para valorar cuidados intensivos. Cribado de disfagia en el anciano. Revisar el estado vacunal antes del alta.',
      dx_diferencial: 'Insuficiencia cardiaca descompensada (que coexiste con frecuencia), embolia pulmonar con infarto, atelectasia, neumonitis por hipersensibilidad, neumonia organizada, hemorragia alveolar, vasculitis, neoplasia con obstruccion bronquial, tuberculosis y neumonitis por farmacos o por radioterapia.',
      tx_medico: 'Oxigeno para mantener la saturacion adecuada, hidratacion, analgesia del dolor pleuritico (que mejora la ventilacion), movilizacion precoz y profilaxis antitrombotica si ingresa. Paso a via oral en cuanto el paciente esta estable y tolera. Vacunacion antineumococica y antigripal antes del alta, y abandono del tabaco.',
      tx_farmacologico: 'PRIMERA DOSIS SIN DEMORA, sobre todo si hay sepsis. Ambulatorio sano: amoxicilina a dosis altas o doxiciclina. Ambulatorio con comorbilidad: amoxicilina-clavulanico o cefalosporina mas macrolido o doxiciclina, o fluoroquinolona respiratoria. Ingresado no grave: betalactamico mas macrolido, o fluoroquinolona. Grave: betalactamico mas macrolido o mas fluoroquinolona. Cobertura de SARM o Pseudomonas SOLO con factores de riesgo, con cultivos y desescalada a las 48 a 72 horas. Oseltamivir si la gripe es positiva en el paciente ingresado. Ver la Figura 2 de Definicion.',
      tx_intervencionista: 'Toracocentesis de todo derrame significativo, y drenaje si es complicado o empiema. Broncoscopia ante mala evolucion, sospecha de obstruccion o inmunodepresion. Drenaje o cirugia en el absceso que no responde.',
      criterios_uci: 'Un criterio mayor (ventilacion mecanica o choque septico con vasopresores) o tres o mas menores. El ingreso precoz en cuidados intensivos del paciente que cumple criterios mejora el pronostico frente al traslado tardio tras el deterioro.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revaluacion diaria de los criterios de estabilidad clinica, que marcan el paso a via oral y el alta. Si a las 72 horas no hay mejoria, replantear: germen resistente o no cubierto, complicacion local (empiema, absceso), diagnostico alternativo o inmunodepresion no reconocida.',
      seguimiento_ambulatorio: 'Revision clinica en 4 a 6 semanas. La radiografia de control NO es necesaria de rutina si los sintomas se resolvieron; se reserva al fumador, al mayor de 50 a&#241;os y al que persiste sintomatico, para descartar una neoplasia subyacente. Revisar vacunacion, tabaco y riesgo cardiovascular.',
      pronostico: 'Mortalidad ambulatoria menor del 1% y hospitalaria en torno al 10%, que llega al 30% o mas en la que ingresa en cuidados intensivos. La mortalidad al a&#241;o tras el ingreso es mucho mayor que la hospitalaria, en buena parte por eventos cardiovasculares.',
      algoritmo: ['Clinica compatible mas imagen: radiografia o ecografia pulmonar', 'Calcular CURB-65 o PSI para decidir donde se trata', 'Aplicar criterios de gravedad para valorar cuidados intensivos', 'Cultivos y antigenos SOLO si es grave o si se va a ampliar cobertura', 'Prueba de virus respiratorios en temporada', 'Primera dosis de antibiotico sin demora, segun el lugar de tratamiento', 'Ampliar a SARM o Pseudomonas solo con factores de riesgo concretos', 'Revaluar a las 48 a 72 horas: desescalar y pasar a via oral si esta estable', 'Duracion: menos de 5 dias si no es grave y alcanza estabilidad; 5 o mas si es grave', 'Antes del alta: vacunas, tabaco, disfagia si procede y cita en 4 a 6 semanas']
    },
    {
      nombre: 'Neumonia grave y complicaciones sistemicas',
      color: '#8c3a34',
      definicion: 'Neumonia que cumple un criterio mayor (ventilacion mecanica o choque septico con vasopresores) o tres o mas criterios menores de la clasificacion ATS/IDSA, junto con las complicaciones sistemicas que produce dentro y despues del ingreso.',
      fisiopatologia: 'El relleno alveolar produce cortocircuito intrapulmonar e hipoxemia refractaria al oxigeno. Si la respuesta inflamatoria se generaliza aparecen sepsis y disfuncion multiorganica, y si la lesion alveolar difusa progresa, sindrome de dificultad respiratoria aguda. A ello se suma un mecanismo que se subestima: la inflamacion sistemica, la activacion plaquetaria, la disfuncion endotelial y la demanda miocardica aumentada precipitan infarto, arritmia e insuficiencia cardiaca, y ese riesgo cardiovascular persiste durante a&#241;os despues del alta.',
      epidemiologia: 'Alrededor del 10 al 20% de las neumonias que ingresan cumplen criterios de gravedad, con mortalidad del 30% o superior. Uno de cada cuatro a cinco pacientes ingresados por neumonia sufre un evento cardiovascular durante el ingreso o en los 30 dias siguientes, y el exceso de riesgo se mantiene durante a&#241;os.',
      factores_riesgo: ['Edad avanzada y fragilidad', 'Comorbilidad cardiovascular y respiratoria previa', 'Inmunodepresion', 'Retraso en la primera dosis de antibiotico', 'Tratamiento empirico inadecuado para el germen real', 'Bacteriemia y afectacion multilobar', 'Alcoholismo y desnutricion', 'Gripe o virus respiratorio como desencadenante', 'Infeccion por Staphylococcus aureus productor de leucocidina de Panton-Valentine', 'Coinfeccion bacteriana sobre neumonia viral'],
      clinica: 'Insuficiencia respiratoria con trabajo respiratorio importante, hipotension, oliguria, confusion y signos de hipoperfusion. La leucopenia y la hipotermia son marcadores de gravedad que enga&#241;an por parecer tranquilizadores. Puede debutar directamente como choque septico o como sindrome de dificultad respiratoria aguda.',
      criterios_dx: 'Criterios ATS/IDSA de neumonia grave. Para las complicaciones sistemicas, los criterios propios de cada una: Sepsis-3 para la sepsis, definicion de Berlin o global para el sindrome de dificultad respiratoria aguda, y los criterios habituales del sindrome coronario agudo y de la insuficiencia cardiaca.',
      laboratorio: 'Gasometria con PaO2/FiO2, lactato, hemograma completo, funcion renal y hepatica, coagulacion y troponina. Hemocultivos y cultivo de esputo antes de la primera dosis, antigenos urinarios de neumococo y de Legionella, y prueba de virus respiratorios.',
      imagen: 'Radiografia para valorar la extension multilobar. Tomografia si hay mala evolucion o sospecha de complicacion local. Ecocardiograma ante hipotension, troponina elevada o sospecha de disfuncion ventricular. Ecografia pulmonar seriada a pie de cama.',
      complementarios: 'Monitorizacion continua, electrocardiograma seriado (la fibrilacion auricular de novo es frecuente), control de diuresis y balance. Valoracion precoz por cuidados intensivos: el traslado tardio tras el deterioro empeora el pronostico.',
      dx_diferencial: 'Sindrome de dificultad respiratoria aguda de otra causa, edema pulmonar cardiogenico, embolia pulmonar masiva, hemorragia alveolar difusa, neumonia organizada aguda y vasculitis pulmonar.',
      tx_medico: 'Tratamiento de la sepsis segun protocolo: reposicion de volumen guiada, vasopresores si la hipotension persiste, y control del foco. Oxigenoterapia, canula nasal de alto flujo o ventilacion mecanica segun la evolucion, con estrategia de proteccion pulmonar si aparece sindrome de dificultad respiratoria aguda. Profilaxis antitrombotica y control glucemico.',
      tx_farmacologico: 'Betalactamico mas macrolido, o betalactamico mas fluoroquinolona, con la primera dosis sin demora. CORTICOIDE SISTEMICO: la guia de 2026 lo sugiere en la neumonia grave, con la excepcion explicita de la neumonia gripal, y lo recomienda EN CONTRA en la neumonia no grave. El ensayo CAPE COD mostro reduccion de mortalidad con hidrocortisona en la neumonia grave. Duracion del antibiotico de 5 dias o mas en la neumonia grave, con recomendacion fuerte.',
      tx_intervencionista: 'Ventilacion mecanica protectora, decubito prono si la relacion PaO2/FiO2 es menor de 150, y oxigenacion por membrana extracorporea en el caso refractario y seleccionado. Drenaje del empiema. Broncoscopia diagnostica si el tratamiento empirico fracasa.',
      criterios_uci: 'Los propios criterios de gravedad. El aviso debe ser precoz: el ingreso tardio en cuidados intensivos, tras el deterioro, tiene peor pronostico que el ingreso directo del paciente que cumple criterios desde el principio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda. La fibrosis residual grave tras un sindrome de dificultad respiratoria aguda puede plantearlo a largo plazo, y es excepcional.',
      seguimiento_hospitalario: 'Revaluacion diaria de la disfuncion organica y de la respuesta al tratamiento. Vigilancia cardiovascular activa: electrocardiograma, troponina si hay sospecha y atencion a la fibrilacion auricular de novo y a la insuficiencia cardiaca, que son las complicaciones que mas se pasan por alto.',
      seguimiento_ambulatorio: 'Revision precoz tras el alta. Valorar de forma explicita el riesgo cardiovascular y optimizar su tratamiento, porque el exceso de eventos persiste a&#241;os. Rehabilitacion y valoracion funcional en el que ha estado en cuidados intensivos, con atencion al deterioro cognitivo y afectivo.',
      pronostico: 'Mortalidad del 30% o superior en la que ingresa en cuidados intensivos. La mortalidad al a&#241;o duplica o triplica a la hospitalaria, en buena parte por causa cardiovascular. La recuperacion funcional puede tardar meses y a menudo es incompleta en el anciano.',
      algoritmo: ['Aplicar criterios de gravedad al llegar: 1 mayor o 3 menores', 'Avisar a cuidados intensivos de forma PRECOZ, no tras el deterioro', 'Hemocultivos, esputo, antigenos y virus antes de la primera dosis', 'Antibiotico combinado sin demora: betalactamico mas macrolido o fluoroquinolona', 'A&#241;adir corticoide sistemico, salvo que la causa sea la gripe', 'Reposicion de volumen y vasopresores segun el protocolo de sepsis', 'Soporte respiratorio escalonado, con proteccion pulmonar y prono si procede', 'Buscar activamente complicaciones locales: empiema, absceso, necrosis', 'Vigilar el evento cardiovascular: electrocardiograma, troponina, fibrilacion auricular', 'Duracion de 5 dias o mas, y revision cardiovascular estructurada al alta']
    },
    {
      nombre: 'Neumonia nosocomial y asociada a la ventilacion',
      color: '#7a1f3d',
      definicion: 'Neumonia que aparece 48 horas o mas despues del ingreso sin estar incubandose al llegar (nosocomial), o mas de 48 horas despues de la intubacion (asociada a la ventilacion mecanica).',
      fisiopatologia: 'La colonizacion de la orofaringe por flora hospitalaria cambia en dias, favorecida por los antibioticos previos, los inhibidores de la bomba de protones y la propia enfermedad. Esa flora se microaspira alrededor del neumotaponamiento del tubo endotraqueal, que no sella la via aerea, y encuentra un pulmon con el aclaramiento mucociliar abolido por la sedacion, el decubito y el propio tubo. La biopelicula que se forma en la superficie interna del tubo actua ademas como reservorio permanente que se desprende con cada aspiracion.',
      epidemiologia: 'Es la infeccion nosocomial mas frecuente en cuidados intensivos. El riesgo de neumonia asociada a la ventilacion es maximo en los primeros dias de intubacion y disminuye despues. Alarga la ventilacion y la estancia, y su mortalidad atribuible sigue siendo objeto de debate porque el paciente que la sufre ya estaba grave.',
      factores_riesgo: ['Intubacion y ventilacion mecanica prolongada', 'Reintubacion y transporte fuera de la unidad', 'Sedacion profunda y ausencia de despertar diario', 'Decubito supino estricto', 'Antibioticos y antiacidos previos', 'Nutricion enteral con sonda y aspiracion silente', 'Cirugia toracica o abdominal alta', 'EPOC, bronquiectasias e inmunodepresion', 'Edad avanzada y desnutricion', 'Higiene bucodental deficiente durante el ingreso'],
      clinica: 'Fiebre o hipotermia, secreciones purulentas, empeoramiento del intercambio gaseoso con aumento de las necesidades de oxigeno o de PEEP, leucocitosis o leucopenia y nuevo infiltrado radiologico. En el paciente ventilado el diagnostico es dificil porque todos esos datos tienen muchas otras causas: atelectasia, edema, sindrome de dificultad respiratoria aguda, contusion, hemorragia y traqueobronquitis.',
      criterios_dx: 'Nuevo infiltrado o infiltrado progresivo MAS al menos dos de: fiebre, leucocitosis o leucopenia, y secrecion purulenta, con deterioro de la oxigenacion. Se toman muestras respiratorias para cultivo, preferentemente CUANTITATIVAS y antes de cambiar el antibiotico. Es un diagnostico con mucho ruido: el sobrediagnostico y el uso excesivo de antibioticos son la norma.',
      laboratorio: 'Aspirado traqueal o muestra broncoscopica con cultivo cuantitativo. Hemocultivos. Hemograma, funcion renal para ajustar dosis, y procalcitonina como ayuda para acortar la duracion, no para iniciar el tratamiento.',
      imagen: 'Radiografia de torax portatil, de interpretacion dificil en el paciente ventilado. Tomografia si hay duda o sospecha de complicacion. Ecografia pulmonar a pie de cama, util para separar consolidacion de atelectasia y de derrame.',
      complementarios: 'Revisar el antibiograma DE LA PROPIA UNIDAD, que es lo que debe guiar el esquema empirico. Valorar retirada de dispositivos, control del foco y adecuacion de la sedacion. Revaluar diariamente si el antibiotico sigue estando indicado.',
      dx_diferencial: 'Atelectasia, edema pulmonar, sindrome de dificultad respiratoria aguda, embolia pulmonar, traqueobronquitis asociada a la ventilacion (que no siempre requiere tratamiento), hemorragia alveolar, contusion pulmonar y fiebre de otro foco.',
      tx_medico: 'Prevencion, que es donde mas se gana: elevar la cabecera de 30 a 45 grados, higiene bucal, protocolos de sedacion ligera con despertar diario y prueba de respiracion espontanea para extubar antes, control de la presion del neumotaponamiento y evitar la reintubacion. Nutricion adecuada y movilizacion precoz.',
      tx_farmacologico: 'Empirico segun el antibiograma local, cubriendo Staphylococcus aureus y bacilos gramnegativos incluida Pseudomonas. Se a&#241;ade cobertura de SARM si hay antibiotico intravenoso en los 90 dias previos, prevalencia local mayor del 20% o desconocida, o alto riesgo de muerte. Doble cobertura antipseudomonica si hay choque septico, necesidad de ventilacion, bronquiectasias, aislamiento previo o mas del 10% de resistencia local. DURACION DE 7 DIAS, con desescalada guiada por cultivos. Ver la Figura 3 de Definicion.',
      tx_intervencionista: 'Broncoscopia con lavado broncoalveolar en el caso dudoso o de mala evolucion. Drenaje del empiema. Traqueostomia segun la evolucion ventilatoria, que no previene por si sola la neumonia.',
      criterios_uci: 'El paciente suele estar ya en cuidados intensivos. En la nosocomial de planta, los criterios son los de cualquier neumonia grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revaluacion a las 48 a 72 horas con los cultivos en la mano: desescalar o retirar. Si no mejora, buscar complicacion local, germen resistente o diagnostico alternativo. Vigilar la toxicidad de los antibioticos, especialmente la renal.',
      seguimiento_ambulatorio: 'Sin particularidades propias; el seguimiento es el de la enfermedad de base y el de la recuperacion tras el ingreso en cuidados intensivos.',
      pronostico: 'Alarga la ventilacion y la estancia. La mortalidad bruta es alta, aunque la atribuible es menor de lo que sugieren las cifras crudas porque el paciente que la sufre parte de una situacion grave. El tratamiento empirico inicial inadecuado es el factor modificable que mas empeora el pronostico.',
      algoritmo: ['Comprobar la regla de las 48 horas: antes de ese plazo es comunitaria', 'Sospechar ante nuevo infiltrado con fiebre, leucocitosis y secrecion purulenta', 'Tomar muestra respiratoria para cultivo cuantitativo ANTES de cambiar el antibiotico', 'Consultar el antibiograma de la propia unidad', 'Cubrir Staphylococcus aureus y gramnegativos incluida Pseudomonas', 'A&#241;adir cobertura de SARM solo si hay factores de riesgo o alto riesgo de muerte', 'Doble cobertura antipseudomonica si hay choque, ventilacion o resistencia local alta', 'Revaluar a las 48 a 72 horas con los cultivos y DESESCALAR', 'Duracion de 7 dias en la mayoria de los casos', 'Reforzar la prevencion: cabecera elevada, higiene bucal, sedacion ligera y extubacion precoz']
    },
    {
      nombre: 'Neumonia por aspiracion y absceso pulmonar',
      color: '#6b4a2e',
      definicion: 'Dos entidades que se confunden a diario. La NEUMONITIS quimica es la lesion inflamatoria por aspiracion de contenido gastrico acido. La NEUMONIA por aspiracion es la infeccion bacteriana por aspiracion de secrecion orofaringea colonizada. El absceso pulmonar es su complicacion cavitada.',
      fisiopatologia: 'En la neumonitis, el acido gastrico produce una quemadura quimica del epitelio alveolar en minutos, con edema, hemorragia y aumento brusco de la permeabilidad: es inflamacion esteril, no infeccion, y por eso el antibiotico no aporta nada al principio. En la neumonia por aspiracion, la secrecion orofaringea colonizada llega al pulmon en el paciente con disfagia o alteracion de la conciencia, y la infeccion tarda dias en establecerse; las zonas afectadas dependen de la postura en el momento de la aspiracion, con predominio del segmento posterior de los lobulos superiores y el segmento superior de los inferiores en el decubito. Cuando la infeccion necrosa el parenquima, aparece el absceso.',
      epidemiologia: 'La aspiracion explica una proporcion importante de las neumonias del anciano y del paciente institucionalizado, y su frecuencia crece con la disfagia, el ictus y la demencia. Los abscesos pulmonares primarios se asocian a mala higiene bucodental, alcoholismo y alteracion de la conciencia. La microbiologia ha cambiado: hoy predominan los germenes que ya causan la neumonia comunitaria, y los anaerobios estrictos tienen menos peso del que se les atribuia.',
      factores_riesgo: ['Disfagia orofaringea de cualquier causa', 'Ictus, demencia y enfermedad de Parkinson', 'Alteracion del nivel de conciencia: alcohol, sedantes, epilepsia, anestesia', 'Mala higiene bucodental y enfermedad periodontal', 'Sonda nasogastrica y nutricion enteral', 'Reflujo gastroesofagico y vomitos de repeticion', 'Enfermedad neuromuscular y esclerosis lateral amiotrofica', 'Neoplasia de cabeza y cuello o de esofago, y su tratamiento', 'Traqueostomia e intubacion previas', 'Encamamiento y decubito supino mantenido'],
      clinica: 'La neumonitis se presenta en minutos u horas tras un episodio en general presenciado, con tos, disnea, hipoxemia brusca, sibilancias y a veces fiebre. La neumonia por aspiracion aparece en dias, con fiebre, tos, expectoracion y consolidacion en las zonas declives. El absceso a&#241;ade expectoracion abundante y de mal olor, sindrome constitucional y, con frecuencia, dedos en palillo de tambor si lleva semanas de evolucion.',
      criterios_dx: 'Fundamentalmente clinico y temporal: lo que separa a los dos cuadros es el TIEMPO desde el episodio de aspiracion y la evolucion de los infiltrados. La neumonitis mejora en 24 a 48 horas; la neumonia empeora. El absceso se define por la cavitacion con nivel hidroaereo en la imagen.',
      laboratorio: 'Hemograma, reactantes y funcion renal. En el absceso, cultivo de esputo y hemocultivos, con rentabilidad limitada. Los cultivos de anaerobios exigen tecnica especifica y rara vez se obtienen en la practica.',
      imagen: 'Radiografia con infiltrado en zonas declives segun la postura de la aspiracion. Tomografia ante mala evolucion, para definir cavitacion, necrosis, empiema o una obstruccion bronquial subyacente que no debe pasarse por alto.',
      complementarios: 'CRIBADO DE DISFAGIA en todos: prueba de deglucion a pie de cama y, si es positiva, valoracion por logopedia y videofluoroscopia. Revision odontologica. Broncoscopia si el absceso no responde o si se sospecha cuerpo extra&#241;o o neoplasia obstructiva.',
      dx_diferencial: 'Neumonia comunitaria de otro mecanismo, edema pulmonar, sindrome de dificultad respiratoria aguda, tuberculosis cavitada, neoplasia cavitada, embolia septica, granulomatosis con poliangeitis y neumonia necrotizante por Staphylococcus aureus.',
      tx_medico: 'En la neumonitis: soporte, aspiracion de la via aerea si hay material visible, oxigeno y observacion 48 horas. NI antibiotico ni corticoide de entrada. En la neumonia por aspiracion: el tratamiento de una neumonia mas la correccion del mecanismo, que es lo que evita la recidiva: modificar texturas, higiene bucal, postura, revision de sedantes y valoracion logopedica.',
      tx_farmacologico: 'Neumonitis: sin antibiotico inicial. Si a las 48 horas no mejora o aparece fiebre y leucocitosis, se trata como neumonia. Neumonia por aspiracion: los mismos esquemas de la neumonia comunitaria o nosocomial segun donde se adquirio. LA COBERTURA ANAEROBIA DE RUTINA YA NO SE RECOMIENDA: se reserva al absceso pulmonar y al empiema, donde se usan amoxicilina-clavulanico o un carbapenemico, o clindamicina como alternativa. Duracion del absceso: semanas, guiada por la imagen.',
      tx_intervencionista: 'Drenaje percutaneo del absceso que no responde al antibiotico, o drenaje del empiema asociado. Broncoscopia terapeutica si hay obstruccion o cuerpo extra&#241;o. Reseccion quirurgica en el absceso cronico refractario, hoy excepcional. Gastrostomia solo tras valoracion cuidadosa, porque NO elimina el riesgo de aspiracion.',
      criterios_uci: 'Los de cualquier neumonia grave. La neumonitis masiva puede producir insuficiencia respiratoria aguda que requiera ventilacion sin que haya ninguna infeccion de por medio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la evolucion en las primeras 48 horas, que es lo que separa la neumonitis de la neumonia. En el absceso, seguimiento radiologico y clinico prolongado; la mejoria de la imagen va muy por detras de la clinica.',
      seguimiento_ambulatorio: 'Seguimiento de la disfagia y de las medidas de prevencion, que es donde se decide si habra recidiva. Control radiologico del absceso hasta su resolucion. Revisar farmacos sedantes y salud bucodental.',
      pronostico: 'La neumonitis simple se resuelve en dias, aunque la forma masiva puede ser mortal. La neumonia por aspiracion tiene peor pronostico que la comunitaria por el perfil del paciente que la sufre, y una alta tasa de recidiva si no se corrige el mecanismo. El absceso responde bien al antibiotico prolongado en la mayoria de los casos.',
      algoritmo: ['Determinar el TIEMPO transcurrido desde la aspiracion', 'Inicio en minutos u horas: neumonitis quimica, SIN antibiotico', 'Neumonitis: soporte, aspiracion de la via aerea y observacion 48 horas', 'Si empeora o aparece fiebre a las 48 horas: tratar como neumonia', 'Inicio en dias con fiebre y consolidacion declive: neumonia por aspiracion', 'Tratar como neumonia comunitaria o nosocomial segun donde se adquirio', 'NO a&#241;adir cobertura anaerobia de rutina', 'Si hay cavitacion con nivel: absceso, y ahi si cobertura anaerobia y semanas de tratamiento', 'Descartar obstruccion bronquial o cuerpo extra&#241;o con tomografia o broncoscopia', 'Cribar la disfagia y corregir el mecanismo, o el cuadro se repetira']
    },
    {
      nombre: 'Neumonia viral: gripe y COVID-19',
      color: '#2e6b7a',
      definicion: 'Neumonia causada directamente por un virus respiratorio, con o sin coinfeccion bacteriana. Los dos escenarios de mayor peso son la gripe estacional y la COVID-19, a los que se suman el virus respiratorio sincitial en el anciano y otros virus respiratorios.',
      fisiopatologia: 'El virus infecta el epitelio respiratorio y, si alcanza el alveolo, produce da&#241;o alveolar difuso con edema, membranas hialinas e infiltrado inflamatorio, que es el sustrato del sindrome de dificultad respiratoria aguda. Ademas destruye la barrera epitelial, altera el aclaramiento mucociliar y deprime la funcion del macrofago alveolar, lo que abre la puerta a la coinfeccion bacteriana, tipicamente por neumococo y por Staphylococcus aureus, que es la que explica buena parte de la mortalidad de la gripe.',
      epidemiologia: 'Los virus respiratorios se identifican en una proporcion muy alta de las neumonias comunitarias estudiadas con tecnicas moleculares, solos o junto a una bacteria. La gripe tiene un patron estacional marcado, y la coinfeccion bacteriana estafilococica, aunque poco frecuente, es especialmente grave en el paciente joven previamente sano.',
      factores_riesgo: ['Edad avanzada y residencia en centros sociosanitarios', 'Ausencia de vacunacion antigripal o frente a COVID-19', 'Enfermedad cardiovascular y respiratoria cronica', 'Diabetes, obesidad y nefropatia cronica', 'Inmunodepresion', 'Embarazo y posparto', 'Tabaquismo', 'Hacinamiento y exposicion en temporada', 'Enfermedad neurologica que dificulta el manejo de secreciones', 'Retraso en el inicio del antiviral'],
      clinica: 'Cuadro pseudogripal con fiebre, mialgias, cefalea y tos seca, que en la neumonia viral progresa a disnea e hipoxemia con infiltrados bilaterales. Un dato de gran valor practico es el DETERIORO EN DOS TIEMPOS: mejoria inicial seguida de reagudizacion con fiebre alta y esputo purulento, que sugiere coinfeccion bacteriana. En la COVID-19, la hipoxemia puede ser desproporcionada al trabajo respiratorio percibido.',
      criterios_dx: 'Prueba molecular de virus respiratorios en muestra nasofaringea o de via aerea baja, mas imagen compatible. Un virus positivo NO descarta la coinfeccion bacteriana, y esa es la razon por la que el antibiotico se mantiene en el paciente ingresado y en el ambulatorio con comorbilidad.',
      laboratorio: 'Prueba molecular de gripe, SARS-CoV-2 y virus respiratorio sincitial. Hemograma con linfopenia frecuente, reactantes, dimero D en la COVID-19 y gasometria. Cultivos bacterianos si es grave o hay sospecha de coinfeccion.',
      imagen: 'Infiltrados intersticiales o en vidrio deslustrado bilaterales y de predominio periferico, sobre todo en la COVID-19. La aparicion de una consolidacion focal nueva sobre ese fondo sugiere coinfeccion bacteriana. La tomografia es mas sensible pero no debe pedirse de rutina.',
      complementarios: 'Aislamiento respiratorio y medidas de control de la infeccion desde la sospecha. Revisar el estado vacunal del paciente y de sus convivientes. Valorar profilaxis en contactos de riesgo en la gripe.',
      dx_diferencial: 'Neumonia bacteriana, insuficiencia cardiaca, neumonitis por hipersensibilidad, neumonia organizada, neumonitis por farmacos, hemorragia alveolar y, en el inmunodeprimido, Pneumocystis jirovecii, que puede dar una imagen practicamente identica.',
      tx_medico: 'Oxigenoterapia escalonada, con canula nasal de alto flujo o ventilacion no invasiva segun la evolucion, y decubito prono despierto en la insuficiencia respiratoria hipoxemica. Soporte, hidratacion y profilaxis antitrombotica. Aislamiento adecuado.',
      tx_farmacologico: 'OSELTAMIVIR en todo paciente ingresado con gripe, con independencia del tiempo de evolucion, y lo antes posible: el beneficio es mayor cuanto mas precoz. Antivirales frente a SARS-CoV-2 segun la indicacion vigente en el paciente de riesgo. ANTIBIOTICO: se mantiene en el ingresado y en el ambulatorio con comorbilidad; solo se puede prescindir de el en el ambulatorio sin comorbilidad con virus positivo. Corticoide en la COVID-19 con necesidad de oxigeno; en la neumonia gripal grave, la guia de 2026 EXCLUYE explicitamente el corticoide de su recomendacion.',
      tx_intervencionista: 'Ventilacion mecanica protectora, prono y oxigenacion por membrana extracorporea en el caso refractario, con los mismos criterios del sindrome de dificultad respiratoria aguda de cualquier causa.',
      criterios_uci: 'Los de cualquier neumonia grave. La neumonia viral tiene mayor tendencia a evolucionar a sindrome de dificultad respiratoria aguda, y el deterioro puede ser rapido tras varios dias de aparente estabilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda; la fibrosis residual grave puede plantearlo a largo plazo de forma excepcional.',
      seguimiento_hospitalario: 'Vigilar el deterioro en dos tiempos, que sugiere coinfeccion bacteriana y obliga a cultivar y a revisar el antibiotico. Mantener el aislamiento el tiempo indicado. Vigilar las complicaciones extrapulmonares: miocarditis, miositis y descompensacion de comorbilidades.',
      seguimiento_ambulatorio: 'Revision clinica y vacunacion antes del alta o en la primera revision. Valorar la persistencia de sintomas y la necesidad de rehabilitacion respiratoria en el que ha tenido afectacion extensa.',
      pronostico: 'Muy variable. La coinfeccion bacteriana, sobre todo por Staphylococcus aureus, empeora mucho el pronostico. La vacunacion reduce la incidencia y la gravedad, y el retraso del antiviral en la gripe se asocia de forma consistente a peor evolucion.',
      algoritmo: ['Prueba molecular de virus respiratorios ante clinica compatible en temporada', 'Confirmar la neumonia con imagen, radiografia o ecografia pulmonar', 'Aislamiento respiratorio desde la sospecha', 'Oseltamivir sin demora en todo ingresado con gripe', 'Antiviral frente a SARS-CoV-2 segun indicacion en el paciente de riesgo', 'Ambulatorio SIN comorbilidad y virus positivo: se puede prescindir del antibiotico', 'Ambulatorio con comorbilidad e ingresado: mantener el antibiotico', 'Corticoide en la COVID-19 con oxigeno; excluido en la neumonia gripal grave', 'Vigilar el deterioro en dos tiempos, que indica coinfeccion bacteriana', 'Revisar la vacunacion del paciente y de sus convivientes antes del alta']
    },
    {
      nombre: 'Neumonia en el paciente inmunodeprimido',
      color: '#5b4a86',
      definicion: 'Neumonia en el paciente con inmunodepresion por neutropenia, alteracion de la inmunidad celular o humoral, trasplante o tratamiento inmunosupresor, en la que el abanico etiologico se amplia a germenes que no causan enfermedad en el huesped normal.',
      fisiopatologia: 'El tipo de defecto inmunitario predice el germen mejor que cualquier otro dato. La NEUTROPENIA abre la puerta a bacilos gramnegativos, Staphylococcus aureus y hongos filamentosos como Aspergillus. El defecto de la INMUNIDAD CELULAR (VIH con linfocitos CD4 bajos, trasplante, corticoide prolongado, anti-factor de necrosis tumoral) predispone a Pneumocystis jirovecii, micobacterias, Nocardia, citomegalovirus y hongos endemicos. El defecto HUMORAL o la asplenia predisponen a los germenes encapsulados: neumococo, Haemophilus y meningococo.',
      epidemiologia: 'La poblacion inmunodeprimida crece de forma sostenida por los tratamientos oncologicos, los biologicos y los trasplantes. En el trasplante de organo solido, el riesgo sigue un calendario reconocible: infecciones nosocomiales y quirurgicas en el primer mes, oportunistas del segundo al sexto, y comunitarias con oportunistas tardias despues.',
      factores_riesgo: ['Neutropenia profunda y prolongada', 'Trasplante de organo solido o de progenitores hematopoyeticos', 'Infeccion por VIH con linfocitos CD4 por debajo de 200', 'Corticoide sistemico prolongado a dosis altas', 'Farmacos anti-factor de necrosis tumoral y otros biologicos', 'Quimioterapia y anticuerpos que depletan linfocitos B', 'Enfermedad injerto contra huesped', 'Asplenia anatomica o funcional', 'Inmunodeficiencia primaria', 'Ausencia de profilaxis indicada'],
      clinica: 'A menudo ATENUADA y enga&#241;osa: puede faltar la fiebre, la tos y la expectoracion, y la exploracion ser pobre pese a una afectacion extensa. En la neutropenia, la escasez de neutrofilos hace que la radiografia pueda ser normal al principio. La disnea de esfuerzo progresiva con hipoxemia desproporcionada y radiografia poco llamativa es la presentacion clasica de Pneumocystis.',
      criterios_dx: 'Umbral MUY BAJO para tomografia de torax y para broncoscopia con lavado broncoalveolar: en este paciente el diagnostico microbiologico dirigido cambia el tratamiento con mucha mas frecuencia que en el inmunocompetente, y el retraso se paga caro. La biopsia pulmonar se plantea cuando el lavado no es concluyente y el paciente no mejora.',
      laboratorio: 'Hemograma con recuento absoluto de neutrofilos y de linfocitos, serologia y carga viral de VIH, linfocitos CD4, galactomanano en suero y en lavado, beta-D-glucano, carga viral de citomegalovirus, y estudio del lavado broncoalveolar con tinciones y tecnicas moleculares para Pneumocystis, micobacterias, hongos y virus.',
      imagen: 'TOMOGRAFIA DE TORAX de entrada, porque la radiografia es insuficiente. Vidrio deslustrado difuso sugiere Pneumocystis, citomegalovirus o farmacos; los nodulos con halo y el signo del creciente aereo orientan a Aspergillus; las cavitaciones a micobacterias, Nocardia y hongos; y la consolidacion focal a bacterias.',
      complementarios: 'Broncoscopia con lavado broncoalveolar precoz. Revisar la profilaxis que el paciente deberia estar recibiendo y si la cumple. Revisar las interacciones farmacologicas, que en el trasplantado son constantes y limitan la eleccion del antimicrobiano.',
      dx_diferencial: 'Toxicidad pulmonar por farmacos, neumonitis por inhibidores del punto de control inmunitario, progresion de la enfermedad de base, infiltracion tumoral, hemorragia alveolar, edema pulmonar, neumonia organizada y enfermedad injerto contra huesped pulmonar.',
      tx_medico: 'Soporte respiratorio y hemodinamico. Coordinacion con el equipo que trata la enfermedad de base para ajustar la inmunosupresion, que a veces hay que reducir y otras no. Factores estimulantes de colonias en casos seleccionados de neutropenia.',
      tx_farmacologico: 'Tratamiento empirico de amplio espectro AJUSTADO AL TIPO DE DEFECTO INMUNITARIO y a la epidemiologia local, iniciado sin demora en la neutropenia febril. Cotrimoxazol a dosis altas mas corticoide si la PaO2 es menor de 70 mmHg en la sospecha de Pneumocystis. Antifungico dirigido a mohos ante datos sugestivos de Aspergillus. Ganciclovir en la enfermedad por citomegalovirus. Desescalada en cuanto haya diagnostico microbiologico.',
      tx_intervencionista: 'Broncoscopia con lavado broncoalveolar como procedimiento clave. Biopsia transbronquial o quirurgica si el lavado no es concluyente. Drenaje de colecciones y cirugia en la aspergilosis con hemoptisis amenazante.',
      criterios_uci: 'Los mismos criterios de gravedad, con umbral mas bajo por la reserva reducida y por la rapidez del deterioro. El pronostico del inmunodeprimido en cuidados intensivos ha mejorado mucho en los ultimos a&#241;os y ya no justifica por si solo limitar el esfuerzo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa. En el ya trasplantado, la neumonia obliga a revisar el nivel de inmunosupresion y la profilaxis.',
      seguimiento_hospitalario: 'Revaluacion frecuente y ajuste segun los resultados microbiologicos. Vigilar las interacciones y la toxicidad de los antimicrobianos, especialmente la renal y la hematologica. Coordinacion estrecha con el equipo de la enfermedad de base.',
      seguimiento_ambulatorio: 'Revisar y asegurar la profilaxis correspondiente al defecto inmunitario. Vacunacion adaptada al estado inmunitario y a su calendario. Educacion sobre signos de alarma y sobre la necesidad de consultar pronto.',
      pronostico: 'Peor que en el inmunocompetente, muy dependiente del germen, de la rapidez del diagnostico y de la posibilidad de revertir la inmunodepresion. El diagnostico microbiologico precoz mediante broncoscopia es el factor modificable de mayor peso.',
      algoritmo: ['Identificar el TIPO de defecto inmunitario, que predice el germen', 'Tomografia de torax de entrada: la radiografia no basta', 'Umbral muy bajo para broncoscopia con lavado broncoalveolar precoz', 'Solicitar galactomanano, beta-D-glucano y tecnicas moleculares dirigidas', 'Iniciar tratamiento empirico amplio sin demora, sobre todo en la neutropenia febril', 'Cubrir Pneumocystis con cotrimoxazol y corticoide si la PaO2 es menor de 70 mmHg', 'A&#241;adir antifungico de mohos ante nodulos con halo o signo del creciente aereo', 'Revisar la profilaxis que deberia estar recibiendo y su cumplimiento', 'Coordinar con el equipo de la enfermedad de base el ajuste de la inmunosupresion', 'Desescalar en cuanto exista diagnostico microbiologico']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La neumonia se trata con un pu&#241;ado de decisiones que se repiten en cada paciente, y los errores tambien se repiten: retrasar la primera dosis, ampliar la cobertura por la procedencia del paciente en lugar de por factores de riesgo, no desescalar, y dar el alta sin haber mirado la vacunacion ni el riesgo cardiovascular. Lo que sigue es la lista de comprobacion del ingreso y del alta.',
    parametros: ['Primera dosis de antibiotico SIN DEMORA, sobre todo si hay sepsis: los cultivos no la retrasan', 'Cultivos y antigenos urinarios solo en la neumonia grave o si se va a ampliar la cobertura', 'No usar la procalcitonina para decidir si se inicia el antibiotico', 'Ampliar a SARM o Pseudomonas solo con factores de riesgo concretos, nunca por la procedencia del paciente', 'Si se amplia la cobertura: cultivar y DESESCALAR a las 48 a 72 horas si el germen no aparece', 'Corticoide sistemico en la neumonia GRAVE, y en contra en la no grave; excluido si la causa es la gripe', 'Oseltamivir en todo ingresado con gripe, con independencia del tiempo de evolucion', 'Revaluar a las 48 a 72 horas: si no mejora, buscar empiema, absceso, germen no cubierto o diagnostico alternativo', 'Puncionar todo derrame de mas de 1 cm: el empiema cambia por completo el manejo', 'Paso a via oral y alta cuando se cumplen los criterios de estabilidad clinica', 'Duracion: menos de 5 dias (minimo 3) si no es grave y esta estable; 5 o mas en la neumonia grave', 'Antes del alta: vacunacion antineumococica y antigripal, abandono del tabaco, cribado de disfagia si procede y revision del riesgo cardiovascular'],
    criterios_uci_general: 'Un criterio mayor (ventilacion mecanica o choque septico con vasopresores) o tres o mas criterios menores. El aviso debe ser precoz: el paciente que ingresa directamente en cuidados intensivos por cumplir criterios tiene mejor pronostico que el que llega alli tras deteriorarse en planta.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. En el ya trasplantado, la neumonia obliga a revisar el nivel de inmunosupresion, la profilaxis y las interacciones farmacologicas.',
    prevencion: 'Primaria: vacunacion antineumococica y antigripal segun calendario, vacunacion frente a COVID-19 y a virus respiratorio sincitial en los grupos indicados, abandono del tabaco, higiene bucodental e higiene de manos. Secundaria: cribado y tratamiento de la disfagia, revision de sedantes e inhibidores de la bomba de protones innecesarios, y control de la comorbilidad. En el hospital: cabecera elevada de 30 a 45 grados, higiene bucal con el paciente ventilado, sedacion ligera con despertar diario, prueba de respiracion espontanea para extubar antes, y programas de optimizacion del uso de antimicrobianos.'
  }
};

export const compCites = {
  'Neumonia adquirida en la comunidad': [1, 2, 12, 15],
  'Neumonia grave y complicaciones sistemicas': [1, 2, 7, 11],
  'Neumonia nosocomial y asociada a la ventilacion': [3, 4, 13],
  'Neumonia por aspiracion y absceso pulmonar': [8, 9, 17],
  'Neumonia viral: gripe y COVID-19': [1, 10, 18],
  'Neumonia en el paciente inmunodeprimido': [16]
};
export const estigmasTitulo = 'Signos de la exploracion en la neumonia, y lo que cada uno significa de verdad';
export const estigmas = [
  { s: 'Crepitantes localizados', p: '~80%', photo: null, desc: 'El signo mas frecuente y el mas sensible, aunque poco especifico: aparecen tambien en la insuficiencia cardiaca, en la fibrosis y en la atelectasia. Su localizacion es lo que orienta, y su persistencia semanas despues no significa fracaso del tratamiento.' },
  { s: 'Matidez a la percusion', p: '~40%', photo: null, desc: 'Indica consolidacion extensa o derrame. Separar ambos es sencillo a pie de cama: en la consolidacion las vibraciones vocales AUMENTAN y en el derrame DISMINUYEN. Esa combinacion decide si hay que puncionar.' },
  { s: 'Soplo tubarico', p: '~30%', photo: null, desc: 'El ruido bronquial se transmite sin filtrar a traves del alveolo relleno pero con el bronquio permeable. Es bastante especifico de consolidacion y suele acompa&#241;ar a los infiltrados extensos.' },
  { s: 'Aumento de las vibraciones vocales y egofonia', p: '~30%', photo: null, desc: 'El pulmon consolidado transmite mejor el sonido que el aireado. La egofonia (la "e" que se oye como "a") es uno de los hallazgos con mejor cociente de probabilidad positivo de toda la exploracion respiratoria.' },
  { s: 'Taquipnea de 30 o mas', p: 'Criterio de gravedad', photo: null, desc: 'Es la constante que mas se olvida contar y una de las mas informativas. Entra en el CURB-65 y en los criterios menores de neumonia grave, y su aumento precede al deterioro clinico en horas.' },
  { s: 'Confusion de nueva aparicion', p: '~20%, mas en el anciano', photo: null, desc: 'Puntua en el CURB-65 y es criterio menor de gravedad. En el anciano puede ser el UNICO sintoma de la neumonia, sin fiebre ni tos, y esa presentacion es la que mas se retrasa en diagnosticarse.' },
  { s: 'Hipotermia por debajo de 36 grados', p: 'Criterio de gravedad', photo: null, desc: 'Enga&#241;a porque parece tranquilizadora frente a la fiebre alta. Es criterio menor de neumonia grave y traduce una respuesta inflamatoria desregulada, con peor pronostico que la fiebre.' },
  { s: 'Leucopenia por debajo de 4000', p: 'Criterio de gravedad', photo: null, desc: 'La otra cifra que enga&#241;a: se interpreta como infeccion leve y en realidad indica agotamiento medular o sepsis grave. Es criterio menor y, en el neutropenico, obliga a replantear todo el abanico etiologico.' },
  { s: 'Hipoxemia desproporcionada a la exploracion', p: 'Frecuente en la viral', photo: null, desc: 'Tipica de la neumonia por Pneumocystis y de la COVID-19: el paciente satura mal con una auscultacion y una radiografia poco llamativas. Obliga a bajar el umbral para tomografia y, en el inmunodeprimido, para broncoscopia.' },
  { s: 'Expectoracion abundante y de mal olor', p: 'En el absceso', photo: null, desc: 'Sugiere infeccion por flora mixta con anaerobios y cavitacion. Junto con la mala higiene bucodental y la alteracion de la conciencia compone el cuadro clasico del absceso pulmonar por aspiracion.' },
  { s: 'Herpes labial acompa&#241;ante', p: '~10%', photo: null, desc: 'Reactivacion del virus del herpes simple por la fiebre y el estres de la infeccion. Clasicamente asociado a la neumonia neumococica, aunque no es especifico y no debe usarse para elegir el antibiotico.' },
  { s: 'Fibrilacion auricular de nueva aparicion', p: '~10% de los ingresos', photo: null, desc: 'Es la punta del iceberg del riesgo cardiovascular que produce la neumonia. Junto con el infarto y la insuficiencia cardiaca forma el grupo de complicaciones que mas se pasan por alto, y que explican buena parte de la mortalidad al a&#241;o.' }
];
export const biopsia = null;
export const escalaRefs = {
  'CURB-65 (calculadora disponible)': [5, 2],
  'Indice de gravedad de la neumonia o PSI (calculadora disponible)': [6, 2],
  'Criterios ATS/IDSA de neumonia grave (calculadora disponible)': [2, 1],
  'Factores de riesgo de germenes resistentes (calculadora disponible)': [2, 3],
  'Criterios de estabilidad clinica': [1, 12],
  'Definiciones temporales de la neumonia nosocomial': [3, 4],
  'Escala de riesgo de mortalidad en la neumonia nosocomial': [3, 13]
};
export const escalaCalc = {
  'CURB-65 (calculadora disponible)': 'curb65',
  'Indice de gravedad de la neumonia o PSI (calculadora disponible)': 'psi',
  'Criterios ATS/IDSA de neumonia grave (calculadora disponible)': 'nac-grave',
  'Factores de riesgo de germenes resistentes (calculadora disponible)': 'riesgo-resistentes'
};
export const compGroups = [
  { name: 'Comunitaria', items: ['Neumonia adquirida en la comunidad', 'Neumonia grave y complicaciones sistemicas'] },
  { name: 'Por mecanismo y por lugar', items: ['Neumonia nosocomial y asociada a la ventilacion', 'Neumonia por aspiracion y absceso pulmonar'] },
  { name: 'Por germen y por huesped', items: ['Neumonia viral: gripe y COVID-19', 'Neumonia en el paciente inmunodeprimido'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la neumonia comunitaria y su forma grave, con las complicaciones sistemicas que la siguen mucho despues del alta. Las dos siguientes se organizan por el lugar y el mecanismo: la nosocomial con la regla de las 48 horas y la aspiracion con sus dos caras, la neumonitis quimica que no lleva antibiotico y la neumonia que si. Las dos ultimas cambian el abanico etiologico: la viral, donde la trampa es la coinfeccion bacteriana, y la del inmunodeprimido, donde el tipo de defecto inmunitario predice el germen mejor que cualquier otro dato.';
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
  root: { title: 'NEUMONIA', color: '#a8562e', target: 'definicion' },
  branches: [
    { title: 'DONDE SE TRATA', sub: 'La primera decision, antes del antibiotico', color: '#a8562e', target: 'clasificacion', leaves: [
      { title: 'CURB-65', sub: 'Cribado rapido', color: '#3f6b52', target: 'clasificacion' },
      { title: 'PSI', sub: 'El preferido por las guias', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Criterios de NAC grave', sub: '1 mayor o 3 menores', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Ecografia pulmonar', sub: 'Alternativa a la radiografia', color: '#2e6b7a', target: 'diagnostico' }
    ] },
    { title: 'QUE ANTIBIOTICO', sub: 'Y cuando NO ampliar la cobertura', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Betalactamico mas macrolido', sub: 'En el ingresado', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'SARM y Pseudomonas', sub: 'Solo con factores de riesgo', color: '#7a1f3d', target: 'clasificacion' },
      { title: 'Desescalar en 48 a 72 horas', sub: 'Si el germen no aparece', color: '#3f6b52', target: 'seguimiento' },
      { title: 'Virus positivo', sub: 'El antibiotico solo se retira en el ambulatorio sano', color: '#2e6b7a', target: 'complicaciones' }
    ] },
    { title: 'LO QUE CAMBIO EN 2026', sub: 'Cuatro respuestas nuevas', color: '#5b4a86', target: 'definicion', leaves: [
      { title: 'Menos de 5 dias', sub: 'Si no es grave y esta estable', color: '#3f6b52', target: 'seguimiento' },
      { title: '5 dias o mas', sub: 'En la neumonia grave', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Corticoide en la grave', sub: 'En contra si no lo es', color: '#5b4a86', target: 'complicaciones' },
      { title: 'Salvo neumonia gripal', sub: 'Excluida del corticoide', color: '#2e6b7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2, 10], no_invasivos: [1, 2, 5, 6], imagen: [1, 2] };
export const clasificacionCite = [1, 2, 3, 5, 6];
export const seguimientoCite = [1, 2, 3];
