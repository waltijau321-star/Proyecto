"""Compara options[correct] entre HEAD y el arbol de trabajo, pregunta por pregunta.
Sirve para auditar que una reescritura de opciones no movio la respuesta correcta a otro
hecho clinico. Empareja las preguntas por su enunciado `q`."""
import re, subprocess, sys, io, os

# Se ejecuta desde la raiz del repo: `uv run python3 .claude/tools/quiz/verify_correct.py ...`
REPO = os.getcwd()
BLOCK_RE = re.compile(r"q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[(.*?)\],\s*correct:\s*(\d+)")
OPT_RE = re.compile(r"'((?:[^'\\]|\\.)*)'")

def parse(text):
    out = {}
    for m in BLOCK_RE.finditer(text):
        opts = OPT_RE.findall(m.group(2))
        if len(opts) == 4:
            out[m.group(1)] = (opts[int(m.group(3))], int(m.group(3)))
    return out

for path in sys.argv[1:]:
    old = subprocess.run(['git', 'show', f'HEAD:{path}'], capture_output=True, cwd=REPO).stdout.decode('utf-8')
    new = io.open(os.path.join(REPO, path.replace('/', os.sep)), encoding='utf-8').read()
    a, b = parse(old), parse(new)
    print(f'\n===== {path}')
    faltan = [q for q in a if q not in b]
    nuevas = [q for q in b if q not in a]
    if faltan: print(f'  !! {len(faltan)} enunciado(s) ya no existen (se reescribio el enunciado?)')
    for q in faltan[:3]: print(f'     - {q[:80]}')
    if nuevas: print(f'  !! {len(nuevas)} enunciado(s) nuevos')
    cambio_idx, cambios = 0, 0
    for q in a:
        if q not in b: continue
        (ta, ia), (tb, ib) = a[q], b[q]
        if ia != ib:
            cambio_idx += 1
            print(f'  !! INDICE CAMBIO ({ia}->{ib}): {q[:70]}')
        if ta != tb:
            cambios += 1
            print(f'  ~ {q[:74]}')
            print(f'      antes:   {ta}')
            print(f'      despues: {tb}')
    print(f'  -- {len(a)} preguntas | {cambios} respuestas correctas reformuladas | {cambio_idx} indices movidos')
