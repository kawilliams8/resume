# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

One self-contained HTML file: `site/index.html`. It holds the markup, the design
tokens, the layout and the behavior. There is no framework, no build step, no
package manager and no dependencies. Editing the site means editing that file.

`amplify.yml` publishes `site/` as static files with an empty build phase.

## Working on it

- **Preview locally** by serving `site/` — e.g. `python3 -m http.server 8901 -d site`.
  Do not add a bundler or a dev-server dependency.
- **Verify in a real browser.** Check the full résumé and the 30-second version,
  light and dark, and at least one narrow width.
- **`dev` → `main`.** Work on `dev`, which deploys to its own Amplify URL. Merge
  to `main` only when it's ready; `main` is live at katherinewilliams.co.

## Conventions in the file

- **Tokens first.** Colors, type scale, spacing and sticky offsets are custom
  properties in the `:root` block. The dark scheme re-declares the same tokens
  under `:root[data-theme="dark"]` — never a second stylesheet.
- **One measure.** Prose is capped at `--measure` (66ch). The column is wider so
  full-width rows can finish their lines. Don't cap single scannable lines to
  the measure; they're meant to run the column.
- **Emphasis is a rule.** Bold appears in the summary only. Bullets get none.
  Accent color is section headings, the status lines and links — nothing else.
- **The résumé must read with JavaScript off.** Everything ships in the initial
  HTML; script only adds the interactive layer.
- **Both views share markup.** The 30-second version is `body.condensed` plus
  `.short-only` / `.secondary` elements, not a second copy of the résumé.
- American spelling. No em dashes in the résumé copy.

## The annotation layer

The file contains margin notes for four readers (hiring manager, engineer,
designer, ATS parser), plus the machine view that shows what a parser extracts.
It is switched off behind `const LENSES_LIVE = false` in the script while the
writing is finished. Flipping it to `true` restores the chips, the note cards,
the pins and the parser view.

Notes live in the `NOTES` array; each anchors to a `data-note` token in the
markup, so markup can be refactored without breaking an anchor.

## Ground rules

- Every claim a note makes must be true of the code it points at. If a note
  says the contrast is measured, it has to be measured.
- Prefer deleting to adding. This page's whole argument is that it is small.
