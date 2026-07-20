// engine/infusion-calc.js
// Calculadora de velocidad de infusión (goteo) para vasopresores/sedantes: dosis ↔ mL/h,
// con diluciones precargadas o dilución personalizada. Lógica verificada contra la hoja de
// cálculo de referencia del usuario ("Calculos dosis.xlsx"), con la fórmula estándar de goteo:
//   Si la dosis es por MINUTO (mcg/kg/min, U/min):  VI(mL/h) = Dosis × [Peso] × 60 / Concentración
//   Si la dosis es por HORA   (mcg/kg/h, mg/kg/h):  VI(mL/h) = Dosis × Peso / Concentración
// Vasopresina es la excepción: se dosifica en U/min de forma FIJA, sin ajustar por peso; el peso
// es opcional y solo se usa para mostrar, como dato informativo, el equivalente en U/kg/min.

const DRUGS = {
  norepinefrina: {
    label: 'Norepinefrina (Noradrenalina)', unit: 'mcg/kg/min', weightBased: true, perMin: true,
    doseRange: '0.05-0.5 mcg/kg/min', amountUnit: 'mcg',
    dilutions: [
      { label: '4 mg en 100 mL (40 mcg/mL)', amount: 4000, ml: 100 },
      { label: '8 mg en 50 mL (160 mcg/mL)', amount: 8000, ml: 50 },
      { label: '8 mg en 100 mL (80 mcg/mL)', amount: 8000, ml: 100 }
    ]
  },
  adrenalina: {
    label: 'Adrenalina (Epinefrina)', unit: 'mcg/kg/min', weightBased: true, perMin: true,
    doseRange: '0.01-0.5 mcg/kg/min (infusión; dosis de paro/anafilaxia son bolo, no aplican aquí)', amountUnit: 'mcg',
    dilutions: [
      { label: '1 mg en 250 mL (4 mcg/mL)', amount: 1000, ml: 250 },
      { label: '4 mg en 250 mL (16 mcg/mL)', amount: 4000, ml: 250 }
    ]
  },
  dopamina: {
    label: 'Dopamina', unit: 'mcg/kg/min', weightBased: true, perMin: true,
    doseRange: '2-10(-20) mcg/kg/min', amountUnit: 'mcg',
    dilutions: [{ label: '400 mg en 250 mL (1600 mcg/mL)', amount: 400000, ml: 250 }]
  },
  dobutamina: {
    label: 'Dobutamina', unit: 'mcg/kg/min', weightBased: true, perMin: true,
    doseRange: '2-20 mcg/kg/min', amountUnit: 'mcg',
    dilutions: [
      { label: '250 mg en 250 mL (1000 mcg/mL)', amount: 250000, ml: 250 },
      { label: '500 mg en 250 mL (2000 mcg/mL)', amount: 500000, ml: 250 },
      { label: '500 mg en 100 mL (5000 mcg/mL)', amount: 500000, ml: 100 }
    ]
  },
  vasopresina: {
    label: 'Vasopresina', unit: 'U/min', weightBased: false, perMin: true, weightInfoOnly: true,
    doseRange: '0.01-0.07 U/min (dosis FIJA, no se ajusta por peso)', amountUnit: 'U',
    dilutions: [{ label: '100 U en 100 mL (1 U/mL)', amount: 100, ml: 100 }]
  },
  midazolam: {
    label: 'Midazolam', unit: 'mg/kg/h', weightBased: true, perMin: false,
    doseRange: '0.02-0.1 mg/kg/h', amountUnit: 'mg',
    dilutions: [
      { label: '150 mg en 150 mL (1 mg/mL)', amount: 150, ml: 150 },
      { label: '200 mg en 100 mL (2 mg/mL)', amount: 200, ml: 100 }
    ]
  },
  propofol: {
    label: 'Propofol', unit: 'mcg/kg/min', weightBased: true, perMin: true,
    doseRange: '5-85 mcg/kg/min (mantenimiento; bolo de inducción 1-3 mg/kg no aplica aquí)', amountUnit: 'mcg',
    dilutions: [{ label: '200 mg en 20 mL — sin diluir (10 000 mcg/mL)', amount: 200000, ml: 20 }]
  },
  dexmedetomidina: {
    label: 'Dexmedetomidina', unit: 'mcg/kg/h', weightBased: true, perMin: false,
    doseRange: '0.2-0.7 mcg/kg/h', amountUnit: 'mcg',
    dilutions: [{ label: '400 mcg en 100 mL (4 mcg/mL)', amount: 400, ml: 100 }]
  },
  ketamina: {
    label: 'Ketamina', unit: 'mcg/kg/min', weightBased: true, perMin: true,
    doseRange: '5-85 mcg/kg/min (0.3-5 mg/kg/h; bolo de inducción 1-2 mg/kg no aplica aquí)', amountUnit: 'mcg',
    dilutions: [{ label: '500 mg en 100 mL (5000 mcg/mL)', amount: 500000, ml: 100 }]
  },
  fentanilo: {
    label: 'Fentanilo', unit: 'mcg/kg/h', weightBased: true, perMin: false,
    doseRange: '0.5-10 mcg/kg/h', amountUnit: 'mcg',
    dilutions: [{ label: '2500 mcg en 250 mL (10 mcg/mL)', amount: 2500, ml: 250 }]
  },
  vecuronio: {
    label: 'Vecuronio', unit: 'mcg/kg/min', weightBased: true, perMin: true,
    doseRange: '1-2 mcg/kg/min (mantenimiento; bolo de intubación 0.08-0.1 mg/kg no aplica aquí)', amountUnit: 'mcg',
    dilutions: [{ label: '40 mg en 100 mL (400 mcg/mL)', amount: 40000, ml: 100 }]
  }
};

