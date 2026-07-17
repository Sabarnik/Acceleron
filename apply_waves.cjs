const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk('src/routes').filter(f => !f.includes('__root.tsx') && !f.includes('index.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (file.includes('PageHero.tsx')) {
    return;
  }

  let isDark = true; // PageHero is dark
  
  const regex = /(<section[^>]*>|<WaveDivider[^>]*\/>)/g;
  
  let match;
  let lastIndex = 0;
  let newContent = '';
  
  while ((match = regex.exec(content)) !== null) {
    newContent += content.slice(lastIndex, match.index);
    let tag = match[0];
    
    if (tag.startsWith('<WaveDivider')) {
      if (isDark) {
        tag = '<WaveDivider from="dark" to="white" />';
        isDark = false;
      } else {
        tag = '<WaveDivider from="white" to="dark" flip />';
        isDark = true;
      }
    } else if (tag.startsWith('<section')) {
      if (isDark) {
        if (tag.includes('className="')) {
          tag = tag.replace('className="', 'className="section-dark ');
        } else {
          tag = tag.replace('<section', '<section className="section-dark"');
        }
      }
    }
    
    newContent += tag;
    lastIndex = regex.lastIndex;
  }
  
  newContent += content.slice(lastIndex);
  fs.writeFileSync(file, newContent);
});
console.log("Processed files");
