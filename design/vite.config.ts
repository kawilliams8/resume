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
    /* No manualChunks for Chakra. Forcing it into a shared chunk made it an
       entry dependency, so Vite emitted a modulepreload and the browser fetched
       108 kB on first paint regardless of the lazy boundary. Left alone, the
       dynamic import gets its own async chunk and is fetched when reached. */
    modulePreload: { polyfill: false },
  },
});
