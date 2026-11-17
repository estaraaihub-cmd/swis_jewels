param(
  [int]$Port = 8090
)

$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener

$bound = $false
for ($i = 0; $i -lt 10; $i++) {
  $currentPort = $Port + $i
  $prefix = "http://localhost:$currentPort/"
  $listener.Prefixes.Clear()
  $listener.Prefixes.Add($prefix)
  try {
    $listener.Start()
    $Port = $currentPort
    $bound = $true
    break
  } catch {
    # Port may be in use, try next
  }
}

if (-not $bound) {
  Write-Error "Could not bind to any port starting from $Port"
  exit 1
}

Write-Host "SWIS JEWELS server running at http://localhost:$Port/"

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg"  = "image/svg+xml"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
}

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $rawPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($rawPath)) { $rawPath = "index.html" }

    $decodedPath = [System.Uri]::UnescapeDataString($rawPath)
    $filePath = Join-Path $root $decodedPath

    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $response.ContentType = $mime
      $response.ContentLength64 = $bytes.Length
      $response.StatusCode = 200
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $response.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
      $response.ContentLength64 = $msg.Length
      $response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $response.Close()
  }
} finally {
  $listener.Stop()
}
