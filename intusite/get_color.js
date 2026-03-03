const Jimp = require('jimp');
const path = require('path');

// Path to the uploaded image in artifacts (checking the path from metadata)
// Note: Agent doesn't have direct access to artifacts dir via relative path usually, but I know the absolute path from the prompt.
// C:/Users/ksc35/.gemini/antigravity/brain/7f36a3af-7fcd-41e7-866d-0e73612e37fd/uploaded_media_1769486217044.png

const imagePath = 'C:/Users/ksc35/.gemini/antigravity/brain/7f36a3af-7fcd-41e7-866d-0e73612e37fd/uploaded_media_1769486217044.png';

async function getColor() {
    try {
        const image = await Jimp.read(imagePath);
        const hex = image.getPixelColor(10, 10); // Get a pixel color
        const rgba = Jimp.intToRGBA(hex);

        // Convert to Hex string
        const r = rgba.r.toString(16).padStart(2, '0');
        const g = rgba.g.toString(16).padStart(2, '0');
        const b = rgba.b.toString(16).padStart(2, '0');

        console.log(`Detected Color: #${r}${g}${b}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

getColor();
