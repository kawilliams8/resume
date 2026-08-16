import PollingPalettes from "../demos/PollingPalettes";

/**
 * Case study 2 — the Array theming system. No Array code or UI appears here:
 * the widget reimplements the derivation algorithm from scratch, and the
 * token names are factual.
 */
const TOKENS = [
  "pollingAnswer", "pollingText", "pollingBackground",
  "pollingCorrectPreInterval", "pollingCorrectPostInterval",
  "pollingIncorrectPreInterval", "pollingIncorrectPostInterval",
  "pollingTableHeader", "pollingTableRowAlternate",
  "pollingSubmitButtonBackground",
  "pollingMultipleChoiceUnselectedTop", "pollingMultipleChoiceUnselectedBottom",
  "pollingMultipleChoiceSelectedTop", "pollingMultipleChoiceSelectedBottom",
  "surveyHeader", "surveyButtons",
];
/* the two inputs, set apart from the sixteen stored tokens */
const BRAND_INPUTS = ["colorPrimary", "colorSecondary"];

export default function ArrayTheming() {
  return (
    <section className="study" id="array" aria-labelledby="array-title">
      <header className="study__head">
        <p className="study__kicker">Case study 02 · Fixing a design system I inherited</p>
        <h2 id="array-title">Array: white-label theming</h2>
        <p className="study__meta">
          real-time audience platform for Fortune 100 pharma events ·
          Material UI, shared monorepo, two production apps · owner of the theming system and its tests · 2021 to 2024
        </p>
      </header>

      <p className="study__human">
        An organization sets its colors on Tuesday and presents to a thousand
        people on Thursday. They pick one of six palettes, or a custom primary
        and secondary, and can override any of sixteen tokens. That's 393,216
        possible configurations before a single color value is chosen.
      </p>
      <p className="study__human">A wrong color anywhere shows up on stage.</p>

      <p className="study__call">
        My approach: the issue wasn't the complexity, it was the missing guardrails. Engineers kept reaching for the wrong color in the wrong place, so I turned my eye for wrong colors into automated tests that ran on every change.
      </p>

      <h3>The problem</h3>
      <p>
        A bug ticket would come in, someone would fix the color in one place
        and break it in another, and the cycle repeated. One step forward, one
        step back, until the tests made good changes distinguishable from
        breakage. That check caught it: a wrong color now failed before merge
        instead of on stage. Automated tests ran on every change. Weeks of
        broken theme tickets basically stopped.
      </p>

      <h3>Sixteen tokens plus two brand colors, automatically checked</h3>
      <p>
        Eighteen color fields in every saved palette. Each one is checked
        automatically, using a validation library that rejects anything
        malformed before it can reach an audience.
      </p>
      <p className="study__tokens">
        {BRAND_INPUTS.map((t) => (
          <code key={t} className="tok-input">{t}</code>
        ))}
        {TOKENS.map((t) => (
          <code key={t}>{t}</code>
        ))}
      </p>

      <h3>Six palettes, two of them computed</h3>
      <p>
        Array's clients have six pre-built palette options for each live
        presentation. Four are fixed sets: the system's default blues and a
        black and white pair, each in light and dark. The two dynamic palettes
        compute everything from the organization's two brand colors.
      </p>
      <p>This widget demos all six from scratch.</p>
      <figure className="demo">
        <div className="demo__stage">
          <PollingPalettes />
        </div>
        <figcaption className="demo__foot">
          <span className="shot__tag">
            Principles in action: Direct manipulation &middot; Feedback
            &middot; Constraints &middot; Consistency
          </span>
        </figcaption>
      </figure>

      <h3>Test coverage stops the bugs</h3>
      <p>
        The business promised all of this control and we couldn't walk it
        back. Checking that many color combinations by eye is its own skill,
        and it is mine. I codified it into unit tests for every palette
        variation, so correctness stopped depending on who was looking. More
        efficient progress, no regressions.
      </p>

    </section>
  );
}
