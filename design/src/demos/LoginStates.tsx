import { useState } from "react";
import "./LoginStates.css";
import olliFace from "./olli-face.svg";

/**
 * The Fluint login flow, rebuilt from scratch. The Figma file covered the
 * happy path; production needed every state below. Colors are the real
 * theme values read from the live page. None of Fluint's code or assets.
 */
const STATES = [
  { key: "Log in", tag: "figma" },
  { key: "Check your email", tag: "mine" },
  { key: "Expired link", tag: "mine" },
  { key: "Create an account", tag: "figma" },
  { key: "Find your organization", tag: "mine" },
] as const;
type StateKey = (typeof STATES)[number]["key"];

const Logo = () => (
  <img className="fls__logo" src={olliFace} alt="" />
);

function Screen({ state }: { state: StateKey }) {
  switch (state) {
    case "Log in":
      return (
        <div className="fls__card">
          <Logo />
          <h4>Welcome back</h4>
          <p className="fls__sub">
            Turn prospects into champions and collaborate on a compelling,
            written message.
          </p>
          <div className="fls__ssorow">
            <button type="button">Google</button>
            <button type="button">Microsoft</button>
          </div>
          <div className="fls__or">OR</div>
          <label>
            Email
            <input placeholder="Email" readOnly />
          </label>
          <button type="button" className="fls__cta">Continue with email</button>
        </div>
      );
    case "Check your email":
      return (
        <div className="fls__card fls__card--left">
          <h4>Check your email</h4>
          <p className="fls__sub">
            An email was sent to <b>katie@company.com</b>
          </p>
          <button type="button" className="fls__provider">Open in Gmail</button>
          <button type="button" className="fls__provider">Open in Outlook</button>
          <button type="button" className="fls__provider">Open in Yahoo</button>
          <div className="fls__foot">
            <p className="fls__aux">Didn't get an email? <a>Try again</a></p>
            <p className="fls__aux"><a>Back to login</a></p>
          </div>
        </div>
      );
    case "Expired link":
      return (
        <div className="fls__card">
          <Logo />
          <h4>This link has expired</h4>
          <p className="fls__sub">
            Magic links are single-use and expire after a few minutes.
          </p>
          <button type="button" className="fls__cta">Send a new link</button>
          <p className="fls__aux"><a>Back to log in</a></p>
        </div>
      );
    case "Create an account":
      return (
        <div className="fls__split">
          <div className="fls__splitLeft">
            <p className="fls__aux"><a>Back to login</a></p>
            <h4>Create an account</h4>
            <p className="fls__sub">
              We need a few details to create your account and organization.
            </p>
            <div className="fls__info">
              <b>What is an organization?</b>
              <p>
                In Fluint, an organization is a company workspace that
                contains your sales pipeline and its documents.
              </p>
              <p>You will be able to create additional organizations later.</p>
            </div>
          </div>
          <div className="fls__card fls__card--left">
          <div className="fls__brand"><Logo /> <b>Fluint</b></div>
          <label>
            Email
            <input placeholder="you@company.com" readOnly />
          </label>
          <div className="fls__namerow">
            <label>
              First Name
              <input placeholder="First" readOnly />
            </label>
            <label>
              Last Name
              <input placeholder="Last" readOnly />
            </label>
          </div>
          <label>
            Organization Name
            <input placeholder="Acme Company" readOnly />
          </label>
          <button type="button" className="fls__cta">Create Account</button>
          </div>
        </div>
      );
    case "Find your organization":
      return (
        <div className="fls__card">
          <Logo />
          <h4>Choose your organization</h4>
          <p className="fls__sub">Your email matches these workspaces.</p>
          <div className="fls__org">
            <i>A</i> Acme Company <span>›</span>
          </div>
          <div className="fls__org">
            <i>N</i> Northwind Sales <span>›</span>
          </div>
          <button type="button" className="fls__ghost">
            Create a new organization
          </button>
        </div>
      );
  }
}

export default function LoginStates() {
  const [state, setState] = useState<StateKey>("Log in");
  const active = STATES.find((s) => s.key === state)!;

  return (
    <div className="fls">
      <div className="fls__states" role="group" aria-label="Screen">
        {STATES.map((s) => (
          <button
            key={s.key}
            type="button"
            className={"fls__pick" + (s.key === state ? " fls__pick--on" : "")}
            onClick={() => setState(s.key)}
          >
            {s.key}
          </button>
        ))}
      </div>
      <div className="fls__stage">
        <span className={"fls__tag fls__tag--" + active.tag}>
          {active.tag === "figma" ? "In the Figma" : "I designed this"}
        </span>
        <Screen state={state} />
      </div>
    </div>
  );
}
