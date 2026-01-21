const fs = require('fs');
const path = require('path');

function extractWords(content) {
  // Catch words in arrays like ["lion", "tiger"] or const X = [ "lion" ]
  // This looks for strings inside square brackets or after "words:"
  const matches = content.match(/"([^"]+)"|'([^']+)'/g) || [];
  return matches.map(m => m.replace(/['"]/g, '').toUpperCase())
                .filter(w => /^[A-Z]{2,}$/.test(w)); // Only uppercase letters, length >= 2
}

const dir = 'src/lib/puzzle';
const files = ['words.ts', 'themes.ts', 'themedPages.ts'];
let allWords = new Set();
let totalFound = 0;

files.forEach(file => {
  const p = path.join(process.cwd(), dir, file);
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const words = extractWords(content);
    totalFound += words.length;
    words.forEach(w => allWords.add(w));
  }
});

console.log('Total word instances found:', totalFound);
console.log('Unique words in library:', allWords.size);
