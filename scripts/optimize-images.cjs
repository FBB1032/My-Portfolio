const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');

async function optimize() {
  const files = fs.readdirSync(publicDir);
  const images = files.filter((f) => /\.(jpe?g|png)$/i.test(f));
  console.log(`Found ${images.length} images to optimize`);

  for (const img of images) {
    try {
      const filePath = path.join(publicDir, img);
      const outPath = path.join(publicDir, img.replace(/\.(jpe?g|png)$/i, '.webp'));
      await sharp(filePath).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(outPath);
      console.log(`Generated ${path.basename(outPath)}`);
    } catch (err) {
      console.error('Error optimizing', img, err);
    }
  }
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
