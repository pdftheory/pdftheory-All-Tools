param(
    [string]$srcRoot = "C:\Users\Hussein\OneDrive\Desktop\pdfcraft-main",
    [string]$destRoot = "C:\Users\Hussein\OneDrive\Desktop\pdftheory-sanitized"
)

Write-Host "Creating destination: $destRoot"
if (!(Test-Path -LiteralPath $destRoot)) { 
    New-Item -ItemType Directory -Path $destRoot -Force | Out-Null
}

Write-Host "Getting file list from Git in $srcRoot..."
# Get all tracked and untracked (non-ignored) files
$files = git -C $srcRoot ls-files --cached --others --exclude-standard

$count = 0
foreach ($f in $files) {
    # Exclude internal .git or other .git folders that might be lying around
    if ($f -like "*.git/*" -or $f -eq ".git" -or $f -like "pdftheory.git*") {
        continue
    }

    $src = Join-Path $srcRoot $f
    $dst = Join-Path $destRoot $f
    $parent = Split-Path $dst
    
    if (!(Test-Path -LiteralPath $parent)) { 
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }
    
    if (Test-Path -LiteralPath $src -PathType Leaf) {
        # Use -LiteralPath to avoid issues with brackets [] in folder names
        Copy-Item -LiteralPath $src -Destination $dst -Force
        $count++
    }
}

Write-Host "Success! Copied $count files to $destRoot"
