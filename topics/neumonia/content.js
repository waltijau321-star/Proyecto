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
  subtitulo: 'Módulo 50 · Medicina Interna',
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
    <strong style="color:#a8562e;">La primera decisión de una neumonía no es que antibiótico, sino DONDE se trata.</strong> <span style="color:var(--ink-dim);">De esa decisión dependen el pronóstico, el coste y los cultivos que se piden. Las escalas ayudan a tomarla, pero <strong>ninguna sustituye al juicio clínico</strong> ni valora el soporte social, la tolerancia oral ni la comorbilidad descompensada.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">CURB-65<br>de cribado</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">C</strong>onfusion, <strong style="color:var(--ink);">U</strong>rea (nitrógeno ureico mayor de 19 mg/dL), <strong style="color:var(--ink);">R</strong>espiraciones de 30 o más, <strong style="color:var(--ink);">B</strong>lood pressure (sistólica menor de 90 o diastólica de 60 o menos) y edad de <strong style="color:var(--ink);">65</strong> o más. <strong>0 a 1</strong>: ambulatorio. <strong>2</strong>: valorar ingreso. <strong>3 o más</strong>: neumonía grave. Rápido y memorizable, pero <strong>sobreestima el riesgo del anciano</strong> por el simple hecho de la edad.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">PSI o PORT<br>el preferido</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Veinte variables de edad, comorbilidad, exploración, laboratorio y radiografía, en cinco clases de riesgo. Es el que <strong style="color:var(--ink);">recomiendan las guías frente al CURB-65</strong> porque identifica mejor al paciente de bajo riesgo que puede irse a casa. Clases <strong>I y II</strong> ambulatorio, <strong>III</strong> observación o ingreso corto, <strong>IV y V</strong> ingreso. Su punto débil es el contrario: <strong>infravalora al joven sin comorbilidad</strong> que llega grave.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">Criterios de<br>NAC GRAVE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Un criterio MAYOR</strong> (ventilación mecánica o choque séptico con vasopresores) <strong>o TRES MENORES</strong>: frecuencia respiratoria de 30 o más, PaO2/FiO2 de 250 o menos, infiltrados multilobares, confusión, nitrógeno ureico de 20 mg/dL o más, leucocitos menores de 4000, plaquetas menores de 100000, temperatura menor de 36 grados e hipotensión que exige reposición agresiva. Definen el ingreso en cuidados intensivos y, además, <strong>seleccionan a quien lleva corticoide y a quien necesita cultivos</strong>.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Novedad de la guía ATS de 2026.</strong> En centros con experiencia, la <strong>ecografía pulmonar</strong> es una alternativa aceptable a la radiografía de tórax para diagnosticar la neumonía. Es más sensible que la radiografía simple para la consolidación, no irradia y se hace a pie de cama, pero depende por completo de quien la maneja y no valora bien las consolidaciones que no llegan a la pleura.
  </div>
</div>`;

const empiricoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">AMBULATORIA<br>sin comorbilidad</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Amoxicilina a dosis altas</strong>, o doxiciclina. El macrolido en monoterapia solo donde la resistencia local del neumococo sea menor del 25%, condición que en muchos lugares ya no se cumple.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">AMBULATORIA<br>con comorbilidad</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Amoxicilina-clavulanico o cefalosporina</strong> más macrolido o doxiciclina, o bien una <strong>fluoroquinolona respiratoria</strong> en monoterapia. Comorbilidad significa aquí cardiopatía, neumopatía, hepatopatía, nefropatía, diabetes, alcoholismo, neoplasia o asplenia.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">INGRESADA<br>no grave</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Betalactámico más macrolido</strong> (ceftriaxona o ampicilina-sulbactam con azitromicina), o fluoroquinolona respiratoria en monoterapia. La combinación con macrolido es la opción preferida por su efecto sobre los gérmenes atípicos y por su posible efecto inmunomodulador.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">INGRESADA<br>GRAVE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Betalactámico más macrolido</strong>, o betalactámico más fluoroquinolona. Aquí SI se piden hemocultivos, cultivo de esputo y antígenos de neumococo y de Legionella antes de la primera dosis, y se añade <strong>corticoide sistémico</strong> salvo que la causa sea la gripe.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #5b4a86;border-radius:8px;background:#5b4a8610;color:var(--ink-dim);">
    <strong style="color:#5b4a86;">La cobertura ampliada NO se da por la etiqueta del paciente, se da por factores de riesgo.</strong> La categoría de "neumonía asociada a cuidados sanitarios" se abandono precisamente porque llevaba a tratar con carbapenémico y vancomicina a pacientes que solo eran mayores o venian de una residencia. Hoy se cubre <strong>SARM</strong> o <strong>Pseudomonas aeruginosa</strong> solo si hay <strong>aislamiento previo del germen en via respiratoria</strong>, o <strong>ingreso con antibiótico intravenoso en los últimos 90 días</strong> junto con factores locales validados. Y cuando se cubre, se toman cultivos y <strong>se desescala a las 48 a 72 horas</strong> si no aparece el germen.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid #2e6b7a;border-radius:8px;background:#2e6b7a10;color:var(--ink-dim);">
    <strong style="color:#2e6b7a;">Que hacer si la prueba de virus respiratorios es positiva (guía de 2026).</strong> <strong>Ambulatorio SIN comorbilidad</strong>: no dar antibiótico. <strong>Ambulatorio CON comorbilidad</strong>: darlo, por el riesgo de coinfección bacteriana. <strong>Ingresado, grave o no</strong>: darlo. Un virus positivo no excluye una neumonía bacteriana asociada, y cuanto más grave es el paciente menos margen hay para equivocarse.
  </div>
</div>`;

const nosocomialHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #7a1f3d;border-radius:8px;padding:6px 8px;background:#7a1f3d08;">
      <div style="font-weight:700;color:#7a1f3d;text-align:center;margin-bottom:4px;">La regla de las 48 HORAS</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">Nosocomial</strong>: aparece 48 horas o más <strong>después del ingreso</strong> y no estaba incubandose al llegar.<br>
        <strong style="color:var(--ink);">Asociada a la ventilación</strong>: aparece más de 48 horas <strong>después de la intubación</strong>.<br>
        Antes de esas 48 horas, por muy hospitalizado que este el paciente, la neumonía es <strong>comunitaria</strong> y se trata como tal.
      </div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">Cuando se cubre resistencia</div>
      <div style="color:var(--ink-dim);line-height:1.55;">
        <strong style="color:var(--ink);">SARM</strong>: antibiótico intravenoso en los 90 días previos, prevalencia local mayor del 20% o desconocida, o alto riesgo de muerte.<br>
        <strong style="color:var(--ink);">Doble cobertura antipseudomónica</strong>: choque séptico, necesidad de ventilación, bronquiectasias o fibrosis quística, aislamiento previo, o más del 10% de resistencia local al agente elegido.
      </div>
    </div>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Lo que decide de verdad el tratamiento es el ANTIBIOGRAMA de la unidad</strong>, no una tabla de un libro. Cada servicio debe conocer sus propios porcentajes de resistencia y construir su esquema empírico sobre ellos. Duración habitual: <strong>7 días</strong>, con desescalada guiada por cultivos y por la evolución clínica.
  </div>

  <div style="text-align:center;border:1px solid #6b4a2e;border-radius:8px;padding:5px 9px;background:#6b4a2e12;margin-bottom:6px;">
    <strong style="color:#6b4a2e;">ASPIRACIÓN: dos cuadros distintos que se confunden todo el tiempo.</strong>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">NEUMONITIS química</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Aspiración de contenido gástrico ácido, en general presenciada. Inicio en <strong>minutos u horas</strong>, con hipoxemia brusca e infiltrados que aparecen y se resuelven rápido. Es una quemadura química, no una infección: <strong style="color:var(--ink);">no lleva antibiótico de entrada</strong>. Soporte, aspiración de la via aérea y observación 48 horas.</div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">NEUMONÍA por aspiración</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Aspiración de secreción orofaringea colonizada, casi nunca presenciada, en el paciente con disfagia o alteración de la conciencia. Inicio en <strong>días</strong>, con fiebre y consolidación en zonas declives. <strong style="color:var(--ink);">Si lleva antibiótico</strong>, pero la cobertura anaerobia de rutina <strong>ya no se recomienda</strong>: se reserva al absceso y al empiema.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La neumonía es la infección aguda del parénquima pulmonar. El diagnóstico exige <strong>clínica compatible</strong> (fiebre, tos, expectoración, disnea o dolor pleurítico) <strong>más un infiltrado</strong> en la imagen: sin imagen se habla de infección respiratoria baja, no de neumonía. Es la principal causa infecciosa de muerte en el adulto y la primera causa de ingreso por infección, y sigue teniendo una mortalidad hospitalaria en torno al 10% que apenas ha cambiado en décadas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La primera decisión es donde, no que.</strong></p>
