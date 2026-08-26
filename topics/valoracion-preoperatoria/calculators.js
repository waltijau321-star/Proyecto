// topics/valoracion-preoperatoria/calculators.js
// Las escalas de VPO ya viven en protocols/vpo-calc.js, porque la sección VPO del shell las
// necesita sin pasar por el registro de temas. Aquí solo se reexportan: así el tema de estudio
// las enseña y la sección Calc las lista junto a las de los demás temas, pero siguen teniendo
// una única fuente de verdad. Duplicarlas sería duplicar también su mantenimiento.

export { calculators, combinedNote } from '../../protocols/vpo-calc.js';
