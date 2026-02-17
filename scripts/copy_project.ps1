param(
    [string]$srcRoot = "C:\Users\Hussein\OneDrive\Desktop\pdfcraft-main",
    [string]$destRoot = "C:\Users\Hussein\OneDrive\Desktop\pdftheory-sanitized"
)

Write-Host "Creating destination: $destRoot"
if (!(Test-Path $destRoot)) { 
    New-Item -ItemType Directory -Path $destRoot -Force | Out-Null
}

Write-Host "Getting file list from Git in $srcRoot..."
$files = git -C $srcRoot ls-files --cached --others --exclude-standard

$count = 0
foreach ($f in $files) {
    $src = Join-Path $srcRoot $f
    $dst = Join-Path $destRoot $f
    $parent = Split-Path $dst
    
    if (!(Test-Path $parent)) { 
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }
    
    if (Test-Path $src -PathType Leaf) {
        Copy-Item $src $dst -Force
        $count++
    }
}

Write-Host "Success! Copied $count files to $destRoot"
