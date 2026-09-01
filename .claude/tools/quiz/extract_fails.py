import re, sys, json

path = sys.argv[1]
BLOCK_RE = re.compile(r"q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[(.*?)\],\s*correct:\s*(\d+)")
OPT_RE = re.compile(r"'((?:[^'\\]|\\.)*)'")
ABS = ['exclusivamente', 'siempre', 'nunca', 'ninguna', 'ningún', 'ninguno', 'completamente',
       'absolutamente', 'todos los casos', 'cualquier caso', 'sin excepción', 'de forma definitiva']
has_abs = lambda s: any(a in s.lower() for a in ABS)

text = open(path, encoding='utf-8').read()
fails, ok = [], 0
for m in BLOCK_RE.finditer(text):
    q, opts_str, ci = m.group(1), m.group(2), int(m.group(3))
    opts = OPT_RE.findall(opts_str)
    if len(opts) != 4:
        continue
    lens = [len(o) for o in opts]
    otras = [l for i, l in enumerate(lens) if i != ci]
    ratio = lens[ci] / (sum(otras) / 3)
    atip = any(l / (sum(x for j, x in enumerate(lens) if j != i) / 3) > 2.0 for i, l in enumerate(lens))
    absd = (not has_abs(opts[ci])) and any(has_abs(o) for i, o in enumerate(opts) if i != ci)
    largo = lens[ci] == max(lens) and ratio >= 1.20
    if largo or atip or absd:
        fails.append({'q': q, 'correct': ci, 'ratio': round(ratio, 2),
                      'motivo': ('largo ' if largo else '') + ('atipica ' if atip else '') + ('absolut' if absd else ''),
                      'options': [{'i': i, 'len': l, 'txt': o} for i, (o, l) in enumerate(zip(opts, lens))]})
    else:
        ok += 1
print(json.dumps({'total': len(fails) + ok, 'ok': ok, 'a_corregir': len(fails), 'fails': fails},
                 ensure_ascii=False, indent=1))
