import json, sys, io

d = json.load(io.open(sys.argv[1], encoding='utf-8'))
lo = int(sys.argv[2]) if len(sys.argv) > 2 else 0
hi = int(sys.argv[3]) if len(sys.argv) > 3 else len(d['fails'])
print(f"total {d['total']} | ok {d['ok']} | a corregir {d['a_corregir']}\n")
for n, f in enumerate(d['fails'][lo:hi], start=lo):
    print(f"[{n}] ({f['motivo'].strip()}, {f['ratio']}x) {f['q']}")
    for o in f['options']:
        mark = '*' if o['i'] == f['correct'] else ' '
        print(f"   {mark}{o['i']} ({o['len']:3d}) {o['txt']}")
    print()
