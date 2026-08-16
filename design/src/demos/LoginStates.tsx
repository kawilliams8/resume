import { useState } from "react";
import "./LoginStates.css";
import olliFace from "./olli-face.svg";

/**
 * The Fluint login flow, rebuilt from scratch. The Figma file covered the
 * happy path; production needed every state below. Colors are the real
 * theme values read from the live page. None of Fluint's code or assets.
 */
const GROUPS = [
  { label: "From the Figma file", keys: ["Log in", "Create an account"] },
  {
    label: "Designed by me",
    keys: ["Check your email", "Expired link", "Find your organization", "Logging out"],
  },
] as const;
type StateKey = (typeof GROUPS)[number]["keys"][number];

const Logo = () => (
  <img className="fls__logo" src={olliFace} alt="" />
);
/* brand marks on the auth buttons, as shipped */
const GoogleG = () => (
  <svg viewBox="0 0 20 20" className="fls__mark">
    <path fill="#4285f4" d="M19.6 10.2c0-.7-.06-1.4-.18-2H10v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4z"/>
    <path fill="#34a853" d="M10 20c2.7 0 5-0.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H1.1v2.6A10 10 0 0 0 10 20z"/>
    <path fill="#fbbc05" d="M4.4 12a6 6 0 0 1 0-3.8V5.6H1.1a10 10 0 0 0 0 8.9L4.4 12z"/>
    <path fill="#ea4335" d="M10 4c1.5 0 2.8.5 3.8 1.5L16.7 2.6A10 10 0 0 0 1.1 5.6L4.4 8.2C5.2 5.8 7.4 4 10 4z"/>
  </svg>
);
const MsLogo = () => (
  <svg viewBox="0 0 20 20" className="fls__mark">
    <rect x="1" y="1" width="8.5" height="8.5" fill="#f25022"/>
    <rect x="10.5" y="1" width="8.5" height="8.5" fill="#7fba00"/>
    <rect x="1" y="10.5" width="8.5" height="8.5" fill="#00a4ef"/>
    <rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#ffb900"/>
  </svg>
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
            <button type="button" tabIndex={-1}><GoogleG /> Google</button>
            <button type="button" tabIndex={-1}><MsLogo /> Microsoft</button>
          </div>
          <div className="fls__or">OR</div>
          <label>
            Email
            <input tabIndex={-1} placeholder="Email" readOnly />
          </label>
          <button type="button" tabIndex={-1} className="fls__cta">Continue with email</button>
        </div>
      );
    case "Check your email":
      return (
        <div className="fls__card fls__card--left">
          <h4>Check your email</h4>
          <p className="fls__sub">
            An email was sent to <b>katie@company.com</b>
          </p>
          <button type="button" tabIndex={-1} className="fls__provider"><GoogleG /> Open in Gmail</button>
          <button type="button" tabIndex={-1} className="fls__provider"><MsLogo /> Open in Outlook</button>
          <button type="button" tabIndex={-1} className="fls__provider"><b className="fls__yahoo">y!</b> Open in Yahoo</button>
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
          <button type="button" tabIndex={-1} className="fls__cta">Send a new link</button>
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
              <b><i className="fls__infoIco">i</i> What is an organization?</b>
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
            <input tabIndex={-1} placeholder="you@company.com" readOnly />
          </label>
          <div className="fls__namerow">
            <label>
              First Name
              <input tabIndex={-1} placeholder="First" readOnly />
            </label>
            <label>
              Last Name
              <input tabIndex={-1} placeholder="Last" readOnly />
            </label>
          </div>
          <label>
            Organization Name
            <input tabIndex={-1} placeholder="Acme Company" readOnly />
          </label>
          <button type="button" tabIndex={-1} className="fls__cta">Create Account</button>
          </div>
        </div>
      );
    case "Logging out":
      return (
        <div className="fls__bye">
          <div className="fls__byerow"><Logo /> <span>👋</span></div>
          <h4>See you soon</h4>
          <p className="fls__sub">Logging out</p>
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
          <button type="button" tabIndex={-1} className="fls__ghost">
            Create a new organization
          </button>
        </div>
      );
  }
}

export default function LoginStates() {
  const [state, setState] = useState<StateKey>("Log in");

  return (
    <div className="fls">
      <div className="fls__states fls__states--grouped" role="group" aria-label="Screen">
        {GROUPS.map((g) => (
          <span key={g.label} className="fls__grp">
            <span className="fls__grplabel">{g.label}</span>
            <span className="fls__grpbtns">
              {g.keys.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={"fls__pick" + (key === state ? " fls__pick--on" : "")}
                  onClick={() => setState(key)}
                >
                  {key}
                </button>
              ))}
            </span>
          </span>
        ))}
      </div>
      <div className="fls__stage" aria-hidden="true">
        <Screen state={state} />
      </div>
    </div>
  );
}
