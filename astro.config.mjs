// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages at https://andy-hdg.github.io/andy-learning/
// When deploying to a root domain (Netlify, Vercel...), set base to '/'.
export default defineConfig({
  site: 'https://andy-hdg.github.io',
  base: '/andy-learning',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'vi', locales: { vi: 'vi-VN', en: 'en-US' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
