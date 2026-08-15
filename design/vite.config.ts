import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Builds into the static site rather than beside it: `site/` is what Amplify
 * publishes, and the résumé at site/index.html stays a single file with no
 * build step. This app is the one part of katherinewilliams.co that earns a
 * bundler, so it is the only part that gets one.
 */
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    outDir: "../site/portfolio",
    emptyOutDir: true,
  },
});
