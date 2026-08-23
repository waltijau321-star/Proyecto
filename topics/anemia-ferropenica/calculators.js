// topics/anemia-ferropenica/calculators.js
// Fórmula de Ganzoni (Ganzoni AM. Schweiz Med Wochenschr. 1970;100(7):301-303; forma moderna
// usada en la mayoría de las guías actuales) e índice de Mentzer (Mentzer WC. Lancet.
// 1973;1(7808):882).
// Ganzoni simplificado para el adulto (≥35 kg): depósito fijo de 500 mg y Hb objetivo de 15 g/dL
// por defecto, ambos editables (la variante pediátrica <35 kg usa Hb objetivo 13 g/dL y depósito
// 15 mg/kg, fuera del alcance de este tema orientado al adulto).

export const calculators = [
  {
    key: 'ganzoni', title: 'Fórmula de Ganzoni', accent: '#8c6b2d',
    subtitle: 'Déficit total de hierro corporal, para dosificar hierro intravenoso',
    incompleteMsg: 'Completa el peso y la hemoglobina actual del paciente.',
    fields: [
      { name: 'peso', id: 'ganz-peso', type: 'number', step: '0.1', label: 'Peso (kg)', placeholder: 'ej. 65', row: 'a' },
      { name: 'hbActual', id: 'ganz-hbact', type: 'number', step: '0.1', label: 'Hemoglobina actual (g/dL)', placeholder: 'ej. 9', row: 'a' },
      { name: 'hbObjetivo', id: 'ganz-hbobj', type: 'number', step: '0.1', label: 'Hemoglobina objetivo (g/dL)', placeholder: '15', row: 'b' },
      { name: 'deposito', id: 'ganz-dep', type: 'number', step: '10', label: 'Depósito de hierro a reponer (mg)', placeholder: '500', row: 'b' },
      { type: 'note', text: 'Hemoglobina objetivo (15 g/dL) y depósito (500 mg) prellenados para el adulto ≥35 kg; ajusta si tu paciente o tu criterio difieren.' }
    ],
    compute(v) {
      if (v.peso === null || v.peso === undefined || v.hbActual === null || v.hbActual === undefined) return null;
      const hbObj = (v.hbObjetivo === null || v.hbObjetivo === undefined || v.hbObjetivo === 0) ? 15 : v.hbObjetivo;
      const deposito = (v.deposito === null || v.deposito === undefined) ? 500 : v.deposito;
      if (v.hbActual >= hbObj) return { deficit: 0, sinDeficit: true };
      const deficit = Math.round(v.peso * (hbObj - v.hbActual) * 2.4 + deposito);
      return { deficit, sinDeficit: false };
    },
    format: r => r.sinDeficit
      ? 'La hemoglobina actual ya alcanza o supera el objetivo: no hay déficit que calcular con esta fórmula.'
      : `<strong>Déficit total de hierro: ${r.deficit} mg</strong>. Dosis total a administrar por vía intravenosa (en una o varias sesiones según la formulación y la dosis máxima por infusión).`,
    fragment: r => r.sinDeficit ? 'Ganzoni: sin déficit' : `Ganzoni: ${r.deficit} mg`
  },
  {
    key: 'mentzer', title: 'Índice de Mentzer', accent: '#5c6b8c',
    subtitle: 'Ferropenia vs. rasgo talasémico en la anemia microcítica leve',
    incompleteMsg: 'Completa el VCM y el recuento de eritrocitos.',
    fields: [
      { name: 'mcv', id: 'mtz-mcv', type: 'number', step: '0.1', label: 'VCM (fL)', placeholder: 'ej. 72', row: 'a' },
      { name: 'rbc', id: 'mtz-rbc', type: 'number', step: '0.01', label: 'Eritrocitos (millones/µL)', placeholder: 'ej. 5.2', row: 'a' },
      { type: 'note', text: 'Orientador, no diagnóstico: ante duda, confirmar con perfil de hierro y/o electroforesis de hemoglobina.' }
    ],
    compute(v) {
      if (v.mcv === null || v.mcv === undefined || v.rbc === null || v.rbc === undefined || v.rbc === 0) return null;
      const index = Math.round((v.mcv / v.rbc) * 10) / 10;
      let interp;
      if (index < 13) interp = 'sugestivo de rasgo talasémico (el recuento de eritrocitos está relativamente preservado pese a la microcitosis)';
      else interp = 'sugestivo de anemia ferropénica (el recuento de eritrocitos cae proporcionalmente con la microcitosis)';
      return { index, interp };
    },
    format: r => `<strong>Índice de Mentzer: ${r.index}</strong>, ${r.interp}.`,
    fragment: r => `Mentzer ${r.index}`
  }
];
