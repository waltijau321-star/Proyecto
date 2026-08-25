// topics/traumatismo-craneoencefalico/calculators.js
// 1 herramienta real:
// - Canadian CT Head Rule: regla de decisión de criterios de alto riesgo (necesidad de
//   intervención neuroquirúrgica) y de mediano riesgo (detección de lesión en TC) para decidir
//   quién necesita TC craneal en el TCE leve (Stiell IG, et al. Lancet. 2001;357(9266):1391-1396).
//   Aplica solo a GCS 13-15 con pérdida de conciencia, amnesia definida, o desorientación
//   presenciada, dentro de las 24 horas del trauma; no se implementan aquí los criterios de
//   exclusión (edad &lt;16, anticoagulación/coagulopatía, fractura abierta evidente, crisis
//   convulsiva previa a la evaluación) — quedan como nota para juicio clínico.

export const calculators = [
  {
    key: 'canadian-ct-head', title: 'Canadian CT Head Rule', accent: '#4a3d73',
    subtitle: '¿Quién necesita TC craneal en el TCE leve (GCS 13-15)?',
    incompleteMsg: 'Marca los criterios presentes (deja sin marcar los ausentes) para las 3 preguntas.',
    fields: [
      { type: 'note', text: 'Aplica solo a TCE con GCS 13-15, con pérdida de conciencia, amnesia definida, o desorientación presenciada, dentro de las 24 horas del trauma. NO aplica si: edad &lt;16 años, anticoagulación o coagulopatía conocida, fractura craneal abierta evidente, o crisis convulsiva antes de la evaluación — usar juicio clínico en esos casos.' },
      { name: 'gcsNoNormaliza', id: 'cch-gcs', type: 'checkbox', label: 'Alto riesgo: GCS &lt;15 a las 2 horas del trauma' },
      { name: 'fracturaAbierta', id: 'cch-fx-abierta', type: 'checkbox', label: 'Alto riesgo: sospecha de fractura craneal abierta o con hundimiento' },
      { name: 'signosBase', id: 'cch-base', type: 'checkbox', label: 'Alto riesgo: cualquier signo de fractura de base de cráneo (hemotímpano, ojos de mapache, signo de Battle, otorrea/rinorrea de LCR)' },
      { name: 'vomito', id: 'cch-vomito', type: 'checkbox', label: 'Alto riesgo: ≥2 episodios de vómito' },
      { name: 'edadMayor', id: 'cch-edad', type: 'checkbox', label: 'Alto riesgo: edad ≥65 años' },
      { name: 'amnesia30', id: 'cch-amnesia', type: 'checkbox', label: 'Mediano riesgo: amnesia retrógrada ≥30 minutos antes del impacto' },
      { name: 'mecanismoPeligroso', id: 'cch-mecanismo', type: 'checkbox', label: 'Mediano riesgo: mecanismo peligroso (atropellamiento, eyección del vehículo, caída ≥3 pies/5 escalones)' }
    ],
    compute(v) {
      const altoRiesgo = [v.gcsNoNormaliza, v.fracturaAbierta, v.signosBase, v.vomito, v.edadMayor];
      const medioRiesgo = [v.amnesia30, v.mecanismoPeligroso];
      const todos = [...altoRiesgo, ...medioRiesgo];
      if (todos.some(d => d == null)) return null;
      const altoPositivo = altoRiesgo.filter(Boolean).length;
      const medioPositivo = medioRiesgo.filter(Boolean).length;
      const requiereTC = altoPositivo > 0 || medioPositivo > 0;
      return { altoPositivo, medioPositivo, requiereTC };
    },
    format: r => {
      if (!r.requiereTC) {
        return `<strong>TC craneal no indicada por esta regla</strong>: ningún criterio de alto ni mediano riesgo presente. Recordar que la regla no aplica si hay criterios de exclusión (edad &lt;16, anticoagulación, fractura abierta evidente, crisis convulsiva previa).`;
      }
      if (r.altoPositivo > 0) {
        return `<strong>TC craneal recomendada</strong>: ${r.altoPositivo} criterio(s) de alto riesgo presente(s) (necesidad de intervención neuroquirúrgica).`;
      }
      return `<strong>TC craneal recomendada</strong>: ${r.medioPositivo} criterio(s) de mediano riesgo presente(s) (detección de lesión en TC).`;
    },
    fragment: r => r.requiereTC ? `TC recomendada (${r.altoPositivo} alto + ${r.medioPositivo} medio)` : 'TC no indicada por la regla'
  }
];
