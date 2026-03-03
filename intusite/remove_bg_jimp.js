const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/clients';
const files = fs.readdirSync(dir);

async function processImage(file) {
    const filePath = path.join(dir, file);
    if (!file.match(/\.(jpg|jpeg|png)$/i)) return;

    console.log(`Processing ${file}...`);
    try {
        const image = await Jimp.read(filePath);

        // Scan pixels
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // Threshold for white
            if (r > 240 && g > 240 && b > 240) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0
            }
        });

        // Always save as PNG to support transparency
        const newFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.png');
        const newFilePath = path.join(dir, newFileName);

        await image.writeAsync(newFilePath);
        console.log(`Saved to ${newFilePath}`);

    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
}

async function main() {
    for (const file of files) {
        await processImage(file);
    }
}

main();
