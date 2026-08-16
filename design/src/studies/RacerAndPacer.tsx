import { Demo } from "../components/Demo";
import heroShot from "../shots/hero.webp";
import modalRacer from "../shots/modal-racer.webp";
import modalPacer from "../shots/modal-pacer.webp";
import { TokenScales } from "../components/TokenScales";
import RPButtonIntents from "../demos/RPButtonIntents";
import rpButtonIntentsSource from "../demos/RPButtonIntents?raw";
import RPBadgeVocabulary from "../demos/RPBadgeVocabulary";
import rpBadgeVocabularySource from "../demos/RPBadgeVocabulary?raw";
import BadgeVsPill from "../demos/BadgeVsPill";
import badgeVsPillSource from "../demos/BadgeVsPill?raw";

/** Case study 1 — building the Racer & Pacer design system from scratch. */
export default function RacerAndPacer() {
  return (
    <section className="study" id="racer-and-pacer" aria-labelledby="rp-title">
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

      <figure className="shot">
        <img
          src={heroShot}
          width={2588}
          height={1398}
          alt="The Racer & Pacer landing page. 'Ultrarunning is a team sport' in dark green serif type on cream, beside a sign-up card listing 51 ultramarathons and 48 runner profiles."
        />
        <figcaption className="shot__caption">
          <span className="shot__tag">Principles in action: Visual hierarchy &middot; White space &middot; Social proof &middot; Rule of three</span>
          The serif headline leads and everything else steps down from it.
          White space does the layout work, and the live race and runner
          counts prove real athletes are here. The closing ribbon makes three
          short claims in parallel: the rule of three, read in one pass.
        </figcaption>
      </figure>

      <h3>The project</h3>
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
      <Demo
        source={rpButtonIntentsSource}
        caption={<>Every iteration of <code>RPButton</code>. With no way to pass a different color, consistency is locked in.</>}
      >
        <RPButtonIntents />
      </Demo>
      <Demo
        source={rpBadgeVocabularySource}
        caption={<><code>RPBadge</code>'s ten variants. The code won't allow anything else, so a dev or AI produces the same thing, quickly.</>}
      >
        <RPBadgeVocabulary />
      </Demo>

      <h3>The tradeoff</h3>
      <p>
        The names are shared, the colors are not. RPPill uses RPBadge's exact
        list of variant names, but each component fills in its own colors, and
        two have drifted apart. This is the drift that weak design systems
        allow: the code checks the names but nothing defends the colors. My
        kind of work makes it impossible: define the colors once, in one
        shared place, and product designers, devs, and AI all produce the same
        thing. In Racer &amp; Pacer, this is known and logged, but low
        priority compared to any features users asked for. That's the honest
        process of a solo product.
      </p>
      <Demo
        source={badgeVsPillSource}
        caption={<><code>amber</code> and <code>red</code>, rendered by <code>RPBadge</code> and <code>RPPill</code>. The names match. The pixels don't.</>}
      >
        <BadgeVsPill />
      </Demo>

      <h3>The modals</h3>
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
      <div className="shot-row">
        <figure className="shot">
          <img
            src={modalRacer}
            width={1536}
            height={1536}
            loading="lazy"
            alt="The add-race dialog for racing Leadville Trail 100: gold flag, gold option outlines, gold Add to My Races button."
          />
          <figcaption className="shot__caption">
            <span className="shot__tag">Chunking &middot; Color coding</span>
            The add-race flow, chunked into short steps: find the race, set
            your role, confirm. Gold ties every control to the racer side.
          </figcaption>
        </figure>
        <figure className="shot">
          <img
            src={modalPacer}
            width={1536}
            height={1536}
            loading="lazy"
            alt="The same dialog for pacing Leadville Trail 100: identical layout, with the flag, outlines and Add Availability button all in green."
          />
          <figcaption className="shot__caption">
            <span className="shot__tag">Consistency &middot; Recognition over recall</span>
            The same step in pacer green. The structure never changes between
            roles, so the flow is recognized, not relearned.
          </figcaption>
        </figure>
      </div>


    </section>
  );
}
