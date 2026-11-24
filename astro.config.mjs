import { defineConfig } from 'astro/config';

// On GitHub Pages the workflow sets SITE and BASE_PATH (for example
// https://<user>.github.io and /personal-website). Locally both are empty.
export default defineConfig({
  site: process.env.SITE || undefined,
  base: process.env.BASE_PATH || '/',
});
