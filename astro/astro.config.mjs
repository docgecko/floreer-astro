import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import sanity from 'astro-sanity';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [solidJs(), sanity({
    projectId: '42kvpshn',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  }), tailwind(), sitemap()],
});