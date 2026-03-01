// =============================
// DATA (from your text)
// =============================

const CATEGORY_MAX_MINUTES = {
  minor: 5,
  moderate: 5,
  major: 10,
  extreme: 20,
  capital: 0, // capital => perma eligible (handled separately)
};

const crimes = [
  // Minor
  { id:"animal_cruelty", name:"Animal Cruelty", category:"minor", minutes:5,
    desc:"To inflict unnecessary suffering or harm on a non-sentient being with malicious intent. This does not include legitimate and authorized animal testing, or the butchering of livestock for meat. This also does not extend to vermin, or hostile creatures."},
  { id:"minor_contraband", name:"Possession or Use of Minor Contraband", category:"minor", minutes:5,
    desc:"To make, hold, or use minor contraband without authorization. Authorization may only be granted by the Warden, the Head of Security, or the Captain."},
  { id:"petty_theft", name:"Petty Theft", category:"minor", minutes:5,
    desc:"To take non-vital or inexpensive property of another individual, organization, or common property, without consent. Theft of safety or medical equipment such as breath masks, air tanks, or necessary mobility aids are considered vital, and exceed petty theft."},
  { id:"vandalism", name:"Vandalism", category:"minor", minutes:5,
    desc:"To intentionally deface or superficially damage public or private property. Examples include graffiti, smashing glasses or windows, excessively littering, and excessively producing spills."},
  { id:"trespass", name:"Trespass", category:"minor", minutes:5,
    desc:"To enter a non-secured area without permission, such as climbing over counters to enter employee areas like the Bar or Kitchen."},
  { id:"disturbance", name:"Disturbance", category:"minor", minutes:5,
    desc:"To cause a public disturbance. This is the catch-all for excessive obnoxious behavior, and includes public nudity, harassment, inciting crime, repeated and intentional misgendering, and disruption of authorities or communications."},
  { id:"impersonation_fraud", name:"Impersonation and Fraud", category:"minor", minutes:5,
    desc:"To pretend to be someone you are not, or attempting to commit fraud in any fashion. Impersonation may be elevated to a Moderate crime if the perpetrator is impersonating a member of Security, or a Major crime if they are impersonating a member of Command or Central Command."},

  // Moderate
  { id:"failure_comply", name:"Failure to Comply", category:"moderate", minutes:5,
    desc:"To resist reasonable orders given by an authority. This includes lawful detainment and authorized searches. Officers are required to warn the individual before resorting to arrest."},
  { id:"major_contraband", name:"Possession or Use of Major Contraband", category:"moderate", minutes:5,
    desc:"To make, hold, or use major contraband without authorization. Authorization may only be granted by the Warden, the Head of Security, or the Captain. Any items restricted to a Department or Job are considered major contraband."},
  { id:"tampering", name:"Tampering with Machinery", category:"moderate", minutes:5,
    desc:"To tamper with a machine such as cutting wires or modifying their functions. Includes but is not limited to; consoles, airlocks, and Silicons."},
  { id:"damage_property", name:"Damage of Property", category:"moderate", minutes:5,
    desc:"To maliciously damage or deface public or private property or equipment. This includes equipment vendors, drink dispensers, computers, and machinery such as lathes."},
  { id:"endangerment", name:"Endangerment", category:"moderate", minutes:5,
    desc:"To recklessly put yourself or others in danger, either through direct action or failure to act. This includes negligence, accidents, medical malpractice, destruction or impairment of safety features such as firelocks and exterior windows, and reckless piloting of shuttles."},
  { id:"minor_assault", name:"Minor Assault", category:"moderate", minutes:5,
    desc:"To assault another without a weapon and without causing serious injury. Serious injury is defined as any life altering injury such as loss of limb, damage to the eyes or ears, or any other damages measured by a Health Analyzer to be exceeding 30 total."},
  { id:"bribery", name:"Bribery", category:"moderate", minutes:5,
    desc:"To attempt or succeed to bribe officials to be derelict of their duties or commit a crime with any payment including but not limited to; Services, favors, spesos, credits, materials, or items of any kind. This also applies to anyone caught accepting a bribe, and is cumulative with whatever crime they were bribed to commit."},
  { id:"vigilantism", name:"Vigilantism", category:"moderate", minutes:5,
    desc:"To attempt to unlawfully enforce Corporate Law without vested authority. See: Enforcement of the Law."},

  // Major
  { id:"conspiracy", name:"Conspiracy", category:"major", minutes:10,
    desc:"To conspire or plan to commit a moderate or major crime with reasonable evidence that the suspect was going to go through with the plan. This would include declaring they are going to commit a crime."},
  { id:"armed_robbery", name:"Armed Robbery", category:"major", minutes:10,
    desc:"To steal something with the threat of violence using anything that can be considered a weapon, whether or not the weapon is contraband or not. This can include knives, toolboxes, crowbars, or any number of other improvised weaponry. There must be an active threat of violence, or the implication of violence if the victim does not comply, in order to be considered armed robbery."},
  { id:"sedition", name:"Sedition", category:"major", minutes:10,
    desc:"To incite rebellion against the authority of the station including but not limited to; Command, Security, Central Command, or Nanotrasen."},
  { id:"perjury", name:"Perjury", category:"major", minutes:10,
    desc:"To intentionally lie under oath or make a false statement in a written document."},
  { id:"forgery", name:"Forgery", category:"major", minutes:10,
    desc:"To forge a written document through illicit means, such as rewriting a stamped document, unauthorized use of an official stamp, or any other means."},
  { id:"breach_arrest", name:"Breach of Arrest", category:"major", minutes:10,
    desc:"To intentionally resist and flee arrest or detainment by an authorized staff. This only applies if someone is actively being physically arrested. People uncuffing or assisting others out of an arrest can also be charged with this. Breach of custody is a separate crime."},
  { id:"grand_theft", name:"Grand Theft", category:"major", minutes:10,
    desc:"To take critical or irreplaceable property of another individual or organization without consent. This includes command items such as door remotes, hardsuits, machine parts, and hijacking a department shuttle."},
  { id:"destruction_property", name:"Destruction of Property", category:"major", minutes:10,
    desc:"To destroy the property of another or the station. This includes but is not limited to work consoles, airlocks, and destroying or critically damaging a Cyborg's chassis."},
  { id:"secure_trespass", name:"Secure Trespass", category:"major", minutes:10,
    desc:"To enter a secured area without permission. If the area is behind a locked door, it is secure trespass. This includes telecomms, department head offices, command areas, the vault, and the armory."},
  { id:"major_assault", name:"Major Assault", category:"major", minutes:10,
    desc:"To assault another with a weapon or unarmed assault resulting in serious injury. Serious injury is defined as any life altering injury such as loss of limb, damage to the eyes or ears, or any other damages measured by a Health Analyzer to be exceeding 30 total."},
  { id:"manslaughter", name:"Manslaughter", category:"major", minutes:10,
    desc:"To incidentally kill a sentient humanoid without intent. This includes manslaughter in self-defense and negligent manslaughter."},
  { id:"rioting", name:"Rioting", category:"major", minutes:10,
    desc:"To participate in a large group of personnel creating an unlawful public disturbance. Leaders of a riot may be charged with all the crimes committed under their lead, plus sedition."},

  // Extreme
  { id:"breach_custody", name:"Breach of Custody", category:"extreme", minutes:20,
    desc:"To break out of a cell or custody with the intention of escaping. This applies to people breaking others out. Repeat offenses may have this charge increased to permanent confinement and later elevated to an execution with the Captain’s authority only if the suspect has repeatedly committed breach of custody.\n\nBreach of custody for the preservation of life, not including to escape execution, such as to vacate a location made dangerous due to gunfire, fire, spacing, or lack of oxygen- may be reduced or ignored at the Warden or Head of Security’s discretion."},
  { id:"significant_syndi_contraband", name:"Possession or Use of Significant Syndicate Contraband", category:"extreme", minutes:20,
    desc:"To make, hold, or use Significant Syndicate contraband. Significant Syndicate contraband may only be used in emergencies, and only to prevent death or gross bodily harm.\n\nSignificant Syndicate contraband is any Syndicate contraband that can be used to hinder the station or aid it's enemies in an obvious way. Any syndicate contraband that does not meet this definition is to be considered minor contraband."},
  { id:"mass_destruction", name:"Mass Destruction", category:"extreme", minutes:20,
    desc:"To cause massive damage to an area or major station system. This includes major bombings and sabotage of critical station systems like power, medical, chemistry, substations, and atmospherics."},
  { id:"unlawful_detainment", name:"Unlawful Detainment", category:"extreme", minutes:20,
    desc:"To unlawfully restrain, transport, control, or confine a sentient humanoid being against that individual’s will. This is a catchall to cover any form of kidnapping or forced control."},
  { id:"attempted_murder", name:"Attempted Murder", category:"extreme", minutes:20,
    desc:"To make an attempt to end someone’s life, using physical force or otherwise. Proof that action was taken with the intent to kill is necessary, such as a lethal weapon being used."},
  { id:"murder", name:"Murder", category:"extreme", minutes:20,
    desc:"To kill a sentient humanoid with malicious intent. If the victim must be revived, it is murder and not attempted murder."},
  { id:"treason", name:"Treason", category:"extreme", minutes:20,
    desc:"To willfully betray allegiances to NanoTrasen. This includes collaborating with terrorists, and especially applies to members of Command attempting to illegally forsake their duties to the detriment of the Station and Nanotrasen."},
  { id:"cannibalism", name:"Cannibalism", category:"extreme", minutes:20,
    desc:"To consume any part of a sentient humanoid. Consumption of vital components should be treated more harshly. This can be charged on top of other charges such as Murder or Assault if the suspect committed these crimes to obtain the parts consumed. Consumption of blood is not considered cannibalism, but if the source is non-consensual or stolen it may be assault or theft."},

  // Capital
  { id:"refusal_mindshield", name:"Refusal of Mental Shielding", category:"capital", minutes:0,
    desc:"To refuse to comply with a reasonable Mind Shielding procedure. Applies if the suspect is excessively uncooperative or the implant fails to function due to the mental state of the prisoner being too far gone. If the implant fails, execution is heavily recommended and may be approved by the Captain or Central Command. See Implantation for more."},
  { id:"terrorism", name:"Terrorism", category:"capital", minutes:0,
    desc:"To engage in malicious destructive actions which threaten to destroy or successfully destroy a vessel, habitat, or station. This includes extreme sabotage of station systems or setting off the self-destruction systems."},
  { id:"unlawful_execution", name:"Unlawful Execution", category:"capital", minutes:0,
    desc:"To unlawfully execute an individual without authorization or outside of Standard Operating Procedure. This law is distinct from murder, and applies primarily to Security, Command, and Central Command forces such as Emergency Response Teams."},
  { id:"prevention_revival", name:"Prevention of Revival", category:"capital", minutes:0,
    desc:"To render a body un-resurrectable. This includes gibbing, throwing a body into space, intentionally hiding a body, unlawfully incinerating a body, or any other ways of preventing a body with a soul from being resurrected."},
  { id:"mass_murder", name:"Mass Murder", category:"capital", minutes:0,
    desc:"To kill three or more sentient humanoid with malicious intent. Only applies when there have been multiple killings with intention."},
  { id:"enemy_corp", name:"Enemy of Corporation", category:"capital", minutes:0,
    desc:"To act as or knowingly aid a known enemy of the Station and NT-CC. Only applies beyond a shadow of doubt."},
];

