#!/usr/bin/env python3
"""Genera una imagen decorativa con la API gratuita de Gemini (Nano Banana) y la guarda
como PNG en topics/<tema>/assets/.

Parte del sistema de figuras didacticas de MIOsler (ver
.claude/skills/figura-didactica/SKILL.md). SOLO para arte decorativo/conceptual — las figuras
clinicas (algoritmos, mecanismos, datos exactos) se dibujan a mano en SVG dentro de
topics/<tema>/content.js, nunca con este script, porque un modelo de imagen puede alucinar
anatomia, etiquetas o valores.

Uso (con uv, sin instalar nada globalmente):

    uv run --with google-genai tools/generar-figura.py "<prompt detallado>" topics/<tema>/assets/<nombre>.png

La clave de la API (gratuita, hasta 500 imagenes/dia) se lee, en este orden:
  1. --key en la linea de comandos
  2. variable de entorno GEMINI_API_KEY
  3. archivo local .claude/gemini-key.txt (una linea, la clave; nunca se commitea)

Como crear la clave (lo hace el usuario, una sola vez):
  1. Ir a https://aistudio.google.com/apikey con tu cuenta de Google.
  2. "Create API key" -> copiar la clave.
  3. Guardarla en .claude/gemini-key.txt (una sola linea, sin comillas) o exportarla como
     GEMINI_API_KEY. Ese archivo ya esta en .gitignore: nunca se sube al repo ni viaja a la app.
"""
import argparse
import os
import sys
from pathlib import Path

DEFAULT_MODEL = "gemini-2.5-flash-image"
KEY_FILE = Path(__file__).resolve().parent.parent / ".claude" / "gemini-key.txt"


def resolve_api_key(cli_key: str | None) -> str:
    if cli_key:
        return cli_key.strip()
    env_key = os.environ.get("GEMINI_API_KEY")
    if env_key:
        return env_key.strip()
    if KEY_FILE.exists():
        text = KEY_FILE.read_text(encoding="utf-8").strip()
        if text:
            return text
    raise SystemExit(
        "No encontre una clave de API. Opciones:\n"
        f"  1) Crea {KEY_FILE} con tu clave (una sola linea)\n"
        "  2) O exporta la variable de entorno GEMINI_API_KEY\n"
        "  3) O pasa --key <tu-clave>\n\n"
        "Clave gratuita en: https://aistudio.google.com/apikey"
    )


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Genera una imagen decorativa via la API gratuita de Gemini (Nano Banana).",
    )
    parser.add_argument("prompt", help="Descripcion muy especifica de la imagen a generar.")
    parser.add_argument("salida", help="Ruta de salida, p. ej. topics/cirrosis-hepatica/assets/portada.png")
    parser.add_argument("--model", default=DEFAULT_MODEL, help=f"Modelo de imagen (default: {DEFAULT_MODEL})")
    parser.add_argument("--key", default=None, help="Clave de API (si no, usa GEMINI_API_KEY o .claude/gemini-key.txt)")
    args = parser.parse_args()

    out_path = Path(args.salida)
    if out_path.suffix.lower() != ".png":
        raise SystemExit(f"La salida debe terminar en .png (recibido: {out_path})")

    api_key = resolve_api_key(args.key)

    try:
        from google import genai
    except ImportError:
        raise SystemExit(
            "Falta el paquete google-genai. Corre este script con:\n"
            "  uv run --with google-genai tools/generar-figura.py ...\n"
            "(uv lo instala solo, en un entorno temporal, sin tocar el resto del sistema)"
        )

    client = genai.Client(api_key=api_key)
    print(f"Generando con {args.model}...")
    try:
        response = client.models.generate_content(model=args.model, contents=[args.prompt])
    except Exception as exc:  # noqa: BLE001 — se re-reporta con contexto, no se traga el error
        raise SystemExit(f"La API de Gemini devolvio un error: {exc}")

    image_bytes = None
    text_notes = []
    candidates = getattr(response, "candidates", None) or []
    for candidate in candidates:
        parts = getattr(candidate.content, "parts", None) or []
        for part in parts:
            if getattr(part, "inline_data", None) is not None and part.inline_data.data:
                image_bytes = part.inline_data.data
            elif getattr(part, "text", None):
                text_notes.append(part.text)

    if image_bytes is None:
        detail = ("\nRespuesta del modelo: " + " ".join(text_notes)) if text_notes else ""
        raise SystemExit(
            "El modelo no devolvio ninguna imagen (puede haber rechazado el prompt por "
            "seguridad, o haber alcanzado el limite diario gratuito)." + detail
        )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    # Escritura binaria directa — evita el problema de encoding de stdout en Windows
    # (ver memoria del proyecto: nunca "print(...) > archivo" con datos binarios/UTF-8).
    out_path.write_bytes(image_bytes)
    size_kb = out_path.stat().st_size / 1024
    print(f"Listo: {out_path} ({size_kb:.0f} KB)")
    print("Revisa la imagen antes de referenciarla en content.js: confirma que no tenga texto")
    print("mal escrito ni detalles anatomicos/clinicos incorrectos (es arte decorativo, no dato).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
