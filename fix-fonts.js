const fs = require('fs');
const file = 'src/styles/global.css';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  ['0.72rem', '0.85rem'],
  ['0.75rem', '0.85rem'],
  ['0.78rem', '0.85rem'],
  ['0.8rem', '0.9rem'],
  ['0.82rem', '0.9rem'],
  ['0.85rem', '0.95rem'],
  ['0.88rem', '0.95rem'],
  ['0.9rem', '1rem'],
  ['0.92rem', '1rem'],
  ['0.95rem', '1.05rem'],
];

replacements.forEach(([from, to]) => {
  // Regex to match font-size: 0.xxrem;
  const regex = new RegExp(`font-size:\\s*${from};`, 'g');
  content = content.replace(regex, `font-size: ${to};`);
});

// Also replace in inline styles if any in TSX files
fs.writeFileSync(file, content);
console.log('Fixed CSS');
