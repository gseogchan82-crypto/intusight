const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDirs = [path.join(__dirname, 'app'), path.join(__dirname, 'components'), path.join(__dirname, 'data')]; // Adjust if needed

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

const allImages = getAllFiles(publicDir).filter(file => file.match(/\.(png|jpe?g|gif|svg|webp)$/i));
const allSrcCode = [];
srcDirs.forEach(dir => getAllFiles(dir, allSrcCode));

const codesWithExt = allSrcCode.filter(file => file.match(/\.(tsx|ts|js|jsx|css|scss|md)$/i));

const unusedImages = [];

allImages.forEach(imagePath => {
    const relativePath = path.relative(publicDir, imagePath).replace(/\\/g, '/');
    // Just get the filename to be safe, sometimes paths are tricky
    const filename = path.basename(imagePath);

    let isUsed = false;
    for (let i = 0; i < codesWithExt.length; i++) {
        const code = fs.readFileSync(codesWithExt[i], 'utf8');
        if (code.includes(relativePath) || code.includes(filename)) {
            isUsed = true;
            break;
        }
    }

    if (!isUsed) {
        unusedImages.push(relativePath);
    }
});

console.log("Unused Images:");
unusedImages.forEach(img => console.log(img));
