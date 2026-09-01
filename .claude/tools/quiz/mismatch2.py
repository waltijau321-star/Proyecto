"""Igual que mismatch.py pero (a) con margen configurable y (b) revisando tambien
los pasos de los casos en cascada contra la explicacion global del caso.
Uso: mismatch2.py <margen> <archivos...>
"""
import re, sys, io, unicodedata

STOP = set('''de la el los las un una unos unas y o en con por para que se su sus del al es
son como mas menos no si sin sobre entre cuando donde cual cuales este esta estos estas
lo le les ha han hay ser esta estan tras ante desde hasta cada tambien pero aunque'''.split())


def words(s):
    s = unicodedata.normalize('NFD', s.lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return set(w for w in re.findall(r'[a-z0-9]+', s) if len(w) > 3 and w not in STOP)


margen = int(sys.argv[1])
SUELTA = re.compile(
    r"q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[(.*?)\],\s*correct:\s*(\d+),\s*explanation:\s*'((?:[^'\\]|\\.)*)'")
PASO = re.compile(r"\{ q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[(.*?)\],\s*correct:\s*(\d+) \}")


def revisar(topic, q, o, c, exp, tipo):
    e = words(exp)
    if not e or len(o) != 4 or c >= 4:
        return
    score = [len(words(x) & e) for x in o]
    best = max(range(4), key=lambda i: score[i])
    if best != c and score[best] >= score[c] + margen:
        print('%s [%s] %s' % (topic, tipo, q[:90]))
        print('   correct=%d (%d): %s' % (c, score[c], o[c][:75]))
        print('   mejor  =%d (%d): %s' % (best, score[best], o[best][:75]))


for path in sys.argv[2:]:
    src = io.open(path, encoding='utf-8').read()
    topic = path.replace('\\', '/').split('/')[-2]
    for m in SUELTA.finditer(src):
        o = re.findall(r"'((?:[^'\\]|\\.)*)'", m.group(2))
        revisar(topic, m.group(1), o, int(m.group(3)), m.group(4), 'suelta')
    for blk in src.split("type: 'cascade'")[1:]:
        exp = re.search(r"explanation: '((?:[^'\\]|\\.)*)'", blk)
        if not exp:
            continue
        for m in PASO.finditer(blk):
            o = re.findall(r"'((?:[^'\\]|\\.)*)'", m.group(2))
            revisar(topic, m.group(1), o, int(m.group(3)), exp.group(1), 'paso')
