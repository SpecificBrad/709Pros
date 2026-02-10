import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://709pros.com",
  integrations: [tailwind(), sitemap()],
  build: {
    format: "directory",
  },
  compressHTML: true,
});
