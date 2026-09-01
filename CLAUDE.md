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

**After changing any file listed in `CORE` in `sw.js`** (i.e. most `engine/`, `topics/*/`, or
`protocols/` files, or `index.html`/`app.js`): run
`powershell -ExecutionPolicy Bypass -File .claude/bump-cache-version.ps1`. This hashes the real
content of every `CORE` file and writes the result as `CACHE_VERSION` in `sw.js` — don't bump the
version by hand. The service worker is cache-first (`caches.match(req) || fetch(req)`), so a
stale `CACHE_VERSION` (or a browser that hasn't activated the new SW yet) can serve old assets
even after the source files are correct on disk. To verify a fix landed in a real browser
session (not just a fresh incognito/no-SW tab): DevTools → Application → Service Workers →
Unregister, then Application → Storage → Clear site data, then reopen the tab.

**Deploy**: drag-and-drop the folder to Netlify (or connect a repo) — static, no build.

## Architecture

**Engine/content split.** `engine/` is a generic rendering engine that knows nothing about any
specific medical topic. `topics/<topic-id>/` holds pure data (`content.js`, `calculators.js`,
`study.js`) for one topic. `topics/registry.js` lazy-loads and `compose()`s a topic's three files
into one `topic` object with a fixed shape; `engine/study-view.js`, `engine/calculators.js` etc.
only ever consume that shape. **Adding a new topic never touches the engine** — copy
`topics/_template/` (or `topics/_template-semiologia/` for a Semiología-style topic, see
`topics/historia-clinica/`), fill in the contract described in the template's comments, add an
entry to `registry.js`, and optionally add the new files to `CORE` in `sw.js` for offline support.
`topics/temario-index.js` is the separate, larger "full syllabus" tree (269 items) shown on
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
