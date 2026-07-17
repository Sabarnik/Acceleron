const fs = require('fs');
let icons = fs.readFileSync('src/components/ui/Icons.tsx', 'utf8');

if (!icons.includes("import React")) {
  icons = 'import React from "react";\n' + icons;
}

icons = icons.replace(/\{ className = "" \}: \{ className\?: string \}/g, '{ className = "", style = {} }: { className?: string, style?: React.CSSProperties }');
icons = icons.replace(/<svg viewBox/g, '<svg style={style} viewBox');

fs.writeFileSync('src/components/ui/Icons.tsx', icons);
