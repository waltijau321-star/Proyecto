# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

MIOsler (formerly "ResidenteMed"): a PWA (installable, offline-capable) study platform for
Internal Medicine residents. Vanilla HTML/CSS/JS, ES modules, **no build step, no Node, no
bundler**. Content author: Dr. Walter Jáuregui.

## Commands

**Run locally** — ES modules require HTTP, not `file://`. Serve the repo root with any static
server:
- Preferred in this environment: `.claude/launch.json` defines a `static-server` config
  (`.claude/serve.ps1`, a hand-rolled `HttpListener` PowerShell server) → `http://localhost:8788/`.
- Alternatives: `npx serve`, VS Code Live Server, `python -m http.server`.

**Run tests** — open `tests.html` in a browser (imports the real modules from `tests.js`, no
mocks, no framework — there's no Node/npm in this environment). Add a test by calling
`test('description', () => { ...assert...(); })` in `tests.js`. If the logic under test lives in
a non-exported function, export it (already done for `mergeValue` in `cloud-sync.js`,
`checkPasswordRules` in `auth.js`) — exporting a pure function doesn't change app behavior.

**After changing any file listed in `SHELL` or `CONTENT` in `sw.js`** (i.e. most `engine/`, `topics/*/`, or
`protocols/` files, or `index.html`/`app.js`): run
`powershell -ExecutionPolicy Bypass -File .claude/bump-cache-version.ps1`. This hashes the real
content of every precached file (both lists) and writes the result as `CACHE_VERSION` in `sw.js` — don't bump the
version by hand. The service worker is cache-first (`caches.match(req) || fetch(req)`), so a
stale `CACHE_VERSION` (or a browser that hasn't activated the new SW yet) can serve old assets
even after the source files are correct on disk. To verify a fix landed in a real browser
session (not just a fresh incognito/no-SW tab): DevTools → Application → Service Workers →
Unregister, then Application → Storage → Clear site data, then reopen the tab.

**A pre-commit hook does that bump for you, and it is versioned but not enabled by a clone.** It
lives in `.claude/hooks/pre-commit`, and git only runs it if this repo's local config points there:
on a fresh clone run `git config core.hooksPath .claude/hooks` once (git will not let a repo
configure its own hooks path, so there is no way around that one command). The hook skips out
immediately unless the commit actually stages `sw.js` or a precached file, then runs
`bump-cache-version.ps1`, and stages `sw.js` **only when its single difference from the index is the
`CACHE_VERSION` line**. If `sw.js` carries other unstaged edits, the hook aborts the commit and
prints them instead of folding them in: an earlier version ran a bare `git add sw.js`, which on
1 Nov 2026 slipped three paths of an unfinished topic into a docs-only commit and would have
published a service worker precaching files that do not exist. So a commit refused with
"sw.js tiene cambios sin preparar" is the guard working: either `git add sw.js` deliberately, or
commit those edits on their own first.

**Deploy**: the live site is a Cloudflare **Worker** named `proyecto`, built by Workers Builds from
the GitHub repo (`waltijau321-star/Proyecto`) on every push to `main`. No wrangler config is versioned
here; Cloudflare generates an ephemeral one per build. So a push publishes, and there is no folder to
upload. The repo also carries working material that must never be served: `Bibliografia/` (copyrighted
PDFs, "personal use only"), `.claude/` (holds `gemini-key.txt` on the author's machine), `tools/`, the
temario `.docx`, `Calculos dosis.xlsx`, `esearch_result.json`, `CLAUDE.md`, `README.md`, `LOGO.jpeg`,
`tests.html`, `tests.js`. **`.assetsignore` at the repo root is the only thing keeping them out**, so
any new root-level working file or folder goes there and nowhere else.

**Never add a `_redirects` file.** Workers validates it strictly and a single invalid rule aborts the
whole deploy, uploading nothing. A `_redirects` written in Netlify syntax (`404!`, a status Cloudflare
does not accept) is what failed every build from 16 Oct to 1 Nov 2026: the pushes went through, the
working copy looked fine, and production silently stayed 50 commits and 13 topics behind. After a push,
check that it landed: the commit carries a `Workers Builds: proyecto` check run in GitHub (readable
without credentials, the repo is public), and `CACHE_VERSION` in the live `sw.js` tells you which commit
is actually being served.

**`_headers` is the one `_`-file that is welcome**, and it works the same way: Cloudflare reads it at
deploy time from the repo root and does not serve it. It carries the response headers
(`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, HSTS, `Permissions-Policy`,
`Cross-Origin-Opener-Policy`). There is deliberately **no** `Content-Security-Policy` yet: the app has
104 inline `onclick` handlers, so a policy would need `'unsafe-inline'` for scripts plus an exact list
of every destination (`www.gstatic.com` for the Firebase SDK, Google Fonts, and
identitytoolkit / securetoken / firestore under `googleapis.com`), and getting one of those wrong locks
residents out of signing in, which cannot be checked without a real session. Same caution as above:
after touching this file, confirm the build went green.

## Architecture

**Engine/content split.** `engine/` is a generic rendering engine that knows nothing about any
specific medical topic. `topics/<topic-id>/` holds pure data (`content.js`, `calculators.js`,
`study.js`) for one topic. `topics/registry.js` lazy-loads and `compose()`s a topic's three files
into one `topic` object with a fixed shape; `engine/study-view.js`, `engine/calculators.js` etc.
only ever consume that shape. **Adding a new topic never touches the engine** — copy
`topics/_template/` (or `topics/_template-semiologia/` for a Semiología-style topic, see
`topics/historia-clinica/`), fill in the contract described in the template's comments, add an
entry to `registry.js`, and add the new files to `CONTENT` in `sw.js` for offline support (a test
checks that every registry topic has its three files precached). **A registry entry carries
`accent` and `preguntas` (the quiz length) alongside `id` and `load`**, duplicated from the
topic's own module on purpose: Inicio reads those two fields straight from the registry so the
front page no longer loads all 106 topics just to paint (that cost 205 requests and 7.1 MB before
anything appeared, and grew with every topic added). A per-topic test compares both copies, so a
new topic with a wrong `preguntas`, or a topic whose bank later grows, fails `tests.html` until
the number is updated. The same rule is why `engine/flashcard-deck.js` loads only the topics the
user already graded a card in, and why `mountExamSummary` asks the registry instead of the banks:
**nothing mounted by Inicio may call `loadTopic`.** `sw.js` splits the precache in
two: `SHELL` is the app shell and installs atomically, `CONTENT` is the topics and tolerates
individual failures, so one bad request can no longer leave a user with no offline app at all.
`topics/temario-index.js` is the separate, larger "full syllabus" tree (318 items) shown on
Inicio — most entries there don't have a built topic yet (`topicId: null`).

**`app.js`** is the shell/router: owns section switching (`showSection`), the active topic
(`selectTopic`), and the cross-topic global search index (`buildAndSetGlobalIndex`, gathers
complicaciones/estigmas/escalas/calculators from every topic in the registry plus VPO and
protocols). `index.html` provides the static shell (header, `<section id="sec-*">` per section,
bottom nav, one shared `#overlay`/`#modal` pair reused by every modal in the app).

**Sync layer — the one rule that matters most.** `engine/cloud-sync.js` exports `syncGet`/`syncSet`,
a drop-in replacement for `localStorage.getItem`/`setItem` that also mirrors to a single Firestore
document per user (`users/{uid}`, one field per localStorage key) with a merge strategy on login
from a new device (`mergeValue`, exported for testing). **Any new module that stores user
progress must use `syncGet`/`syncSet`, never `localStorage` directly**, or it won't sync across
devices.

**Notes panel: the one deliberate exception to that rule.** `engine/topic-chat.js` (notes written
by users, one thread per topic) talks to Firestore **directly**, bypassing `cloud-sync.js`. That is
correct and must not be "fixed": `users/{uid}` is one private document per person, while these are
shared between users and live in their own collection,
`temaComentarios/{topicId}/mensajes/{msgId}`, plus `reportes/` and `flood/` (the rate limit).
Everything a user writes is escaped through `engine/texto-seguro.js` before it reaches `innerHTML`
(note that the `esc()` in `study-view.js` is a null guard that escapes **nothing**, because topic
content carries intentional HTML). Two things that bite later: a topic's `id` is the key of its
notes collection, so **renaming an id in `topics/registry.js` silently orphans every note on that
topic**; and `ADMIN_EMAILS` is duplicated in `engine/firebase-config.js` and in `firestore.rules`
(no custom claims without a server), with a test that fails if the two drift apart. `firestore.rules`
is versioned in the repo but **not deployed from it**: paste it into the Firebase console.

**Figures system** (`topic.figuras`). Each topic can export
`figuras: { key: { titulo, fuente?, html } }`, rendered by `figuraHTML()`/`oneFiguraHTML()` in
`engine/study-view.js` inside `.modal-figure`. Attach points: `c.figura`/`c.figuras` per
complicación, `topic.figurasClasificacion` (Clasificación section), `topic.figurasDefinicion`
(Definición section) — remember to also thread any new attach-point field through `compose()` in
`topics/registry.js`, or it's silently dropped. `html` is either hand-drawn SVG (theme-aware via
CSS variables only — `var(--ink)`, `var(--accent-fg)`, `var(--line)`, never a fixed hex except for
established semantic clinical colors) or an `<img>` pointing at `topics/<topic>/assets/`. See
`.claude/skills/figura-didactica/SKILL.md` for the full recipe, including the AI-generation path
(`tools/generar-figura.py`, free Gemini API tier, local-only key) for purely decorative artwork —
never for anything asserting a clinical fact, and never disclosed as AI-generated anywhere in the
app's visible text (explicit product decision).

**Citations.** Each topic exports `bibliografia` (a flat array of Vancouver-style strings) and
attribution maps that point into it **1-based**, not 0-based: `compCites` keyed by complicación
name and then by field, plus `diagCites`, `escalaRefs`, `clasificacionCite` and
`seguimientoCite`. An index that points past the end of `bibliografia` paints nothing, silently.

**`compCites` must use the per-field object form**, `{ criterios_dx: [3], laboratorio: [4] }`. A
flat array (`[3, 4]`, meaning the sources of the whole ficha) also parses, and `openModal`
normalizes it, but it anchors that array to `definicion` alone, so every other field of the ficha
paints no citation at all. That is not hypothetical: 62 of the 106 topics were written that way,
427 fichas in all, and their `criterios_dx`, `laboratorio` and `tx_farmacologico` showed nothing to
the reader even though the sources were declared. They were converted on 2 Nov 2026 and a new topic
must not reintroduce the flat form. A citation hanging off a field the ficha does not have is dead
data too, and a test now forbids it.

**The minimum attribution rule (decided 1 Nov 2026):** in every `complicaciones[]` entry,
**`criterios_dx`, `laboratorio` and `tx_farmacologico` carry a citation in `compCites`** whenever
they have content (an explicit "No aplica" does not count). Those are the three fields where an
unsourced claim weighs most at the bedside. The other fields keep the older convention: attribute
what the author wants to mark. A new topic is written compliant from the start, which is far
cheaper than coming back months later with the sources closed. `tests.js` holds a **ratchet**
(`ATRIB_TOTAL_MINIMO`, `ATRIB_COMPLETOS`): the number of attributed fields can only go up, and
topics declared complete must stay complete, so the backlog can be cleared in blocks without
leaving the suite red. The full state, the per-topic worklist and the method are in
`.claude/atribucion-citas.md`.

**Before concluding a source is missing, look in `Bibliografia/`.** It holds 330 PDFs organized by
area, and a topic's `bibliografia[]` is not the author's whole library: on 2 Nov 2026 the ISTH DIC
score that `.claude/atribucion-citas.md` named as its clearest example of "no source exists" was
sitting in `VI. Hematología y Oncología/Hemostasia y trombosis/`, never added to that topic. Search
by the subject of the gap (`find Bibliografia -iname "*neutropen*"`), not by the topic's name. And
**a source added to `bibliografia[]` goes at the end**: inserting one shifts every later index and
the engine paints the wrong reference without a word.

**Checking means reading the passage, not counting the term.** On 2 Nov 2026, 23 citations were
verified by searching each field's own terms in the PDF and recording the hit counts and pages.
Re-reading the 11 passages where the citation rested on that co-occurrence, **3 did not hold**: the
AASLD guidance mentions midodrine five times, but once in a trial that found "no difference ... in
the complication rates or death" and twice for hepatorenal syndrome "yet the efficacy is low"; and
Surviving Sepsis mentions arrhythmia eight times, as a trial outcome and a drug-choice factor,
never as a monitoring recommendation. A hit count reads the same whether the source recommends
something or rules it out. So: open the page, read the passage, and leave the guideline's own
sentence in a comment next to the citation. Reading also exposes what counting cannot, namely the
clause of the field that no source supports. **The decision rule, so the calls stay consistent:
cite when the source supports what the field primarily tells the reader to do; leave the gap when
it only supports an incidental clause.**

**Never attribute a field to a source you have not checked covers it.** A wrong citation is worse
than a gap, and this is not hypothetical: `urticaria` listed the SOLAPSO psoriasis guideline and
the Latin-American Stevens-Johnson guideline, and the only mentions of "psoriasis" and "Stevens"
anywhere in that topic were those two citation strings. When the topic has several sources and
the field text does not say which one supports it, leave the gap and note it. Also check which
edition is in `Bibliografia/` before citing a guideline, and when hunting for an open source,
filter PubMed with `AND "pubmed pmc"[sb]` and search guidelines by author: the `"open access"[Filter]`
filter does not exist and returns 0 without warning.

**Accents.** Topic text is written with real accented characters, not `&#NNN;` entities and
not bare vowels. Both older styles were cleaned up (4026 entities on 1 Nov 2026, 83 489 missing
accents on 2 Nov), and a per-topic test (`tildes[<id>]` in `tests.js`) fails if a word that is not
Spanish without its accent comes back. Three places must stay unaccented, and getting this wrong
breaks things silently: **property names** (`definicion`, `clinica`, `pronostico`,
`farmacologico` are schema keys, and accenting one leaves the engine looking for a key that no
longer exists), **values the engine compares** (`dificultad: 'facil'` is matched against the
`<option value="facil">` of the exam, and a topic's `id` is the key of its notes collection), and
**`bibliografia` / `fuente`**, where author names and titles are written as published
(`Martin ML`, `Berlin definition. JAMA`) so an accent there falsifies the reference. In prose,
`definicion de Berlin` does take it. Leave alone what genuinely needs judgement: `estudio` /
`estudio`, `inicio` / `inicio` and the other noun/preterite pairs (unaccented is the noun, which is
right almost every time), `continua` / `continua`, the double-accentuation words (`cardiaca`,
`triada`, `varices`, `alveolo`, all valid both ways), and `el` / `el`, `si` / `si`, `esta` /
`esta`.

**Quiz questions** (`topic.study.quiz`, from each topic's `study.js`): a flat array mixing
plain questions (`{ q, options, correct, explanation, dificultad }`) and multi-step cascade cases
(`{ type: 'cascade', vignette, steps: [{ q, options, correct }], explanation, dificultad }`). Any
task that writes or edits an `study.js` `quiz` array — new topic, revision, added questions —
**must** follow `.claude/skills/reglas-preguntas/SKILL.md` (option-writing rules: same logical
category across options, comparable length/detail so the correct answer isn't identifiable by
being the longest/most technical, plausible distractors, no grammatical/semantic tells, and the
position of `correct` distributed with no discernible pattern across the whole array — check by
listing all `correct` indices in order before considering the file done). This applies always,
not only when the user explicitly asks for it.

`tests.js` enforces this mechanically, so a new topic must be written to pass on the first try:
four option-quality thresholds per topic (correct-is-longest ≤40%, mean length ratio ≤1.15x,
absolutism-only-in-distractors ≤10%, zero options >2x the others) plus a check that the option
marked `correct` actually agrees with its own `explanation`. Every registry topic must appear in
`REVISADOS` — `PENDIENTES` is empty and `COLA_MAXIMA` is 0 since the August 2026 audit closed, so
there is no longer a queue to park a topic in. Command-line helpers for this live in
`.claude/tools/quiz/` (see its README); the authoritative measurement is always `tests.html`,
because it imports the real modules instead of regex-matching the file text.

**Calculator contract** (`engine/calculators.js` consumes this from every topic's
`calculators.js`, plus `engine/general-calc.js` for MI-wide calculators and
`protocols/vpo-calc.js` for VPO): a descriptor
`{ key, title, accent, subtitle, fields[], compute(v), format(r), fragment(r)? }` where `compute`
is a pure function returning a result object (or `null` if inputs are incomplete) and `format`
renders it to HTML. `fields[].type` is one of `number|select|checkbox|text|note`; `row` groups
adjacent fields into a two-column row. The Calc section (`mountAllCalculators`) shows every
topic's calculators at once, grouped by topic — there's no more "active topic" gate for Calc.

**Protocols** (`protocols/protocols.js`): a flat array of
`{ id, title, subtitle, accent, source, theory: { caveat?, intro, keyPoints[], drugs[] },
steps: [{ phase, text, note }] }`. Rendered automatically by `engine/protocols.js` — theory first,
then a per-step checklist with local persistence.

**Pediatría** (`protocols/pediatria-farmacos.js` + `engine/pediatria*.js`): a pharmacology
formulary for pediatric residents, built like VPO (a shell area with internal tabs, not a
registry topic). Two tabs, **one dataset**: "Por enfermedad" is *derived* by grouping each drug's
`dosis[].indicaciones[]`, never hand-written twice, and two tests check referential integrity in
both directions (an orphan indication is a disease that opens empty).

Five rules that are not style:
- **The neonate is dosed from the neonatal reference.** Any line that can reach a patient of 28
  days or less must cite NeoFax, or Harriet Lane where NeoFax has no monograph (it has none for
  dexamethasone, epinephrine or cephalexin). Taketomo is excluded for the neonate even though it
  prints "Dosificación neonatal", so **every non-neonatal line carries an explicit `edadMin: 29`**
  and a test enforces it line by line: a dose must never reach a newborn by omission. A drug with
  no neonatal dose in either neonatal source declares `sinNeonatal` with where to look instead,
  and the monograph prints it above the doses.
- **Three time axes in the neonate, and they are different things.** `edadMin/edadMax` are days of
  life; `pmaMin/pmaMax` are weeks of **postmenstrual** age (gestational age at birth plus days of
  life, derived in `pacientePedia`, never asked for); `egMin/egMax` are weeks of gestational age
  **at birth**, which never changes. Plus `pesoMin/pesoMax` in kg of current weight and
  `pesoNacMin/pesoNacMax` in **grams of birth weight** (the ibuprofen-lysine PDA course is dosed on
  birth weight for all three doses). The axes combine with AND, which is exactly what NeoFax's
  tables are: gentamicin's chart is PMA × postnatal days, ampicillin's is gestational age ×
  postnatal days. A line may not declare both `eg*` and `pma*`: two readings of "weeks" in one
  line says nothing about which governs. `carga` carries the loading dose, and `cada` may exceed
  24 h (gentamicin q36 and q48 in the preterm), in which case no daily total is computed because
  none exists.
- **Nothing ranks a treatment.** Taketomo, NeoFax and Harriet Lane are *dosing* handbooks: they
  say how much, not what first. A `linea` field (first choice) is optional and, when present,
  requires `fuenteLinea` pointing at a treatment guideline with a year; the suite rejects it
  otherwise. By default the disease view groups by drug class and says on screen that it is not
  an order of choice, and every indication carries a required `contexto` stating which patient
  the list does **not** cover.
- **One `mgkg` key with an explicit `por: 'dosis'|'dia'`**, never two alternative keys, and
  everything in milligrams (`mgkg` and `presentaciones[].mg` share a unit so they can be
  divided). Ceilings come in four flavours and the lowest applicable one binds: `maxDosis`/
  `maxDia` in mg, `maxMgkgDosis`/`maxMgkgDia` in mg/kg. Dropping the per-kg ones leaves the
  neonate with no ceiling at all.
- **`evidencia` has three values here**, not VPO's two: `guia | manual | consenso`. The normal
  case is a reference handbook, which is more than accepted practice and less than a guideline.
  `evidencia` and `fuente: {ref, pagina}` sit on each **dose line**, not on the drug, because a
  neonatal line and a pediatric line routinely come from different books.
- **Every number was read on the page**, and the page is in the data. There is no "verify later"
  state: a line without `fuente.pagina` does not land. Three traps: Taketomo's text layer has OCR
  errors (`AC1CLOVIR`, `CURATO` for CITRATO); its running head is the drug that *starts* on the
  page, so the text at the top is usually the tail of the previous monograph (searching a page
  range for "Dosificación" returned a barbiturate's dose under amoxicillin and the topical
  preparation under systemic clindamycin); and NeoFax has no running head at all, but prints
  `NEONATAL DRUG MONOGRAPH` plus the drug name at the foot of every page of a monograph, which is
  its index. Read the passage and confirm it is the right drug. Where two sources disagree with
  themselves, drop the line and say why: Taketomo's IV hypersensitivity line for epinephrine reads
  "0.01 mg/kg (0.01 mL/kg of 1:10 000)", and those two numbers differ by a factor of ten, so the
  neonatal cardiac dose comes from Harriet Lane, whose figures agree.

Access is a **UI convenience, not a security boundary**, and `engine/pediatria-acceso.js` says so
in its header: the flag is `rm:profile-pediatria` on the user's own document, which
`firestore.rules` lets them write. That is fine, because what it hides is educational material,
not anybody's data. So **`firestore.rules` is not touched for this**, and there is deliberately no
email allowlist (`firebase-config.js` is served publicly; a resident's address is a third party's
data). New users tick a box at signup; the 100+ already registered turn it on in "Mi cuenta",
which fires the existing `rm:perfil-guardado` event that `app.js` listens to. The author sees it
always, through `isAdmin()`.

The arithmetic lives in `engine/pediatria-dosis.js`, which is **pure on purpose** so the sync
runner can cover it with cases: volumes round to the real syringe graduation and then the
delivered mg are recomputed from the rounded volume (so the chart and the syringe never disagree),
a ceiling is never crossed by a rounding artefact, the computed row restates the weight it used
(the tenfold-error defence), no weight returns `null` rather than a number, and `lineaAplica`
returns `'sin-dato'` rather than `false` when the age is missing, so no dose is ever silently
hidden.

**Auth gate**: `app.js`'s `init()` waits on `initAuth()` before booting (`bootApp()` runs
`selectTopic` + `showSection('inicio')` + registers the service worker) — the app only free-boots
without an auth gate if `engine/firebase-config.js` still has placeholder config
(`firebaseReady === false`), so local dev without Firebase configured isn't blocked.

## Environment gotchas (Windows, this machine)

- No Node. Python 3 is available; `pip` is not on PATH — use `uv` (`uv run --with <pkg> ...`,
  `uv tool install`) instead of `pip install`.
- PowerShell 5.1's `Get-Content`/`Out-File`/`Set-Content` without `-Encoding` mis-detect UTF-8
  (no BOM) as ANSI and corrupt accented characters. Use
  `[System.IO.File]::ReadAllText/WriteAllText` with `UTF8Encoding($false)` instead, as
  `.claude/bump-cache-version.ps1` does.
