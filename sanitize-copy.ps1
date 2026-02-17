$source = "C:\Users\Hussein\OneDrive\Desktop\pdfcraft-main"
$dest = "C:\Users\Hussein\OneDrive\Desktop\pdftheory"
$zipPath = "C:\Users\Hussein\OneDrive\Desktop\pdfcraft-main\public\pdftheory.zip"

# Clean up previous runs
if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
if (Test-Path $zipPath) { Remove-Item -Force $zipPath }

# Create destination
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Exclusion rules (using robocopy for efficiency and exclusion)
# Exclude strict directories and files
$excludeDirs = @("node_modules", ".next", "dist", "build", ".git", ".gemini", "tmp", "coverage")
$excludeFiles = @(".env*", "*.log", "npm-debug.log*", "yarn-error.log*", "secrets.ts", "*.zip", "tsc_output.txt", "test_output*.txt")

# Use robocopy to copy with exclusions
# /E = recursive including empty
# /XD = exclude directories
# /XF = exclude files
# /XO = exclude older (not strictly needed here since we wiped dest, but good habit)
# /NFL /NDL /NJH /NJS = silent output
$cmd = "robocopy `"$source`" `"$dest`" /E /XD $excludeDirs /XF $excludeFiles /NFL /NDL /NJH /NJS"
Invoke-Expression $cmd

# Verify no .env files slipped through (robocopy handles XF efficiently but double check is good)
if (Test-Path "$dest\.env") { Remove-Item "$dest\.env" -Force }
if (Test-Path "$dest\.env.local") { Remove-Item "$dest\.env.local" -Force }

# Create Zip
Compress-Archive -Path "$dest\*" -DestinationPath $zipPath -Force

Write-Host "Sanitized copy created at $dest and zipped to $zipPath"
