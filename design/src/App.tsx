import { useEffect } from "react";
/* DM Sans 500 is the one weight the rendered components use — the browser
   only fetches faces that render, so unused weights were pure noise. Re-add
   weights as demos need them. */
import "@fontsource/dm-sans/500.css";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./rp/theme";
import RacerAndPacer from "./studies/RacerAndPacer";
import ArrayTheming from "./studies/ArrayTheming";
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
  /* Deep links from the résumé (#racer-and-pacer, #array). The page renders
     client-side, so the target does not exist when the browser first tries the
     fragment — scroll once the sections are real. */
  useEffect(() => {
    if (!location.hash) return;
    document.querySelector(location.hash)?.scrollIntoView();
  }, []);

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
          <p className="eyebrow">Portfolio · Design engineering</p>
          <h1>Where design meets development</h1>
          {/* DRAFT premise — Katie rewrites */}
          <p className="lede">
            I'm a frontend engineer with a strong eye for visual detail,
            backed by coursework in typography and page layout. I codify that
            strength through theming systems, reusable components, and
            automated tests, so whole teams and AI agents can ship fast and
            stay on brand.
          </p>
        </div>

        <main id="main">
          <ChakraProvider value={system}>
            <RacerAndPacer />
            <ArrayTheming />
          </ChakraProvider>
        </main>
      </div>

      <footer className="colophon">
        <p className="colo-cta">
          Hiring for design or frontend-leaning engineering? Please reach out
          at <a href="mailto:kawilliams8@gmail.com">kawilliams8@gmail.com</a>
        </p>
        <p className="colo-line">Katherine Williams · Senior Software Engineer</p>
        <p className="colo-sub">
          The résumé at{" "}
          <a href="/">katherinewilliams.co</a> is one hand-written file with no
          build step. This page is React, TypeScript and Vite, because it renders
          live components from a production app and shows the source beside
          them. Its{" "}
          <a href="https://github.com/kawilliams8/resume/tree/main/design" target="_blank" rel="noopener">
            code
          </a>{" "}
          is public too.
        </p>
      </footer>
    </>
  );
}
