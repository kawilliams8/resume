import { useState } from "react";
import "./LoginStates.css";
import olliFace from "./olli-face.svg";

/**
 * Fluint's four-step onboarding, rebuilt from scratch against production
 * screenshots. Another engineer built the flow; the visual repair was CSS
 * only, no step changed. The stand-in face mark is deliberate; the real
 * logo is Fluint's.
 */
const Doc = () => (
  <svg className="obs__doc" viewBox="0 0 20 20" fill="none" stroke="#258bbe"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3 H12 L15 6 V17 H6 Z M12 3 V6 H15 M8.5 10 H12.5 M8.5 13 H12.5" />
  </svg>
);

const STEPS = ["Welcome", "What", "Who", "Research", "Create"] as const;
type Step = (typeof STEPS)[number];

const Face = () => (
  <img className="fls__logo" src={olliFace} alt="" />
);

function Stepper({ active }: { active: number }) {
  return (
    <div className="obs__stepper">
      {["What", "Who", "Research", "Create"].map((label, i) => (
        <span key={label} className="obs__step">
          <i className={i + 1 === active ? "obs__num obs__num--on" : "obs__num"}>
            {i + 1}
          </i>
          <b className={i + 1 === active ? "obs__lbl--on" : ""}>{label}</b>
        </span>
      ))}
    </div>
  );
}

function StepScreen({ step }: { step: Step }) {
  switch (step) {
    case "Welcome":
      return (
        <div className="fls__card obs__card obs__card--welcome">
          <Face />
          <h4>Hey Katie, I'm <em className="obs__olli">Olli</em>. Ready to get to work?</h4>
          <p className="fls__sub">
            Let's pick 1 specific deal to get rolling on together.
          </p>
          <button type="button" className="fls__cta fls__cta--olli">Let's Go</button>
        </div>
      );
    case "What":
      return (
        <div className="fls__card obs__card">
          <Stepper active={1} />
          <Face />
          <h4>What are you selling?</h4>
          <p className="fls__sub">
            Enter your company's domain, and I'll tailor your messaging for
            you.
          </p>
          <label className="obs__field">
            Company Domain
            <input placeholder="example.com" readOnly />
          </label>
          <button type="button" className="fls__cta obs__cta--wait">
            Research my product &amp; value props
          </button>
        </div>
      );
    case "Who":
      return (
        <div className="fls__card obs__card">
          <Stepper active={2} />
          <Face />
          <h4>What's an important deal in your pipeline?</h4>
          <p className="fls__sub">
            I'll start by drafting a point of view we can build on together.
          </p>
          <label className="obs__field">
            What's their domain?
            <input placeholder="acme.com" readOnly />
          </label>
          <p className="obs__toggle">
            Got any transcripts or notes you want to add? <i />
          </p>
          <div className="obs__btnrow">
            <button type="button" className="obs__back">Back</button>
            <button type="button" className="fls__cta obs__cta--wait">
              Build my first deal content
            </button>
          </div>
        </div>
      );
    case "Research":
      return (
        <div className="fls__card obs__card">
          <Stepper active={3} />
          <Face />
          <h4>Researching acme.com</h4>
          <p className="fls__sub">
            I'm drafting a point of view we can build on together.
          </p>
          <div className="obs__skel">
            <i style={{ width: "92%" }} />
            <i style={{ width: "78%" }} />
            <i style={{ width: "85%" }} />
            <i style={{ width: "58%" }} />
          </div>
          <div className="obs__found">
            Acme sells compliance software to mid-market banks. Your platform
            could cut their audit-prep time in half, and the buying committee
            will care most about security review. Starting your point of view
            there.
          </div>
          <div className="obs__btnrow">
            <button type="button" className="obs__back">Back</button>
            <button type="button" className="fls__cta obs__cta--wait">
              Let's create a business case
            </button>
          </div>
        </div>
      );
    case "Create":
      return (
        <div className="fls__card obs__card">
          <Stepper active={4} />
          <Face />
          <h4>Draft your first business case</h4>
          <p className="fls__sub">Here are the top 3 frameworks I'd recommend</p>
          <div className="obs__frameworks">
            <span className="obs__fw--on"><Doc /> The 1-Click Business Case</span>
            <span><Doc /> The 0.5+ Page Business Case</span>
            <span><Doc /> Value Story</span>
          </div>
          <div className="obs__btnrow">
            <button type="button" className="obs__back">Back</button>
            <button type="button" className="fls__cta obs__cta">
              Generate business case
            </button>
          </div>
        </div>
      );
  }
}

export default function OnboardingSteps() {
  const [step, setStep] = useState<Step>("Welcome");
  return (
    <div className="fls">
      <div className="fls__states" role="group" aria-label="Onboarding step">
        {STEPS.map((s) => (
          <button
            key={s}
            type="button"
            className={"fls__pick" + (s === step ? " fls__pick--on" : "")}
            onClick={() => setStep(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="fls__stage">
        <StepScreen step={step} />
        <span className="obs__skip"><a>Skip Onboarding</a></span>
      </div>
    </div>
  );
}
