// topics/transfusion-hemoderivados/calculators.js
// 1 herramienta real:
// - Umbral y dosis de transfusión de concentrado eritrocitario: aplica la estrategia
//   restrictiva (umbral de hemoglobina ajustado por contexto clínico) y estima el número de
//   unidades y la hemoglobina postransfusión esperada (Carson JL, et al. Cochrane Database Syst
//   Rev. 2021;12(12):CD002042; Hébert PC, et al. N Engl J Med. 1999;340(6):409-417; Holst LB, et
//   al. N Engl J Med. 2014;371(15):1381-1391).

export const calculators = [
  {
    key: 'umbral-eritrocitos', title: 'Umbral y dosis de transfusión de eritrocitos', accent: '#1f5c73',
    subtitle: 'Hb actual + contexto clínico → umbral recomendado, unidades estimadas, Hb postransfusión',
    incompleteMsg: 'Ingresa la hemoglobina actual y selecciona el contexto clínico.',
    fields: [
      { name: 'hb', id: 'tx-hb', type: 'number', label: 'Hemoglobina actual (g/dL)', row: 1 },
      { name: 'objetivo', id: 'tx-objetivo', type: 'number', label: 'Hemoglobina objetivo (g/dL, opcional)', row: 1 },
      { name: 'contexto', id: 'tx-contexto', type: 'select', label: 'Contexto clínico', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'estable', label: 'Paciente estable, sin comorbilidad cardiaca' },
        { value: 'cardiopatia', label: 'Cardiopatía isquémica o cirugía ortopédica/cardiaca mayor' },
        { value: 'sangrado', label: 'Sangrado activo con inestabilidad hemodinámica' }
      ] },
      { type: 'note', text: 'Umbrales de la estrategia restrictiva: 7 g/dL (estable), 8 g/dL (cardiopatía isquémica o cirugía mayor), guiado por estabilidad hemodinámica y síntomas en el sangrado activo (no solo por número). Cada unidad de concentrado eritrocitario aumenta la Hb ~1 g/dL en un adulto promedio sin sangrado activo continuo.' }
    ],
    compute(v) {
      const hb = parseFloat(v.hb);
      if (!v.contexto || isNaN(hb)) return null;
      const umbrales = { estable: 7, cardiopatia: 8, sangrado: 10 };
      const umbral = umbrales[v.contexto];
      const transfundir = v.contexto === 'sangrado' ? true : hb < umbral;
      let unidades = null;
      let hbPost = null;
      if (transfundir) {
        const objetivo = parseFloat(v.objetivo);
        const metaHb = !isNaN(objetivo) ? objetivo : umbral;
        unidades = Math.max(1, Math.ceil(metaHb - hb));
        hbPost = hb + unidades;
      }
      return { hb, umbral, contexto: v.contexto, transfundir, unidades, hbPost };
    },
    format: r => {
      const contextoLabel = { estable: 'paciente estable', cardiopatia: 'cardiopatía isquémica/cirugía mayor', sangrado: 'sangrado activo con inestabilidad hemodinámica' }[r.contexto];
      if (r.contexto === 'sangrado') {
        return `<strong>Transfundir según estabilidad hemodinámica y síntomas</strong>, no solo por el número de Hb (${r.hb} g/dL), dado el contexto de sangrado activo. Umbral de referencia: ~10 g/dL o guiado clínicamente.`;
      }
      if (!r.transfundir) {
        return `<strong>No transfundir por ahora</strong>: Hb ${r.hb} g/dL está por encima del umbral de ${r.umbral} g/dL para ${contextoLabel}. Reevaluar según evolución clínica.`;
      }
      return `<strong>Transfundir</strong>: Hb ${r.hb} g/dL está por debajo del umbral de ${r.umbral} g/dL para ${contextoLabel}. Estimado: <strong>${r.unidades} unidad${r.unidades > 1 ? 'es' : ''}</strong> de concentrado eritrocitario, Hb postransfusión esperada ≈ <strong>${r.hbPost} g/dL</strong> (cada unidad aumenta ~1 g/dL).`;
    },
    fragment: r => r.contexto === 'sangrado' ? 'Guiado clínicamente' : (r.transfundir ? `Transfundir (${r.unidades} U)` : 'No transfundir por ahora')
  }
];
