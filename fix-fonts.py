import re

file_path = 'src/styles/global.css'
with open(file_path, 'r') as f:
    content = f.read()

replacements = [
  (r'font-size:\s*0\.72rem;', 'font-size: 0.85rem;'),
  (r'font-size:\s*0\.75rem;', 'font-size: 0.85rem;'),
  (r'font-size:\s*0\.78rem;', 'font-size: 0.85rem;'),
  (r'font-size:\s*0\.8rem;', 'font-size: 0.9rem;'),
  (r'font-size:\s*0\.82rem;', 'font-size: 0.9rem;'),
  (r'font-size:\s*0\.85rem;', 'font-size: 0.95rem;'),
  (r'font-size:\s*0\.88rem;', 'font-size: 0.95rem;'),
  (r'font-size:\s*0\.9rem;', 'font-size: 1rem;'),
  (r'font-size:\s*0\.92rem;', 'font-size: 1rem;'),
  (r'font-size:\s*0\.95rem;', 'font-size: 1.05rem;')
]

for old, new in replacements:
    content = re.sub(old, new, content)

with open(file_path, 'w') as f:
    f.write(content)

print("Fixed CSS fonts")
