import re, sys, io
from collections import Counter

BLOCK_RE = re.compile(r"q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[(.*?)\],\s*correct:\s*(\d+)")
OPT_RE = re.compile(r"'((?:[^'\\]|\\.)*)'")

for path in sys.argv[1:]:
    text = io.open(path, encoding='utf-8').read()
    qs = [(m.group(1), OPT_RE.findall(m.group(2)), int(m.group(3))) for m in BLOCK_RE.finditer(text)]
    c = Counter(q for q, _, _ in qs)
    dupes = [q for q, n in c.items() if n > 1]
    print(f'{path}: {len(qs)} preguntas, {len(dupes)} enunciado(s) duplicado(s)')
    for d in dupes:
        print(f'  DUPLICADO: "{d}"')
        for q, opts, ci in qs:
            if q == d:
                print(f'     correcta[{ci}]: {opts[ci]}')
                print(f'        otras: {[o for i,o in enumerate(opts) if i!=ci]}')
