const fs = require('fs');
const path = require('path');

const srcDirs = [path.join(__dirname, 'app'), path.join(__dirname, 'components'), path.join(__dirname, 'data')];

function getAllFiles(dirPath, arrayOfFiles) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });
    return arrayOfFiles;
}

const allSrcCode = [];
srcDirs.forEach(dir => getAllFiles(dir, allSrcCode));
const codesWithExt = allSrcCode.filter(file => file.match(/\.(tsx|ts|js|jsx)$/i));

let foundErrors = false;

codesWithExt.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const importRegex = /import\s+.*?\s+from\s+['"](.+?)['"]/g;
    let match;

    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
            const dirOfFile = path.dirname(file);
            // Try to resolve the exact file
            const possibleExtensions = ['', '.tsx', '.ts', '.js', '.jsx', '/index.tsx', '/index.ts', '/index.js'];

            let resolvedExact = false;
            let actualFoundPath = null;

            for (const ext of possibleExtensions) {
                const fullPath = path.join(dirOfFile, importPath + ext);
                if (fs.existsSync(fullPath)) {
                    // Check exact case of the final part
                    const dir = path.dirname(fullPath);
                    const base = path.basename(fullPath);
                    try {
                        const actualItems = fs.readdirSync(dir);
                        const exactMatch = actualItems.find(i => i === base);
                        if (exactMatch) {
                            resolvedExact = true;
                            break;
                        } else {
                            const caseInsensitiveMatch = actualItems.find(i => i.toLowerCase() === base.toLowerCase());
                            if (caseInsensitiveMatch) {
                                actualFoundPath = path.join(dir, caseInsensitiveMatch);
                            }
                        }
                    } catch (e) { }
                }
            }

            if (!resolvedExact && actualFoundPath) {
                console.log(`CASE MISMATCH ERROR in ${file}`);
                console.log(`Imported as: '${importPath}'`);
                console.log(`Actual file: '${path.basename(actualFoundPath)}'`);
                foundErrors = true;
            }
        }
    }
});

if (!foundErrors) {
    console.log("No import casing issues found.");
}
