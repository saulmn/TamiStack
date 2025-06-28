// @ts-check
import { defineConfig } from "astro/config";
import { iconsSpritesheet } from "vite-plugin-icons-spritesheet";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      tailwindcss(),
      iconsSpritesheet({
        inputDir: "./public/svg-icons",
        outputDir: "./app/components/ui/icons",
        fileName: "sprite.svg",
        withTypes: true,
        iconNameTransformer: (name) => name,
      }),
    ],
  },
});
