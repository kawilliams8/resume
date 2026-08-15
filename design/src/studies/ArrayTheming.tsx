import { Demo } from "../components/Demo";
import DynamicPalette from "../demos/DynamicPalette";
import dynamicPaletteSource from "../demos/DynamicPalette?raw";

/**
 * Case study 2 · Stewardship. DRAFT copy throughout; [PENDING] blocks need
 * Katie. No Array code or UI appears here: the widget reimplements the
 * derivation algorithm from scratch, and the token names are factual.
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

export default function ArrayTheming() {
  return (
    <section className="study" aria-labelledby="array-title">
      <header className="study__head">
        <p className="study__kicker">Case study 02 · Fixing a design system I inherited</p>
        <h2 id="array-title">Array: white-label theming</h2>
        <p className="study__meta">
          real-time audience platform for Fortune 100 pharma events ·
          Material UI, shared monorepo, two production apps · owner of the theming system and its tests · 2021 to 2024
        </p>
      </header>

      <p className="study__human">
        An organization picks two brand colors on Tuesday and presents to a
        thousand people on Thursday. Every other color is computed from those
        two, and a wrong one shows up on stage.
      </p>

      <p className="study__call">
        My approach: the issue wasn't the complexity, it was the missing guardrails. Engineers kept reaching for the wrong color in the wrong place, so I turned my eye for wrong colors into automated tests that ran on every change.
      </p>

      <h3>The problem</h3>
      <p>
        A bug ticket would come in, someone would fix the color in one place
        and break it in another, and the cycle repeated. One step forward, one
        step back, until the tests made good changes distinguishable from breakage. That check caught it: a wrong color now failed before merge instead of on stage.
      </p>

      <h3>Eighteen colors, automatically checked</h3>
      <p>
        Sixteen named colors plus the two brand inputs. Every palette an org saves is checked automatically, using a validation library that rejects anything malformed before it can reach an audience.
      </p>
      <p className="study__tokens">
        {TOKENS.map((t) => (
          <code key={t}>{t}</code>
        ))}
      </p>

      <h3>Computing a palette from two brand colors</h3>
      <p>
        The Dynamic palettes compute everything from the two brand colors. This widget rebuilds that math from scratch, so what you are trying is the design decision, not Array's code.
      </p>
      <Demo
        source={dynamicPaletteSource}
        caption="Pick two brand colors and the other fourteen update instantly. Show source displays the code that computes them."
      >
        <DynamicPalette />
      </Demo>

      <h3>Six palettes, sixteen tokens, two brand colors</h3>
      <p>
        A white-label platform has to offer this much control, and the
        business couldn't walk it back: six pre-built palettes, sixteen tokens
        an org can override on top, plus every value computed from their two
        brand colors, all applied across every slide type. That's more than a team can eyeball,
        and every unchecked fix quietly moved the product backwards. Checking that many color combinations by eye is its own skill. I codified it into unit tests for every palette variation, so
        correctness stopped depending on who was looking. Frontend is becoming a team of humans and AI agents. Both need correctness encoded, because neither ships it by default. That's the work I do.
      </p>

      {/* [PENDING] Katie: one direction tried and thrown away at Array */}
      <h3>What I tried and threw away</h3>
      <p className="pending">[PENDING · Katie's rejected direction]</p>
    </section>
  );
}
