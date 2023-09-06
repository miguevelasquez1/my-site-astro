import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://miguelvelasquez.dev",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula"
      },
      gfm: false
    }),
    tailwind(),
    react(),
    
    sitemap(),
    robotsTxt(),
    vue(),
    svelte()
  ]
});