"""Imprime cada pregunta con sus opciones, el indice correct y la explicacion,
para revisar a mano que options[correct] sea de verdad la respuesta."""
import re, sys, io

pat = re.compile(
    r"q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[(.*?)\],\s*correct:\s*(\d+),\s*explanation:\s*'((?:[^'\\]|\\.)*)'")

src = io.open(sys.argv[1], encoding='utf-8').read()
lo = int(sys.argv[2]) if len(sys.argv) > 2 else 0
hi = int(sys.argv[3]) if len(sys.argv) > 3 else 999
for n, m in enumerate(pat.finditer(src)):
    if not (lo <= n < hi):
        continue
    q, opts, c, exp = m.group(1), m.group(2), int(m.group(3)), m.group(4)
    o = re.findall(r"'((?:[^'\\]|\\.)*)'", opts)
    print('[%d] %s' % (n, q))
    for i, x in enumerate(o):
        print('  %s%d %s' % ('*' if i == c else ' ', i, x))
    print('   expl: %s' % exp[:160])
    print()