<p style="margin:0 0 12px;">Antes de elegir antibiótico hay que decidir el lugar de tratamiento, porque de esa decisión dependen el pronóstico, la mortalidad, el coste y hasta que pruebas microbiológicas tiene sentido pedir. El <strong>CURB-65</strong> se recuerda en cinco segundos y sirve de cribado; el <strong>PSI</strong> es el que recomiendan las guías porque identifica mejor al paciente de bajo riesgo que puede irse a casa; y los <strong>criterios de neumonía grave</strong> definen el ingreso en cuidados intensivos. Ninguno sustituye al juicio: la escala no sabe si el paciente vive solo, si tolera la via oral o si su insuficiencia cardiaca esta descompensada.</p>
${figBlock('Figura 1', 'Donde se trata: las tres escalas y para que sirve cada una', dondeHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento empírico y la categoría que se abandono.</strong></p>
<p style="margin:0 0 12px;">Durante años existió la categoría de <strong>neumonía asociada a cuidados sanitarios</strong>, que agrupaba a pacientes de residencias, en diálisis o con ingresos recientes y llevaba a tratarlos a todos con carbapenémico y vancomicina. Se abandono porque no predecia bien la presencia de gérmenes resistentes y si producia mucho tratamiento excesivo. La regla actual es distinta y más exigente: se cubre SARM o Pseudomonas <strong>solo con factores de riesgo concretos</strong>, se toman cultivos al hacerlo, y se <strong>desescala en 48 a 72 horas</strong> si esos gérmenes no aparecen.</p>
${figBlock('Figura 2', 'Tratamiento empírico según donde se trata, y cuando se amplia la cobertura', empiricoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuatro cosas que ha cambiado la guía de 2026.</strong></p>
<p style="margin:0 0 12px;">La actualización de la American Thoracic Society revisa cuatro preguntas concretas y merece la pena aprenderlas juntas. <strong>Uno</strong>: la <strong>ecografía pulmonar</strong> es una alternativa aceptable a la radiografía donde hay experiencia. <strong>Dos</strong>: si la prueba de virus respiratorios sale positiva, se puede prescindir del antibiótico <strong>solo</strong> en el paciente ambulatorio sin comorbilidad; en todos los demás se mantiene por el riesgo de coinfección. <strong>Tres</strong>: en el paciente ambulatorio y en el ingresado no grave que alcanza estabilidad clínica, la duración sugerida es <strong>menor de 5 días, con un mínimo de 3</strong>; en la neumonía grave, en cambio, la recomendación es fuerte a favor de <strong>5 días o más</strong>. <strong>Cuatro</strong>: los <strong>corticoides sistémicos</strong> se recomiendan <strong>en contra</strong> en la neumonía no grave y <strong>a favor</strong> en la grave, con la excepción explícita de la neumonía gripal.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La regla de las 48 horas y las dos aspiraciones.</strong></p>
<p style="margin:0 0 12px;">La neumonía <strong>nosocomial</strong> aparece 48 horas o más después del ingreso, y la <strong>asociada a la ventilación</strong> más de 48 horas después de la intubación. Antes de ese plazo la neumonía es comunitaria por mucho que el paciente este ingresado. Y en la aspiración hay que separar dos cuadros que se confunden a diario: la <strong>neumonitis química</strong>, que es una quemadura ácida de inicio en minutos y no lleva antibiótico, y la <strong>neumonía por aspiración</strong>, que es bacteriana, tarda días y si lo lleva, aunque ya no con cobertura anaerobia sistemática.</p>
${figBlock('Figura 3', 'Nosocomial, asociada a la ventilación y las dos caras de la aspiración', nosocomialHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La neumonía no termina cuando se va la fiebre.</strong></p>
<p style="margin:0 0 12px;">Un ingreso por neumonía multiplica el riesgo de infarto, arritmia e insuficiencia cardiaca en los 30 días siguientes, y ese exceso de riesgo cardiovascular persiste durante años. La mortalidad al año tras un ingreso por neumonía supera con mucho a la hospitalaria. Por eso el alta no es el final: hay que revisar la vacunación, el tabaco, la disfagia si la hubo, y el riesgo cardiovascular del paciente.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar neumonía sin imagen. No retrasar la primera dosis de antibiótico en el paciente grave por esperar pruebas. No usar la procalcitonina para decidir si se inicia el antibiótico. No cubrir SARM ni Pseudomonas por la mera procedencia del paciente. No mantener la cobertura ampliada si los cultivos no la respaldan. No dar corticoide en la neumonía no grave. No dar cobertura anaerobia de rutina en la aspiración. Y no pedir radiografía de control sistemática al paciente que se ha recuperado bien.</p>`;

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
  'Hadid W, Stella GM, Maskey AP, Bechara RI, Islam S. Lung abscess: the non-conservative management: a narrative review. J Thorac Dis. 2024;16(5):3431-3440. doi:10.21037/jtd-23-1561.',
  'Shumaker AH, Bhimraj A, Gallagher JC, et al. IDSA guidelines on the treatment and management of patients with COVID-19: antiviral therapy. 2026.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Neumonía comunitaria típica',
      tituloB: 'Neumonía grave',
      compensada: 'Fiebre, tos con expectoración purulenta, disnea y dolor pleurítico de instauración en días. Crepitantes localizados, soplo tubárico, aumento de las vibraciones vocales y matidez a la percusión sobre la zona consolidada. En el ANCIANO el cuadro puede ser engañoso: caída, confusión, descompensación de una comorbilidad o simple deterioro funcional SIN fiebre y sin tos, y esa presentación es la que más se retrasa. La distinción clásica entre neumonía típica y atípica no permite predecir el germen y ha dejado de usarse para elegir el antibiótico.',
      descompensada: 'Insuficiencia respiratoria con necesidad de ventilación, o choque séptico con vasopresores (criterios MAYORES). O bien tres o más criterios menores: frecuencia respiratoria de 30 o más, PaO2/FiO2 de 250 o menos, infiltrados multilobares, confusión, nitrógeno ureico de 20 mg/dL o más, leucocitos por debajo de 4000, plaquetas por debajo de 100000, temperatura menor de 36 grados e hipotensión que exige reposición agresiva. La leucopenia y la hipotermia engañan: parecen tranquilizadoras y son marcadores de gravedad.'
    },
    laboratorio: [
      { prueba: 'Hemocultivos y cultivo de esputo', utilidad: 'NO de rutina en el paciente ambulatorio ni en el ingresado no grave, porque la rentabilidad es baja y los falsos positivos generan tratamiento innecesario. SI en la neumonía grave, en el paciente que va a recibir cobertura empírica de SARM o Pseudomonas, y en el que tiene aislamiento previo de esos gérmenes. Se extraen ANTES de la primera dosis, sin retrasarla.' },
      { prueba: 'Antígeno urinario de neumococo y de Legionella', utilidad: 'Indicados en la neumonía grave, y el de Legionella además ante brote, viaje reciente o cuadro compatible. Permiten desescalar a tratamiento dirigido. El de Legionella detecta solo el serogrupo 1, de modo que un resultado negativo no la descarta, y ambos siguen positivos durante semanas.' },
      { prueba: 'Prueba molecular de virus respiratorios', utilidad: 'Gripe, virus respiratorio sincitial y SARS-CoV-2, sobre todo en temporada. Un resultado positivo permite retirar el antibiótico SOLO en el ambulatorio sin comorbilidad; en el resto se mantiene por el riesgo de coinfección bacteriana. La gripe positiva añade oseltamivir en todo paciente ingresado, con independencia del tiempo de evolución.' },
      { prueba: 'Gasometría arterial y lactato', utilidad: 'La relación PaO2/FiO2 de 250 o menos es criterio menor de gravedad, y el lactato elevado orienta a hipoperfusión. En el paciente sin criterios de gravedad basta la pulsioximetría, que es la primera prueba que hay que mirar en toda neumonía.' },
      { prueba: 'Hemograma, función renal, glucemia e iones', utilidad: 'Alimentan las escalas: nitrógeno ureico para el CURB-65 y el PSI, leucopenia y trombocitopenia como criterios menores de gravedad. La hiponatremia importante orienta hacia Legionella junto con la diarrea, la elevación de la lactato deshidrogenasa y la alteración hepática.' },
      { prueba: 'Proteína C reactiva y procalcitonina', utilidad: 'Ayudan a seguir la respuesta al tratamiento y a acortar la duración, pero NO deben usarse para decidir si se inicia el antibiótico ni para retirarlo en un paciente que sigue inestable: un valor bajo no descarta una neumonía bacteriana.' },
      { prueba: 'Serología y estudio dirigido según exposición', utilidad: 'Ante exposición a aves (Chlamydia psittaci), a ganado o partos de animales (Coxiella burnetii), a agua estancada o aire acondicionado (Legionella), o a roedores. La historia epidemiológica es lo que orienta, y muchas veces cambia el antibiótico.' },
      { prueba: 'Estudio del inmunodeprimido', utilidad: 'Recuento de linfocitos CD4, serología de VIH, galactomanano, beta-D-glucano y carga viral de citomegalovirus según el contexto. En el inmunodeprimido el abanico etiológico se abre a Pneumocystis, hongos y micobacterias, y el umbral para broncoscopia es mucho más bajo.' }
    ],
    no_invasivos: [
      { metodo: 'CURB-65 (calculadora disponible)', interpretacion: 'Confusión, urea (nitrógeno ureico mayor de 19 mg/dL), frecuencia respiratoria de 30 o más, presión arterial sistólica menor de 90 o diastólica de 60 o menos, y edad de 65 años o más. Un punto por cada uno.', cutoff: '0 a 1: ambulatorio. 2: valorar ingreso. 3 o más: neumonía grave, valorar cuidados intensivos' },
      { metodo: 'Índice de gravedad de la neumonía o PSI (calculadora disponible)', interpretacion: 'Veinte variables agrupadas en demografia, comorbilidad, exploración, laboratorio y radiografía, que definen cinco clases de riesgo. Es el que recomiendan las guías frente al CURB-65 porque identifica mejor al paciente de bajo riesgo.', cutoff: 'Clases I y II: ambulatorio. III: observación o ingreso corto. IV y V: ingreso' },
      { metodo: 'Criterios ATS/IDSA de neumonía grave (calculadora disponible)', interpretacion: 'Un criterio mayor (ventilación mecánica o choque séptico con vasopresores) o tres menores. Definen el ingreso en cuidados intensivos y seleccionan además a quien lleva corticoide sistémico y a quien necesita cultivos completos.', cutoff: '1 criterio mayor o 3 o más criterios menores' },
      { metodo: 'Factores de riesgo de SARM y Pseudomonas (calculadora disponible)', interpretacion: 'Sustituyen a la desaparecida categoría de neumonía asociada a cuidados sanitarios. Lo que cuenta es el aislamiento previo del germen en via respiratoria y el ingreso con antibiótico intravenoso en los últimos 90 días, ponderados con la epidemiología local.', cutoff: 'Sin factores: no ampliar cobertura. Con factores: ampliar, cultivar y desescalar en 48 a 72 horas' },
      { metodo: 'Criterios de estabilidad clínica', interpretacion: 'Temperatura de 37.8 grados o menos, frecuencia cardiaca de 100 o menos, frecuencia respiratoria de 24 o menos, presión sistólica de 90 o más, saturación del 90% o más, tolerancia oral y estado mental basal. Marcan el momento de pasar a via oral y de contar la duración del tratamiento.', cutoff: 'Todos cumplidos: paciente estable, valorar paso a via oral y alta' },
      { metodo: 'Ecografía pulmonar a pie de cama', interpretacion: 'Novedad de la guía de 2026: en centros con experiencia es una alternativa aceptable a la radiografía para diagnosticar la neumonía. Busca consolidación con broncograma aéreo dinámico, líneas B focales y derrame acompañante.', cutoff: 'Sin umbral numérico; depende por completo de la experiencia del explorador' },
      { metodo: 'Cribado de disfagia', interpretacion: 'Obligado en toda neumonía del anciano, del paciente con ictus o enfermedad neurodegenerativa, y en toda sospecha de aspiración. La prueba de deglución de agua a pie de cama es el cribado inicial y la videofluoroscopia el estudio de referencia.', cutoff: 'Un cribado positivo obliga a modificar texturas y a valorar por logopedia antes del alta' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Imprescindible para el diagnóstico junto con la clínica. Consolidación lobar con broncograma aéreo (patrón alveolar, típico del neumococo), infiltrados parcheados bilaterales (bronconeumonia, más propia de estafilococo y gramnegativos) o patrón intersticial (virus y gérmenes atípicos). Puede ser NORMAL en las primeras horas y en el paciente deshidratado o neutropénico. El patrón radiológico no permite predecir el germen con fiabilidad.' },
      { modalidad: 'Ecografía pulmonar', hallazgos: 'Consolidación subpleural con broncograma aéreo dinámico, líneas B focales y derrame. Más sensible que la radiografía simple para la consolidación perifericamente situada, sin radiación y a pie de cama; no valora bien lo que no llega a la pleura y depende del explorador.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'Ante duda diagnóstica, mala evolución, sospecha de complicación (absceso, empiema, neumonía necrotizante), inmunodepresion o sospecha de neoplasia subyacente. Detecta infiltrados que la radiografía no ve y define mejor el derrame y las cavitaciones.' },
      { modalidad: 'Ecografía tórax dirigida al derrame', hallazgos: 'Ante todo derrame paraneumonico: mide, localiza, detecta tabiques y guía la toracocentesis. Un derrame de más de 1 cm en decúbito lateral debe puncionarse para descartar empiema, que cambia por completo el manejo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La neumonía se clasifica por <strong>donde se adquiere</strong> (comunitaria, nosocomial, asociada a la ventilación), por <strong>gravedad</strong> (que decide el lugar de tratamiento y ahora también el corticoide y la duración), por <strong>mecanismo</strong> (inhalacion, aspiración, diseminación hematógena) y por el <strong>estado inmunitario</strong> del huésped, que es lo que más amplia el abanico etiológico. La categoría de <strong>neumonía asociada a cuidados sanitarios se abandono</strong> porque no predecia bien la resistencia y generaba tratamiento excesivo: hoy la cobertura ampliada se decide por factores de riesgo individuales y por la epidemiología local.`,
    escalas: [
      { nombre: 'CURB-65 (calculadora disponible)', componentes: 'Confusión, urea (nitrógeno ureico mayor de 19 mg/dL), frecuencia respiratoria de 30 o más, presión arterial baja y edad de 65 años o más.', formula: 'Un punto por cada criterio presente, de 0 a 5.', interpretacion: '0 a 1: mortalidad baja, tratamiento ambulatorio. 2: mortalidad intermedia, valorar ingreso. 3 o más: mortalidad alta, neumonía grave. Su virtud es que se recuerda; su defecto, que penaliza al anciano solo por la edad y que ignora la hipoxemia y la comorbilidad.' },
      { nombre: 'Índice de gravedad de la neumonía o PSI (calculadora disponible)', componentes: 'Edad, sexo, residencia, cinco comorbilidades, cinco hallazgos de exploración, siete datos de laboratorio y gasometría, y el derrame pleural en la radiografía.', formula: 'Suma ponderada que define cinco clases de riesgo, de la I a la V.', interpretacion: 'Clases I y II ambulatorio, III observación o ingreso corto, IV y V ingreso. Es el preferido por las guías porque su fuerza esta en identificar al paciente de bajo riesgo. Su punto débil es el joven sin comorbilidad, al que la edad no penaliza y que puede llegar grave con una clase baja.' },
      { nombre: 'Criterios ATS/IDSA de neumonía grave (calculadora disponible)', componentes: 'Mayores: ventilación mecánica y choque séptico con vasopresores. Menores: frecuencia respiratoria de 30 o más, PaO2/FiO2 de 250 o menos, infiltrados multilobares, confusión, nitrógeno ureico de 20 mg/dL o más, leucocitos menores de 4000, plaquetas menores de 100000, temperatura menor de 36 grados e hipotensión que exige reposición agresiva.', formula: '1 criterio mayor o 3 o más menores.', interpretacion: 'Definen el ingreso en cuidados intensivos, la necesidad de cultivos completos, la indicación de corticoide sistémico y la duración mínima de 5 días. Es la escala que más decisiones concretas cambia de las tres.' },
      { nombre: 'Factores de riesgo de gérmenes resistentes (calculadora disponible)', componentes: 'Aislamiento previo de SARM o de Pseudomonas en via respiratoria, ingreso con antibiótico intravenoso en los últimos 90 días, prevalencia local, bronquiectasias o fibrosis quística, y gravedad del cuadro.', formula: 'Valoración categórica, ponderada con el antibiograma de la unidad.', interpretacion: 'Sustituye a la categoría de neumonía asociada a cuidados sanitarios. La regla práctica: si se amplia la cobertura, se toman cultivos y se desescala en 48 a 72 horas si el germen no aparece. Ampliar sin desescalar es la peor de las combinaciones.' },
      { nombre: 'Criterios de estabilidad clínica', componentes: 'Temperatura, frecuencia cardiaca, frecuencia respiratoria, presión arterial sistólica, saturación de oxígeno, tolerancia oral y estado mental.', formula: 'Cumplimiento simultáneo de los siete.', interpretacion: 'Marcan el paso a via oral, el alta y el punto desde el que se cuenta la duración del tratamiento. La guía de 2026 sugiere menos de 5 días (mínimo 3) en el ambulatorio y en el ingresado no grave que alcanza estabilidad, y 5 o más en la neumonía grave.' },
      { nombre: 'Definiciones temporales de la neumonía nosocomial', componentes: 'Momento de aparición respecto al ingreso y a la intubación.', formula: 'Nosocomial: 48 horas o más tras el ingreso, sin estar incubandose al llegar. Asociada a la ventilación: más de 48 horas tras la intubación.', interpretacion: 'Antes de esas 48 horas la neumonía es comunitaria por mucho que el paciente este hospitalizado, y se trata como tal. Es una de las distinciones que más se falla y la que decide todo el esquema antibiótico.' },
      { nombre: 'Escala de riesgo de mortalidad en la neumonía nosocomial', componentes: 'Choque séptico, necesidad de ventilación mecánica por la neumonía, y comorbilidad grave.', formula: 'Valoración categórica de alto riesgo de muerte.', interpretacion: 'El alto riesgo de muerte justifica por si solo la cobertura de SARM y la doble cobertura antipseudomónica empírica, incluso sin otros factores de riesgo de resistencia, porque el coste de errar el tratamiento inicial es demasiado alto.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Neumonía adquirida en la comunidad',
      color: '#a8562e',
      definicion: 'Infección aguda del parénquima pulmonar adquirida fuera del hospital, definida por clínica compatible MÁS un infiltrado en la imagen. Sin imagen no se habla de neumonía sino de infección respiratoria baja.',
      fisiopatologia: 'El germen llega al alveolo por microaspiracion de secreción orofaringea (la via más frecuente con diferencia), por inhalacion de aerosoles o, con menos frecuencia, por diseminación hematógena. Cuando la carga o la virulencia superan a las defensas locales (aclaramiento mucociliar, macrofago alveolar, inmunidad innata), se desencadena una respuesta inflamatoria que llena el alveolo de exudado y células. Ese relleno produce un cortocircuito derecha-izquierda intrapulmonar: los alvéolos siguen perfundidos pero no ventilados, y de ahi la hipoxemia que responde mal al oxígeno suplementario.',
      epidemiologia: 'Es la principal causa infecciosa de muerte en el adulto y la primera causa de ingreso por infección. La incidencia crece de forma exponencial con la edad. Streptococcus pneumoniae sigue siendo el germen identificado con más frecuencia, seguido de los virus respiratorios, Haemophilus influenzae, Mycoplasma pneumoniae y Legionella. En una proporción muy alta de los casos no se identifica ningún germen pese al estudio completo.',
      factores_riesgo: ['Edad avanzada', 'Tabaquismo y consumo de alcohol', 'EPOC, asma y bronquiectasias', 'Insuficiencia cardiaca, diabetes, hepatopatía y nefropatía crónicas', 'Inmunodepresion, incluida la del corticoide sistémico', 'Disfagia y alteración del nivel de conciencia', 'Mala higiene bucodental', 'Ausencia de vacunación antineumococica y antigripal', 'Infección viral previa, sobre todo gripe', 'Uso de inhibidores de la bomba de protones y de antipsicóticos'],
      clinica: 'Fiebre, tos con expectoración, disnea y dolor pleurítico en días. Crepitantes localizados, soplo tubárico, egofonía, aumento de las vibraciones vocales y matidez. En el anciano puede presentarse como caída, confusión o descompensación de una comorbilidad SIN fiebre ni tos, y esa es la presentación que más se retrasa.',
      criterios_dx: 'Clínica compatible más infiltrado en radiografía de tórax o, en centros con experiencia, en ecografía pulmonar. La imagen puede ser normal en las primeras horas, en el deshidratado y en el neutropénico: si la sospecha es alta y la radiografía es normal, se repite o se hace tomografía.',
      laboratorio: 'Hemograma, función renal, iones, glucemia y proteína C reactiva. Pulsioximetría en todos y gasometría si es grave. Hemocultivos, cultivo de esputo y antígenos urinarios solo en la neumonía grave o si se va a cubrir SARM o Pseudomonas. Prueba de virus respiratorios en temporada.',
      imagen: 'Radiografía de tórax, o ecografía pulmonar donde hay experiencia. Tomografía ante duda, mala evolución o sospecha de complicación o de neoplasia. Ecografía del derrame si lo hay.',
      complementarios: 'Calcular CURB-65 o PSI para decidir el lugar de tratamiento, y criterios de gravedad para valorar cuidados intensivos. Cribado de disfagia en el anciano. Revisar el estado vacunal antes del alta.',
      dx_diferencial: 'Insuficiencia cardiaca descompensada (que coexiste con frecuencia), embolia pulmonar con infarto, atelectasia, neumonitis por hipersensibilidad, neumonía organizada, hemorragia alveolar, vasculitis, neoplasia con obstrucción bronquial, tuberculosis y neumonitis por fármacos o por radioterapia.',
      tx_medico: 'Oxígeno para mantener la saturación adecuada, hidratación, analgesia del dolor pleurítico (que mejora la ventilación), movilización precoz y profilaxis antitrombótica si ingresa. Paso a via oral en cuanto el paciente esta estable y tolera. Vacunación antineumococica y antigripal antes del alta, y abandono del tabaco.',
      tx_farmacologico: 'PRIMERA DOSIS SIN DEMORA, sobre todo si hay sepsis. Ambulatorio sano: amoxicilina a dosis altas o doxiciclina. Ambulatorio con comorbilidad: amoxicilina-clavulanico o cefalosporina más macrolido o doxiciclina, o fluoroquinolona respiratoria. Ingresado no grave: betalactámico más macrolido, o fluoroquinolona. Grave: betalactámico más macrolido o más fluoroquinolona. Cobertura de SARM o Pseudomonas SOLO con factores de riesgo, con cultivos y desescalada a las 48 a 72 horas. Oseltamivir si la gripe es positiva en el paciente ingresado. Ver la Figura 2 de Definición.',
      tx_intervencionista: 'Toracocentesis de todo derrame significativo, y drenaje si es complicado o empiema. Broncoscopia ante mala evolución, sospecha de obstrucción o inmunodepresion. Drenaje o cirugía en el absceso que no responde.',
      criterios_uci: 'Un criterio mayor (ventilación mecánica o choque séptico con vasopresores) o tres o más menores. El ingreso precoz en cuidados intensivos del paciente que cumple criterios mejora el pronóstico frente al traslado tardío tras el deterioro.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revaluacion diaria de los criterios de estabilidad clínica, que marcan el paso a via oral y el alta. Si a las 72 horas no hay mejoría, replantear: germen resistente o no cubierto, complicación local (empiema, absceso), diagnóstico alternativo o inmunodepresion no reconocida.',
      seguimiento_ambulatorio: 'Revisión clínica en 4 a 6 semanas. La radiografía de control NO es necesaria de rutina si los síntomas se resolvieron; se reserva al fumador, al mayor de 50 años y al que persiste sintomático, para descartar una neoplasia subyacente. Revisar vacunación, tabaco y riesgo cardiovascular.',
      pronostico: 'Mortalidad ambulatoria menor del 1% y hospitalaria en torno al 10%, que llega al 30% o más en la que ingresa en cuidados intensivos. La mortalidad al año tras el ingreso es mucho mayor que la hospitalaria, en buena parte por eventos cardiovasculares.',
      algoritmo: ['Clínica compatible más imagen: radiografía o ecografía pulmonar', 'Calcular CURB-65 o PSI para decidir donde se trata', 'Aplicar criterios de gravedad para valorar cuidados intensivos', 'Cultivos y antígenos SOLO si es grave o si se va a ampliar cobertura', 'Prueba de virus respiratorios en temporada', 'Primera dosis de antibiótico sin demora, según el lugar de tratamiento', 'Ampliar a SARM o Pseudomonas solo con factores de riesgo concretos', 'Revaluar a las 48 a 72 horas: desescalar y pasar a via oral si esta estable', 'Duración: menos de 5 días si no es grave y alcanza estabilidad; 5 o más si es grave', 'Antes del alta: vacunas, tabaco, disfagia si procede y cita en 4 a 6 semanas']
    },
    {
      nombre: 'Neumonía grave y complicaciones sistémicas',
      color: '#8c3a34',
      definicion: 'Neumonía que cumple un criterio mayor (ventilación mecánica o choque séptico con vasopresores) o tres o más criterios menores de la clasificación ATS/IDSA, junto con las complicaciones sistémicas que produce dentro y después del ingreso.',
      fisiopatologia: 'El relleno alveolar produce cortocircuito intrapulmonar e hipoxemia refractaria al oxígeno. Si la respuesta inflamatoria se generaliza aparecen sepsis y disfunción multiorgánica, y si la lesión alveolar difusa progresa, síndrome de dificultad respiratoria aguda. A ello se suma un mecanismo que se subestima: la inflamación sistémica, la activación plaquetaria, la disfunción endotelial y la demanda miocárdica aumentada precipitan infarto, arritmia e insuficiencia cardiaca, y ese riesgo cardiovascular persiste durante años después del alta.',
      epidemiologia: 'Alrededor del 10 al 20% de las neumonías que ingresan cumplen criterios de gravedad, con mortalidad del 30% o superior. Uno de cada cuatro a cinco pacientes ingresados por neumonía sufre un evento cardiovascular durante el ingreso o en los 30 días siguientes, y el exceso de riesgo se mantiene durante años.',
      factores_riesgo: ['Edad avanzada y fragilidad', 'Comorbilidad cardiovascular y respiratoria previa', 'Inmunodepresion', 'Retraso en la primera dosis de antibiótico', 'Tratamiento empírico inadecuado para el germen real', 'Bacteriemia y afectación multilobar', 'Alcoholismo y desnutrición', 'Gripe o virus respiratorio como desencadenante', 'Infección por Staphylococcus aureus productor de leucocidina de Panton-Valentine', 'Coinfección bacteriana sobre neumonía viral'],
      clinica: 'Insuficiencia respiratoria con trabajo respiratorio importante, hipotensión, oliguria, confusión y signos de hipoperfusión. La leucopenia y la hipotermia son marcadores de gravedad que engañan por parecer tranquilizadores. Puede debutar directamente como choque séptico o como síndrome de dificultad respiratoria aguda.',
      criterios_dx: 'Criterios ATS/IDSA de neumonía grave. Para las complicaciones sistémicas, los criterios propios de cada una: Sepsis-3 para la sepsis, definición de Berlín o global para el síndrome de dificultad respiratoria aguda, y los criterios habituales del síndrome coronario agudo y de la insuficiencia cardiaca.',
      laboratorio: 'Gasometría con PaO2/FiO2, lactato, hemograma completo, función renal y hepática, coagulación y troponina. Hemocultivos y cultivo de esputo antes de la primera dosis, antígenos urinarios de neumococo y de Legionella, y prueba de virus respiratorios.',
      imagen: 'Radiografía para valorar la extensión multilobar. Tomografía si hay mala evolución o sospecha de complicación local. Ecocardiograma ante hipotensión, troponina elevada o sospecha de disfunción ventricular. Ecografía pulmonar seriada a pie de cama.',
      complementarios: 'Monitorización continua, electrocardiograma seriado (la fibrilación auricular de novo es frecuente), control de diuresis y balance. Valoración precoz por cuidados intensivos: el traslado tardío tras el deterioro empeora el pronóstico.',
      dx_diferencial: 'Síndrome de dificultad respiratoria aguda de otra causa, edema pulmonar cardiogénico, embolia pulmonar masiva, hemorragia alveolar difusa, neumonía organizada aguda y vasculitis pulmonar.',
      tx_medico: 'Tratamiento de la sepsis según protocolo: reposición de volumen guiada, vasopresores si la hipotensión persiste, y control del foco. Oxigenoterapia, cánula nasal de alto flujo o ventilación mecánica según la evolución, con estrategia de protección pulmonar si aparece síndrome de dificultad respiratoria aguda. Profilaxis antitrombótica y control glucémico.',
      tx_farmacologico: 'Betalactámico más macrolido, o betalactámico más fluoroquinolona, con la primera dosis sin demora. CORTICOIDE SISTÉMICO: la guía de 2026 lo sugiere en la neumonía grave, con la excepción explícita de la neumonía gripal, y lo recomienda EN CONTRA en la neumonía no grave. El ensayo CAPE COD mostró reducción de mortalidad con hidrocortisona en la neumonía grave. Duración del antibiótico de 5 días o más en la neumonía grave, con recomendación fuerte.',
      tx_intervencionista: 'Ventilación mecánica protectora, decúbito prono si la relación PaO2/FiO2 es menor de 150, y oxigenación por membrana extracorpórea en el caso refractario y seleccionado. Drenaje del empiema. Broncoscopia diagnóstica si el tratamiento empírico fracasa.',
      criterios_uci: 'Los propios criterios de gravedad. El aviso debe ser precoz: el ingreso tardío en cuidados intensivos, tras el deterioro, tiene peor pronóstico que el ingreso directo del paciente que cumple criterios desde el principio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda. La fibrosis residual grave tras un síndrome de dificultad respiratoria aguda puede plantearlo a largo plazo, y es excepcional.',
      seguimiento_hospitalario: 'Revaluacion diaria de la disfunción orgánica y de la respuesta al tratamiento. Vigilancia cardiovascular activa: electrocardiograma, troponina si hay sospecha y atención a la fibrilación auricular de novo y a la insuficiencia cardiaca, que son las complicaciones que más se pasan por alto.',
      seguimiento_ambulatorio: 'Revisión precoz tras el alta. Valorar de forma explícita el riesgo cardiovascular y optimizar su tratamiento, porque el exceso de eventos persiste años. Rehabilitación y valoración funcional en el que ha estado en cuidados intensivos, con atención al deterioro cognitivo y afectivo.',
      pronostico: 'Mortalidad del 30% o superior en la que ingresa en cuidados intensivos. La mortalidad al año duplica o triplica a la hospitalaria, en buena parte por causa cardiovascular. La recuperación funcional puede tardar meses y a menudo es incompleta en el anciano.',
      algoritmo: ['Aplicar criterios de gravedad al llegar: 1 mayor o 3 menores', 'Avisar a cuidados intensivos de forma PRECOZ, no tras el deterioro', 'Hemocultivos, esputo, antígenos y virus antes de la primera dosis', 'Antibiótico combinado sin demora: betalactámico más macrolido o fluoroquinolona', 'Añadir corticoide sistémico, salvo que la causa sea la gripe', 'Reposición de volumen y vasopresores según el protocolo de sepsis', 'Soporte respiratorio escalonado, con protección pulmonar y prono si procede', 'Buscar activamente complicaciones locales: empiema, absceso, necrosis', 'Vigilar el evento cardiovascular: electrocardiograma, troponina, fibrilación auricular', 'Duración de 5 días o más, y revisión cardiovascular estructurada al alta']
    },
    {
      nombre: 'Neumonía nosocomial y asociada a la ventilación',
      color: '#7a1f3d',
      definicion: 'Neumonía que aparece 48 horas o más después del ingreso sin estar incubandose al llegar (nosocomial), o más de 48 horas después de la intubación (asociada a la ventilación mecánica).',
      fisiopatologia: 'La colonizacion de la orofaringe por flora hospitalaria cambia en días, favorecida por los antibióticos previos, los inhibidores de la bomba de protones y la propia enfermedad. Esa flora se microaspira alrededor del neumotaponamiento del tubo endotraqueal, que no sella la via aérea, y encuentra un pulmón con el aclaramiento mucociliar abolido por la sedación, el decúbito y el propio tubo. La biopelicula que se forma en la superficie interna del tubo actúa además como reservorio permanente que se desprende con cada aspiración.',
      epidemiologia: 'Es la infección nosocomial más frecuente en cuidados intensivos. El riesgo de neumonía asociada a la ventilación es máximo en los primeros días de intubación y disminuye después. Alarga la ventilación y la estancia, y su mortalidad atribuible sigue siendo objeto de debate porque el paciente que la sufre ya estaba grave.',
      factores_riesgo: ['Intubación y ventilación mecánica prolongada', 'Reintubacion y transporte fuera de la unidad', 'Sedación profunda y ausencia de despertar diario', 'Decúbito supino estricto', 'Antibióticos y antiácidos previos', 'Nutrición enteral con sonda y aspiración silente', 'Cirugía torácica o abdominal alta', 'EPOC, bronquiectasias e inmunodepresion', 'Edad avanzada y desnutrición', 'Higiene bucodental deficiente durante el ingreso'],
      clinica: 'Fiebre o hipotermia, secreciones purulentas, empeoramiento del intercambio gaseoso con aumento de las necesidades de oxígeno o de PEEP, leucocitosis o leucopenia y nuevo infiltrado radiológico. En el paciente ventilado el diagnóstico es difícil porque todos esos datos tienen muchas otras causas: atelectasia, edema, síndrome de dificultad respiratoria aguda, contusión, hemorragia y traqueobronquitis.',
      criterios_dx: 'Nuevo infiltrado o infiltrado progresivo MÁS al menos dos de: fiebre, leucocitosis o leucopenia, y secreción purulenta, con deterioro de la oxigenación. Se toman muestras respiratorias para cultivo, preferentemente CUANTITATIVAS y antes de cambiar el antibiótico. Es un diagnóstico con mucho ruido: el sobrediagnostico y el uso excesivo de antibióticos son la norma.',
      laboratorio: 'Aspirado traqueal o muestra broncoscopica con cultivo cuantitativo. Hemocultivos. Hemograma, función renal para ajustar dosis, y procalcitonina como ayuda para acortar la duración, no para iniciar el tratamiento.',
      imagen: 'Radiografía de tórax portatil, de interpretación difícil en el paciente ventilado. Tomografía si hay duda o sospecha de complicación. Ecografía pulmonar a pie de cama, útil para separar consolidación de atelectasia y de derrame.',
      complementarios: 'Revisar el antibiograma DE LA PROPIA UNIDAD, que es lo que debe guiar el esquema empírico. Valorar retirada de dispositivos, control del foco y adecuación de la sedación. Revaluar diariamente si el antibiótico sigue estando indicado.',
      dx_diferencial: 'Atelectasia, edema pulmonar, síndrome de dificultad respiratoria aguda, embolia pulmonar, traqueobronquitis asociada a la ventilación (que no siempre requiere tratamiento), hemorragia alveolar, contusión pulmonar y fiebre de otro foco.',
      tx_medico: 'Prevención, que es donde más se gana: elevar la cabecera de 30 a 45 grados, higiene bucal, protocolos de sedación ligera con despertar diario y prueba de respiración espontánea para extubar antes, control de la presión del neumotaponamiento y evitar la reintubacion. Nutrición adecuada y movilización precoz.',
      tx_farmacologico: 'Empírico según el antibiograma local, cubriendo Staphylococcus aureus y bacilos gramnegativos incluida Pseudomonas. Se añade cobertura de SARM si hay antibiótico intravenoso en los 90 días previos, prevalencia local mayor del 20% o desconocida, o alto riesgo de muerte. Doble cobertura antipseudomónica si hay choque séptico, necesidad de ventilación, bronquiectasias, aislamiento previo o más del 10% de resistencia local. DURACIÓN DE 7 DÍAS, con desescalada guiada por cultivos. Ver la Figura 3 de Definición.',
      tx_intervencionista: 'Broncoscopia con lavado broncoalveolar en el caso dudoso o de mala evolución. Drenaje del empiema. Traqueostomía según la evolución ventilatoria, que no previene por si sola la neumonía.',
      criterios_uci: 'El paciente suele estar ya en cuidados intensivos. En la nosocomial de planta, los criterios son los de cualquier neumonía grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revaluacion a las 48 a 72 horas con los cultivos en la mano: desescalar o retirar. Si no mejora, buscar complicación local, germen resistente o diagnóstico alternativo. Vigilar la toxicidad de los antibióticos, especialmente la renal.',
      seguimiento_ambulatorio: 'Sin particularidades propias; el seguimiento es el de la enfermedad de base y el de la recuperación tras el ingreso en cuidados intensivos.',
      pronostico: 'Alarga la ventilación y la estancia. La mortalidad bruta es alta, aunque la atribuible es menor de lo que sugieren las cifras crudas porque el paciente que la sufre parte de una situación grave. El tratamiento empírico inicial inadecuado es el factor modificable que más empeora el pronóstico.',
      algoritmo: ['Comprobar la regla de las 48 horas: antes de ese plazo es comunitaria', 'Sospechar ante nuevo infiltrado con fiebre, leucocitosis y secreción purulenta', 'Tomar muestra respiratoria para cultivo cuantitativo ANTES de cambiar el antibiótico', 'Consultar el antibiograma de la propia unidad', 'Cubrir Staphylococcus aureus y gramnegativos incluida Pseudomonas', 'Añadir cobertura de SARM solo si hay factores de riesgo o alto riesgo de muerte', 'Doble cobertura antipseudomónica si hay choque, ventilación o resistencia local alta', 'Revaluar a las 48 a 72 horas con los cultivos y DESESCALAR', 'Duración de 7 días en la mayoría de los casos', 'Reforzar la prevención: cabecera elevada, higiene bucal, sedación ligera y extubación precoz']
    },
    {
      nombre: 'Neumonía por aspiración y absceso pulmonar',
      color: '#6b4a2e',
      definicion: 'Dos entidades que se confunden a diario. La NEUMONITIS química es la lesión inflamatoria por aspiración de contenido gástrico ácido. La NEUMONÍA por aspiración es la infección bacteriana por aspiración de secreción orofaringea colonizada. El absceso pulmonar es su complicación cavitada.',
      fisiopatologia: 'En la neumonitis, el ácido gástrico produce una quemadura química del epitelio alveolar en minutos, con edema, hemorragia y aumento brusco de la permeabilidad: es inflamación estéril, no infección, y por eso el antibiótico no aporta nada al principio. En la neumonía por aspiración, la secreción orofaringea colonizada llega al pulmón en el paciente con disfagia o alteración de la conciencia, y la infección tarda días en establecerse; las zonas afectadas dependen de la postura en el momento de la aspiración, con predominio del segmento posterior de los lóbulos superiores y el segmento superior de los inferiores en el decúbito. Cuando la infección necrosa el parénquima, aparece el absceso.',
      epidemiologia: 'La aspiración explica una proporción importante de las neumonías del anciano y del paciente institucionalizado, y su frecuencia crece con la disfagia, el ictus y la demencia. Los abscesos pulmonares primarios se asocian a mala higiene bucodental, alcoholismo y alteración de la conciencia. La microbiologia ha cambiado: hoy predominan los gérmenes que ya causan la neumonía comunitaria, y los anaerobios estrictos tienen menos peso del que se les atribuía.',
      factores_riesgo: ['Disfagia orofaringea de cualquier causa', 'Ictus, demencia y enfermedad de Parkinson', 'Alteración del nivel de conciencia: alcohol, sedantes, epilepsia, anestesia', 'Mala higiene bucodental y enfermedad periodontal', 'Sonda nasogástrica y nutrición enteral', 'Reflujo gastroesofágico y vómitos de repetición', 'Enfermedad neuromuscular y esclerosis lateral amiotrófica', 'Neoplasia de cabeza y cuello o de esófago, y su tratamiento', 'Traqueostomía e intubación previas', 'Encamamiento y decúbito supino mantenido'],
      clinica: 'La neumonitis se presenta en minutos u horas tras un episodio en general presenciado, con tos, disnea, hipoxemia brusca, sibilancias y a veces fiebre. La neumonía por aspiración aparece en días, con fiebre, tos, expectoración y consolidación en las zonas declives. El absceso añade expectoración abundante y de mal olor, síndrome constitucional y, con frecuencia, dedos en palillo de tambor si lleva semanas de evolución.',
      criterios_dx: 'Fundamentalmente clínico y temporal: lo que separa a los dos cuadros es el TIEMPO desde el episodio de aspiración y la evolución de los infiltrados. La neumonitis mejora en 24 a 48 horas; la neumonía empeora. El absceso se define por la cavitación con nivel hidroaereo en la imagen.',
      laboratorio: 'Hemograma, reactantes y función renal. En el absceso, cultivo de esputo y hemocultivos, con rentabilidad limitada. Los cultivos de anaerobios exigen técnica específica y rara vez se obtienen en la práctica.',
      imagen: 'Radiografía con infiltrado en zonas declives según la postura de la aspiración. Tomografía ante mala evolución, para definir cavitación, necrosis, empiema o una obstrucción bronquial subyacente que no debe pasarse por alto.',
      complementarios: 'CRIBADO DE DISFAGIA en todos: prueba de deglución a pie de cama y, si es positiva, valoración por logopedia y videofluoroscopia. Revisión odontologica. Broncoscopia si el absceso no responde o si se sospecha cuerpo extraño o neoplasia obstructiva.',
      dx_diferencial: 'Neumonía comunitaria de otro mecanismo, edema pulmonar, síndrome de dificultad respiratoria aguda, tuberculosis cavitada, neoplasia cavitada, embolia séptica, granulomatosis con poliangeítis y neumonía necrotizante por Staphylococcus aureus.',
      tx_medico: 'En la neumonitis: soporte, aspiración de la via aérea si hay material visible, oxígeno y observación 48 horas. NI antibiótico ni corticoide de entrada. En la neumonía por aspiración: el tratamiento de una neumonía más la corrección del mecanismo, que es lo que evita la recidiva: modificar texturas, higiene bucal, postura, revisión de sedantes y valoración logopedica.',
      tx_farmacologico: 'Neumonitis: sin antibiótico inicial. Si a las 48 horas no mejora o aparece fiebre y leucocitosis, se trata como neumonía. Neumonía por aspiración: los mismos esquemas de la neumonía comunitaria o nosocomial según donde se adquirio. LA COBERTURA ANAEROBIA DE RUTINA YA NO SE RECOMIENDA: se reserva al absceso pulmonar y al empiema, donde se usan amoxicilina-clavulanico o un carbapenémico, o clindamicina como alternativa. Duración del absceso: semanas, guiada por la imagen.',
      tx_intervencionista: 'Drenaje percutáneo del absceso que no responde al antibiótico, o drenaje del empiema asociado. Broncoscopia terapéutica si hay obstrucción o cuerpo extraño. Resección quirúrgica en el absceso crónico refractario, hoy excepcional. Gastrostomía solo tras valoración cuidadosa, porque NO elimina el riesgo de aspiración.',
      criterios_uci: 'Los de cualquier neumonía grave. La neumonitis masiva puede producir insuficiencia respiratoria aguda que requiera ventilación sin que haya ninguna infección de por medio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la evolución en las primeras 48 horas, que es lo que separa la neumonitis de la neumonía. En el absceso, seguimiento radiológico y clínico prolongado; la mejoría de la imagen va muy por detrás de la clínica.',
      seguimiento_ambulatorio: 'Seguimiento de la disfagia y de las medidas de prevención, que es donde se decide si habra recidiva. Control radiológico del absceso hasta su resolución. Revisar fármacos sedantes y salud bucodental.',
      pronostico: 'La neumonitis simple se resuelve en días, aunque la forma masiva puede ser mortal. La neumonía por aspiración tiene peor pronóstico que la comunitaria por el perfil del paciente que la sufre, y una alta tasa de recidiva si no se corrige el mecanismo. El absceso responde bien al antibiótico prolongado en la mayoría de los casos.',
      algoritmo: ['Determinar el TIEMPO transcurrido desde la aspiración', 'Inicio en minutos u horas: neumonitis química, SIN antibiótico', 'Neumonitis: soporte, aspiración de la via aérea y observación 48 horas', 'Si empeora o aparece fiebre a las 48 horas: tratar como neumonía', 'Inicio en días con fiebre y consolidación declive: neumonía por aspiración', 'Tratar como neumonía comunitaria o nosocomial según donde se adquirio', 'NO añadir cobertura anaerobia de rutina', 'Si hay cavitación con nivel: absceso, y ahi si cobertura anaerobia y semanas de tratamiento', 'Descartar obstrucción bronquial o cuerpo extraño con tomografía o broncoscopia', 'Cribar la disfagia y corregir el mecanismo, o el cuadro se repetira']
    },
    {
      nombre: 'Neumonía viral: gripe y COVID-19',
      color: '#2e6b7a',
      definicion: 'Neumonía causada directamente por un virus respiratorio, con o sin coinfección bacteriana. Los dos escenarios de mayor peso son la gripe estacional y la COVID-19, a los que se suman el virus respiratorio sincitial en el anciano y otros virus respiratorios.',
      fisiopatologia: 'El virus infecta el epitelio respiratorio y, si alcanza el alveolo, produce daño alveolar difuso con edema, membranas hialinas e infiltrado inflamatorio, que es el sustrato del síndrome de dificultad respiratoria aguda. Además destruye la barrera epitelial, altera el aclaramiento mucociliar y deprime la función del macrofago alveolar, lo que abre la puerta a la coinfección bacteriana, típicamente por neumococo y por Staphylococcus aureus, que es la que explica buena parte de la mortalidad de la gripe.',
      epidemiologia: 'Los virus respiratorios se identifican en una proporción muy alta de las neumonías comunitarias estudiadas con técnicas moleculares, solos o junto a una bacteria. La gripe tiene un patrón estacional marcado, y la coinfección bacteriana estafilocócica, aunque poco frecuente, es especialmente grave en el paciente joven previamente sano.',
      factores_riesgo: ['Edad avanzada y residencia en centros sociosanitarios', 'Ausencia de vacunación antigripal o frente a COVID-19', 'Enfermedad cardiovascular y respiratoria crónica', 'Diabetes, obesidad y nefropatía crónica', 'Inmunodepresion', 'Embarazo y posparto', 'Tabaquismo', 'Hacinamiento y exposición en temporada', 'Enfermedad neurológica que dificulta el manejo de secreciones', 'Retraso en el inicio del antiviral'],
      clinica: 'Cuadro pseudogripal con fiebre, mialgias, cefalea y tos seca, que en la neumonía viral progresa a disnea e hipoxemia con infiltrados bilaterales. Un dato de gran valor practico es el DETERIORO EN DOS TIEMPOS: mejoría inicial seguida de reagudizacion con fiebre alta y esputo purulento, que sugiere coinfección bacteriana. En la COVID-19, la hipoxemia puede ser desproporcionada al trabajo respiratorio percibido.',
      criterios_dx: 'Prueba molecular de virus respiratorios en muestra nasofaringea o de via aérea baja, más imagen compatible. Un virus positivo NO descarta la coinfección bacteriana, y esa es la razón por la que el antibiótico se mantiene en el paciente ingresado y en el ambulatorio con comorbilidad.',
      laboratorio: 'Prueba molecular de gripe, SARS-CoV-2 y virus respiratorio sincitial. Hemograma con linfopenia frecuente, reactantes, dímero D en la COVID-19 y gasometría. Cultivos bacterianos si es grave o hay sospecha de coinfección.',
      imagen: 'Infiltrados intersticiales o en vidrio deslustrado bilaterales y de predominio periférico, sobre todo en la COVID-19. La aparición de una consolidación focal nueva sobre ese fondo sugiere coinfección bacteriana. La tomografía es más sensible pero no debe pedirse de rutina.',
      complementarios: 'Aislamiento respiratorio y medidas de control de la infección desde la sospecha. Revisar el estado vacunal del paciente y de sus convivientes. Valorar profilaxis en contactos de riesgo en la gripe.',
      dx_diferencial: 'Neumonía bacteriana, insuficiencia cardiaca, neumonitis por hipersensibilidad, neumonía organizada, neumonitis por fármacos, hemorragia alveolar y, en el inmunodeprimido, Pneumocystis jirovecii, que puede dar una imagen prácticamente idéntica.',
      tx_medico: 'Oxigenoterapia escalonada, con cánula nasal de alto flujo o ventilación no invasiva según la evolución, y decúbito prono despierto en la insuficiencia respiratoria hipoxémica. Soporte, hidratación y profilaxis antitrombótica. Aislamiento adecuado.',
      tx_farmacologico: 'OSELTAMIVIR en todo paciente ingresado con gripe, con independencia del tiempo de evolución, y lo antes posible: el beneficio es mayor cuanto más precoz. Antivirales frente a SARS-CoV-2 según la indicación vigente en el paciente de riesgo. ANTIBIÓTICO: se mantiene en el ingresado y en el ambulatorio con comorbilidad; solo se puede prescindir de el en el ambulatorio sin comorbilidad con virus positivo. Corticoide en la COVID-19 con necesidad de oxígeno; en la neumonía gripal grave, la guía de 2026 EXCLUYE explícitamente el corticoide de su recomendación.',
      tx_intervencionista: 'Ventilación mecánica protectora, prono y oxigenación por membrana extracorpórea en el caso refractario, con los mismos criterios del síndrome de dificultad respiratoria aguda de cualquier causa.',
      criterios_uci: 'Los de cualquier neumonía grave. La neumonía viral tiene mayor tendencia a evolucionar a síndrome de dificultad respiratoria aguda, y el deterioro puede ser rápido tras varios días de aparente estabilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda; la fibrosis residual grave puede plantearlo a largo plazo de forma excepcional.',
      seguimiento_hospitalario: 'Vigilar el deterioro en dos tiempos, que sugiere coinfección bacteriana y obliga a cultivar y a revisar el antibiótico. Mantener el aislamiento el tiempo indicado. Vigilar las complicaciones extrapulmonares: miocarditis, miositis y descompensación de comorbilidades.',
      seguimiento_ambulatorio: 'Revisión clínica y vacunación antes del alta o en la primera revisión. Valorar la persistencia de síntomas y la necesidad de rehabilitación respiratoria en el que ha tenido afectación extensa.',
      pronostico: 'Muy variable. La coinfección bacteriana, sobre todo por Staphylococcus aureus, empeora mucho el pronóstico. La vacunación reduce la incidencia y la gravedad, y el retraso del antiviral en la gripe se asocia de forma consistente a peor evolución.',
      algoritmo: ['Prueba molecular de virus respiratorios ante clínica compatible en temporada', 'Confirmar la neumonía con imagen, radiografía o ecografía pulmonar', 'Aislamiento respiratorio desde la sospecha', 'Oseltamivir sin demora en todo ingresado con gripe', 'Antiviral frente a SARS-CoV-2 según indicación en el paciente de riesgo', 'Ambulatorio SIN comorbilidad y virus positivo: se puede prescindir del antibiótico', 'Ambulatorio con comorbilidad e ingresado: mantener el antibiótico', 'Corticoide en la COVID-19 con oxígeno; excluido en la neumonía gripal grave', 'Vigilar el deterioro en dos tiempos, que indica coinfección bacteriana', 'Revisar la vacunación del paciente y de sus convivientes antes del alta']
    },
    {
      nombre: 'Neumonía en el paciente inmunodeprimido',
      color: '#5b4a86',
      definicion: 'Neumonía en el paciente con inmunodepresion por neutropenia, alteración de la inmunidad celular o humoral, trasplante o tratamiento inmunosupresor, en la que el abanico etiológico se amplia a gérmenes que no causan enfermedad en el huésped normal.',
      fisiopatologia: 'El tipo de defecto inmunitario predice el germen mejor que cualquier otro dato. La NEUTROPENIA abre la puerta a bacilos gramnegativos, Staphylococcus aureus y hongos filamentosos como Aspergillus. El defecto de la INMUNIDAD CELULAR (VIH con linfocitos CD4 bajos, trasplante, corticoide prolongado, anti-factor de necrosis tumoral) predispone a Pneumocystis jirovecii, micobacterias, Nocardia, citomegalovirus y hongos endémicos. El defecto HUMORAL o la asplenia predisponen a los gérmenes encapsulados: neumococo, Haemophilus y meningococo.',
      epidemiologia: 'La población inmunodeprimida crece de forma sostenida por los tratamientos oncológicos, los biológicos y los trasplantes. En el trasplante de órgano sólido, el riesgo sigue un calendario reconocible: infecciones nosocomiales y quirúrgicas en el primer mes, oportunistas del segundo al sexto, y comunitarias con oportunistas tardías después.',
      factores_riesgo: ['Neutropenia profunda y prolongada', 'Trasplante de órgano sólido o de progenitores hematopoyéticos', 'Infección por VIH con linfocitos CD4 por debajo de 200', 'Corticoide sistémico prolongado a dosis altas', 'Fármacos anti-factor de necrosis tumoral y otros biológicos', 'Quimioterapia y anticuerpos que depletan linfocitos B', 'Enfermedad injerto contra huésped', 'Asplenia anatómica o funcional', 'Inmunodeficiencia primaria', 'Ausencia de profilaxis indicada'],
      clinica: 'A menudo ATENUADA y engañosa: puede faltar la fiebre, la tos y la expectoración, y la exploración ser pobre pese a una afectación extensa. En la neutropenia, la escasez de neutrófilos hace que la radiografía pueda ser normal al principio. La disnea de esfuerzo progresiva con hipoxemia desproporcionada y radiografía poco llamativa es la presentación clásica de Pneumocystis.',
      criterios_dx: 'Umbral MUY BAJO para tomografía de tórax y para broncoscopia con lavado broncoalveolar: en este paciente el diagnóstico microbiológico dirigido cambia el tratamiento con mucha más frecuencia que en el inmunocompetente, y el retraso se paga caro. La biopsia pulmonar se plantea cuando el lavado no es concluyente y el paciente no mejora.',
      laboratorio: 'Hemograma con recuento absoluto de neutrófilos y de linfocitos, serología y carga viral de VIH, linfocitos CD4, galactomanano en suero y en lavado, beta-D-glucano, carga viral de citomegalovirus, y estudio del lavado broncoalveolar con tinciones y técnicas moleculares para Pneumocystis, micobacterias, hongos y virus.',
      imagen: 'TOMOGRAFÍA DE TÓRAX de entrada, porque la radiografía es insuficiente. Vidrio deslustrado difuso sugiere Pneumocystis, citomegalovirus o fármacos; los nódulos con halo y el signo del creciente aéreo orientan a Aspergillus; las cavitaciones a micobacterias, Nocardia y hongos; y la consolidación focal a bacterias.',
      complementarios: 'Broncoscopia con lavado broncoalveolar precoz. Revisar la profilaxis que el paciente debería estar recibiendo y si la cumple. Revisar las interacciones farmacológicas, que en el trasplantado son constantes y limitan la elección del antimicrobiano.',
      dx_diferencial: 'Toxicidad pulmonar por fármacos, neumonitis por inhibidores del punto de control inmunitario, progresión de la enfermedad de base, infiltración tumoral, hemorragia alveolar, edema pulmonar, neumonía organizada y enfermedad injerto contra huésped pulmonar.',
      tx_medico: 'Soporte respiratorio y hemodinámico. Coordinación con el equipo que trata la enfermedad de base para ajustar la inmunosupresión, que a veces hay que reducir y otras no. Factores estimulantes de colonias en casos seleccionados de neutropenia.',
      tx_farmacologico: 'Tratamiento empírico de amplio espectro AJUSTADO AL TIPO DE DEFECTO INMUNITARIO y a la epidemiología local, iniciado sin demora en la neutropenia febril. Cotrimoxazol a dosis altas más corticoide si la PaO2 es menor de 70 mmHg en la sospecha de Pneumocystis. Antifúngico dirigido a mohos ante datos sugestivos de Aspergillus. Ganciclovir en la enfermedad por citomegalovirus. Desescalada en cuanto haya diagnóstico microbiológico.',
      tx_intervencionista: 'Broncoscopia con lavado broncoalveolar como procedimiento clave. Biopsia transbronquial o quirúrgica si el lavado no es concluyente. Drenaje de colecciones y cirugía en la aspergilosis con hemoptisis amenazante.',
      criterios_uci: 'Los mismos criterios de gravedad, con umbral más bajo por la reserva reducida y por la rapidez del deterioro. El pronóstico del inmunodeprimido en cuidados intensivos ha mejorado mucho en los últimos años y ya no justifica por si solo limitar el esfuerzo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa. En el ya trasplantado, la neumonía obliga a revisar el nivel de inmunosupresión y la profilaxis.',
      seguimiento_hospitalario: 'Revaluacion frecuente y ajuste según los resultados microbiológicos. Vigilar las interacciones y la toxicidad de los antimicrobianos, especialmente la renal y la hematológica. Coordinación estrecha con el equipo de la enfermedad de base.',
      seguimiento_ambulatorio: 'Revisar y asegurar la profilaxis correspondiente al defecto inmunitario. Vacunación adaptada al estado inmunitario y a su calendario. Educación sobre signos de alarma y sobre la necesidad de consultar pronto.',
      pronostico: 'Peor que en el inmunocompetente, muy dependiente del germen, de la rapidez del diagnóstico y de la posibilidad de revertir la inmunodepresion. El diagnóstico microbiológico precoz mediante broncoscopia es el factor modificable de mayor peso.',
      algoritmo: ['Identificar el TIPO de defecto inmunitario, que predice el germen', 'Tomografía de tórax de entrada: la radiografía no basta', 'Umbral muy bajo para broncoscopia con lavado broncoalveolar precoz', 'Solicitar galactomanano, beta-D-glucano y técnicas moleculares dirigidas', 'Iniciar tratamiento empírico amplio sin demora, sobre todo en la neutropenia febril', 'Cubrir Pneumocystis con cotrimoxazol y corticoide si la PaO2 es menor de 70 mmHg', 'Añadir antifúngico de mohos ante nódulos con halo o signo del creciente aéreo', 'Revisar la profilaxis que debería estar recibiendo y su cumplimiento', 'Coordinar con el equipo de la enfermedad de base el ajuste de la inmunosupresión', 'Desescalar en cuanto exista diagnóstico microbiológico']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La neumonía se trata con un puñado de decisiones que se repiten en cada paciente, y los errores también se repiten: retrasar la primera dosis, ampliar la cobertura por la procedencia del paciente en lugar de por factores de riesgo, no desescalar, y dar el alta sin haber mirado la vacunación ni el riesgo cardiovascular. Lo que sigue es la lista de comprobacion del ingreso y del alta.',
    parametros: ['Primera dosis de antibiótico SIN DEMORA, sobre todo si hay sepsis: los cultivos no la retrasan', 'Cultivos y antígenos urinarios solo en la neumonía grave o si se va a ampliar la cobertura', 'No usar la procalcitonina para decidir si se inicia el antibiótico', 'Ampliar a SARM o Pseudomonas solo con factores de riesgo concretos, nunca por la procedencia del paciente', 'Si se amplia la cobertura: cultivar y DESESCALAR a las 48 a 72 horas si el germen no aparece', 'Corticoide sistémico en la neumonía GRAVE, y en contra en la no grave; excluido si la causa es la gripe', 'Oseltamivir en todo ingresado con gripe, con independencia del tiempo de evolución', 'Revaluar a las 48 a 72 horas: si no mejora, buscar empiema, absceso, germen no cubierto o diagnóstico alternativo', 'Puncionar todo derrame de más de 1 cm: el empiema cambia por completo el manejo', 'Paso a via oral y alta cuando se cumplen los criterios de estabilidad clínica', 'Duración: menos de 5 días (mínimo 3) si no es grave y esta estable; 5 o más en la neumonía grave', 'Antes del alta: vacunación antineumococica y antigripal, abandono del tabaco, cribado de disfagia si procede y revisión del riesgo cardiovascular'],
    criterios_uci_general: 'Un criterio mayor (ventilación mecánica o choque séptico con vasopresores) o tres o más criterios menores. El aviso debe ser precoz: el paciente que ingresa directamente en cuidados intensivos por cumplir criterios tiene mejor pronóstico que el que llega alli tras deteriorarse en planta.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. En el ya trasplantado, la neumonía obliga a revisar el nivel de inmunosupresión, la profilaxis y las interacciones farmacológicas.',
    prevencion: 'Primaria: vacunación antineumococica y antigripal según calendario, vacunación frente a COVID-19 y a virus respiratorio sincitial en los grupos indicados, abandono del tabaco, higiene bucodental e higiene de manos. Secundaria: cribado y tratamiento de la disfagia, revisión de sedantes e inhibidores de la bomba de protones innecesarios, y control de la comorbilidad. En el hospital: cabecera elevada de 30 a 45 grados, higiene bucal con el paciente ventilado, sedación ligera con despertar diario, prueba de respiración espontánea para extubar antes, y programas de optimización del uso de antimicrobianos.'
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
  'Neumonía adquirida en la comunidad': { definicion: [1, 2, 12, 15], criterios_dx: [1, 2, 15], laboratorio: [1, 2, 15], tx_farmacologico: [1, 2, 12, 15] },
  'Neumonía grave y complicaciones sistémicas': { definicion: [1, 2, 7, 11], criterios_dx: [1, 2, 7, 11], laboratorio: [1, 2, 7, 11], tx_farmacologico: [1, 2, 7, 11] },
  'Neumonía nosocomial y asociada a la ventilación': { definicion: [3, 4, 13], criterios_dx: [3, 4, 13], laboratorio: [3, 4, 13], tx_farmacologico: [3, 4, 13] },
  'Neumonía por aspiración y absceso pulmonar': { definicion: [8, 9, 17], criterios_dx: [8, 9, 17], laboratorio: [8, 9, 17], tx_farmacologico: [8, 9, 17] },
  'Neumonía viral: gripe y COVID-19': { definicion: [1, 10, 18], criterios_dx: [1, 10, 18], laboratorio: [1, 10, 18], tx_farmacologico: [1, 10, 18] },
  'Neumonía en el paciente inmunodeprimido': { definicion: [16], criterios_dx: [16], laboratorio: [16], tx_farmacologico: [16] }
};
export const estigmasTitulo = 'Signos de la exploración en la neumonía, y lo que cada uno significa de verdad';
export const estigmas = [
  { s: 'Crepitantes localizados', p: '~80%', photo: null, desc: 'El signo más frecuente y el más sensible, aunque poco específico: aparecen también en la insuficiencia cardiaca, en la fibrosis y en la atelectasia. Su localización es lo que orienta, y su persistencia semanas después no significa fracaso del tratamiento.' },
  { s: 'Matidez a la percusión', p: '~40%', photo: null, desc: 'Indica consolidación extensa o derrame. Separar ambos es sencillo a pie de cama: en la consolidación las vibraciones vocales AUMENTAN y en el derrame DISMINUYEN. Esa combinación decide si hay que puncionar.' },
  { s: 'Soplo tubárico', p: '~30%', photo: null, desc: 'El ruido bronquial se transmite sin filtrar a través del alveolo relleno pero con el bronquio permeable. Es bastante específico de consolidación y suele acompañar a los infiltrados extensos.' },
  { s: 'Aumento de las vibraciones vocales y egofonía', p: '~30%', photo: null, desc: 'El pulmón consolidado transmite mejor el sonido que el aireado. La egofonía (la "e" que se oye como "a") es uno de los hallazgos con mejor cociente de probabilidad positivo de toda la exploración respiratoria.' },
  { s: 'Taquipnea de 30 o más', p: 'Criterio de gravedad', photo: null, desc: 'Es la constante que más se olvida contar y una de las más informativas. Entra en el CURB-65 y en los criterios menores de neumonía grave, y su aumento precede al deterioro clínico en horas.' },
  { s: 'Confusión de nueva aparición', p: '~20%, más en el anciano', photo: null, desc: 'Puntúa en el CURB-65 y es criterio menor de gravedad. En el anciano puede ser el ÚNICO síntoma de la neumonía, sin fiebre ni tos, y esa presentación es la que más se retrasa en diagnosticarse.' },
  { s: 'Hipotermia por debajo de 36 grados', p: 'Criterio de gravedad', photo: null, desc: 'Engaña porque parece tranquilizadora frente a la fiebre alta. Es criterio menor de neumonía grave y traduce una respuesta inflamatoria desregulada, con peor pronóstico que la fiebre.' },
  { s: 'Leucopenia por debajo de 4000', p: 'Criterio de gravedad', photo: null, desc: 'La otra cifra que engaña: se interpreta como infección leve y en realidad indica agotamiento medular o sepsis grave. Es criterio menor y, en el neutropénico, obliga a replantear todo el abanico etiológico.' },
  { s: 'Hipoxemia desproporcionada a la exploración', p: 'Frecuente en la viral', photo: null, desc: 'Típica de la neumonía por Pneumocystis y de la COVID-19: el paciente satura mal con una auscultación y una radiografía poco llamativas. Obliga a bajar el umbral para tomografía y, en el inmunodeprimido, para broncoscopia.' },
  { s: 'Expectoración abundante y de mal olor', p: 'En el absceso', photo: null, desc: 'Sugiere infección por flora mixta con anaerobios y cavitación. Junto con la mala higiene bucodental y la alteración de la conciencia compone el cuadro clásico del absceso pulmonar por aspiración.' },
  { s: 'Herpes labial acompañante', p: '~10%', photo: null, desc: 'Reactivación del virus del herpes simple por la fiebre y el estrés de la infección. Clásicamente asociado a la neumonía neumocócica, aunque no es específico y no debe usarse para elegir el antibiótico.' },
  { s: 'Fibrilación auricular de nueva aparición', p: '~10% de los ingresos', photo: null, desc: 'Es la punta del iceberg del riesgo cardiovascular que produce la neumonía. Junto con el infarto y la insuficiencia cardiaca forma el grupo de complicaciones que más se pasan por alto, y que explican buena parte de la mortalidad al año.' }
];
export const biopsia = null;
export const escalaRefs = {
  'CURB-65 (calculadora disponible)': [5, 2],
  'Índice de gravedad de la neumonía o PSI (calculadora disponible)': [6, 2],
  'Criterios ATS/IDSA de neumonía grave (calculadora disponible)': [2, 1],
  'Factores de riesgo de gérmenes resistentes (calculadora disponible)': [2, 3],
  'Criterios de estabilidad clínica': [1, 12],
  'Definiciones temporales de la neumonía nosocomial': [3, 4],
  'Escala de riesgo de mortalidad en la neumonía nosocomial': [3, 13]
};
export const escalaCalc = {
  'CURB-65 (calculadora disponible)': 'curb65',
  'Índice de gravedad de la neumonía o PSI (calculadora disponible)': 'psi',
  'Criterios ATS/IDSA de neumonía grave (calculadora disponible)': 'nac-grave',
  'Factores de riesgo de gérmenes resistentes (calculadora disponible)': 'riesgo-resistentes'
};
export const compGroups = [
  { name: 'Comunitaria', items: ['Neumonía adquirida en la comunidad', 'Neumonía grave y complicaciones sistémicas'] },
  { name: 'Por mecanismo y por lugar', items: ['Neumonía nosocomial y asociada a la ventilación', 'Neumonía por aspiración y absceso pulmonar'] },
  { name: 'Por germen y por huésped', items: ['Neumonía viral: gripe y COVID-19', 'Neumonía en el paciente inmunodeprimido'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la neumonía comunitaria y su forma grave, con las complicaciones sistémicas que la siguen mucho después del alta. Las dos siguientes se organizan por el lugar y el mecanismo: la nosocomial con la regla de las 48 horas y la aspiración con sus dos caras, la neumonitis química que no lleva antibiótico y la neumonía que si. Las dos últimas cambian el abanico etiológico: la viral, donde la trampa es la coinfección bacteriana, y la del inmunodeprimido, donde el tipo de defecto inmunitario predice el germen mejor que cualquier otro dato.';
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
    { title: 'DONDE SE TRATA', sub: 'La primera decisión, antes del antibiótico', color: '#a8562e', target: 'clasificacion', leaves: [
      { title: 'CURB-65', sub: 'Cribado rápido', color: '#3f6b52', target: 'clasificacion' },
      { title: 'PSI', sub: 'El preferido por las guías', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Criterios de NAC grave', sub: '1 mayor o 3 menores', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Ecografía pulmonar', sub: 'Alternativa a la radiografía', color: '#2e6b7a', target: 'diagnostico' }
    ] },
    { title: 'QUE ANTIBIÓTICO', sub: 'Y cuando NO ampliar la cobertura', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Betalactámico más macrolido', sub: 'En el ingresado', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'SARM y Pseudomonas', sub: 'Solo con factores de riesgo', color: '#7a1f3d', target: 'clasificacion' },
      { title: 'Desescalar en 48 a 72 horas', sub: 'Si el germen no aparece', color: '#3f6b52', target: 'seguimiento' },
      { title: 'Virus positivo', sub: 'El antibiótico solo se retira en el ambulatorio sano', color: '#2e6b7a', target: 'complicaciones' }
    ] },
    { title: 'LO QUE CAMBIO EN 2026', sub: 'Cuatro respuestas nuevas', color: '#5b4a86', target: 'definicion', leaves: [
      { title: 'Menos de 5 días', sub: 'Si no es grave y esta estable', color: '#3f6b52', target: 'seguimiento' },
      { title: '5 días o más', sub: 'En la neumonía grave', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Corticoide en la grave', sub: 'En contra si no lo es', color: '#5b4a86', target: 'complicaciones' },
      { title: 'Salvo neumonía gripal', sub: 'Excluida del corticoide', color: '#2e6b7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2, 10], no_invasivos: [1, 2, 5, 6], imagen: [1, 2] };
export const clasificacionCite = [1, 2, 3, 5, 6];
export const seguimientoCite = [1, 2, 3];
