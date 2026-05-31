const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

function walkDir(dir, results = []) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full, results);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const images = walkDir(ASSETS_DIR);
  console.log(`\nCompressing ${images.length} images...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const imgPath of images) {
    const ext = path.extname(imgPath).toLowerCase();
    const sizeBefore = fs.statSync(imgPath).size;
    const tmpPath = imgPath + '.tmp';

    try {
      const img = sharp(imgPath);
      if (ext === '.png') {
        await img.png({ compressionLevel: 9, quality: PNG_QUALITY }).toFile(tmpPath);
      } else {
        await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
      }

      const sizeAfter = fs.statSync(tmpPath).size;

      if (sizeAfter < sizeBefore) {
        fs.renameSync(tmpPath, imgPath);
        totalBefore += sizeBefore;
        totalAfter += sizeAfter;
        const saved = Math.round((1 - sizeAfter / sizeBefore) * 100);
        const beforeKB = (sizeBefore / 1024).toFixed(0);
        const afterKB = (sizeAfter / 1024).toFixed(0);
        console.log(`  ✓ ${path.basename(imgPath).padEnd(45)} ${beforeKB.padStart(7)} KB → ${afterKB.padStart(6)} KB  (-${saved}%)`);
      } else {
        fs.unlinkSync(tmpPath);
        console.log(`  — ${path.basename(imgPath).padEnd(45)} already optimal, skipped`);
      }
    } catch (err) {
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
      console.error(`  ✗ ${path.basename(imgPath)}: ${err.message}`);
    }
  }

  const totalSavedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
  const beforeMB = (totalBefore / 1024 / 1024).toFixed(1);
  const afterMB = (totalAfter / 1024 / 1024).toFixed(1);
  console.log(`\n${'─'.repeat(70)}`);
  console.log(`  Total: ${beforeMB} MB → ${afterMB} MB  (saved ${totalSavedMB} MB)\n`);
}

main().catch(console.error);
