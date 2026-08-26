// topics/esclerosis-multiple/calculators.js
// 1 herramienta real:
// - Criterios de McDonald 2017: diagnóstico de esclerosis múltiple mediante diseminación en
//   espacio (DIS) y en tiempo (DIT), por vía clínica, radiológica (RM), o de LCR según el
//   número de ataques y lesiones objetivas; también cubre la vía de EM primaria progresiva
//   (progresión insidiosa) (Thompson AJ, et al. Lancet Neurol. 2018;17(2):162-173).

export const calculators = [
  {
    key: 'mcdonald-2017', title: 'Criterios de McDonald 2017', accent: '#2e5c7a',
    subtitle: 'Diagnóstico de esclerosis múltiple',
    incompleteMsg: 'Selecciona la presentación clínica para comenzar.',
    fields: [
      { name: 'presentacion', id: 'mc-presentacion', type: 'select', label: 'Presentación clínica', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'brotes', label: 'Brotes (curso remitente-recurrente o síndrome clínico aislado)' },
        { value: 'progresiva', label: 'Progresión insidiosa, sin brotes claros (sospecha de EM primaria progresiva)' }
      ] },
      { type: 'note', text: 'Los siguientes campos aplican solo si elegiste "Brotes" arriba.' },
      { name: 'ataques', id: 'mc-ataques', type: 'select', label: 'Número de ataques clínicos', options: [
        { value: '', label: 'Selecciona...' },
        { value: '0', label: '0' }, { value: '1', label: '1' }, { value: '2+', label: '2 o más' }
      ] },
      { name: 'lesiones', id: 'mc-lesiones', type: 'select', label: 'Evidencia objetiva de lesiones (clínica o RM)', options: [
        { value: '', label: 'Selecciona...' },
        { value: '0', label: '0' }, { value: '1', label: '1' }, { value: '2+', label: '2 o más' }
      ] },
      { name: 'dis', id: 'mc-dis', type: 'checkbox', label: 'Diseminación en espacio (RM: ≥1 lesión T2 en ≥2 de 4 regiones típicas)' },
      { name: 'dit', id: 'mc-dit', type: 'checkbox', label: 'Diseminación en tiempo por RM (lesión captante y no captante simultáneas, o nueva lesión en RM de seguimiento)' },
      { name: 'lcr', id: 'mc-lcr', type: 'checkbox', label: 'Bandas oligoclonales específicas de LCR (ausentes en suero)' },
      { type: 'note', text: 'Los siguientes campos aplican solo si elegiste "Progresión insidiosa" arriba.' },
      { name: 'progresion1yr', id: 'mc-progresion1yr', type: 'checkbox', label: 'Progresión de discapacidad documentada durante ≥1 año, independiente de brotes' },
      { name: 'disCerebral', id: 'mc-discerebral', type: 'checkbox', label: 'DIS cerebral (≥1 lesión T2 periventricular, yuxtacortical, o infratentorial)' },
      { name: 'disMedular', id: 'mc-dismedular', type: 'checkbox', label: 'DIS medular (≥2 lesiones T2 en médula espinal)' }
    ],
    compute(v) {
      if (!v.presentacion) return null;
      if (v.presentacion === 'brotes') {
        if (!v.ataques || !v.lesiones) return null;
        let cumple = false, criterio = '';
        if (v.ataques === '2+' && v.lesiones === '2+') {
          cumple = true;
          criterio = 'Sin necesidad de estudios adicionales para el diagnóstico (aunque se recomienda RM para descartar diagnósticos alternativos).';
        } else if (v.ataques === '2+' && v.lesiones === '1') {
          cumple = !!v.dis;
          criterio = cumple ? 'Diseminación en espacio demostrada por RM.' : 'Pendiente: diseminación en espacio por RM, o un segundo brote clínico en otra localización.';
        } else if (v.ataques === '1' && v.lesiones === '2+') {
          cumple = !!(v.dit || v.lcr);
          criterio = cumple ? 'Diseminación en tiempo demostrada (RM de seguimiento o bandas oligoclonales en LCR).' : 'Pendiente: diseminación en tiempo por RM de seguimiento, bandas oligoclonales en LCR, o un segundo brote clínico.';
        } else if (v.ataques === '1' && v.lesiones === '1') {
          cumple = !!(v.dis && (v.dit || v.lcr));
          criterio = cumple ? 'Diseminación en espacio Y en tiempo demostradas (síndrome clínico aislado que cumple criterios de EM).' : 'Pendiente: requiere diseminación en espacio Y en tiempo (RM o LCR) para completar el diagnóstico.';
        } else {
          cumple = false;
          criterio = 'No cumple el patrón mínimo de un síndrome clínico aislado (se requiere al menos 1 ataque con evidencia objetiva de al menos 1 lesión).';
        }
        return { presentacion: 'brotes', ataques: v.ataques, lesiones: v.lesiones, cumple, criterio };
      }
      // progresiva
      const count = [v.disCerebral, v.disMedular, v.lcr].filter(Boolean).length;
      const cumple = !!(v.progresion1yr && count >= 2);
      const criterio = cumple
        ? 'Cumple criterios de EM primaria progresiva.'
        : `Requiere progresión de discapacidad ≥1 año Y al menos 2 de 3 criterios (DIS cerebral, DIS medular, LCR positivo); actualmente ${count}/3 criterios de apoyo${v.progresion1yr ? '' : ' y progresión ≥1 año aún no confirmada'}.`;
      return { presentacion: 'progresiva', progresion1yr: !!v.progresion1yr, count, cumple, criterio };
    },
    format: r => {
      if (r.presentacion === 'brotes') {
        return `<strong>${r.ataques === '2+' ? '≥2' : r.ataques} ataque(s) · ${r.lesiones === '2+' ? '≥2' : r.lesiones} lesión(es) objetiva(s)</strong>. ${r.cumple ? 'Cumple criterios de EM.' : 'No cumple criterios de EM por el momento.'} ${r.criterio}`;
      }
      return `<strong>Vía de progresión insidiosa: ${r.count}/3 criterios de apoyo</strong>. ${r.cumple ? 'Cumple criterios de EM primaria progresiva.' : 'No cumple criterios por el momento.'} ${r.criterio}`;
    },
    fragment: r => r.presentacion === 'brotes'
      ? `McDonald: ${r.cumple ? 'cumple' : 'no cumple'} (${r.ataques === '2+' ? '≥2' : r.ataques}A/${r.lesiones === '2+' ? '≥2' : r.lesiones}L)`
      : `McDonald PPMS: ${r.cumple ? 'cumple' : 'no cumple'} (${r.count}/3)`
  }
];
