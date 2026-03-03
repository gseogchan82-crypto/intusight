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

    // 1. Hide absolute inset-0 backgrounds (this removes the dark gradient and image overlay in print)
    content = content.replace(/className="absolute inset-0([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:hidden')) {
            return `className="absolute inset-0${p1} print:hidden"`;
        }
        return match;
    });

    // 2. Make hero main text black in print
    content = content.replace(/className="text-white drop-shadow-sm"/g, 'className="text-white drop-shadow-sm print:text-black print:drop-shadow-none"');

    // 3. Make hero subtitle black in print (e.g., text-blue-100/80)
    content = content.replace(/className="([^"]*text-(?:blue|indigo|teal|orange|purple|slate|cyan)-100\/80[^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:text-black')) {
            return `className="${p1} print:text-black"`;
        }
        return match;
    });

    // 4. Make gradient text black in print
    content = content.replace(/className="text-transparent bg-clip-text([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:text-black')) {
            return `className="text-transparent bg-clip-text${p1} print:text-black print:-webkit-text-fill-color-initial"`;
        }
        return match;
    });

    // 5. Category badge black text in print
    content = content.replace(/className="inline-block py-1 px-3 rounded-full([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:text-black')) {
            return `className="inline-block py-1 px-3 rounded-full${p1} print:bg-transparent print:border-slate-300 print:text-black"`;
        }
        return match;
    });

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Forced print colors in ${path.basename(path.dirname(filepath))}/page.tsx`);
});
