import { useState } from "react";
import "./LoginStates.css";
import olliFace from "./olli-face.svg";

/**
 * Fluint's chat surface, rebuilt from scratch against production: one app
 * shell with the sidebar rail and docked composer, content changing between
 * them. The conversation replays its streaming sequence on every visit.
 * The error copy is quoted from the shipped product.
 */
const VIEWS = ["Home", "Conversation", "Error", "Deal document"] as const;
type View = (typeof VIEWS)[number];

const OlliRow = () => (
  <div className="cs__olli">
    <img src={olliFace} alt="" /> <b>Olli</b>
  </div>
);

const Composer = () => (
  <div className="cs__composer">
    <p className="cs__placeholder">
      Type your message... Hit @ to tag a deal or meeting. Hit / to run a
      chat flow.
    </p>
    <div className="cs__toolbar">
      <span className="cs__tools">@ / ⌁</span>
      <span className="cs__model">General</span>
      <span className="cs__send">
        <I d="M17 3 L9.5 10.5 M17 3 L12 17 L9.5 10.5 L3 8 Z" />
      </span>
    </div>
  </div>
);

/* the rail glyphs, simplified by hand from the real icon set */
const I = ({ d, filled }: { d: string; filled?: boolean }) => (
  <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"}
    stroke={filled ? "none" : "currentColor"} strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const Sidebar = () => (
  <aside className="cs__side" aria-hidden="true">
    <span className="cs__home">
      <I d="M4 9.5 L10 4.5 L16 9.5 V16 H12 V12 H8 V16 H4 Z" />
    </span>
    <span className="cs__flame">
      <I filled d="M10 2.5 C11.5 5.5 15 7.5 15 11.5 A5 5 0 0 1 5 11.5 C5 8.5 8.5 5.5 10 2.5 Z" />
    </span>
    <I d="M5 4 V13 M10 4 V16 M15 4 V10" />
    <I d="M4 16 V6 L10 3.5 V16 M10 8 H16 V16 M4 16 H16 M6.5 8.5 V9.5 M6.5 12 V13" />
    <I d="M6 3 H12 L15 6 V17 H6 Z M12 3 V6 H15 M8.5 10 H12.5 M8.5 13 H12.5" />
    <I d="M4 8 V12 M7 5.5 V14.5 M10 3.5 V16.5 M13 6.5 V13.5 M16 8.5 V11.5" />
    <I d="M10 5 C8.5 3.8 5.5 3.8 4 5 V15.5 C5.5 14.3 8.5 14.3 10 15.5 C11.5 14.3 14.5 14.3 16 15.5 V5 C14.5 3.8 11.5 3.8 10 5 Z M10 5 V15.5" />
    <span className="cs__low">
      <I d="M10 3.5 A6.5 6.5 0 1 1 4.6 13.6 L3.5 16.5 L6.7 15.7 A6.5 6.5 0 0 0 10 3.5 Z" />
    </span>
    <I d="M10 7 A3 3 0 1 1 10 13 A3 3 0 0 1 10 7 Z M10 2.5 V4.5 M10 15.5 V17.5 M2.5 10 H4.5 M15.5 10 H17.5 M4.7 4.7 L6.1 6.1 M13.9 13.9 L15.3 15.3 M15.3 4.7 L13.9 6.1 M6.1 13.9 L4.7 15.3" />
  </aside>
);

function Main({ view }: { view: View }) {
  switch (view) {
    case "Home":
      return (
        <>
          <div className="cs__center">
            <p className="cs__date">Sunday, August 16</p>
            <h4>Hi Katie, let's get some deals closed</h4>
            <p className="fls__sub">
              Here are the first steps to get you up to speed inside of
              Fluint:
            </p>
            <div className="cs__cards">
              <span>
                <em className="cs__chip"><I d="M6 3 H12 L15 6 V17 H6 Z M12 3 V6 H15 M8.5 10 H12.5 M8.5 13 H12.5" /></em>
                <b>Draft a follow-up email for my meeting...</b><i>Email</i>
              </span>
              <span>
                <em className="cs__chip"><I d="M3 9 L14 4 L16 8 L6 13 Z M6 13 L5 17 M9 11.7 L11 16" /></em>
                <b>Draft goals &amp; discovery questions for...</b><i>Discover</i>
              </span>
              <span>
                <em className="cs__chip"><I d="M6 3 H12 L15 6 V17 H6 Z M12 3 V6 H15 M8.5 10 H12.5 M8.5 13 H12.5" /></em>
                <b>Draft an executive-ready business case...</b><i>Generate</i>
              </span>
            </div>
            <button type="button" tabIndex={-1} className="fls__cta fls__cta--olli">
              <s className="cs__spark">✦</s> What can Olli do?
            </button>
          </div>
          <Composer />
        </>
      );
    case "Conversation":
      return (
        <>
          <div className="cs__thread">
            <p className="cs__bubble">
              Save a summary of what you can do to the Acme Company deal.
            </p>
            <OlliRow />
            <p className="cs__typing"><i /><i /><i /></p>
            <div className="cs__reveal">
              <p className="cs__line">
                I'll create a document with a summary of my capabilities and
                save it to the Acme Company deal.
              </p>
              <div className="cs__doc">
                <p className="cs__dochead">Olli Capabilities Summary</p>
                <div className="cs__docbody">
                  <b>Olli Core Capabilities</b>
                  <p>
                    Olli analyzes your deals, creates the content buyers need
                    to move forward, and supports you at every stage of the
                    sales process.
                  </p>
                </div>
                <div className="cs__docactions">
                  <span>Show Less</span><span>Email</span><span>Copy</span>
                </div>
              </div>
            </div>
          </div>
          <Composer />
        </>
      );
    case "Deal document":
      return (
        <div className="cs__split">
          <aside className="cs__dealbar">
            <div className="cs__dealhead">
              <span className="cs__deallogo">A</span>
              <em>&#8676; Collapse</em>
            </div>
            <b className="cs__dealname">Acme Company <I d="M4 16 L5 12 L13 4 L16 7 L8 15 Z M12 5 L15 8" /></b>
            <p className="cs__dealmeta">
              <span><I d="M10 6 V10 L13 12 M10 17 A7 7 0 1 1 10 3 A7 7 0 0 1 10 17 Z" /> 248 days old</span>
              <span><I d="M5 4 V13 M10 4 V16 M15 4 V10" /> Problem Identified</span>
            </p>
            <div className="cs__collab">Collaborators <i>KW</i></div>
            <div className="cs__dealsearch">Search documents and meetings</div>
            <ul className="cs__dealnav">
              <li className="cs__on"><I d="M6 3 H12 L15 6 V17 H6 Z M12 3 V6 H15" /> All documents</li>
              <li><I d="M4 8 V12 M7 5 V15 M10 3 V17 M13 6 V14 M16 8 V12" /> All meetings</li>
              <li><I d="M13 4 L6.5 10.5 A3 3 0 0 0 10.7 14.7 L16 9.5 A4.5 4.5 0 0 0 9.6 3.2 L5 7.8" /> Files</li>
              <li><I d="M7 9 A2.5 2.5 0 1 0 7 4 A2.5 2.5 0 0 0 7 9 Z M2.5 16 C2.5 12.5 11.5 12.5 11.5 16 M13 9 A2.5 2.5 0 1 0 13 4.2 M17.5 16 C17.5 13.2 14.8 12.6 13 13" /> Sharing</li>
              <li><I d="M3 4 H17 V13 H3 Z M8 17 H12 M10 13 V17" /> Slides</li>
            </ul>
            <p className="cs__dealsec">Documents <em>+</em></p>
            <p className="cs__dealdoc"><I d="M6 3 H12 L15 6 V17 H6 Z M12 3 V6 H15" /> <span>Olli Capabilities Su...</span></p>
          </aside>
          <div className="cs__docmain">
            <div className="cs__dochdr">
              <p className="cs__crumb">Deals / Acme Company / Documents / <b>Olli Capabilities Su...</b></p>
              <img src={olliFace} alt="" className="cs__ollibtn" />
            </div>
            <div className="cs__docbar">
              <span className="cs__doctools">
                <I d="M10 3 L11.5 8.5 L17 10 L11.5 11.5 L10 17 L8.5 11.5 L3 10 L8.5 8.5 Z" />
                <I d="M4 16 L5 12 L13 4 L16 7 L8 15 Z" />
                <I d="M10 6 V10 L13 12 M10 17 A7 7 0 1 1 10 3 A7 7 0 0 1 10 17 Z" />
                <I d="M5 4 H15 V16 H5 Z M7.5 8 H12.5 M7.5 11 H12.5" />
                <I d="M4 4 H16 V13 H9 L5.5 16 V13 H4 Z" />
              </span>
              <span className="cs__docsp" />
              <span className="cs__docbtn">Download PDF</span>
              <span className="cs__docbtn">Copy</span>
              <span className="cs__docbtn cs__docbtn--dark">Share</span>
            </div>
            <div className="cs__docsheet">
              <h5>What Olli Does for Sales Teams</h5>
              <p>
                Olli is an AI-powered sales assistant that helps reps close
                deals faster: analyzing deals, creating content, and guiding
                the sales process.
              </p>
              <b>1. Deal Analysis &amp; Strategy</b>
              <p>
                <strong>Deal health assessments.</strong> Olli flags risks,
                gaps in your buying committee, and stalled deals before they
                surprise you.
              </p>
              <p>
                <strong>Stakeholder mapping.</strong> Identifies who's
                involved, who's missing, and where each person stands.
              </p>
            </div>
          </div>
        </div>
      );
    case "Error":
      return (
        <>
          <div className="cs__thread">
            <p className="cs__bubble">And if the network drops?</p>
            <OlliRow />
            <p className="cs__error">
              Hmmmm... looks like I ran into an unexpected issue while
              responding. Could you try refreshing the page and seeing if
              the answer shows up? If not, try rephrasing your request and
              asking again.
            </p>
          </div>
          <Composer />
        </>
      );
  }
}

export default function ChatSurface() {
  const [view, setView] = useState<View>("Home");
  return (
    <div className="fls">
      <div className="fls__states" role="group" aria-label="Chat view">
        {VIEWS.map((v) => (
          <button
            key={v}
            type="button"
            className={"fls__pick" + (v === view ? " fls__pick--on" : "")}
            onClick={() => setView(v)}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="fls__stage fls__stage--flush">
        <div className="cs__app" aria-hidden="true">
          <Sidebar />
          <main className="cs__main" key={view}>
            <Main view={view} />
          </main>
        </div>
      </div>
    </div>
  );
}
