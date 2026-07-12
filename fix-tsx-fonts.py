import re
import os
import glob

replacements = [
  (r'fontSize:\s*"0\.72rem"', 'fontSize: "0.85rem"'),
  (r'fontSize:\s*"0\.75rem"', 'fontSize: "0.85rem"'),
  (r'fontSize:\s*"0\.78rem"', 'fontSize: "0.85rem"'),
  (r'fontSize:\s*"0\.8rem"', 'fontSize: "0.9rem"'),
  (r'fontSize:\s*"0\.82rem"', 'fontSize: "0.9rem"'),
  (r'fontSize:\s*"0\.85rem"', 'fontSize: "0.95rem"'),
  (r'fontSize:\s*"0\.88rem"', 'fontSize: "0.95rem"'),
  (r'fontSize:\s*"0\.9rem"', 'fontSize: "1rem"'),
  (r'fontSize:\s*"0\.92rem"', 'fontSize: "1rem"'),
  (r'fontSize:\s*"0\.95rem"', 'fontSize: "1.05rem"')
]

tsx_files = glob.glob('src/**/*.tsx', recursive=True)
for file_path in tsx_files:
    with open(file_path, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements:
        new_content = re.sub(old, new, new_content)
        
    if new_content != content:
        with open(file_path, 'w') as f:
            f.write(new_content)
            print(f"Updated {file_path}")

print("Fixed TSX fonts")
