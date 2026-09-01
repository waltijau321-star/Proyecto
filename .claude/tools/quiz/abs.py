import re, sys, io

ABS = ['exclusivamente', 'siempre', 'nunca', 'ninguna', 'ningún', 'ninguno',
       'completamente', 'absolutamente', 'todos los casos', 'cualquier caso',
       'sin excepción', 'de forma definitiva']

src = io.open(sys.argv[1], encoding='utf-8').read()
pat = re.compile(r"q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[(.*?)\],\s*correct:\s*(\d+)")
for m in pat.finditer(src):
    q, opts, c = m.group(1), m.group(2), int(m.group(3))
    o = re.findall(r"'((?:[^'\\]|\\.)*)'", opts)
    if len(o) != 4:
        continue
    hit = [i for i, x in enumerate(o) if any(a in x.lower() for a in ABS)]
    if hit and c not in hit:
        print(q[:70])
        for i in hit:
            print('   [%d] %s' % (i, o[i]))