// Linked groups (exactly as you sent)
const linkedGroups = [
  ["Failure to Comply", "Breach of Arrest", "Breach of Custody", "Refusal of Mental Shielding"],
  ["Possession or Use of Minor Contraband", "Possession or Use of Major Contraband", "Possession or Use of Significant Syndicate Contraband"],
  ["Petty Theft", "Grand Theft", "Armed Robbery"],
  ["Vandalism", "Tampering with Machinery", "Damage of Property", "Destruction of Property", "Mass Destruction", "Terrorism"],
  ["Trespass", "Secure Trespass"],
  ["Endangerment", "Minor Assault", "Major Assault", "Manslaughter", "Attempted Murder", "Murder", "Prevention of Revival", "Mass Murder", "Unlawful Execution"],
  ["Disturbance", "Vigilantism", "Rioting"],
  ["Sedition", "Conspiracy", "Treason", "Enemy of Corporation"],
];

// Map crime name => group index
const crimeNameToGroup = new Map();
linkedGroups.forEach((g, idx) => g.forEach(name => crimeNameToGroup.set(name, idx)));

const byId = new Map(crimes.map(c => [c.id, c]));
const byName = new Map(crimes.map(c => [c.name, c]));

// =============================
// STATE
// =============================

const selected = new Set(); // crime IDs
let caseCounter = 1;

