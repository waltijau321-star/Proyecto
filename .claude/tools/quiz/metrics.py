import re, sys, statistics

OPT_BLOCK_RE = re.compile(r"options:\s*\[(.*?)\],\s*correct:\s*(\d+)")
OPT_RE = re.compile(r"'((?:[^'\\]|\\.)*)'")
ABS = ['exclusivamente', 'siempre', 'nunca', 'ninguna', 'ningún', 'ninguno', 'completamente',
       'absolutamente', 'todos los casos', 'cualquier caso', 'sin excepción', 'de forma definitiva']
has_abs = lambda s: any(a in s.lower() for a in ABS)

for path in sys.argv[1:]:
    text = open(path, encoding='utf-8').read()
    ml = 0; ratios = []; ad = 0; atip = 0; n = 0; naive = 0
    for m in OPT_BLOCK_RE.finditer(text):
        opts = OPT_RE.findall(m.group(1))
        if len(opts) != 4:
            continue
        ci = int(m.group(2)); n += 1
        lens = [len(o) for o in opts]
        otras = [l for i, l in enumerate(lens) if i != ci]
        ratios.append(lens[ci] / (sum(otras) / 3))
        if lens[ci] == max(lens): ml += 1
        if lens.index(max(lens)) == ci: naive += 1
        for i, l in enumerate(lens):
            resto = [x for j, x in enumerate(lens) if j != i]
            if l / (sum(resto) / 3) > 2.0: atip += 1
        if not has_abs(opts[ci]) and any(has_abs(o) for i, o in enumerate(opts) if i != ci): ad += 1
    pl = 100 * ml / n; rm = statistics.mean(ratios); pa = 100 * ad / n; nv = 100 * naive / n
    v = lambda ok: 'ok  ' if ok else 'FALLA'
    todo = pl <= 40 and rm <= 1.15 and pa <= 10 and atip == 0
    print(f"{path.split('/')[-2] if '/' in path else path}")
    print(f"   atajo 'la mas larga' acierta {nv:5.1f}%   (azar 25)")
    print(f"   {v(pl<=40)} mas larga {pl:5.1f}% (<=40)   {v(rm<=1.15)} ratio {rm:.2f}x (<=1.15)   "
          f"{v(pa<=10)} absolut {pa:5.1f}% (<=10)   {v(atip==0)} atipicas {atip} (0)")
    print(f"   => {'PASA TODO' if todo else 'AUN NO PASA'}\n")
