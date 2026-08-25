// topics/coagulacion-intravascular-diseminada/calculators.js
// 1 herramienta real:
// - Score ISTH de CID manifiesta (overt DIC): combina recuento plaquetario, marcador
//   relacionado con fibrina (dímero D/PDF), prolongación del TP, y fibrinógeno en un puntaje
//   0-8; ≥5 compatible con CID manifiesta (Taylor FB Jr, et al. Thromb Haemost.
//   2001;86(5):1327-1330; Levi M, et al. Br J Haematol. 2009;145(1):24-33).

export const calculators = [
  {
    key: 'isth-cid', title: 'Score ISTH de CID manifiesta', accent: '#8c1f3d',
    subtitle: 'Plaquetas + dímero D/PDF + TP + fibrinógeno → ¿CID manifiesta?',
    incompleteMsg: 'Ingresa el recuento plaquetario, el grado de elevación del marcador de fibrina, la prolongación del TP, y el fibrinógeno.',
    fields: [
      { name: 'plaquetas', id: 'cid-plaquetas', type: 'number', label: 'Recuento plaquetario (x10³/µL)', row: 1 },
      { name: 'fibrinogeno', id: 'cid-fibrinogeno', type: 'number', label: 'Fibrinógeno (mg/dL)', row: 1 },
      { name: 'ptProlongado', id: 'cid-pt', type: 'number', label: 'Prolongación del TP respecto al control (segundos)', row: 2 },
      { name: 'marcadorFibrina', id: 'cid-marcador', type: 'select', label: 'Marcador relacionado con fibrina (dímero D/PDF)', row: 2, options: [
        { value: '', label: 'Selecciona...' },
        { value: 'sin', label: 'Sin incremento' },
        { value: 'moderado', label: 'Incremento moderado' },
        { value: 'fuerte', label: 'Incremento fuerte' }
      ] },
      { type: 'note', text: 'Puntos: plaquetas &gt;100=0, &lt;100=1, &lt;50=2. Marcador de fibrina: sin incremento=0, moderado=2, fuerte=3. TP prolongado: &lt;3s=0, 3-&lt;6s=1, ≥6s=2. Fibrinógeno &gt;100 mg/dL=0, ≤100 mg/dL=1. Suma ≥5: compatible con CID manifiesta. &lt;5: sugestivo de CID no manifiesta, repetir en 1-2 días si la sospecha clínica persiste.' }
    ],
    compute(v) {
      const plaquetas = parseFloat(v.plaquetas);
      const fibrinogeno = parseFloat(v.fibrinogeno);
      const pt = parseFloat(v.ptProlongado);
      if (isNaN(plaquetas) || isNaN(fibrinogeno) || isNaN(pt) || !v.marcadorFibrina) return null;

      let pPlaquetas;
      if (plaquetas < 50) pPlaquetas = 2;
      else if (plaquetas < 100) pPlaquetas = 1;
      else pPlaquetas = 0;

      const pMarcador = { sin: 0, moderado: 2, fuerte: 3 }[v.marcadorFibrina];

      let pPt;
      if (pt >= 6) pPt = 2;
      else if (pt >= 3) pPt = 1;
      else pPt = 0;

      const pFibrinogeno = fibrinogeno <= 100 ? 1 : 0;

      const total = pPlaquetas + pMarcador + pPt + pFibrinogeno;
      const manifiesta = total >= 5;
      return { total, manifiesta, pPlaquetas, pMarcador, pPt, pFibrinogeno };
    },
    format: r => r.manifiesta
      ? `<strong>Score ${r.total}/8: compatible con CID manifiesta</strong> (≥5). Priorizar el tratamiento urgente de la enfermedad desencadenante y el soporte transfusional dirigido según el sangrado activo.`
      : `<strong>Score ${r.total}/8: sugestivo de CID no manifiesta</strong> (&lt;5). Si la sospecha clínica persiste, repetir el score en 1-2 días.`,
    fragment: r => `ISTH ${r.total}/8 (${r.manifiesta ? 'manifiesta' : 'no manifiesta'})`
  }
];