// =============================
// BUILD UI
// =============================

const acc = document.getElementById("crimeAccordion");

const categories = [
  { key:"minor", label:"Minor Crimes", pill:"Up to 5 min each" },
  { key:"moderate", label:"Moderate Crimes", pill:"Up to 5 min each" },
  { key:"major", label:"Major Crimes", pill:"Up to 10 min each" },
  { key:"extreme", label:"Extreme Crimes", pill:"Up to 20 min each" },
  { key:"capital", label:"Capital Crimes", pill:"Perma eligible (Captain confirmation)" },
];

function buildAccordion(){
  acc.innerHTML = "";
  categories.forEach((cat, i) => {
    const item = document.createElement("div");
    item.className = "accItem" + (i===0 ? " open" : "");
    item.dataset.cat = cat.key;

    const header = document.createElement("div");
    header.className = "accHeader";
    header.innerHTML = `<h3>${cat.label}</h3><div class="pill">${cat.pill}</div>`;
    header.addEventListener("click", () => item.classList.toggle("open"));

    const body = document.createElement("div");
    body.className = "accBody";

    crimes.filter(c => c.category === cat.key).forEach(c => {
      body.appendChild(buildCrimeRow(c));
    });

    item.appendChild(header);
    item.appendChild(body);
    acc.appendChild(item);
  });
}