let ROOT = null;

export function openInfusionCalc() {
  const modal = document.getElementById('modal');
  modal.style.setProperty('--modal-accent', '#3d5a73');
  ROOT = modal;
  const drugOptions = Object.keys(DRUGS).map(k => `<option value="${k}">${DRUGS[k].label}</option>`).join('');
  modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="modal-tag" style="color:#3d5a73;">Calculadora de goteo</span>
    <h2>Velocidad de infusión</h2>
    <div class="calc-form">
      <div class="calc-field">
        <label>Fármaco</label>
        <select id="ic-drug">${drugOptions}<option value="custom">Dilución personalizada…</option></select>
      </div>
      <div id="ic-doserange" class="calc-note"></div>
      <div class="calc-field" id="ic-dilution-wrap">
        <label>Dilución</label>
        <select id="ic-dilution"></select>
      </div>
      <div id="ic-custom-wrap" style="display:none;">
        <div class="calc-row2">
          <div class="calc-field"><label>Cantidad del fármaco</label><input type="number" id="ic-custom-amount" placeholder="ej. 250"></div>
          <div class="calc-field"><label>Unidad</label>
            <select id="ic-custom-unit"><option value="mg">mg</option><option value="mcg">mcg</option><option value="U">U (unidades)</option></select></div>
        </div>
        <div class="calc-field"><label>Volumen total diluido (mL)</label><input type="number" id="ic-custom-ml" placeholder="ej. 100"></div>
        <div class="calc-field"><label>Tipo de dosis</label>
          <select id="ic-custom-unittype">
            <option value="mcgkgmin">mcg/kg/min</option>
            <option value="mcgkgh">mcg/kg/h</option>
            <option value="mgkgh">mg/kg/h</option>
            <option value="Umin">U/min (dosis fija, sin peso)</option>
          </select></div>
      </div>
      <hr class="modal-divider">
      <div class="calc-field">
        <label>Dirección del cálculo</label>
        <select id="ic-direction">
          <option value="toVI">Sé la dosis → calcular velocidad de infusión (mL/h)</option>
          <option value="toDose">Sé la velocidad de infusión → calcular la dosis</option>
        </select>
      </div>
      <div class="calc-row2">
        <div class="calc-field" id="ic-weight-wrap"><label id="ic-weight-label">Peso (kg)</label><input type="number" id="ic-weight" placeholder="ej. 70"></div>
        <div class="calc-field" id="ic-value-wrap"><label id="ic-value-label">Dosis</label><input type="number" step="0.01" id="ic-value" placeholder="ej. 0.1"></div>
      </div>
    </div>
    <div class="calc-result">
      <span class="cr-label">Resultado</span>
      <div class="cr-text" id="ic-result-text">Completa los campos.</div>
      <button class="calc-copy" onclick="copyCalcResult(this)">Copiar</button>
    </div>`;

  modal.querySelector('#ic-drug').addEventListener('change', onDrugChange);
  modal.querySelector('#ic-dilution').addEventListener('change', recalc);
  modal.querySelector('#ic-direction').addEventListener('change', onDirectionChange);
  ['ic-weight', 'ic-value', 'ic-custom-amount', 'ic-custom-ml', 'ic-custom-unit', 'ic-custom-unittype'].forEach(id => {
    modal.querySelector('#' + id).addEventListener('input', recalc);
    modal.querySelector('#' + id).addEventListener('change', recalc);
  });
  onDrugChange();

  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function onDrugChange() {
  const key = ROOT.querySelector('#ic-drug').value;
  const isCustom = key === 'custom';
  ROOT.querySelector('#ic-dilution-wrap').style.display = isCustom ? 'none' : '';
  ROOT.querySelector('#ic-custom-wrap').style.display = isCustom ? '' : 'none';
  const rangeEl = ROOT.querySelector('#ic-doserange');
  if (isCustom) {
    rangeEl.textContent = 'Ingresa la dilución y el tipo de dosis manualmente.';
  } else {
    const d = DRUGS[key];
    rangeEl.textContent = 'Rango habitual: ' + d.doseRange;
    const dilSel = ROOT.querySelector('#ic-dilution');
    dilSel.innerHTML = d.dilutions.map((dl, i) => `<option value="${i}">${dl.label}</option>`).join('');
  }
  onDirectionChange();
}

function currentDrug() {
  const key = ROOT.querySelector('#ic-drug').value;
  if (key === 'custom') {
    const amount = parseFloat(ROOT.querySelector('#ic-custom-amount').value);
    const ml = parseFloat(ROOT.querySelector('#ic-custom-ml').value);
    const unitType = ROOT.querySelector('#ic-custom-unittype').value;
    const unitMap = { mcgkgmin: { unit: 'mcg/kg/min', perMin: true, weightBased: true }, mcgkgh: { unit: 'mcg/kg/h', perMin: false, weightBased: true }, mgkgh: { unit: 'mg/kg/h', perMin: false, weightBased: true }, Umin: { unit: 'U/min', perMin: true, weightBased: false, weightInfoOnly: true } };
    const u = unitMap[unitType];
    if (!amount || !ml) return null;
    return { label: 'Dilución personalizada', unit: u.unit, perMin: u.perMin, weightBased: u.weightBased, weightInfoOnly: u.weightInfoOnly, concentration: amount / ml };
  }
  const d = DRUGS[key];
  const dilIdx = +ROOT.querySelector('#ic-dilution').value || 0;
  const dl = d.dilutions[dilIdx];
  if (!dl) return null;
  return { label: d.label, unit: d.unit, perMin: d.perMin, weightBased: d.weightBased, weightInfoOnly: d.weightInfoOnly, concentration: dl.amount / dl.ml };
}

function onDirectionChange() {
  const dir = ROOT.querySelector('#ic-direction').value;
  const valueLabel = ROOT.querySelector('#ic-value-label');
  const valueInput = ROOT.querySelector('#ic-value');
  const drug = currentDrug();
  const unitLabel = drug ? drug.unit : '';
  if (dir === 'toVI') {
    valueLabel.textContent = `Dosis (${unitLabel})`;
    valueInput.placeholder = 'ej. 0.1';
  } else {
    valueLabel.textContent = 'Velocidad de infusión (mL/h)';
    valueInput.placeholder = 'ej. 5';
  }
  const weightWrap = ROOT.querySelector('#ic-weight-wrap');
  const weightLabel = ROOT.querySelector('#ic-weight-label');
  if (drug && drug.weightInfoOnly) {
    weightWrap.style.display = '';
    weightLabel.textContent = 'Peso (kg) — opcional, solo informativo';
  } else if (drug && !drug.weightBased) {
    weightWrap.style.display = 'none';
  } else {
    weightWrap.style.display = '';
    weightLabel.textContent = 'Peso (kg)';
  }
  recalc();
}

function recalc() {
  const drug = currentDrug();
  const resultEl = ROOT.querySelector('#ic-result-text');
  if (!drug || !drug.concentration) { resultEl.innerHTML = 'Completa la dilución (cantidad y volumen).'; return; }
  const dir = ROOT.querySelector('#ic-direction').value;
  const weight = parseFloat(ROOT.querySelector('#ic-weight').value);
  const value = parseFloat(ROOT.querySelector('#ic-value').value);
  onDirectionChangeLabelsOnly(drug);

  if (isNaN(value)) { resultEl.innerHTML = 'Ingresa la dosis o la velocidad de infusión.'; return; }
  if (drug.weightBased && isNaN(weight)) { resultEl.innerHTML = 'Ingresa el peso del paciente.'; return; }

  const C = drug.concentration; // amount por mL (mcg, mg o U según el fármaco)
  const timeFactor = drug.perMin ? 60 : 1;

  if (dir === 'toVI') {
    // dose -> VI
    let vi;
    if (drug.weightBased) {
      vi = (value * weight * timeFactor) / C;
    } else {
      vi = (value * timeFactor) / C; // vasopresina y personalizada sin peso
    }
    let html = `<strong>Velocidad de infusión: ${vi.toFixed(2)} mL/h</strong> (${drug.label}, dosis ${value} ${drug.unit}, dilución ${C.toFixed(2)} ${amountUnitLabel(drug)}/mL)`;
    if (drug.weightInfoOnly && !isNaN(weight) && weight > 0) {
      html += `<div style="margin-top:8px;color:var(--ink-faint);font-size:12.5px;">Informativo: equivale a ${(value / weight).toFixed(4)} U/kg/min (la dosis en U/min es fija y no se ajusta por peso).</div>`;
    }
    resultEl.innerHTML = html;
  } else {
    // VI -> dose
    let dose;
    if (drug.weightBased) {
      dose = (value * C) / (timeFactor * weight);
    } else {
      dose = (value * C) / timeFactor;
    }
    let html = `<strong>Dosis: ${dose.toFixed(4)} ${drug.unit}</strong> (${drug.label}, velocidad ${value} mL/h, dilución ${C.toFixed(2)} ${amountUnitLabel(drug)}/mL)`;
    if (drug.weightInfoOnly && !isNaN(weight) && weight > 0) {
      html += `<div style="margin-top:8px;color:var(--ink-faint);font-size:12.5px;">Informativo: equivale a ${(dose / weight).toFixed(4)} U/kg/min.</div>`;
    }
    resultEl.innerHTML = html;
  }
}
function onDirectionChangeLabelsOnly(drug) {
  // mantiene sincronizada la etiqueta de unidad al recalcular sin reconstruir el DOM completo
  const valueLabel = ROOT.querySelector('#ic-value-label');
  const dir = ROOT.querySelector('#ic-direction').value;
  if (dir === 'toVI' && drug) valueLabel.textContent = `Dosis (${drug.unit})`;
}
function amountUnitLabel(drug) {
  if (drug.unit.startsWith('U')) return 'U';
  if (drug.unit.startsWith('mg')) return 'mg';
  return 'mcg';
}

window.openInfusionCalc = openInfusionCalc;
