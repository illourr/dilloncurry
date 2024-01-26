import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: vercel({
    imagesConfig: {
      sizes: [160, 320, 640, 1280],
    },
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});