function buildCrimeRow(c){
  const row = document.createElement("div");
  row.className = "crimeRow";
  row.dataset.id = c.id;

  const top = document.createElement("div");
  top.className = "crimeTop";

  const btn = document.createElement("div");
  btn.className = "crimeBtn";
  btn.tabIndex = 0;

  const toggle = document.createElement("div");
  toggle.className = "toggle";
  toggle.textContent = "+";

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = c.name;

  const mins = document.createElement("div");
  mins.className = "mins";
  mins.textContent = c.category === "capital" ? "CAPITAL" : `${c.minutes} min`;

  btn.appendChild(toggle);
  btn.appendChild(name);
  btn.appendChild(mins);

  btn.addEventListener("click", () => toggleCrime(c.id));
  btn.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      toggleCrime(c.id);
    }
  });

  const info = document.createElement("button");
  info.className = "infoBtn";
  info.type = "button";
  info.textContent = "i";
  info.title = "Show description";
  info.addEventListener("click", (e) => {
    e.stopPropagation();
    row.classList.toggle("showDesc");
  });

  top.appendChild(btn);
  top.appendChild(info);

  const desc = document.createElement("div");
  desc.className = "crimeDesc";
  desc.textContent = c.desc;

  row.appendChild(top);
  row.appendChild(desc);
  return row;
}

buildAccordion();

// =============================
// LINKED CRIMES (bidirectional exclusivity)
// =============================

function deselectCrime(id){
  if(!selected.has(id)) return;
  selected.delete(id);
  const row = document.querySelector(`.crimeRow[data-id="${id}"]`);
  if(row) row.classList.remove("selected");
}

function selectCrime(id){
  selected.add(id);
  const row = document.querySelector(`.crimeRow[data-id="${id}"]`);
  if(row) row.classList.add("selected");
}

function toggleCrime(id){
  const crime = byId.get(id);
  if(!crime) return;

// Capital selection: no popup, just UI warning
if(crime.category === "capital" && !selected.has(id)){
  // We'll still allow selection, but show a clear warning in the status area
  hintEl.textContent = "Capital crime selected: Captain confirmation required. Perma is expected.";
  hintEl.classList.add("statusDanger");
}
  if(selected.has(id)){
    deselectCrime(id);
    updateTotals();
    return;
  }

  // If linked: remove others in same group
  const g = crimeNameToGroup.get(crime.name);
  if(g !== undefined){
    linkedGroups[g].forEach(otherName => {
      const other = byName.get(otherName);
      if(other && other.id !== id) deselectCrime(other.id);
    });
  }

  selectCrime(id);
  updateTotals();
}

// =============================
// TOTALS + MODIFIERS + STATUS
// =============================

const totalEl = document.getElementById("totalMinutes");
const statusEl = document.getElementById("statusText");
const hintEl = document.getElementById("statusHint");

const modMal = document.getElementById("modMalfeasance");
const modObs = document.getElementById("modObstruction");
const modNoIntent = document.getElementById("modNoIntent");
const modCoop = document.getElementById("modCoop");
const repeatCount = document.getElementById("repeatCount");

[modMal, modObs, modNoIntent, modCoop, repeatCount].forEach(el => {
  el.addEventListener("change", updateTotals);
  el.addEventListener("input", updateTotals);
});

function computeBase(){
  let base = 0;
  let hasCapital = false;

  selected.forEach(id => {
    const c = byId.get(id);
    if(!c) return;
    if(c.category === "capital") hasCapital = true;
    else base += c.minutes;
  });

  // Repeat offenders (+5 each)
  const repeats = Math.max(0, parseInt(repeatCount.value || "0", 10));
  base += repeats * 5;

  return { base, hasCapital };
}

function applyModifiers(base){
  let t = base;

  // Aggravating
  if(modMal.checked) t *= 1.5;
  if(modObs.checked) t *= 1.5;

  // Mitigating
  if(modNoIntent.checked) t *= 0.5;

  // Cooperation reduction (50-75%)
  const coop = parseFloat(modCoop.value || "0");
  if(coop > 0) t *= (1 - coop);

  // Round
  t = Math.round(t);
  if(t < 0) t = 0;
  return t;
}

