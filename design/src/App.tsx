import { Suspense, lazy } from "react";
import "./tokens.css";
import "./App.css";

/**
 * Chakra is 108 kB gzipped and only one section needs it, so it loads behind a
 * boundary instead of blocking the page. See the colophon: this is the argument
 * the page makes about itself.
 */
const RPComponents = lazy(() => import("./sections/RPComponents"));

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
          <p className="lede">Scaffold. Case studies pending the outline.</p>
        </div>

        <main id="main">
          <Suspense fallback={<div className="loading">Loading components…</div>}>
            <RPComponents />
          </Suspense>
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
