"""Reemplaza el array `options` de preguntas concretas, localizadas por una subcadena
unica de su enunciado. El indice `correct` NO se toca: las opciones nuevas se escriben en
el mismo orden, con la respuesta correcta en la misma posicion que ya tenia."""
import re, sys, io, json

path = sys.argv[1]
mapfile = sys.argv[2]
text = io.open(path, encoding='utf-8').read()
FIXES = json.load(io.open(mapfile, encoding='utf-8'))

BLOCK_RE = re.compile(r"(q:\s*'((?:[^'\\]|\\.)*)',\s*options:\s*\[)(.*?)(\],\s*correct:\s*(\d+))")
OPT_RE = re.compile(r"'((?:[^'\\]|\\.)*)'")

aplicados, no_encontrados = [], []
claves = list(FIXES.keys())

# GUARDA CRITICA: una clave que coincide con mas de una pregunta sobrescribe las opciones de
# todas ellas, y solo una fue disenada para esas opciones. Eso corrompe las demas en silencio
# (paso con "¿Cuál es el diagnóstico más probable?", repetido en 2 cascadas distintas de
# anemias-hemoliticas-hereditarias). Abortar antes de tocar el archivo.
_enunciados = [m.group(2) for m in BLOCK_RE.finditer(text)]
_ambiguas = [(k, [q for q in _enunciados if k in q]) for k in claves]
_ambiguas = [(k, h) for k, h in _ambiguas if len(h) > 1]
if _ambiguas:
    print('CLAVES AMBIGUAS (coinciden con mas de una pregunta). Usa una subcadena mas especifica:')
    for k, h in _ambiguas:
        print(f'  "{k}" -> {len(h)} preguntas')
        for x in h:
            print(f'      . {x[:95]}')
    sys.exit(1)

def repl(m):
    pre, q, opts_str, post, ci = m.group(1), m.group(2), m.group(3), m.group(4), int(m.group(5))
    for k in claves:
        if k in q:
            nuevas = FIXES[k]
            assert len(nuevas) == 4, f'{k}: {len(nuevas)} opciones'
            viejas = OPT_RE.findall(opts_str)
            aplicados.append((k, viejas[ci], nuevas[ci]))
            body = ", ".join("'" + o.replace("'", "\\'") + "'" for o in nuevas)
            return pre + body + post
    return m.group(0)

nuevo = BLOCK_RE.sub(repl, text)
hechas = {a[0] for a in aplicados}
no_encontrados = [k for k in claves if k not in hechas]

if no_encontrados:
    print('NO ENCONTRADAS:')
    for k in no_encontrados:
        print('  ', k)
    sys.exit(1)

io.open(path, 'w', encoding='utf-8').write(nuevo)
print(f'{len(aplicados)} preguntas actualizadas')
print('\nrespuesta correcta antes -> despues (debe ser el MISMO hecho clinico):')
for k, v, n in aplicados:
    print(f'  * {v}\n    {n}\n')
