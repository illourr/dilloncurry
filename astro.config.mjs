import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    port: 3000,
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