function updateTotals(){
  const { base, hasCapital } = computeBase();
  const final = applyModifiers(base);

  totalEl.textContent = String(final);

  // status logic
  statusEl.classList.remove("statusDanger","statusWarn","statusOk");
  hintEl.classList.remove("statusOk","statusWarn","statusDanger");

  if(hasCapital){
    statusEl.textContent = "PERMANENT CONFINEMENT (Capital crime)";
    statusEl.classList.add("statusDanger");
    hintEl.textContent = "Capital crimes require Captain confirmation. Perma is expected.";
    return;
  }

  if(final > 20){
    statusEl.textContent = "PERMA recommended";
    statusEl.classList.add("statusDanger");
    hintEl.textContent = "Total exceeds 20 minutes. Talk to Warden/HoS (per sentencing guidance).";
    return;
  }

  if(final >= 10){
    statusEl.textContent = "Confinement";
    statusEl.classList.add("statusWarn");
    hintEl.textContent = "Charges must be read before Warden/HoS. Use common sense and humanity.";
    return;
  }

  if(final > 0){
    statusEl.textContent = "Warning eligible / short confinement";
    statusEl.classList.add("statusOk");
    hintEl.textContent = "Under 10 minutes is arresting officer authority. First-time minor offenses should be warned.";
    return;
  }

  statusEl.textContent = "Warning eligible";
  statusEl.classList.add("statusOk");
}

updateTotals();

// =============================
// REGISTRY (right side)
// =============================

const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const nameInput = document.getElementById("criminalName");
const recordsContainer = document.getElementById("recordsContainer");

saveBtn.addEventListener("click", saveCase);
clearBtn.addEventListener("click", () => {
  recordsContainer.innerHTML = "";
  caseCounter = 1;
});

function getSelectedCrimeNames(){
  const names = [];
  selected.forEach(id => {
    const c = byId.get(id);
    if(c) names.push(c.name);
  });
  // Stable order: by category then name
  const catOrder = { minor:0, moderate:1, major:2, extreme:3, capital:4 };
  names.sort((a,b)=>{
    const ca = byName.get(a)?.category ?? "minor";
    const cb = byName.get(b)?.category ?? "minor";
    if(catOrder[ca] !== catOrder[cb]) return catOrder[ca]-catOrder[cb];
    return a.localeCompare(b);
  });
  return names;
}

function saveCase(){
  const criminalName = nameInput.value.trim();
  if(!criminalName){
    setUiMessage("Enter the criminal name.", "warn");
    return;
  }

  const crimeNames = getSelectedCrimeNames();
  if(crimeNames.length === 0){
    setUiMessage("Select at least one crime.", "warn");
    return;
  }

  const { base, hasCapital } = computeBase();
  const final = applyModifiers(base);

  const rec = document.createElement("div");
  rec.className = "record";

    const crimesText = crimeNames.join(", "); // comma-separated
    rec.dataset.copy = crimesText;

  rec.innerHTML = `
    <div class="recordTop">
      <div>
        <div class="recordName">Case #${caseCounter}: ${escapeHtml(criminalName)}</div>
        <div class="recordMeta">Total: ${final} min${hasCapital ? " • CAPITAL" : ""}</div>
      </div>
      <div class="recordMeta">${new Date().toLocaleString()}</div>
    </div>
    <div class="recordCrimes">${escapeHtml(crimesText)}</div>
    <div class="recordActions">
      <button class="primary copyOnly">Copy crimes</button>
      <button class="ghost removeOne">Remove</button>
    </div>
  `;

  rec.querySelector(".copyOnly").addEventListener("click", async () => {
    await navigator.clipboard.writeText(rec.dataset.copy || "");
    setUiMessage("Crimes copied (name not included).", "ok");
  });

  rec.querySelector(".removeOne").addEventListener("click", () => rec.remove());

  recordsContainer.prepend(rec);
  caseCounter++;

  // Keep selection (optional) — you can clear if you want:
  // clearSelection();
}

function clearSelection(){
  Array.from(selected).forEach(id => deselectCrime(id));
  updateTotals();
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, (m) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}

function setUiMessage(text, type){
  // type: "ok" | "warn" | "danger"
  hintEl.textContent = text;

  // reset
  hintEl.classList.remove("statusOk","statusWarn","statusDanger");

  if(type === "danger") hintEl.classList.add("statusDanger");
  else if(type === "warn") hintEl.classList.add("statusWarn");
  else hintEl.classList.add("statusOk");
}