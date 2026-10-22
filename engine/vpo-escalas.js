// engine/vpo-escalas.js
// Pestaña Escalas: la rejilla de escalas de riesgo perioperatorio, agrupada por dominio
// clínico, más los enlaces a las escalas que ya viven en otro sitio de la app.
//
// El contenido lo pone protocols/vpo-calc.js y lo pinta el motor genérico de calculadoras;
// aquí solo está el montaje y las tres puertas de entrada a una escala (desde la rejilla,
// desde un tema de estudio y desde un paso de la ruta), que no son la misma cosa.

import { DOMINIOS } from '../protocols/vpo-calc.js';
import { mountCalculators, setCalcTopic, openCalc } from './calculators.js';
import { loadTopic } from '../topics/registry.js';
import { ACCENT, calcTopic } from './vpo-estado.js';

// Escalas que ya viven en un tema de estudio y que la VPO necesita a menudo. Se enlazan en
// vez de duplicarse: una segunda copia de Child-Pugh es una segunda copia que mantener.
export const ESCALAS_DE_TEMAS = [
  { topicId: 'cirrosis-hepatica', key: 'childpugh', titulo: 'Child-Pugh', porque: 'Gravedad de la cirrosis: el riesgo quirúrgico del cirrótico se dispara a partir de Child-Pugh B.' },
  { topicId: 'cirrosis-hepatica', key: 'meldna', titulo: 'MELD-Na', porque: 'Mortalidad a 90 días; orienta si conviene diferir una cirugía electiva en el paciente con hepatopatía.' },
  { topicId: 'anemia-ferropenica', key: 'ganzoni', titulo: 'Fórmula de Ganzoni', porque: 'El déficit total de hierro, que es lo que hay que reponer cuando la anemia preoperatoria es ferropénica y no da tiempo al hierro oral.' },
  { topicId: 'transfusion-hemoderivados', key: 'umbral-eritrocitos', titulo: 'Umbral de transfusión', porque: 'La anemia preoperatoria es el factor de riesgo modificable con mejor rendimiento, y el umbral para transfundir no es el mismo antes de operar que en el sangrado agudo.' },
  { topicId: 'delirium-coma-encefalopatias', key: 'cam-delirium', titulo: 'CAM', porque: 'La escala de delirium de aquí estima el riesgo antes de operar; el CAM es con lo que se reconoce después, y sin cognición basal documentada no se puede aplicar.' },
  { general: true, key: 'chadsvasc', titulo: 'CHA₂DS₂-VASc', porque: 'Es por donde empieza la valoración del paciente anticoagulado: dimensiona lo que se arriesga al suspender el anticoagulante, aunque no sea lo que decide el puente.' }
];

export function mountEscalas(pane) {
  mountCalculators(calcTopic, pane, {
    grupos: DOMINIOS,
    heading: 'Valoración preoperatoria (VPO)',
    intro: 'Escalas de riesgo perioperatorio. La nota combinada incluye las 6 escalas de riesgo ya expandidas, ya que casi siempre se calculan juntas para el mismo paciente. El puente de anticoagulación va aparte: solo aplica al paciente anticoagulado.',
    showExtras: false
  });
  const body = pane.querySelector('.sec-body');
  if (!body) return;
  // Una escala general (engine/general-calc.js) no pertenece a ningún tema, así que se abre
  // directo: openCalc ya resuelve contra las generales cuando la key no es del tema activo.
  const cards = ESCALAS_DE_TEMAS.map(e => `
    <div class="comp-card" style="--c:${ACCENT}" onclick="${e.general ? `openCalc('${e.key}')` : `rmVpoEscalaTema('${e.topicId}','${e.key}')`}">
      <h4>${e.titulo}</h4><p>${e.porque}</p>
      <div class="open-hint">Abrir →</div>
    </div>`).join('');
  const extra = document.createElement('div');
  extra.innerHTML = `
    <h3 style="font-family:'Newsreader',serif;font-size:1.15rem;color:var(--ink);margin:28px 0 6px;">Escalas que viven en otro sitio</h3>
    <p style="color:var(--ink-faint);font-size:12.5px;margin:0 0 12px;">Son de un tema de estudio o de las generales de la app; se abren desde aquí para no mantener una segunda copia.</p>
    <div class="calc-launch-grid">${cards}</div>`;
  body.appendChild(extra);
}

// Abre una calculadora que pertenece a un tema del registro. Carga el tema si hace falta
// (ALL_TOPICS solo se puebla al visitar la sección Calc, así que no se puede dar por hecho)
// y devuelve el contexto a VPO enseguida: una vez abierto, el modal ya no consulta
// CALC_TOPIC, pero la siguiente escala de VPO que se abra sí lo hace.
export async function abrirEscalaDeTema(topicId, key) {
  const topic = await loadTopic(topicId);
  if (!topic) return;
  setCalcTopic(topic);
  openCalc(key);
  setCalcTopic(calcTopic);
}

// Desde un paso de la ruta: abre la escala encima, sin saltar a la pestaña Escalas, para no
// perder el paso en el que estabas. Hay que reapuntar el contexto del motor de calculadoras
// porque la pestaña Ruta, a diferencia de Escalas, no lo toca al entrar.
export function abrirEscalaDesdeRuta(key) {
  setCalcTopic(calcTopic);
  // Se abre como "pedida": el usuario pulso Calcular en el paso que necesita ese numero, asi
  // que el resultado es suyo aunque no toque nada porque la ficha ya lo relleno todo.
  openCalc(key, { pedida: true });
}

// La pestaña Escalas reapunta el contexto del motor al entrar: la sección Calc lo deja
// apuntando a otro tema en cuanto se abre una calculadora desde allí.
export function enfocarEscalas() { setCalcTopic(calcTopic); }
