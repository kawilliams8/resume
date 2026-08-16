import { useState } from "react";
import "./LoginStates.css";
import olliFace from "./olli-face.svg";

/**
 * Fluint's four-step onboarding, rebuilt from scratch against production
 * screenshots. Another engineer built the flow; the visual repair was CSS
 * only, no step changed. The stand-in face mark is deliberate; the real
 * logo is Fluint's.
 */
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
          <b>{label}</b>
        </span>
      ))}
    </div>
  );
}

function StepScreen({ step }: { step: Step }) {
  switch (step) {
    case "Welcome":
      return (
        <div className="fls__card">
          <Face />
          <h4>Hey Katie, I'm Olli. Ready to get to work?</h4>
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
          <div className="obs__panel">
            Olli researches both domains and drafts the point of view here.
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
            <span>The 1-Click Business Case</span>
            <span>The 0.5+ Page Business Case</span>
            <span>Value Story</span>
          </div>
          <div className="obs__btnrow">
            <button type="button" className="obs__back">Back</button>
            <button type="button" className="fls__cta obs__cta--wait">
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
        <span className="fls__tag fls__tag--fixed">Inherited, refined by principle</span>
        <StepScreen step={step} />
        <span className="obs__skip"><a>Skip Onboarding</a></span>
      </div>
    </div>
  );
}
