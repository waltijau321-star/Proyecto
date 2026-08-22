// topics/sindromes-mielodisplasicos/content.js: Síndromes Mielodisplásicos (SMD de bajo riesgo,
// alto riesgo, hipoplásico y relacionado a tratamiento). Estructura idéntica al contrato del
// motor (misma forma que miocardiopatias/enfermedad-cerebrovascular/sepsis). Sigue la convención
// de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo por tipo a
// lo largo de TODO el tema).

export const meta = {
  id: 'sindromes-mielodisplasicos',
  titulo: 'Síndromes Mielodisplásicos',
  subtitulo: 'Módulo 6 · Medicina Interna',
  accent: '#2d5c47',
  accentDim: '#5c8a72'
};

export const definicionText = `<p style="margin:0 0 14px;">Los síndromes mielodisplásicos (SMD) son un grupo heterogéneo de neoplasias mieloides clonales de la célula madre hematopoyética, caracterizadas por hematopoyesis ineficaz que produce citopenias periféricas pese a una médula ósea habitualmente normo o hipercelular, displasia morfológica en una o más líneas celulares, y riesgo variable de transformación a leucemia mieloide aguda (LMA). El diagnóstico definitivo requiere aspirado/biopsia de médula ósea con evaluación morfológica, citogenética y molecular; el objetivo clínico central, más allá de confirmar el diagnóstico, es estratificar el riesgo (IPSS-R/IPSS-M) para decidir entre soporte, tratamiento dirigido a citopenias, agentes hipometilantes o trasplante alogénico, la única opción potencialmente curativa.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> Mediana de edad al diagnóstico ~70 años, con ligero predominio masculino; la incidencia aumenta de forma exponencial con la edad, hasta &gt;20 casos por 100,000 habitantes al año en mayores de 70, lo que la convierte en una de las neoplasias hematológicas más frecuentes del adulto mayor. Aproximadamente 10-15% de los casos son secundarios/relacionados a tratamiento (t-MDS) tras quimioterapia o radioterapia previas por otra neoplasia.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación (OMS 2022).</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>De novo (primario)</strong> vs. <strong>secundario</strong>: relacionado a terapia previa (t-MDS) o a un síndrome de predisposición germinal (GATA2, DDX41, anemia de Fanconi, disqueratosis congénita/telomeropatías).</li>
    <li><strong>SMD con blastos bajos (MDS-LB)</strong>: displasia de línea única o multilínea, &lt;5% blastos en médula.</li>
    <li><strong>SMD con del(5q) aislada</strong>: anemia macrocítica característica, respuesta específica a lenalidomida.</li>
    <li><strong>SMD con mutación de SF3B1</strong> (antes "con sideroblastos en anillo"): splicing aberrante, sideroblastos en anillo ≥5% con la mutación presente.</li>
    <li><strong>SMD con exceso de blastos (MDS-IB1/IB2)</strong>: 5-19% blastos en médula, continuo biológico con la LMA.</li>
    <li><strong>SMD hipoplásico</strong>: celularidad medular &lt;25%, superposición diagnóstica con la anemia aplásica.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">Modificables/identificables:</p>
  <ul style="margin:0 0 8px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Quimioterapia previa: agentes alquilantes o radioterapia (latencia 5-7 años) e inhibidores de topoisomerasa II (latencia 1-3 años)</li>
    <li>Exposición ocupacional a benceno, solventes, pesticidas</li>
    <li>Tabaquismo</li>
  </ul>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">No modificables:</p>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad avanzada: el factor de riesgo más importante</li>
    <li>Sexo masculino</li>
    <li>Síndromes de predisposición germinal (GATA2, DDX41, telomeropatías, anemia de Fanconi)</li>
    <li>Antecedente de anemia aplásica que evoluciona a SMD</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> Expansión clonal de una célula madre hematopoyética con mutaciones somáticas adquiridas secuenciales (genes de splicing: SF3B1, SRSF2, U2AF1; epigenéticos: TET2, DNMT3A, ASXL1; de señalización: RAS, JAK2; supresores/reparación del ADN: TP53, RUNX1) que confieren ventaja proliferativa al clon pero con maduración defectuosa: aumento de la apoptosis intramedular de precursores displásicos pese a una médula ósea celular, la paradoja que explica citopenias periféricas con médula normo/hipercelular. Alteraciones citogenéticas recurrentes (del(5q), monosomía 7/del(7q), trisomía 8, cariotipo complejo) definen subgrupos pronósticos, y la adquisición de mutaciones adicionales (particularmente TP53 bialélico) impulsa la progresión a LMA.${figBlock('Imagen 1', 'Hematopoyesis eficaz vs. ineficaz: la paradoja del SMD', `
<div style="display:flex;flex-direction:column;gap:12px;max-width:560px;margin:0 auto;">
  <div>
    <div style="font-size:11px;font-weight:700;color:var(--accent-fg);margin-bottom:4px;">HEMATOPOYESIS NORMAL</div>
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
      <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10.5px;color:var(--ink);">Célula madre</div>
      <div style="color:var(--ink-dim);">→</div>
      <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10.5px;color:var(--ink);">Precursores en médula</div>
      <div style="color:var(--ink-dim);">→</div>
      <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 10px;font-size:10.5px;color:var(--ink);">Células maduras → sangre periférica</div>
    </div>
  </div>
  <div>
    <div style="font-size:11px;font-weight:700;color:var(--accent-fg);margin-bottom:4px;">HEMATOPOYESIS INEFICAZ (SMD)</div>
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
      <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10.5px;color:var(--ink);">Célula madre clonal (mutada)</div>
      <div style="color:var(--ink-dim);">→</div>
      <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10.5px;color:var(--ink);">Precursores displásicos (médula normo/hipercelular)</div>
      <div style="color:var(--ink-dim);">→</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10.5px;color:var(--ink);">Apoptosis intramedular (la mayoría)</div>
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:4px 10px;font-size:9.5px;color:var(--ink-dim);">Pocas células maduras → sangre (citopenia)</div>
      </div>
    </div>
  </div>
