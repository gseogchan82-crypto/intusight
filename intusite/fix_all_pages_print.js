const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file === 'page.tsx') {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const allPages = getAllFiles('c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app');

allPages.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');
    let originalContent = content;

    // 1. Hide absolute inset-0 backgrounds (removes gradients/images in print)
    content = content.replace(/className="absolute inset-0([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:hidden')) {
            return `className="absolute inset-0${p1} print:hidden"`;
        }
        return match;
    });

    // 2. Force white text to black in print
    content = content.replace(/text-white(?! \w)/g, match => {
        if (!content.includes('print:text-black print:drop-shadow-none')) {
            // It's safer to just do a global replace for "text-white "
        }
        return match;
    });
    // better way for exact replacements:
    content = content.replace(/className="text-white drop-shadow-sm([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:text-black')) {
            return `className="text-white drop-shadow-sm print:text-black print:drop-shadow-none${p1}"`;
        }
        return match;
    });
    content = content.replace(/className="text-white([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:text-black') && !p1.includes('drop-shadow-sm')) {
            return `className="text-white print:text-black${p1}"`;
        }
        return match;
    });

    // 3. Force subtitle text colors to black
    content = content.replace(/text-(blue|indigo|teal|orange|purple|slate|cyan)-(100|200|300)(\/80|\/90)?/g, (match) => {
        return match + ' print:text-black';
    });
    // Cleanup double print:text-black if any
    content = content.replace(/print:text-black print:text-black/g, 'print:text-black');

    // 4. Gradient text to solid black
    content = content.replace(/text-transparent bg-clip-text([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:text-black')) {
            return `text-transparent bg-clip-text${p1} print:text-black print:drop-shadow-none"`;
        }
        return match;
    });

    // 5. Hide Sidebars
    content = content.replace(/className="w-full md:w-1\/4 flex-shrink-0([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:hidden')) {
            return `className="w-full md:w-1/4 flex-shrink-0 print:hidden${p1}"`;
        }
        return match;
    });

    // 6. Expand Main Content Box
    content = content.replace(/className="w-full md:w-3\/4([^"]*)"/g, (match, p1) => {
        if (!p1.includes('print:w-full')) {
            return `className="w-full md:w-3/4 print:w-full${p1}"`;
        }
        return match;
    });

    // 7. Remove break-inside-avoid
    content = content.replace(/ print:break-inside-avoid/g, '');

    // 8. Fix quotes bug just in case
    content = content.replace(/" print:hidden/g, ' print:hidden"');

    // 9. Resize Hero sections for print to not take up half the page
    content = content.replace(/h-\[500px\]/g, 'h-[500px] print:h-auto print:py-8 print:bg-transparent');
    content = content.replace(/h-\[600px\]/g, 'h-[600px] print:h-auto print:py-8 print:bg-transparent');

    // Clean up multiple print:bg-transparent
    content = content.replace(/print:bg-transparent print:bg-transparent/g, 'print:bg-transparent');
    // Clean up multiple print:h-auto
    content = content.replace(/print:h-auto print:py-8 print:bg-transparent print:h-auto print:py-8 print:bg-transparent/g, 'print:h-auto print:py-8 print:bg-transparent');

    if (content !== originalContent) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated print styles in: ${filepath}`);
    }
});
console.log('Done updating all pages.');
