/**
 * Resizes specific images to their actual display dimensions (2× for retina).
 * Run once with: node scripts/resize-images.js
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ASSETS = path.join(__dirname, '../src/assets');

// [file path from assets/, max width, max height, quality]
const targets = [
  // Hero poster — video is 1280×720, 1.5× gives 1920×1080 max
  ['After-hero-section/Attractions - A view from Mezz 1.jpg', 1920, 1080, 80],

  // About-stats section — displayed ~442px wide, 2× = 884px
  ['After-hero-section/DSC08395.jpg',              884, 884, 78],
  ['After-hero-section/Dome photos-03988-2.jpg',   884, 884, 78],

  // Navbar logo — displayed ~120px wide, 3× = 360px
  ['images/Bolder-update.png',                     360, 360, 85],

  // Footer / visit logo — displayed ~213px wide, 3× = 640px
  ['images/bolder-logo-white-text.png',            640, 640, 85],

  // Park map — displayed ~1008px, 1.5× = 1536px (already close, still reduce height)
  ['images/Parkmap.png',                          1536, 900, 85],

  // Promo banner — displayed ~1008px wide, 1.5× = 1512px
  ['images/Bolder-summercamp.png',                1512, 600, 82],

  // Experience cards (CSS background-image) — card max ~800px wide, 2× = 1600px
  ['images/Thrills-in-the-air.jpg',              1400, 940, 78],
  ['images/Action-on-the-ground.jpg',            1200, 800, 78],
  ['images/extreme-all-access-pass.jpg',         1600, 1000, 78],

  // Review section images — displayed ~560×380px, 2× = 1120×760
  ['images/Reviews-via-ferrata.jpg',             1120, 760, 78],
  ['images/Reviews-events.jpg',                  1120, 760, 78],
  ['images/Reviews-mountain-experience.jpg',     1120, 760, 78],
  ['images/Reviews-birthday-parties.jpg',        1120, 760, 78],

  // Parties / groups collage — tall image ~480px wide, grid items ~360px
  ['images/Group-events.jpg',                     960, 1280, 78],
  ['images/Groups1.jpg',                          960,  680, 78],
  ['images/Groups2.jpg',                          960,  680, 78],
  ['images/Groups3.jpg',                          960,  680, 78],
  ['images/Birthday-parties.jpg',                 960, 1280, 78],
  ['images/Parties3.jpg',                         960,  680, 78],

  // All-Attraction cards — 3-col grid ~400px wide, 2× = 800px square
  ['All-Attraction/Adventure-nets.jpg',            800, 800, 78],
  ['All-Attraction/Blaster-zone.jpg',              800, 800, 78],
  ['All-Attraction/Bumper-cars.jpg',               800, 800, 78],
  ['All-Attraction/Exploration-play.jpg',          800, 800, 78],
  ['All-Attraction/Free-fall-drop.jpg',            800, 800, 78],
  ['All-Attraction/Jump-pads.png',                 800, 800, 85],
  ['All-Attraction/Mountain-experience.jpg',       800, 800, 78],
  ['All-Attraction/Ropes-courses.jpg',             800, 800, 78],
  ['All-Attraction/Tubing-slides.jpg',             800, 800, 78],
  ['All-Attraction/Zip-lines.jpg',                 800, 800, 78],
];

async function main() {
  console.log('\nResizing images to display dimensions...\n');
  let savedTotal = 0;

  for (const [rel, maxW, maxH, quality] of targets) {
    const fullPath = path.join(ASSETS, rel);
    if (!fs.existsSync(fullPath)) {
      console.log(`  — not found: ${rel}`);
      continue;
    }

    const beforeSize = fs.statSync(fullPath).size;
    const ext = path.extname(fullPath).toLowerCase();
    const tmp = fullPath + '.tmp';

    try {
      const img = sharp(fullPath).resize(maxW, maxH, { fit: 'inside', withoutEnlargement: true });

      if (ext === '.png') {
        await img.png({ compressionLevel: 9, quality }).toFile(tmp);
      } else {
        await img.jpeg({ quality, mozjpeg: true }).toFile(tmp);
      }

      const afterSize = fs.statSync(tmp).size;
      const saved = Math.round((1 - afterSize / beforeSize) * 100);
      const meta = await sharp(tmp).metadata();

      fs.renameSync(tmp, fullPath);
      savedTotal += beforeSize - afterSize;

      console.log(
        `  ✓ ${path.basename(rel).padEnd(42)} ${(beforeSize/1024).toFixed(0).padStart(6)} KB → ${(afterSize/1024).toFixed(0).padStart(5)} KB  (-${saved}%)  [${meta.width}×${meta.height}]`
      );
    } catch (err) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.error(`  ✗ ${rel}: ${err.message}`);
    }
  }

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`  Total saved: ${(savedTotal / 1024 / 1024).toFixed(1)} MB\n`);
}

main().catch(console.error);
