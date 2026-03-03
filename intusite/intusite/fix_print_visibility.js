const fs = require('fs');
const path = require('path');

// 1. Fix globals.css to remove aggressive print styles causing content disappearance.
const cssPath = 'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\globals.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');
const printStart = cssContent.indexOf('@media print {');
if (printStart !== -1) {
    const basicPrintCSS = `@media print {
  @page {
    margin: 10mm;
    size: A4 portrait;
  }
  
  html, body {
    background-color: white !important;
    color: black !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
`;
    cssContent = cssContent.slice(0, printStart) + basicPrintCSS;
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log('Fixed globals.css');
}

// 2. Remove print:break-inside-avoid from solution pages. It causes Chrome to drop large flex containers if they don't fit on a page.
const pagesToFix = [
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\network\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\system\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\ai\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\api\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\redundancy\\page.tsx'
];

pagesToFix.forEach(filepath => {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf8');

    // Remove break-inside-avoid which causes vanishing content in Chrome
    content = content.replace(/ print:break-inside-avoid/g, '');

    // Ensure the top hero section retains its layout but limits its height in print
    content = content.replace(
        '<section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-[#1a237e]">',
        '<section className="relative h-[500px] print:h-auto print:py-8 flex items-center justify-center overflow-hidden bg-[#1a237e] print:bg-transparent">'
    );

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Removed break-inside-avoid from ${path.basename(path.dirname(filepath))}/page.tsx`);
});
