import { Demo } from "../components/Demo";
import { TokenScales } from "../components/TokenScales";
import RPButtonIntents from "../demos/RPButtonIntents";
import rpButtonIntentsSource from "../demos/RPButtonIntents?raw";
import RPBadgeVocabulary from "../demos/RPBadgeVocabulary";
import rpBadgeVocabularySource from "../demos/RPBadgeVocabulary?raw";
import BadgeVsPill from "../demos/BadgeVsPill";
import badgeVsPillSource from "../demos/BadgeVsPill?raw";

/**
 * Case study 1 · Authorship. All prose is DRAFT copy for Katie to rewrite —
 * structure is the agreed seven beats. [PENDING] blocks need her input and are
 * intentionally visible on the dev build.
 */
export default function RacerAndPacer() {
  return (
    <section className="study" aria-labelledby="rp-title">
      <header className="study__head">
        <p className="study__kicker">Case study 01 · Building a design system from scratch</p>
        <h2 id="rp-title">Racer &amp; Pacer</h2>
        <p className="study__meta">
          <a href="https://racerandpacer.com" target="_blank" rel="noopener">
            racerandpacer.com
          </a>{" "}
          · founder and sole engineer · React 18, TypeScript, Vite, Chakra UI
        </p>
      </header>

      {/* [PENDING] hero screenshot: best full screen, 2400×1350 @2x, WebP <200KB */}
      <figure className="shot shot--pending shot--hero">
        <span>Hero screenshot pending · racerandpacer.com · 2400 × 1350</span>
      </figure>

      {/* DRAFT — Katie owns this pitch line */}      <h3>The project</h3>
      <p className="study__human">
        Ultramarathon racers rely on personal pacers for safety and
        motivation, but finding them is mostly word of mouth in a niche
        sport. Racer &amp; Pacer introduces athletes to each other.
      </p>

      <p className="study__call">
        My design and engineering approach: rely on Chakra UI for fast
        iteration and built-in behaviors, but replace how everything looks
        with my own color system and aesthetics. A solo product needs to look distinct, not generic or unfinished.
      </p>

      <h3>The color system</h3>
      <p>
        Software products define their color palette through design tokens in
        the code. I built four scales, overrode Chakra's built-in colors, and
        use them to reinforce user roles: green means pacer, gold means racer,
        on every screen.
      </p>
      <TokenScales />

      <h3>Keeping 46 components consistent</h3>
      <p>
        Most of the app's 46 components are used in just one place. Four of
        them repeat everywhere: the button, the badge, the pill, and the icon
        box, which alone appears in 19 files. Anything that repeats is where inconsistency shows first, so those
        four only accept a short list of named options, never a custom color.
        The <code>RP</code> prefix marks them as the shared set, and that
        shared set is what keeps every screen on brand, whether I wrote it or
        an AI did.
      </p>
      <p>
        The app's 11 modals need the same level of discipline. There are
        three ways to add a race and they share one search step, one form,
        their typography, general layout and adapt to use the appropriate
        color palette, but the flow behaves the same wherever you start it.
        There's no{" "}
        <code>RPModal</code> yet: each of the eleven builds its own header,
        buttons, and spacing, which is eleven chances to drift. That's the
        next one to nail down.
      </p>
      <Demo
        source={rpButtonIntentsSource}
        caption={<>Every option <code>RPButton</code> accepts. There is no eighth, and no way to pass your own color.</>}
      >
        <RPButtonIntents />
      </Demo>
      <Demo
        source={rpBadgeVocabularySource}
        caption={<><code>RPBadge</code>'s ten variants, all ten badge styles the app has. The code rejects anything else.</>}
      >
        <RPBadgeVocabulary />
      </Demo>

      <h3>The tradeoff</h3>
      <p>
        The names are shared, the colors are not. RPPill uses RPBadge's exact list of variant names, but each component fills in its own colors, and two have drifted apart. This is what tech debt looks like in a design system. Known, logged, and low priority next to features users asked for. That's the honest math of a solo product.
      </p>
      <Demo
        source={badgeVsPillSource}
        caption={<><code>amber</code> and <code>red</code>, rendered by <code>RPBadge</code> and <code>RPPill</code>. The names match. The pixels don't.</>}
      >
        <BadgeVsPill />
      </Demo>

      <h3>Map and planner interactions</h3>
      {/* [PENDING] Katie: what made the map and the planner hard — constraints, not features */}
      <p className="pending">
        [PENDING · Katie's constraint stories for the Mapbox race map and the
        dnd-kit crew planner]
      </p>
      <div className="shot-row">
        {/* [PENDING] map screenshot 1600×1000 @2x */}
        <figure className="shot shot--pending">
          <span>Race map, custom markers · 1600 × 1000</span>
        </figure>
        {/* [PENDING] planner mid-drag 1600×1000 @2x */}
        <figure className="shot shot--pending">
          <span>Crew planner, mid-drag · 1600 × 1000</span>
        </figure>
      </div>

      {/* [PENDING] Katie: one direction tried and thrown away */}
      <h3>What I tried and threw away</h3>
      <p className="pending">[PENDING · Katie's rejected direction]</p>
    </section>
  );
}
