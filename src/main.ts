import { type App } from 'vue';
import { Inkline, components } from '@inkline/inkline';
import { createPinia } from 'pinia';

const pinia = createPinia();

export default function (app: App<Element>) {
    app.use(pinia);
    app.use(Inkline, {
        color: 'dark',                         // Default color variant
        colorMode: 'dark',               // Default color mode: 'system' | 'light' | 'dark' | string
        colorModeStrategy: 'localStorage', // Default color mode startegy: 'localStorage' | string
        componentOptions: {},              // Component specific global overrides
        locale: 'en',                      // Default translation
        renderMode: 'universal',
        components,
    });
};
