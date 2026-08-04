# katherinewilliams.co

My résumé, as one self-contained HTML file.

**[katherinewilliams.co](https://katherinewilliams.co)** · [the whole site](site/index.html)

No framework, no build step, no network requests. `site/index.html` holds the
markup, the design tokens, the layout and the behavior in one place — open it in
a browser from disk and it works.

## Why vanilla JS?

The React version worked great. It had lazy loading behind an Intersection
Observer, bundle splitting, a component preloader, skeleton states, and more;
real engineering and genuinely fun to create. But real devs know that tech is
overkill for a text site and there are real drawbacks for readers.

So: one file. It arrives in a single request, works with JavaScript off in the
browser, prints cleanly, opens from disk, and hands an ATS or an LLM the entire
résumé in the initial HTML. When a date changes I open one file and change a
date. Easy peasy.

But this isn't an argument against React! I build with it daily, and
[Racer & Pacer](https://racerandpacer.com) is React, TypeScript and Vite because
that app earns it. This resume is an argument for fitting the tool to the
problem.

## What's here

| | |
|---|---|
| `site/index.html` | the site |
| `site/og.png` | the link-preview card, rendered from an HTML template with headless Chrome |
| `amplify.yml` | publishes `site/` as static files, no build |

That's the repo. There's no `package.json`, no lockfile and no `node_modules`
— the React version that used to live here is in the git history.

## How it works

**One token block.** Every color, size and space resolves from custom properties
at the top of the file. The dark scheme is the same tokens with different
values, so there is no second stylesheet to keep in sync.

**Two versions of the résumé.** The full one, and a 30-second version that drops
the bullets for a single line per role and hides the sections a hurried reader
doesn't need. Both are the same markup — the short view is a class on `<body>`.

**One measure.** Prose is capped at 66 characters no matter how wide the window
gets. The column itself is wider than that, so the full-width rows (contact,
role headings, rules) can finish their lines.

**It reads without JavaScript.** The entire résumé ships in the initial HTML. An
ATS, a crawler or an LLM gets the whole document without executing anything; the
interactive layer is added afterwards.

**An annotation layer, currently switched off.** The file also contains margin
notes that explain the design and engineering decisions in place, written for
four different readers — a hiring manager, an engineer, a designer, and an ATS
parser that gets a view of what a machine actually extracts from the page. It's
behind `const LENSES_LIVE = false` in the script until the writing is finished.

## Deploying

AWS Amplify builds the `main` branch and publishes `site/`. There is nothing to
compile — the build step is empty on purpose. Work happens on `dev`, which
deploys to its own URL, and merges to `main` when it's ready.

## Site updates

**August 2026 — rebuilt as one file.** Vanilla HTML, CSS and JavaScript, no
framework and no build — the reasoning is up in [Why vanilla JS?](#why-vanilla-js).
Added the 30-second version, a dark scheme, a print stylesheet, and metadata
written for machines as much as for people.

**May 2026 — content refresh.** Corrected dates, updated skills.

**August–November 2025 — the first version.** React 19, TypeScript, Material UI
and Emotion, built with Vite and deployed on AWS Amplify.

---

Built with [Claude Code](https://claude.com/claude-code).
