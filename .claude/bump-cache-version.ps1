# .claude/bump-cache-version.ps1
# Calcula un hash a partir del contenido real de los archivos listados en CORE (sw.js) y lo
# escribe como CACHE_VERSION. Reemplaza el bump manual: en vez de recordar subir un número
# cada vez que cambia un archivo cacheado, se corre este script y el número sale del contenido.
param(
  [string]$SwPath = "sw.js"
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Get-Content/Set-Content en Windows PowerShell 5.1 adivinan mal la codificación de archivos
# UTF-8 sin BOM (los interpretan como ANSI), corrompiendo tildes/eñes. Usamos File.ReadAllText/
# WriteAllText con UTF8Encoding($false) (sin BOM) para leer y escribir siempre como UTF-8 real.
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$fullSwPath = (Resolve-Path $SwPath).Path
$content = [System.IO.File]::ReadAllText($fullSwPath, [System.Text.Encoding]::UTF8)
if ($content -notmatch '(?s)const CORE = \[(.*?)\];') {
  Write-Error "No se encontró el arreglo CORE en $SwPath"
  exit 1
}
$coreBlock = $matches[1]
$files = [System.Text.RegularExpressions.Regex]::Matches($coreBlock, "'\.\/([^']+)'") | ForEach-Object { $_.Groups[1].Value }

# Se hashea el contenido normalizando CRLF -> LF. Sin esa normalización el hash dependía de los
# finales de línea del árbol de trabajo, que git reescribe solo (autocrlf) al hacer
# checkout/merge: el resultado era que main y una rama con contenido de CORE idéntico declaraban
# CACHE_VERSION distintos, y cada bump fantasma forzaba a todos los usuarios a re-descargar los
# 207 archivos de CORE (imágenes incluidas) sin que nada hubiera cambiado.
#
# La normalización se hace vía ISO-8859-1 (codepage 28591), NO vía UTF-8: latin-1 mapea los
# bytes 0-255 uno a uno, así que el round-trip es sin pérdida para cualquier archivo. CORE
# incluye PNG/WEBP, y decodificarlos como UTF-8 sería lossy (los bytes inválidos colapsan a
# U+FFFD), de modo que dos imágenes distintas podrían dar el mismo hash y NO disparar el bump.
$latin1 = [System.Text.Encoding]::GetEncoding(28591)
$hashLines = foreach ($f in $files) {
  if (Test-Path $f) {
    $normalizado = $latin1.GetString([System.IO.File]::ReadAllBytes($f)).Replace("`r`n", "`n")
    $sha = [System.Security.Cryptography.SHA256]::Create()
    ([System.BitConverter]::ToString($sha.ComputeHash($latin1.GetBytes($normalizado)))).Replace('-', '')
  }
  else { Write-Warning "No existe (omitido del hash): $f" }
}
$combined = ($hashLines -join '')
$sha256 = [System.Security.Cryptography.SHA256]::Create()
$finalBytes = $sha256.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($combined))
$finalHash = ([System.BitConverter]::ToString($finalBytes)).Replace('-', '').Substring(0, 10).ToLower()

$newVersion = "residentemed-$finalHash"
$oldVersionMatch = [regex]::Match($content, "const CACHE_VERSION = '([^']*)';")
$oldVersion = $oldVersionMatch.Groups[1].Value

if ($oldVersion -eq $newVersion) {
  Write-Host "CACHE_VERSION ya está al día: $newVersion (sin cambios en CORE)"
  exit 0
}

$updated = $content -replace "const CACHE_VERSION = '[^']*';", "const CACHE_VERSION = '$newVersion';"
[System.IO.File]::WriteAllText($fullSwPath, $updated, $utf8NoBom)

Write-Host "CACHE_VERSION: $oldVersion -> $newVersion ($($files.Count) archivos verificados)"
