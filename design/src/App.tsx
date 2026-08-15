/* DM Sans 500 is the one weight the rendered components use — the browser
   only fetches faces that render, so unused weights were pure noise. Re-add
   weights as demos need them. */
import "@fontsource/dm-sans/500.css";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./rp/theme";
import RacerAndPacer from "./studies/RacerAndPacer";
import "./tokens.css";
import "./App.css";

/**
 * A plain SPA, on purpose. This page went through lazy loading, Suspense,
 * runtime preloads and build-time prerendering chasing a flashless first
 * paint, and every layer added a failure mode of its own. One static import
 * and one client render is the version that holds no surprises. The section
 * is the content, so splitting it bought nothing but a visible late mount.
 */
export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="sitenav">
        <a className="wordmark" href="/">Katherine Williams</a>
        <nav aria-label="Primary">
          <ul>
            <li><a href="/">Résumé</a></li>
            <li><a href="mailto:kawilliams8@gmail.com">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="page">
        <div className="masthead">
          <p className="eyebrow">Portfolio</p>
          <h1>Design work</h1>
          {/* DRAFT premise — Katie rewrites */}
          <p className="lede">
            I'm a frontend engineer with a good eye for visual detail. I turn
            that eye into tokens, component APIs, and unit tests so a whole
            team ships the right color without thinking about it. Below are
            three production systems with live components you can poke.
          </p>
        </div>

        <main id="main">
          <ChakraProvider value={system}>
            <RacerAndPacer />
          </ChakraProvider>
        </main>
      </div>

      <footer className="colophon">
        <p className="colo-line">Katherine Williams · Senior Software Engineer</p>
        <p className="colo-sub">
          The résumé at{" "}
          <a href="/">katherinewilliams.co</a> is one hand-written file with no
          build step. This page is React, TypeScript and Vite, because it renders
          live components from a production app and shows the source beside them.
          Different job, different tool.
        </p>
      </footer>
    </>
  );
}
