const fs = require('fs');
const path = require('path');

const filesToPatch = [
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\network\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\system\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\ai\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\api\\page.tsx',
    'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\redundancy\\page.tsx'
];

filesToPatch.forEach(filepath => {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf8');

    // The script accidentally inserted " print:hidden" outside the closing quote of className.
    // e.g., className="... gap-1" print:hidden
    // We want to turn it into className="... gap-1 print:hidden"

    content = content.replace(/" print:hidden/g, ' print:hidden"');

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Repaired quotes in ${path.basename(path.dirname(filepath))}/page.tsx`);
});
