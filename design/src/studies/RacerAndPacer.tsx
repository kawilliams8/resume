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
        <p className="study__kicker">Case study 01 · Authorship</p>
        <h2 id="rp-title">Racer &amp; Pacer</h2>
        <p className="study__meta">
          <a href="https://racerandpacer.com" target="_blank" rel="noopener">
            racerandpacer.com
          </a>{" "}
          · founder and sole engineer · React 18, TypeScript, Vite, Chakra UI ·
          live with real users
        </p>
      </header>

      {/* [PENDING] hero screenshot: best full screen, 2400×1350 @2x, WebP <200KB */}
      <figure className="shot shot--pending shot--hero">
        <span>Hero screenshot pending · racerandpacer.com · 2400 × 1350</span>
      </figure>

      <p className="study__human">
        A runner planning a hundred-miler needs to tell six friends where to be
        at 2am, and nobody in ultrarunning has a tool for that.
      </p>

      <p className="study__call">
        The call: keep Chakra for the behavior, replace its whole visual
        identity with my own tokens. A solo product has to look like a product,
        not like its component library.
      </p>

      <h3>Tokens over defaults</h3>
      <p>
        Four custom scales replace Chakra's palette, and mine overrides
        Chakra's own <code>green</code> so no component can reach the stock
        color by accident. Every swatch below is read from the app's real theme
        file, not retyped.
      </p>
      <TokenScales />

      <h3>What earns a component its name</h3>
      <p>
        46 components, four promoted. A component earns its RP name when it
        closes an open styling surface into a named vocabulary that more than
        one feature needs. The names describe role, never appearance:{" "}
        <code>onLight</code> says where it sits, <code>racer</code> says who
        it is for.
      </p>
      <Demo
        source={rpButtonIntentsSource}
        caption="RPButton's full API. There is no eighth intent and no way to pass a color."
      >
        <RPButtonIntents />
      </Demo>
      <Demo
        source={rpBadgeVocabularySource}
        caption="RPBadge's ten variants. The app's whole badge vocabulary, enforced by TypeScript."
      >
        <RPBadgeVocabulary />
      </Demo>

      <h3>What it cost</h3>
      <p>
        The vocabulary is enforced, the rendering is not. RPPill shares
        RPBadge's variant type, but each declares its own values, and two have
        drifted. This is what tech debt looks like in a design system.
      </p>
      <Demo
        source={badgeVsPillSource}
        caption="amber and red, rendered by RPBadge and RPPill. The type system says these agree. The pixels disagree."
      >
        <BadgeVsPill />
      </Demo>

      <h3>The hard interactions</h3>
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

      {/* [PENDING] Katie: one direction tried and killed */}
      <h3>What I tried and killed</h3>
      <p className="pending">[PENDING · Katie's rejected direction]</p>
    </section>
  );
}