</div>
<div class="figure-grade-box">La paradoja central del SMD: médula ósea celular (o hipercelular) con citopenias periféricas, por el exceso de apoptosis intramedular de los precursores displásicos.</div>`)}</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> El espectro va desde el hallazgo incidental de citopenia(s) asintomática(s) en una biometría hemática de rutina hasta fatiga/disnea por anemia, infecciones recurrentes por neutropenia (cuantitativa y cualitativa), y sangrado/equimosis por trombocitopenia. Ningún síntoma aislado es específico: el diagnóstico definitivo, el manejo específico de cada subtipo y de sus complicaciones se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Khoury JD, Solary E, Abla O, et al. The 5th edition of the World Health Organization Classification of Haematolymphoid Tumours: Myeloid and Histiocytic/Dendritic Neoplasms. Leukemia. 2022;36(7):1703-1719.',
  'Arber DA, Orazi A, Hasserjian RP, et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias: integrating morphologic, clinical, and genomic data. Blood. 2022;140(11):1200-1228.',
  'Greenberg PL, Tuechler H, Schanz J, et al. Revised International Prognostic Scoring System for Myelodysplastic Syndromes. Blood. 2012;120(12):2454-2465.',
  'Bernard E, Tuechler H, Greenberg PL, et al. Molecular International Prognostic Scoring System for Myelodysplastic Syndromes. NEJM Evid. 2022;1(7).',
  'Fenaux P, Platzbecker U, Dreyfus F. How we manage adults with myelodysplastic syndrome. Br J Haematol. 2020;189(6):1016-1027.',
  'Greenberg PL, Stone RM, Al-Kali A, et al. NCCN Clinical Practice Guidelines in Oncology: Myelodysplastic Syndromes. J Natl Compr Canc Netw. 2021;19(1):16-27.',
  'Fenaux P, Platzbecker U, Mufti GJ, et al. Luspatercept in Patients with Lower-Risk Myelodysplastic Syndromes. N Engl J Med. 2020;382(2):140-151.',
  'List A, Dewald G, Bennett J, et al. Lenalidomide in the Myelodysplastic Syndrome with Chromosome 5q Deletion. N Engl J Med. 2006;355(14):1456-1465.',
  'Fenaux P, Mufti GJ, Hellstrom-Lindberg E, et al. Efficacy of azacitidine compared with that of conventional care regimens in the treatment of higher-risk myelodysplastic syndromes: a randomised, open-label, phase III study (AZA-001). Lancet Oncol. 2009;10(3):223-232.',
  'Cazzola M. Myelodysplastic Syndromes. N Engl J Med. 2020;383(14):1358-1374.',
  'Passweg JR, Giagounidis AA, Simcock M, et al. Immunosuppressive therapy for patients with myelodysplastic syndrome: a prospective randomized multicenter phase III trial comparing antithymocyte globulin plus cyclosporine with best supportive care (SAKK 33/99). J Clin Oncol. 2011;29(3):303-309.',
  'Godley LA, DiNardo CD. Genetic predisposition to myeloid neoplasms. Blood. 2021;138(9):723-733.',
  'Angelucci E, Li J, Greenberg P, et al. Iron Chelation in Transfusion-Dependent Patients With Low- to Intermediate-1-Risk Myelodysplastic Syndromes: A Randomized Trial. Ann Intern Med. 2020;172(8):513-522.',
  'Cheson BD, Greenberg PL, Bennett JM, et al. Clinical application and proposal for modification of the International Working Group (IWG) response criteria in myelodysplasia. Blood. 2006;108(2):419-425.',
  'de Witte T, Bowen D, Robin M, et al. Allogeneic hematopoietic stem cell transplantation for MDS and CMML: recommendations from an international expert panel. Blood. 2017;129(13):1753-1762.'
];

// Reproduce el marcado de .modal-figure (mismo helper que ECV/miocardiopatías) para insertar
// tablas/diagramas EN LÍNEA justo debajo del párrafo que los menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const hipoplasicoTable = `
  <div class="table-wrap">
    <table>
      <thead><tr><th>Característica</th><th>SMD hipoplásico</th><th>Anemia aplásica idiopática</th></tr></thead>
      <tbody>
        <tr><td class="figure-org">Celularidad medular</td><td>&lt;25%</td><td>&lt;25%, con frecuencia aún más marcada</td></tr>
        <tr><td class="figure-org">Displasia morfológica</td><td>Presente y significativa (≥10% de una línea)</td><td>Ausente o mínima</td></tr>
        <tr><td class="figure-org">Cariotipo</td><td>Con frecuencia alterado (trisomía 8, entre otras)</td><td>Habitualmente normal</td></tr>
        <tr><td class="figure-org">Perfil mutacional (NGS)</td><td>Mutaciones somáticas típicas de SMD</td><td>Habitualmente ausentes (salvo clonas pequeñas de HPN/CHIP)</td></tr>
        <tr><td class="figure-org">Respuesta a inmunosupresión</td><td>Posible en un subgrupo seleccionado</td><td>Tratamiento estándar de primera línea si no hay donante</td></tr>
      </tbody>
    </table>
  </div>
  <div class="figure-grade-box">La distinción no siempre es tajante: existe un espectro genuino de superposición entre ambas entidades, y la clonalidad (citogenética/NGS) es el dato que más inclina la balanza hacia SMD hipoplásico.</div>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'SMD de bajo riesgo (citopenias aisladas)',
      tituloB: 'SMD de alto riesgo / progresión a LMA',
      compensada: 'Fatiga y disnea de esfuerzo por anemia (la manifestación más frecuente al diagnóstico), con frecuencia como hallazgo incidental en una biometría hemática de rutina en un paciente de edad avanzada asintomático. Infecciones recurrentes (sinusitis, celulitis, neumonía) por neutropenia, a menudo desproporcionadas al recuento absoluto de neutrófilos por la disfunción granulocítica cualitativa concomitante del clon displásico. Petequias, equimosis o sangrado mucocutáneo por trombocitopenia, generalmente menos prominente que las otras citopenias al inicio. La exploración física suele ser poco contributoria (palidez, en ocasiones esplenomegalia leve); la presencia de adenopatías significativas debe hacer reconsiderar el diagnóstico.',
      descompensada: 'Citopenias progresivas y refractarias al soporte, fiebre neutropénica, sangrado mayor, y síntomas de progresión a leucemia mieloide aguda franca (fatiga marcada, fiebre, pérdida de peso, dolor óseo); en ocasiones se manifiesta como sarcoma mieloide (masa extramedular de blastos) antes que como blastos circulantes evidentes.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática completa con diferencial e índices eritrocitarios', utilidad: 'Documenta la(s) citopenia(s); el volumen corpuscular medio (VCM) con frecuencia está elevado (macrocitosis) sin deficiencia de vitamina B12/folato, un patrón sugestivo del diagnóstico.' },
      { prueba: 'Frotis de sangre periférica', utilidad: `Busca displasia morfológica (neutrófilos hipogranulares/hipolobulados —anomalía pseudo-Pelger-Huët—, plaquetas gigantes) y cuantifica blastos circulantes.${figBlock('Imagen 2', 'Neutrófilo normal vs. displásico', `
      <svg viewBox="0 0 560 300" role="img" aria-labelledby="neu-title neu-desc" style="width:100%;max-width:480px;display:block;margin:0 auto;">
        <title id="neu-title">Neutrófilo normal vs. displásico (anomalía pseudo-Pelger-Huët)</title>
        <desc id="neu-desc">Comparación esquemática de un neutrófilo maduro normal, con núcleo multilobulado y citoplasma con gránulos abundantes, frente a un neutrófilo displásico característico del síndrome mielodisplásico, con núcleo bilobulado (pseudo-Pelger-Huët) y citoplasma hipogranular.</desc>
        <line x1="280" y1="10" x2="280" y2="290" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text x="140" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="14" font-weight="700">NORMAL</text>
        <text x="420" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="14" font-weight="700">DISPLÁSICO</text>
        <g>
          <circle cx="140" cy="168" r="86" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
          <line x1="108" y1="128" x2="163" y2="116" stroke="var(--ink)" stroke-width="5" opacity="0.68"/>
          <line x1="163" y1="116" x2="193" y2="163" stroke="var(--ink)" stroke-width="5" opacity="0.68"/>
          <line x1="193" y1="163" x2="153" y2="203" stroke="var(--ink)" stroke-width="5" opacity="0.68"/>
          <circle cx="108" cy="128" r="19" fill="var(--ink)" opacity="0.68"/>
          <circle cx="163" cy="116" r="19" fill="var(--ink)" opacity="0.68"/>
          <circle cx="193" cy="163" r="19" fill="var(--ink)" opacity="0.68"/>
          <circle cx="153" cy="203" r="19" fill="var(--ink)" opacity="0.68"/>
          <circle cx="72" cy="150" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="76" cy="190" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="92" cy="222" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="122" cy="238" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="160" cy="240" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="195" cy="225" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="213" cy="192" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="215" cy="152" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="200" cy="118" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="175" cy="92" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="140" cy="85" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="100" cy="90" r="2.6" fill="var(--ink-dim)"/>
          <text x="140" y="266" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">Núcleo multilobulado (3-5 lóbulos)</text>
          <text x="140" y="280" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">Citoplasma con gránulos normales</text>
        </g>
        <g transform="translate(280,0)">
          <circle cx="140" cy="168" r="86" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
          <line x1="115" y1="148" x2="168" y2="173" stroke="var(--ink)" stroke-width="5" opacity="0.68"/>
          <circle cx="115" cy="148" r="25" fill="var(--ink)" opacity="0.68"/>
          <circle cx="168" cy="173" r="25" fill="var(--ink)" opacity="0.68"/>
          <circle cx="72" cy="118" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="203" cy="100" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="207" cy="222" r="2.6" fill="var(--ink-dim)"/>
          <circle cx="80" cy="228" r="2.6" fill="var(--ink-dim)"/>
          <text x="140" y="266" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">Núcleo bilobulado (pseudo-Pelger-Huët)</text>
          <text x="140" y="280" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">Citoplasma hipogranular</text>
        </g>
      </svg>`)}` },
      { prueba: 'Vitamina B12, folato, ferritina, cobre sérico, TSH', utilidad: 'Excluye causas reversibles de citopenia/displasia (deficiencia de cobre, hipotiroidismo, deficiencia de B12/folato) antes de atribuir el cuadro a un SMD.' },
      { prueba: 'Serología VIH; panel viral (parvovirus B19 si hay aplasia pura de células rojas)', utilidad: 'Excluye causas infecciosas de citopenia/displasia.' },
      { prueba: 'Eritropoyetina sérica', utilidad: 'Un nivel basal &lt;500 mU/mL predice mejor respuesta a los agentes estimulantes de la eritropoyesis, y guía la elección terapéutica en el bajo riesgo.' }
    ],
    no_invasivos: [
      { metodo: 'IPSS-R', interpretacion: 'Escala de referencia para estratificar riesgo pronóstico y guiar el tratamiento; ver Escalas.', cutoff: '0-10 puntos' },
      { metodo: 'IPSS-M', interpretacion: 'Incorpora el perfil mutacional somático; refina hasta en 46% la categoría asignada por IPSS-R.', cutoff: 'Modelo continuo' },
      { metodo: 'Estado funcional (ECOG)', interpretacion: 'Relevante para decidir intensidad terapéutica, particularmente la elegibilidad a trasplante alogénico.', cutoff: '0-4' }
    ],
    imagen: [
      { modalidad: 'Aspirado de médula ósea (tinción de Wright-Giemsa)', hallazgos: 'Cuantifica el porcentaje de blastos (define subtipo/riesgo) y evalúa displasia en ≥10% de las células de una o más líneas; estudio central para el diagnóstico.' },
      { modalidad: 'Tinción de Prusia azul (hierro) en médula ósea', hallazgos: 'Identifica sideroblastos en anillo (≥15%, o ≥5% si hay mutación de SF3B1 confirmada), criterio diagnóstico del subtipo correspondiente.' },
      { modalidad: 'Biopsia de médula ósea con inmunohistoquímica', hallazgos: 'Evalúa celularidad (hipo/normo/hipercelular), fibrosis reticulínica, y localización anormal de precursores inmaduros (ALIP); más informativa que el aspirado para cuantificar celularidad real.' },
      { modalidad: 'Cariotipo convencional (bandas G)', hallazgos: 'Identifica alteraciones citogenéticas recurrentes (del(5q), monosomía 7, trisomía 8, cariotipo complejo), componente central del IPSS-R.' },
      { modalidad: 'FISH dirigido y panel de secuenciación de nueva generación (NGS)', hallazgos: 'Detecta mutaciones somáticas recurrentes (SF3B1, TET2, ASXL1, TP53); esencial para el diagnóstico (SF3B1 permite diagnóstico con solo 5% de sideroblastos en anillo) y para el IPSS-M.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'El IPSS-R (5 variables: cariotipo, porcentaje de blastos en médula, hemoglobina, plaquetas, neutrófilos) es el estándar de referencia para estratificar el pronóstico y decidir la intensidad terapéutica; el IPSS-M (2022) incorpora el perfil mutacional somático y reclasifica a una proporción relevante de pacientes, con TP53 como el modificador de mayor peso individual.',
    escalas: [
      { nombre: 'Clasificación OMS 2022', componentes: 'Porcentaje de blastos, tipo y extensión de la displasia, citogenética, mutaciones somáticas (SF3B1, entre otras).', formula: 'Categorización morfológica-genética, sin puntaje numérico.', interpretacion: 'Define el subtipo (SMD con blastos bajos, con del(5q) aislada, con mutación de SF3B1, con exceso de blastos IB1/IB2, hipoplásico, fibrótico); es la base para elegir el tratamiento dirigido, no un score pronóstico independiente del IPSS-R.' },
      { nombre: 'IPSS-R', componentes: 'Categoría citogenética (5 grupos: muy bueno, bueno, intermedio, malo, muy malo), porcentaje de blastos en médula ósea, hemoglobina, plaquetas, recuento absoluto de neutrófilos.', formula: 'Suma ponderada de las 5 variables, 0-10 puntos. Calculadora disponible más abajo.', interpretacion: '≤1.5 muy bajo riesgo; &gt;1.5-3 bajo; &gt;3-4.5 intermedio; &gt;4.5-6 alto; &gt;6 muy alto. La mediana de supervivencia y el tiempo a transformación a LMA se reducen progresivamente con cada categoría, y guían la elección entre soporte, agentes dirigidos, hipometilantes o trasplante.' },
      { nombre: 'IPSS-M', componentes: 'Las mismas variables clínicas del IPSS-R más el perfil mutacional somático completo (NGS), con TP53 (particularmente bialélico) como el modificador individual de mayor peso.', formula: 'Modelo estadístico validado con calculadora en línea dedicada (no se resume en una tabla simple de puntos enteros).', interpretacion: 'Reclasifica hasta 46% de los pacientes respecto al IPSS-R, con mejor discriminación pronóstica; cada vez más usado para adelantar la discusión de trasplante alogénico en pacientes con fenotipo de bajo riesgo por IPSS-R pero alto riesgo molecular.' },
      { nombre: 'Criterios del International Working Group (IWG)', componentes: 'Citopenia persistente (&gt;4 meses) más displasia ≥10% en una línea, o blastos aumentados, o alteración citogenética típica, tras excluir otras causas.', formula: 'Criterios diagnósticos cualitativos, no un score.', interpretacion: 'Define cuándo es apropiado establecer el diagnóstico de SMD, especialmente en casos límite (citopenia idiopática de significado incierto, displasia idiopática de significado incierto, hematopoyesis clonal de potencial indeterminado).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'SMD de bajo riesgo',
      color: '#3f6b52',
      definicion: 'Categoría de riesgo IPSS-R muy bajo/bajo (o intermedio con puntaje bajo), que incluye morfológicamente el SMD con blastos bajos (displasia de línea única o multilínea), el SMD con del(5q) aislada, y el SMD con mutación de SF3B1 (sideroblastos en anillo); &lt;5% de blastos en médula ósea, curso clínico dominado por citopenias más que por riesgo inminente de transformación leucémica.',
      fisiopatologia: 'Predomina la hematopoyesis ineficaz con apoptosis intramedular excesiva sobre la proliferación clonal descontrolada. En el SMD con del(5q), la haploinsuficiencia de genes en la región delecionada (incluyendo RPS14, que produce un fenotipo de "ribosomopatía" adquirida) explica la anemia macrocítica característica y la respuesta específica a lenalidomida. En el SMD SF3B1-mutado, el splicing aberrante de ARN altera la síntesis de proteínas mitocondriales del metabolismo del hierro, generando los sideroblastos en anillo.',
      epidemiologia: 'Representa la mayoría de los casos de SMD al diagnóstico (~70-80%); la variante con del(5q) aislada predomina en mujeres de edad intermedia, una excepción a la epidemiología general de predominio masculino del SMD.',
      factores_riesgo: ['Los mismos factores generales del tema (edad, quimioterapia previa)', 'Sin factor específico adicional distintivo de este subgrupo de riesgo'],
      clinica: 'Anemia sintomática (fatiga, disnea de esfuerzo) como manifestación dominante, con frecuencia dependiente de transfusiones crónicas; neutropenia y trombocitopenia generalmente más leves que en el alto riesgo, aunque pueden predominar en subtipos específicos.',
      criterios_dx: 'Citopenia(s) persistente(s) (&gt;4 meses) más displasia morfológica ≥10% en una o más líneas en médula ósea, o alteración citogenética típica, o mutación de SF3B1 con ≥5% sideroblastos en anillo, con &lt;5% blastos en médula y &lt;1% en sangre periférica, tras excluir otras causas.',
      laboratorio: 'Igual que el panel general del tema, con FISH/cariotipo dirigido a del(5q) y NGS dirigido a SF3B1 cuando la morfología sugiere sideroblastos en anillo.',
      imagen: `Aspirado/biopsia de médula ósea con tinción de hierro (sideroblastos en anillo) y cariotipo; en la variante del(5q), el cariotipo muestra la deleción como anormalidad única o con una alteración adicional (excepto monosomía 7/del(7q), que reclasifica el caso).${figBlock('Imagen 3', 'Sideroblastos en anillo (tinción de Perls/Prusia azul)', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ring_Sideroblast_smear_2010-01-13.JPG/960px-Ring_Sideroblast_smear_2010-01-13.JPG" alt="Frotis de médula ósea con tinción de Perls (azul de Prusia) mostrando sideroblastos en anillo: gránulos de hierro dispuestos en anillo alrededor del núcleo de precursores eritroides." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Depósito anormal de hierro en las mitocondrias de precursores eritroides, formando un anillo alrededor del núcleo. Paulo Henrique Orlandi Mourao, Wikimedia Commons, CC BY-SA 3.0.</p>`)}`,
      complementarios: 'IPSS-R/IPSS-M para confirmar la categoría de bajo riesgo.',
      dx_diferencial: 'Deficiencia de cobre, exposición a zinc, deficiencia de vitamina B12/folato, hipotiroidismo, consumo de alcohol, infección por VIH, mielodisplasia inducida por fármacos (micofenolato, ácido valproico), otras neoplasias mieloides (LMMC si hay monocitosis, mielofibrosis primaria si hay fibrosis marcada).',
      tx_medico: 'Soporte transfusional guiado por síntomas (no por un umbral fijo de hemoglobina), con vigilancia de sobrecarga de hierro ante transfusiones repetidas (ver Complicaciones).',
      tx_farmacologico: 'Agentes estimulantes de la eritropoyesis (epoetina alfa/darbepoetina) de primera línea si la eritropoyetina sérica es &lt;500 mU/mL y el requerimiento transfusional es bajo; lenalidomida 10 mg/día por 21 de 28 días en el SMD con del(5q) sintomático (respuesta eritroide independiente de transfusión en la mayoría, con vigilancia de neutropenia/trombocitopenia esperadas); luspatercept (agente madurativo eritroide) de primera o segunda línea en el SMD SF3B1-mutado/con sideroblastos en anillo dependiente de transfusiones; agentes hipometilantes (azacitidina, decitabina) si falla lo anterior o hay citopenias multilínea sintomáticas.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas no indicado de rutina en el bajo riesgo; se reserva para progresión, falla a tratamiento, o alto riesgo genómico por IPSS-M pese a fenotipo de bajo riesgo por IPSS-R.',
      criterios_uci: 'No aplica de forma directa, salvo complicación aguda intercurrente (sangrado mayor, sepsis neutropénica).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Considerar trasplante temprano si el IPSS-M identifica alto riesgo molecular (p. ej. mutación de TP53) pese a un fenotipo de bajo riesgo por IPSS-R, dado el peor pronóstico real de ese subgrupo.',
      seguimiento_hospitalario: 'Vigilancia de toxicidad hematológica de lenalidomida/hipometilantes (citopenias iniciales esperadas, no necesariamente indicación de suspender).',
      seguimiento_ambulatorio: 'Biometría hemática seriada, reevaluación de médula ósea si hay cambio clínico o de laboratorio sugestivo de progresión, vigilancia de sobrecarga de hierro (ferritina, RM hepática/cardiaca) si hay politransfusión.',
      pronostico: 'Mediana de supervivencia de años (variable según la subcategoría IPSS-R específica); riesgo de transformación a LMA bajo pero no nulo, mayor en presencia de mutaciones de alto riesgo (TP53, mutaciones múltiples).',
      algoritmo: ['Citopenia(s) persistente(s) sin otra causa → aspirado/biopsia de médula ósea', 'Confirmar displasia/blastos &lt;5%/citogenética → clasificar por OMS 2022', 'Calcular IPSS-R/IPSS-M → confirma bajo riesgo', 'Sintomático por anemia → EPO sérica: si &lt;500 → agente estimulante de la eritropoyesis', 'del(5q) → lenalidomida; SF3B1/sideroblastos en anillo → luspatercept', 'Falla a lo anterior → agente hipometilante']
    },
    {
      nombre: 'SMD de alto riesgo',
      color: '#8c3a34',
      definicion: 'Categoría de riesgo IPSS-R alto/muy alto, que incluye morfológicamente el SMD con exceso de blastos (5-9% en médula o 2-4% en sangre; o 10-19% en médula o 5-19% en sangre, o presencia de bastones de Auer) y el SMD con cariotipo de muy alto riesgo (monosomía 7, cariotipo complejo ≥3 alteraciones); representa un continuo biológico con la leucemia mieloide aguda, de la que se distingue arbitrariamente por el umbral de 20% de blastos.',
      fisiopatologia: 'Mayor carga mutacional y con frecuencia mutaciones de alto riesgo (TP53 bialélico, RUNX1, ASXL1, mutaciones múltiples cooperantes) que confieren ventaja proliferativa al clon sobre la maduración, con expansión progresiva del compartimento blástico; el cariotipo complejo (≥3 alteraciones) y la monosomía 7 reflejan inestabilidad genómica extensa.',
      epidemiologia: 'Representa una minoría de los casos al diagnóstico, pero una proporción creciente entre los SMD secundarios/relacionados a tratamiento (t-MDS), que con frecuencia se presentan ya con exceso de blastos y cariotipo complejo.',
      factores_riesgo: ['Antecedente de quimioterapia/radioterapia previa (t-MDS)', 'Mutación de TP53', 'Cariotipo complejo', 'Edad avanzada'],
      clinica: 'Citopenias más profundas y sintomáticas que en el bajo riesgo, con mayor tasa de infecciones y sangrado; puede debutar ya con blastos circulantes o manifestaciones de leucemia mieloide aguda franca si progresa rápidamente.',
      criterios_dx: `Blastos en médula ósea 5-19% (o 2-19% en sangre periférica) sin cumplir el umbral de LMA (≥20% blastos, salvo alteraciones citogenéticas/moleculares definitorias de LMA independientemente del porcentaje), con o sin bastones de Auer (su presencia clasifica automáticamente en la categoría de mayor riesgo, independientemente del porcentaje exacto).${figBlock('Imagen 4', 'Blastos mieloides con bastones de Auer', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Two_myeloblasts_with_Auer_rods.jpg" alt="Dos mieloblastos con un bastón de Auer prominente cada uno, teñidos con Wright-Giemsa." style="width:100%;max-width:280px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Dos mieloblastos con un bastón de Auer prominente cada uno (tinción de Wright-Giemsa); su presencia reclasifica automáticamente el caso en la categoría de mayor riesgo, independientemente del porcentaje exacto de blastos. The Armed Forces Institute of Pathology (AFIP), Wikimedia Commons, dominio público.</p>`)}`,
      laboratorio: 'Igual que el panel general; NGS obligado para descartar mutaciones definitorias de LMA (NPM1, alteraciones de CBF) que reclasificarían el caso pese al porcentaje de blastos.',
      imagen: 'Aspirado/biopsia de médula ósea con recuento diferencial de 500 células para el porcentaje exacto de blastos; cariotipo/FISH para estratificación citogenética completa del IPSS-R.',
      complementarios: 'IPSS-R/IPSS-M para confirmar la categoría de alto riesgo; tipificación HLA temprana del paciente y de posibles donantes ante la eventual necesidad de trasplante.',
      dx_diferencial: 'Leucemia mieloide aguda franca (≥20% blastos o alteración citogenética/molecular definitoria), leucemia mielomonocítica crónica si hay monocitosis absoluta ≥0.5 x10⁹/L asociada.',
      tx_medico: 'Discusión temprana y explícita de objetivos de tratamiento (curativo con trasplante vs. control de la enfermedad), dado el pronóstico limitado sin terapia intensiva.',
      tx_farmacologico: 'Agente hipometilante (azacitidina 75 mg/m²/día por 7 días cada 28 días, o decitabina) como tratamiento estándar de primera línea si no es candidato a trasplante o mientras se prepara este; quimioterapia de inducción tipo LMA (esquema 7+3) en casos seleccionados jóvenes/aptos como puente a trasplante; venetoclax combinado con hipometilante, esquema en uso creciente extrapolado de la LMA.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas: única opción potencialmente curativa, indicado en todo paciente elegible (edad fisiológica, comorbilidades, disponibilidad de donante) por el pronóstico de este subgrupo; idealmente tras citorreducción con hipometilante si hay exceso de blastos significativo.',
      criterios_uci: 'Sepsis neutropénica, sangrado mayor, síndrome de lisis tumoral con el inicio de citorreducción.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Candidato preferente a trasplante alogénico temprano en todo paciente elegible, dado el pronóstico desfavorable sin él; es el subtipo con la indicación de trasplante más clara de las 4 tarjetas de esta sección.',
      seguimiento_hospitalario: 'Vigilancia de citopenias profundas durante la citorreducción, profilaxis antimicrobiana, soporte transfusional intensivo.',
      seguimiento_ambulatorio: 'Evaluación periódica de respuesta (médula ósea seriada), preparación/seguimiento del proceso de trasplante.',
      pronostico: 'Mediana de supervivencia corta (meses a pocos años) sin trasplante; el trasplante alogénico ofrece la única posibilidad realista de curación, con una mortalidad relacionada al procedimiento no despreciable que debe discutirse explícitamente.',
      algoritmo: ['Blastos 5-19% en médula (o bastones de Auer) → confirma exceso de blastos', 'NGS: descartar mutaciones definitorias de LMA', 'IPSS-R/IPSS-M confirma alto riesgo', 'Evaluar elegibilidad a trasplante alogénico + tipificación HLA temprana', 'Elegible → hipometilante como puente + trasplante alogénico', 'No elegible → hipometilante como tratamiento de control de la enfermedad']
    },
    {
      nombre: 'SMD hipoplásico',
      color: '#5c6b8c',
      definicion: 'Subtipo poco frecuente (~10-15% de los SMD) definido por celularidad de la médula ósea &lt;25% (o menor al 25% del rango esperado para la edad), con displasia y/o citogenética/molecular característica de SMD que lo distingue de la anemia aplásica verdadera; representa un área de superposición diagnóstica genuina entre ambas entidades.',
      fisiopatologia: 'Combina hematopoyesis ineficaz clonal (igual que el resto de los SMD) con un componente de destrucción inmunomediada de la célula madre hematopoyética, mecanismo compartido con la anemia aplásica y mediado por linfocitos T citotóxicos autorreactivos, lo que explica por qué una fracción de estos pacientes responde a inmunosupresión, a diferencia del resto de los SMD.',
      epidemiologia: 'Más frecuente en pacientes más jóvenes que el SMD típico, con mayor prevalencia relativa de trisomía 8 y menor prevalencia relativa de monosomía 7 comparado con el SMD normo/hipercelular.',
      factores_riesgo: ['Los mismos factores generales del tema', 'Posible superposición con síndromes de falla medular congénita en el paciente joven (justifica descartar Fanconi/telomeropatías si el contexto lo sugiere)'],
      clinica: 'Citopenias con frecuencia más profundas de lo esperado por el porcentaje de blastos, reflejo de la hipocelularidad medular; el cuadro clínico puede ser indistinguible del de la anemia aplásica al momento de la presentación.',
      criterios_dx: 'Celularidad medular &lt;25% (o &lt;25% del esperado para la edad) más displasia morfológica significativa y/o alteración citogenética/molecular típica de SMD, que la distingue de la anemia aplásica (cariotipo habitualmente normal, sin displasia significativa).',
      laboratorio: 'Igual que el panel general; estudio de fragilidad cromosómica con diepoxibutano si hay sospecha de anemia de Fanconi subyacente en el paciente joven.',
      imagen: `Biopsia de médula ósea (más informativa que el aspirado para cuantificar la celularidad real) con evaluación cuidadosa de displasia residual en el componente hematopoyético escaso; cariotipo/NGS para documentar la clonalidad que distingue de la aplasia verdadera.`,
      complementarios: 'Citometría de flujo para clonas de hemoglobinuria paroxística nocturna (HPN), frecuentemente coexistentes en el espectro de falla medular hipoplásica.',
      dx_diferencial: `Anemia aplásica idiopática, hemoglobinuria paroxística nocturna, síndromes de falla medular congénita (Fanconi, disqueratosis congénita) en el paciente joven, mielofibrosis con médula "seca" al aspirado pero hipercelular en la biopsia (lo opuesto de este subtipo).${figBlock('Tabla 1', 'SMD hipoplásico vs. anemia aplásica idiopática', hipoplasicoTable)}`,
      tx_medico: 'Soporte transfusional similar al resto de los SMD.',
      tx_farmacologico: 'Terapia inmunosupresora (globulina antitimocítica más ciclosporina) como opción específica de este subtipo, con tasas de respuesta razonables en pacientes seleccionados (jóvenes, HLA-DR15 positivo, clona de HPN presente, hipocelularidad marcada); agentes estimulantes de la eritropoyesis o hipometilantes según el fenotipo de riesgo IPSS-R si la inmunosupresión no es apropiada o falla.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas si hay falla a inmunosupresión o alto riesgo por IPSS-R/IPSS-M, igual que en el resto de los subtipos.',
      criterios_uci: 'Sepsis neutropénica grave, sangrado mayor por trombocitopenia profunda.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Igual que en los demás subtipos, según categoría de riesgo IPSS-R/IPSS-M y falla a tratamiento previo.',
      seguimiento_hospitalario: 'Vigilancia de toxicidad de la globulina antitimocítica (reacciones de hipersensibilidad, enfermedad del suero) si se administra.',
      seguimiento_ambulatorio: 'Reevaluación de médula ósea para documentar respuesta a inmunosupresión, vigilancia de recaída/evolución clonal.',
      pronostico: 'Variable; los pacientes que responden a inmunosupresión tienen un curso más favorable que el esperado para un SMD normo/hipercelular de riesgo equivalente.',
      algoritmo: ['Citopenias + médula hipocelular (&lt;25%) → biopsia de médula ósea para diferenciar de aplasia verdadera', 'Displasia/citogenética/molecular presente → confirma SMD hipoplásico', 'Descartar HPN por citometría de flujo', 'Candidato a inmunosupresión (joven, HLA-DR15+, clona HPN+) → globulina antitimocítica + ciclosporina', 'No candidato o falla → tratamiento según IPSS-R (igual que SMD típico)', 'Falla a inmunosupresión o alto riesgo → trasplante alogénico']
    },
    {
      nombre: 'SMD relacionado a tratamiento (t-MDS)',
      color: '#6b4a2e',
      definicion: 'Neoplasia mieloide que se desarrolla como complicación tardía de la quimioterapia y/o radioterapia previas administradas por otra neoplasia (u ocasionalmente por enfermedad autoinmune); se agrupa junto con la LMA relacionada a tratamiento bajo el término "neoplasias mieloides relacionadas a terapia" por compartir fisiopatología y pronóstico adverso.',
      fisiopatologia: 'Dos patrones principales según el agente causal: (1) relacionado a agentes alquilantes o radioterapia, con latencia larga (5-7 años), típicamente precedido por una fase displásica, y asociado a cariotipo complejo o pérdida de material de los cromosomas 5 y/o 7; (2) relacionado a inhibidores de topoisomerasa II, con latencia corta (1-3 años), presentación frecuente como leucemia franca sin fase displásica previa, y asociado a reordenamientos del gen MLL/KMT2A (11q23) o del gen RUNX1.',
      epidemiologia: 'Representa ~10-15% de todos los SMD/LMA de nuevo diagnóstico; el riesgo acumulado tras quimioterapia por linfoma, cáncer de mama o tumores germinales es de los mejor documentados.',
      factores_riesgo: ['Dosis acumulada de agentes alquilantes', 'Uso de inhibidores de topoisomerasa II', 'Radioterapia con irradiación de médula ósea activa', 'Quimioterapia combinada con radioterapia', 'Predisposición germinal subyacente no reconocida al momento de la terapia primaria'],
      clinica: 'Igual que el resto de los SMD, pero con mayor frecuencia de presentación como citopenias graves o ya con exceso de blastos al diagnóstico, dado el sesgo hacia cariotipos de alto riesgo.',
      criterios_dx: 'Criterios morfológicos/citogenéticos habituales de SMD, más el antecedente documentado de quimioterapia/radioterapia previa dentro de una ventana de latencia compatible.',
      laboratorio: 'Igual que el panel general, con énfasis en el cariotipo completo (alta prevalencia de cariotipo complejo) y NGS (frecuente mutación de TP53).',
      imagen: 'Aspirado/biopsia de médula ósea igual que en el resto de los subtipos; revisión de estudios de imagen previos si hubo radioterapia, para documentar el campo irradiado.',
      complementarios: 'IPSS-R/IPSS-M, con la advertencia de que ambas escalas tienden a subestimar el riesgo real en el t-MDS por su biología intrínsecamente más agresiva.',
      dx_diferencial: 'Recaída/persistencia de la neoplasia original (debe descartarse siempre antes de atribuir las citopenias al t-MDS), mielosupresión transitoria esperada por quimioterapia reciente sin neoplasia mieloide clonal establecida.',
      tx_medico: 'Igual que el resto de los SMD, con umbral bajo para discusión temprana de trasplante dado el pronóstico intrínsecamente adverso de esta categoría.',
      tx_farmacologico: 'Agente hipometilante como tratamiento estándar (igual que en el alto riesgo), con tasas de respuesta generalmente inferiores a las del SMD de novo equivalente.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas considerado precozmente en todo paciente elegible, dado que el t-MDS se comporta como una categoría de alto riesgo independientemente del porcentaje de blastos al diagnóstico.',
      criterios_uci: 'Igual que en el alto riesgo (sepsis neutropénica, sangrado mayor).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Indicación temprana en todo paciente elegible, con la misma lógica que el SMD de alto riesgo; el antecedente de neoplasia previa no es, por sí solo, contraindicación si esta está controlada.',
      seguimiento_hospitalario: 'Igual que el resto de los subtipos según el fenotipo de riesgo.',
      seguimiento_ambulatorio: 'Vigilancia conjunta con el equipo de oncología que trató la neoplasia primaria; reevaluación de médula ósea seriada.',
      pronostico: 'El más desfavorable de las 4 tarjetas de esta sección en términos generales, por la mayor prevalencia de cariotipo complejo y mutación de TP53, independientemente de la categoría IPSS-R calculada.',
      algoritmo: ['Citopenias nuevas en paciente con quimioterapia/radioterapia previa → aspirado/biopsia de médula ósea', 'Descartar recaída de la neoplasia original primero', 'Confirmar SMD → cariotipo completo + NGS (buscar TP53)', 'Todo paciente elegible → evaluación temprana de trasplante alogénico, independientemente del IPSS-R', 'Puente con hipometilante si hay exceso de blastos', 'No elegible a trasplante → hipometilante como tratamiento de control']
    },
    {
      nombre: 'Transformación a leucemia mieloide aguda',
      color: '#7a1f3d',
      definicion: 'Complicación transversal que puede ocurrir sobre cualquiera de los 4 subtipos de esta sección (ver cada tarjeta), con mayor frecuencia y rapidez en el alto riesgo y el t-MDS: progresión del clon mielodisplásico a leucemia mieloide aguda franca, definida por ≥20% de blastos en médula ósea o sangre periférica (o alteraciones citogenéticas/moleculares definitorias de LMA independientemente del porcentaje).',
      fisiopatologia: 'No repite el mecanismo de base de cada subtipo (ya descrito en su tarjeta); refleja la adquisición secuencial de mutaciones cooperantes adicionales (particularmente la pérdida bialélica de TP53, o mutaciones de RAS/FLT3) por el clon ya establecido, que le confieren una ventaja proliferativa decisiva sobre la maduración.',
      epidemiologia: 'El riesgo acumulado a 5 años varía ampliamente según la categoría IPSS-R (desde &lt;5% en muy bajo riesgo hasta &gt;80% en muy alto riesgo); es la causa de muerte más frecuente en el SMD de alto riesgo no trasplantado.',
      factores_riesgo: ['Categoría IPSS-R/IPSS-M de alto riesgo', 'Mutación de TP53 (particularmente bialélica)', 'Cariotipo complejo o monosomía 7', 'Blastos en médula ósea ya elevados', 'SMD relacionado a tratamiento (t-MDS)'],
      clinica: 'Empeoramiento progresivo de las citopenias, aparición de blastos circulantes, y con frecuencia los síntomas sistémicos típicos de leucemia aguda (fiebre, pérdida de peso, dolor óseo); en ocasiones se manifiesta como sarcoma mieloide (masa extramedular de blastos).',
      criterios_dx: 'Documentación de ≥20% de blastos en médula ósea o sangre periférica en un paciente con SMD ya conocido, o aparición de una alteración citogenética/molecular definitoria de LMA independientemente del porcentaje de blastos.',
      laboratorio: 'Biometría hemática con blastos circulantes; NGS repetido para documentar la evolución clonal (comparación con el perfil mutacional basal si está disponible).',
      imagen: 'Aspirado/biopsia de médula ósea de reevaluación con recuento diferencial completo; cariotipo repetido (la evolución citogenética, con aparición de nuevas alteraciones, es en sí misma un marcador de progresión incluso antes de alcanzar el umbral de blastos de LMA).',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Aumento transitorio de blastos por un proceso infeccioso/inflamatorio intercurrente (regeneración medular tras supresión), que debe descartarse con una reevaluación clínica antes de etiquetar la progresión como definitiva.',
      tx_medico: 'Reevaluación completa del objetivo terapéutico (curativo vs. paliativo) según edad, comorbilidades y disponibilidad de donante, exactamente igual que en la LMA de novo.',
      tx_farmacologico: 'Manejo idéntico al de la leucemia mieloide aguda: quimioterapia de inducción intensiva en el paciente apto, o agente hipometilante (con o sin venetoclax) en el paciente no apto para intensidad completa.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas si se alcanza remisión y el paciente es elegible; es la única opción potencialmente curativa en este punto.',
      criterios_uci: 'Síndrome de lisis tumoral al iniciar citorreducción, leucostasis si hay hiperleucocitosis blástica marcada, sepsis neutropénica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Elegibilidad evaluada igual que en la LMA de novo; el antecedente de SMD previo no contraindica el trasplante pero sí ensombrece el pronóstico postrasplante frente a la LMA de novo equivalente.',
      seguimiento_hospitalario: 'Igual que el manejo hospitalario estándar de la leucemia mieloide aguda de nuevo diagnóstico.',
      seguimiento_ambulatorio: 'Igual que el seguimiento post-tratamiento estándar de LMA, con vigilancia adicional de recaída dado el antecedente de SMD.',
      pronostico: 'Peor que el de la LMA de novo equivalente, por el cariotipo/perfil mutacional habitualmente más adverso y la menor reserva hematopoyética de fondo tras el SMD previo.',
      algoritmo: ['SMD conocido con empeoramiento clínico/citopenias → biometría + aspirado de médula ósea de reevaluación', 'Blastos ≥20% o alteración definitoria de LMA → confirma transformación', 'Descartar causa reactiva transitoria de blastos elevados', 'Evaluar aptitud para intensidad completa (edad, comorbilidades, donante disponible)', 'Apto → inducción intensiva + trasplante si remisión', 'No apto → hipometilante ± venetoclax']
    },
    {
      nombre: 'Neutropenia febril / infecciones recurrentes',
      color: '#966b35',
      definicion: 'Complicación frecuente sobre cualquiera de los 4 subtipos de esta sección (ver cada tarjeta), agravada por la disfunción granulocítica cualitativa característica del SMD (que hace que las infecciones ocurran incluso con un recuento absoluto de neutrófilos no tan bajo como en la neutropenia posquimioterapia): fiebre en el contexto de neutropenia, o infecciones recurrentes sin fiebre documentada por la propia disfunción inmune.',
      fisiopatologia: 'A la neutropenia cuantitativa (por hematopoyesis ineficaz del compartimento mieloide) se suma un defecto cualitativo intrínseco del clon displásico: quimiotaxis, fagocitosis y capacidad microbicida reducidas, independientemente del recuento absoluto de neutrófilos.',
      epidemiologia: 'Las infecciones son una causa de muerte frecuente en el SMD, particularmente en el alto riesgo y durante el tratamiento con agentes hipometilantes, que producen citopenias iniciales esperadas antes de la respuesta.',
      factores_riesgo: ['Neutropenia profunda (&lt;500/µL)', 'Tratamiento activo con agente hipometilante o inmunosupresor', 'Edad avanzada y comorbilidades', 'Dispositivos invasivos (catéteres venosos centrales)'],
      clinica: 'Fiebre con o sin foco infeccioso identificable; dada la disfunción granulocítica, los signos clásicos de inflamación (formación de pus, infiltrado radiológico franco) pueden estar atenuados pese a infección grave subyacente.',
      criterios_dx: 'Fiebre (≥38.3°C única o ≥38.0°C sostenida por 1 hora) en un paciente con recuento absoluto de neutrófilos &lt;500/µL (o &lt;1000/µL con descenso esperado a &lt;500/µL en 48 horas).',
      laboratorio: 'Hemocultivos periféricos y de cada lumen de catéter central si aplica, urocultivo, biometría hemática, función renal/hepática, lactato.',
      imagen: 'Radiografía de tórax si hay síntomas respiratorios; TC dirigida según el foco clínico sospechado.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Fiebre tumoral/paraneoplásica (diagnóstico de exclusión, solo tras descartar foco infeccioso), reacción a hemoderivados o fármacos.',
      tx_medico: 'Precauciones estándar, evaluación clínica dirigida a foco.',
      tx_farmacologico: 'Antibiótico empírico de amplio espectro con cobertura antipseudomónica (p. ej. piperacilina-tazobactam, cefepime, o un carbapenémico según riesgo/alergia) iniciado dentro de la primera hora, ajustado según cultivos; considerar cobertura antifúngica empírica si la fiebre persiste &gt;96 horas pese al antibiótico de amplio espectro; factor estimulante de colonias de granulocitos (G-CSF) en casos seleccionados de neutropenia profunda prolongada, sin uso rutinario en todo paciente con SMD.',
      tx_intervencionista: 'Retiro del catéter venoso central si hay evidencia de infección asociada al dispositivo no controlada con antibiótico.',
      criterios_uci: 'Sepsis con datos de choque, inestabilidad hemodinámica, necesidad de soporte vasopresor.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la resolución de la fiebre, reevaluación a las 48-72 horas para ajustar/escalar/desescalar el antibiótico según cultivos y evolución clínica.',
      seguimiento_ambulatorio: 'Educación sobre signos de alarma para buscar atención inmediata ante fiebre; profilaxis antimicrobiana en casos seleccionados de neutropenia profunda recurrente.',
      pronostico: 'La mortalidad de la neutropenia febril no tratada oportunamente es alta; con manejo apropiado, la mayoría de los episodios se resuelve sin secuela.',
      algoritmo: ['Fiebre + ANC &lt;500/µL → hemocultivos + evaluación de foco', 'Iniciar antibiótico empírico de amplio espectro dentro de la primera hora, sin esperar cultivos', 'Reevaluar a las 48-72h según cultivos/evolución', 'Persistencia &gt;96h sin foco → agregar cobertura antifúngica empírica', 'Datos de choque → manejo en UCI']
    },
    {
      nombre: 'Sangrado por trombocitopenia',
      color: '#5c3d5c',
      definicion: 'Complicación frecuente sobre cualquiera de los 4 subtipos de esta sección (ver cada tarjeta), agravada por la disfunción plaquetaria cualitativa característica del SMD (plaquetas grandes/hipogranulares con función alterada, independientemente del recuento): sangrado mucocutáneo o, con menor frecuencia, hemorragia mayor.',
      fisiopatologia: 'A la trombocitopenia cuantitativa (megacariopoyesis ineficaz, con frecuencia megacariocitos hipolobulados/micromegacariocitos displásicos) se suma un defecto cualitativo funcional de las plaquetas circulantes, por lo que el riesgo hemorrágico no se correlaciona linealmente con el recuento plaquetario aislado.',
      epidemiologia: 'La trombocitopenia significativa (&lt;50,000/µL) está presente en una proporción relevante de los SMD, sobre todo en el alto riesgo y el hipoplásico.',
      factores_riesgo: ['Trombocitopenia profunda (&lt;20,000/µL)', 'Disfunción plaquetaria cualitativa concomitante', 'Uso de antiagregantes/anticoagulantes por otra indicación', 'Fiebre/infección activa'],
      clinica: 'Petequias, equimosis, epistaxis, gingivorragia, menorragia; sangrado mayor (gastrointestinal, intracraneal) infrecuente pero posible con trombocitopenia muy profunda o disfunción plaquetaria marcada.',
      criterios_dx: 'Clínico, con recuento plaquetario confirmatorio; el grado de sangrado no siempre se correlaciona con el recuento aislado, por lo que la evaluación clínica es central.',
      laboratorio: 'Biometría hemática con recuento plaquetario, frotis de sangre periférica (excluir seudotrombocitopenia por agregación in vitro), tiempos de coagulación si se sospecha coagulopatía concomitante.',
      imagen: 'TC de cráneo si hay sospecha de sangrado intracraneal; según el sitio de sangrado sospechado.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Coagulopatía concomitante (déficit de factores, coagulación intravascular diseminada si hay transformación a leucemia promielocítica-like), efecto de antiagregantes/anticoagulantes.',
      tx_medico: 'Evitar antiagregantes/AINE innecesarios; medidas locales de hemostasia para sangrado mucocutáneo menor (compresión, ácido tranexámico tópico).',
      tx_farmacologico: 'Ácido tranexámico oral/IV para sangrado mucocutáneo significativo; agonistas del receptor de trombopoyetina (romiplostim, eltrombopag) en casos seleccionados de trombocitopenia sintomática de bajo riesgo, con vigilancia estrecha del porcentaje de blastos por la preocupación teórica de estimular la proliferación del clon mielodisplásico.',
      tx_intervencionista: 'Transfusión de concentrado plaquetario ante sangrado activo significativo o antes de un procedimiento invasivo (umbral habitual &lt;50,000/µL para procedimientos mayores, &lt;10,000-20,000/µL profiláctico en ausencia de sangrado/procedimiento y sin otros factores de riesgo).',
      criterios_uci: 'Sangrado mayor con inestabilidad hemodinámica, sangrado intracraneal.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de nuevos sitios de sangrado, recuento plaquetario seriado durante el episodio agudo.',
      seguimiento_ambulatorio: 'Educación sobre signos de alarma de sangrado, evitar fármacos que alteren la función plaquetaria salvo indicación imperiosa.',
      pronostico: 'El sangrado mucocutáneo menor es manejable con medidas locales/transfusión; el sangrado mayor (particularmente intracraneal) es una causa reconocida de mortalidad en el SMD avanzado.',
      algoritmo: ['Sangrado mucocutáneo o plaquetas muy bajas → biometría + frotis (excluir seudotrombocitopenia)', 'Sangrado activo significativo o previo a procedimiento → transfusión de plaquetas según umbral', 'Sangrado mucocutáneo persistente → ácido tranexámico', 'Trombocitopenia sintomática crónica de bajo riesgo → considerar agonista de trombopoyetina con vigilancia de blastos', 'Sangrado mayor/inestabilidad → manejo en UCI']
    },
    {
      nombre: 'Sobrecarga de hierro transfusional',
      color: '#8a6a1f',
      definicion: 'Complicación crónica que puede desarrollarse sobre cualquiera de los 4 subtipos de esta sección (ver cada tarjeta) en el paciente con dependencia transfusional prolongada, con mayor relevancia clínica en el bajo riesgo por la mayor expectativa de vida durante la cual acumular hierro: depósito progresivo de hierro en órganos (hígado, corazón, glándulas endocrinas) por la ausencia de un mecanismo fisiológico de excreción activa del exceso.',
      fisiopatologia: 'Cada unidad de concentrado eritrocitario aporta ~200-250 mg de hierro; sin una vía de excreción regulada, el hierro en exceso se deposita progresivamente más allá de la capacidad de unión de la transferrina, generando hierro libre no unido a transferrina que promueve daño oxidativo tisular, predominantemente hepático, cardiaco y endocrino (páncreas, hipófisis, gónadas).',
      epidemiologia: 'Riesgo clínicamente relevante a partir de aproximadamente 20-30 unidades transfundidas acumuladas (variable según la reserva basal de cada paciente); más relevante en el SMD de bajo riesgo por la mayor supervivencia disponible para acumular la sobrecarga.',
      factores_riesgo: ['Politransfusión sostenida (≥20-30 unidades acumuladas)', 'SMD de bajo riesgo con larga supervivencia esperada', 'Ausencia de quelación profiláctica'],
      clinica: 'Habitualmente asintomática en fases tempranas (detectada por laboratorio antes que por clínica); en fases avanzadas, disfunción hepática (fibrosis/cirrosis), insuficiencia cardiaca (miocardiopatía restrictiva/dilatada por depósito, ver el tema de Miocardiopatías para el detalle de esa entidad), y endocrinopatías (diabetes, hipogonadismo, hipotiroidismo).',
      criterios_dx: 'Ferritina sérica seriada en ascenso (habitualmente &gt;1000 ng/mL como umbral de alerta para iniciar quelación, en el contexto de politransfusión documentada) más confirmación cuantitativa por RM (T2*) si hay duda diagnóstica o para guiar la intensidad de la quelación.',
      laboratorio: 'Ferritina sérica seriada, saturación de transferrina; función hepática.',
      imagen: 'Resonancia magnética con secuencia T2* hepática y cardiaca: cuantifica la concentración de hierro en cada órgano de forma no invasiva y guía la intensidad/objetivo de la quelación, superior a la ferritina sérica aislada (que puede estar falsamente elevada por inflamación concomitante).',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Elevación de ferritina por inflamación/infección activa concomitante (reactante de fase aguda), hemocromatosis hereditaria concomitante no relacionada (infrecuente pero posible).',
      tx_medico: 'Minimizar transfusiones innecesarias mediante el uso apropiado de agentes que reduzcan el requerimiento transfusional (ver la tarjeta de bajo riesgo).',
      tx_farmacologico: 'Quelación de hierro con deferasirox oral (agente de elección por conveniencia posológica) o deferoxamina subcutánea/IV (alternativa, especialmente si hay intolerancia o insuficiencia renal que limite deferasirox), iniciada típicamente con ferritina &gt;1000 ng/mL y politransfusión sostenida, con el objetivo de mantener la ferritina por debajo de ese umbral y prevenir/revertir el daño orgánico.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'No aplica de forma directa, salvo descompensación de un órgano ya dañado por la sobrecarga (p. ej. insuficiencia cardiaca aguda).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a esta complicación, aunque la sobrecarga de hierro no controlada es un factor de mal pronóstico si posteriormente se requiere trasplante alogénico.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo por la complicación orgánica ya establecida.',
      seguimiento_ambulatorio: 'Ferritina sérica cada 3 meses durante quelación activa, RM T2* periódica (aproximadamente anual) para reevaluar la carga de hierro y ajustar la dosis del quelante, vigilancia de toxicidad renal/ocular/auditiva.',
      pronostico: 'Con quelación oportuna, el daño orgánico es prevenible o parcialmente reversible; no tratada, contribuye de forma independiente a la morbimortalidad, particularmente cardiaca.',
      algoritmo: ['Politransfusión sostenida (≥20-30 unidades) → ferritina sérica seriada', 'Ferritina &gt;1000 ng/mL sostenida → confirmar con RM T2* hepática/cardiaca si hay duda', 'Iniciar quelación (deferasirox oral de elección)', 'Monitorización trimestral de ferritina + vigilancia de toxicidad del quelante', 'Reevaluación con RM T2* anual para ajustar intensidad']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia de citopenias, la profilaxis/tratamiento oportuno de infecciones y sangrado, y la reevaluación periódica del riesgo (IPSS-R/IPSS-M) son comunes a los 4 subtipos de esta sección, con matices específicos de cada uno detallados en su propia tarjeta (inmunosupresión en el hipoplásico, umbral bajo para trasplante en el alto riesgo y el t-MDS).',
    parametros: [
      'Biometría hemática seriada: frecuencia según la profundidad de las citopenias y el tratamiento activo.',
      'Vigilancia de fiebre/signos de infección: bajo umbral de sospecha por la disfunción granulocítica cualitativa, independiente del recuento absoluto de neutrófilos.',
      'Vigilancia de sangrado mucocutáneo: el riesgo no se correlaciona linealmente con el recuento plaquetario por la disfunción plaquetaria concomitante.',
      'Ferritina sérica periódica si hay politransfusión: prevención de la sobrecarga de hierro antes de que se vuelva sintomática.',
      'Reevaluación de médula ósea ante cualquier cambio clínico/de laboratorio sugestivo de progresión.'
    ],
    criterios_uci_general: 'Sepsis con datos de choque, sangrado mayor con inestabilidad hemodinámica, síndrome de lisis tumoral o leucostasis al iniciar citorreducción por transformación a LMA.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'Trasplante alogénico de células madre hematopoyéticas: única opción potencialmente curativa; indicado tempranamente en todo paciente elegible con alto riesgo por IPSS-R/IPSS-M, SMD relacionado a tratamiento, o falla a tratamiento previo. Los matices específicos de candidatura por subtipo se detallan en cada tarjeta.',
    prevencion: 'Uso racional del soporte transfusional para minimizar la sobrecarga de hierro, profilaxis/vigilancia estrecha de infecciones durante el tratamiento con hipometilantes, tamizaje familiar/asesoría genética si se identifica un síndrome de predisposición germinal, y reevaluación periódica del riesgo para no retrasar la discusión de trasplante en el paciente elegible.'
  }
};

export const compCites = {
  'SMD de bajo riesgo': { definicion: [1], tx_farmacologico: [7, 8], criterios_dx: [14] },
  'SMD de alto riesgo': { tx_farmacologico: [9], tx_intervencionista: [15] },
  'SMD hipoplásico': { tx_farmacologico: [11] },
  'SMD relacionado a tratamiento (t-MDS)': { epidemiologia: [12] },
  'Sobrecarga de hierro transfusional': { tx_farmacologico: [13] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación OMS 2022': [1], 'IPSS-R': [3], 'IPSS-M': [4], 'Criterios del International Working Group (IWG)': [14]
};
export const escalaCalc = { 'IPSS-R': 'ipssr' };
export const compGroups = [
  { title: 'Síndromes mielodisplásicos por riesgo (enfermedades)', items: ['SMD de bajo riesgo', 'SMD de alto riesgo', 'SMD hipoplásico', 'SMD relacionado a tratamiento (t-MDS)'] },
  { title: 'Complicaciones transversales (cualquier SMD)', items: ['Transformación a leucemia mieloide aguda', 'Neutropenia febril / infecciones recurrentes', 'Sangrado por trombocitopenia', 'Sobrecarga de hierro transfusional'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. Los grupos "(enfermedades)" son los 4 subtipos por riesgo; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellos, no diagnósticos independientes.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'SÍNDROMES MIELODISPLÁSICOS', color: '#2d5c47', target: 'definicion' },
  branches: [
    { title: 'Bajo riesgo', sub: 'Citopenias, IPSS-R bajo', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'del(5q)', sub: 'Lenalidomida', color: '#3f6b52', target: 'complicaciones' },
      { title: 'SF3B1 / sideroblastos en anillo', sub: 'Luspatercept', color: '#5c8a72', target: 'complicaciones' }
    ] },
    { title: 'Alto riesgo', sub: 'Exceso de blastos, IPSS-R alto', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Hipometilantes', sub: 'Azacitidina/decitabina', color: '#966b35', target: 'complicaciones' },
      { title: 'Trasplante alogénico', sub: 'Única opción curativa', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [10], imagen: [1] };
export const clasificacionCite = [3, 4];
export const seguimientoCite = [6];
