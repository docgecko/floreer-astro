import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [sanity({
    projectId: '42kvpshn',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  }), tailwind(), sitemap(), react()]
});