// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    // Enable Vue to support Vue components.
    integrations: [vue({
        appEntrypoint: '/src/main.ts'
    }), sitemap(), robotsTxt(), compress()],
    vite: {
        ssr: {
            noExternal: ["@inkline/inkline"],
        },
    }
});