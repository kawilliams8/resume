import LoginStates from "../demos/LoginStates";
import OnboardingSteps from "../demos/OnboardingSteps";
import ChatSurface from "../demos/ChatSurface";

/**
 * Case study 3 — the Fluint login flow. Rebuilt from scratch: no Fluint code
 * or assets appear here. Copy is placeholder until Katie writes it.
 */
export default function FluintLogin() {
  return (
    <section className="study" id="fluint" aria-labelledby="fluint-title">
      <header className="study__head">
        <p className="study__kicker">Case study 03 · Design consistency on an AI product</p>
        <h2 id="fluint-title">Fluint: consistency and trust in an AI app</h2>
        <p className="study__meta">
          <a href="https://fluint.io" target="_blank" rel="noopener">
            fluint.io
          </a>{" "}
          · AI-assisted B2B sales platform · Tailwind CSS, shadcn/ui, Stytch
          auth · customer success engineer · 2025 to 2026
        </p>
      </header>

      <p className="study__human">
        A designer handed me mockups for the login screen, then left the
        company. The mockups stopped at the happy path. Everything else
        still had to ship: sent links, expired links, finding your
        organization, onboarding.
      </p>
      <p className="study__human">
        Someone had to be the designer. I knew it was my chance to shine.
      </p>

      <p className="study__call">
        My approach: extend the designer's decisions, not my preferences.
        Build the consistency in with shared layouts and components. Every
        screen should look like it came from the same Figma file,
        seamlessly. Fix the big problems before the small ones. Land
        responsive improvements with every commit.
      </p>

      <h3>The project</h3>
      <p>
        Fluint helps B2B sellers build the business case alongside their
        buyer, an AI assistant drafting with them. All of it sits behind a
        passwordless login: magic links, plus Google and Microsoft SSO. The
        login is the first screen every customer sees, on every device.
        Everything on this page is still in production today.
      </p>

      <h3>The login flow: From Figma to production</h3>
      <p>
        The Figma file covered the two happy screens: log in and create an
        account. Real users needed the rest. Not just the buttons and forms,
        but real copy. I wrote that, too. Every error message, confirmation,
        and organization screen carries my words.
      </p>
      <figure className="demo">
        <div className="demo__stage">
          <LoginStates />
        </div>
        <figcaption className="demo__foot">
          <span className="shot__tag">
            Principles in action: Jakob's law of familiar patterns &middot;
            Visibility of system status &middot; Error recovery &middot;
            Peak-end rule
          </span>
        </figcaption>
      </figure>

      <h3>The onboarding flow</h3>
      <p>
        After login, Olli sets up your first deal in four steps: what you
        sell, which deal, research, first business case. Another engineer
        built the flow; I rebuilt the CSS screen by screen to build in visual
        consistency. There was no Figma for any of it. The visual decisions
        were mine. The clearest fix was a classic: the step indicators
        floated loose above each screen, and moving them onto the white card
        grouped the whole flow into one readable object.
      </p>
      <figure className="demo">
        <div className="demo__stage">
          <OnboardingSteps />
        </div>
        <figcaption className="demo__foot">
          <span className="shot__tag">
            Principles in action: White space &middot; Type scale &middot;
            Proximity &middot; Common region
          </span>
        </figcaption>
      </figure>

      <h3>The chat surface</h3>
      <p>
        The pivot made Fluint an AI assistant, and the chat surface became
        mine end to end: the composer and its menus, streaming responses,
        document cards, error states, and Olli's voice in every message. AI
        output streaming into a designed container is the new frontend
        problem, and I have already shipped it.
      </p>
      <figure className="demo">
        <div className="demo__stage">
          <ChatSurface />
        </div>
        <figcaption className="demo__foot">
          <span className="shot__tag">
            Principles in action: Recognition over recall &middot; Perceived
            performance &middot; Progressive disclosure
          </span>
        </figcaption>
      </figure>

      <h3>The engineering underneath</h3>
      <p>
        Passwordless login is a state machine. A magic link from Stytch is
        single-use and short-lived, it can land in a different browser than
        the one that asked for it, and the user's organization can only be
        discovered after their identity. Add the SSO round-trips and every failure needs
        its own screen, because at least one user will see it. The old layout
        also broke on phones; rebuilding it responsive was half the work.
      </p>
    </section>
  );
}
