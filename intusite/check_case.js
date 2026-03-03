const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
    const gitFiles = execSync('git ls-files').toString().split('\n').filter(Boolean);
    let hasError = false;

    console.log("Checking for case-sensitivity issues between Git and File System...");

    gitFiles.forEach(file => {
        const parts = file.split('/');
        let currentPath = '.';

        for (const part of parts) {
            if (!fs.existsSync(path.join(currentPath, part))) {
                // Note: fs.existsSync is case-insensitive on Windows!
                // To check strict case, we must read the directory contents.
            }

            try {
                const actualItems = fs.readdirSync(currentPath);
                const actualItem = actualItems.find(i => i.toLowerCase() === part.toLowerCase());

                if (actualItem && actualItem !== part) {
                    console.log(`CASE MISMATCH FOUND! Git expects: '${part}' but file system has: '${actualItem}' in '${currentPath}'`);
                    hasError = true;
                }

                currentPath = path.join(currentPath, actualItem || part);
            } catch (e) {
                // Ignore errors if directory doesn't exist (e.g. deleted file)
            }
        }
    });

    if (!hasError) {
        console.log("No case-sensitivity mismatches found between Git and Windows file system.");
    }
} catch (e) {
    console.error("Error running git ls-files", e.message);
}
