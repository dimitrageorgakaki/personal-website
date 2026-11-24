// Builds the 1200x630 link-preview picture used by Open Graph tags from the collage.
// Run: node scripts/make-og-image.mjs   (writes public/og-collage.jpg)
import sharp from 'sharp';

const W = 1200;
const H = 630;
const background = '#f5f7fb'; // the site's light "paper" colour

const collage = await sharp('src/assets/fun/01-collage.avif')
  .resize({ height: H, fit: 'inside' }) // keep the whole collage, no cropping
  .toBuffer();

await sharp({ create: { width: W, height: H, channels: 3, background } })
  .composite([{ input: collage, gravity: 'centre' }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og-collage.jpg');

console.log('wrote public/og-collage.jpg');
