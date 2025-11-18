// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mposoft.com', // Replace with actual domain if different, but required for sitemap
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});