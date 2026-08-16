import { useId, useState } from "react";
import "./Demo.css";

interface DemoProps {
  /** Read with `?raw` at the call site so the snippet is the file that runs. */
  source: string;
  /** What the reader is looking at, one line. Markup allowed, so component
      names can render as code. */
  caption?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Renders a live component beside its own source.
 *
 * The source is never retyped into a string. Callers import the demo file with
 * Vite's `?raw` suffix, so what is shown is read from what runs at build time
 * and the two cannot drift. Same reasoning as the résumé's machine view, which
 * reads the live DOM rather than a hand-maintained copy.
 */
export function Demo({ source, caption, children }: DemoProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <figure className="demo">
      <div className="demo__stage">{children}</div>

      <div className="demo__foot">
        {caption ? <figcaption className="demo__caption">{caption}</figcaption> : null}
        <button
          type="button"
          className="demo__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Hide source" : "Show source"}
        </button>
      </div>

      <pre id={panelId} className="demo__source" hidden={!open}>
        <code>{source.trim()}</code>
      </pre>
    </figure>
  );
}
