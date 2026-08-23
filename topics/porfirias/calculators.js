// topics/porfirias/calculators.js
// Herramienta ALA/PBG urinario: interpreta el ácido delta-aminolevulínico (ALA) y el
// porfobilinógeno (PBG) urinarios ante sospecha de crisis porfírica aguda, el cribado
// bioquímico central de este tema (Anderson KE, et al. Ann Intern Med. 2005;142(6):439-450;
// Balwani M, et al. Curr Treat Options Neurol. 2018;20(4):12).

export const calculators = [
  {
    key: 'alapbg', title: 'Herramienta ALA/PBG urinario', accent: '#6b3d5c',
    subtitle: 'Cribado bioquímico de crisis porfírica aguda',
    incompleteMsg: 'Completa el estado del ALA y del PBG urinarios.',
    fields: [
      { name: 'ala', id: 'ap-ala', type: 'select', label: 'Ácido delta-aminolevulínico (ALA) urinario', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'normal', label: 'Normal' },
        { value: 'elevado', label: 'Elevado' }
      ] },
      { name: 'pbg', id: 'ap-pbg', type: 'select', label: 'Porfobilinógeno (PBG) urinario', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'normal', label: 'Normal' },
        { value: 'elevado', label: 'Elevado' }
      ] },
      { type: 'note', text: 'Idealmente medidos en una muestra tomada DURANTE el episodio sintomático agudo, dado que pueden normalizarse entre crisis; un resultado normal durante un episodio asintomático no descarta una porfiria hepática aguda latente.' }
    ],
    compute(v) {
      if (!v.ala || !v.pbg) return null;
      let interp, banda;
      if (v.pbg === 'elevado') {
        banda = 'Sugestivo de crisis porfírica aguda';
        interp = 'PBG elevado (con o sin ALA elevado) es altamente sugestivo de una crisis porfírica aguda (porfiria aguda intermitente, coproporfiria hereditaria o porfiria variegata, ver Complicaciones); confirmar con fraccionamiento de porfirinas y, si está disponible, estudio genético dirigido';
      } else if (v.ala === 'elevado') {
        banda = 'Patrón atípico: ALA elevado sin PBG';
        interp = 'ALA elevado con PBG normal es un patrón menos específico; considerar porfiria por deficiencia de ALA-deshidratasa (muy rara) o intoxicación por plomo como diagnóstico diferencial (ver Complicaciones)';
      } else {
        banda = 'Poco sugestivo de crisis aguda actual';
        interp = 'ALA y PBG normales hacen poco probable una crisis porfírica aguda activa en el momento de la muestra; si la sospecha clínica persiste, repetir la medición durante un episodio sintomático, dado que los valores pueden normalizarse entre crisis';
      }
      return { banda, interp };
    },
    format: r => `<strong>${r.banda}</strong>: ${r.interp}.`,
    fragment: r => r.banda
  }
];
