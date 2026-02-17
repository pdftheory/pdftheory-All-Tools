
try:
    with open('server3005.log', 'rb') as f:
        # Read as bytes first to avoid decoding errors
        content_bytes = f.read()
        # Decode utf-16-le
        content = content_bytes.decode('utf-16-le', errors='ignore')
        
    lines = content.split('\n')
    found = False
    for i, line in enumerate(lines):
        clean_line = line.replace('\r', '').strip()
        if "Cannot find module" in clean_line or "MODULE_NOT_FOUND" in clean_line:
            found = True
            print(f"--- MATCH at line {i} ---")
            start = max(0, i-10)
            end = min(len(lines), i+10)
            for j in range(start, end):
                l = lines[j].replace('\r', '')
                print(f"{j}: {repr(l)}") # Use repr to see control chars
    
    if not found:
        print("No match found.")

except Exception as e:
    print(f"Error: {e}")
