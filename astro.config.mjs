import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
