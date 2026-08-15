import { useState } from "react";
import "./DynamicPalette.css";

/**
 * The Dynamic palette derivation from Array's theming system, reimplemented
 * from scratch. An organization supplies two brand colors; the system derives
 * the full polling palette from them. lighten and darken are the same math
 * MUI ships: move each channel toward white, or scale it toward black.
 *
 * Starting values are the system's real defaults.
 */
const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
const channels = (hex: string): [number, number, number] => {
  const n = parseInt(hex.slice(1), 16);
  return [n >> 16, (n >> 8) & 255, n & 255];
};
const hex = (rgb: number[]) =>
  "#" + rgb.map((c) => clamp(c).toString(16).padStart(2, "0")).join("");

const lighten = (color: string, k: number) =>
  hex(channels(color).map((c) => c + (255 - c) * k));
const darken = (color: string, k: number) =>
  hex(channels(color).map((c) => c * (1 - k)));

export function derive(primary: string, secondary: string) {
  const background = lighten(primary, 0.95);
  return [
    ["pollingAnswer", primary],
    ["pollingBackground", background],
    ["pollingCorrectPreInterval", primary],
    ["pollingCorrectPostInterval", secondary],
    ["pollingIncorrectPreInterval", "#838383"],
    ["pollingIncorrectPostInterval", "#bcbcbc"],
    ["pollingText", "#353535"],
    ["pollingTableHeader", primary],
    ["pollingTableRowAlternate", darken(background, 0.1)],
    ["pollingSubmitButtonBackground", primary],
    ["pollingMultipleChoiceUnselectedTop", primary],
    ["pollingMultipleChoiceUnselectedBottom", darken(primary, 0.3)],
    ["pollingMultipleChoiceSelectedTop", secondary],
    ["pollingMultipleChoiceSelectedBottom", darken(secondary, 0.3)],
  ] as const;
}

export default function DynamicPalette() {
  const [primary, setPrimary] = useState("#2f4a62");
  const [secondary, setSecondary] = useState("#bfd5ea");
  const tokens = Object.fromEntries(derive(primary, secondary));

  return (
    <div className="dyn">
      <div className="dyn__inputs">
        <label>
          primary
          <input type="color" value={primary} onChange={(e) => setPrimary(e.target.value)} />
        </label>
        <label>
          secondary
          <input type="color" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
        </label>
        <span className="dyn__note">two inputs, fourteen tokens out</span>
      </div>

      {/* a generic poll, themed by the derived tokens. Not Array's UI. */}
      <div className="dyn__poll" style={{ background: tokens.pollingBackground }}>
        <p className="dyn__q" style={{ color: tokens.pollingText }}>
          Which session was your favorite?
        </p>
        {["Opening keynote", "Product deep dive", "Live Q&A"].map((label, i) => (
          <div
            key={label}
            className="dyn__answer"
            style={{
              background:
                i === 1
                  ? `linear-gradient(${tokens.pollingMultipleChoiceSelectedTop}, ${tokens.pollingMultipleChoiceSelectedBottom})`
                  : `linear-gradient(${tokens.pollingMultipleChoiceUnselectedTop}, ${tokens.pollingMultipleChoiceUnselectedBottom})`,
            }}
          >
            {label}
          </div>
        ))}
        <button
          type="button"
          className="dyn__submit"
          style={{ background: tokens.pollingSubmitButtonBackground }}
        >
          Submit
        </button>
        <div className="dyn__table">
          <div className="dyn__thead" style={{ background: tokens.pollingTableHeader }}>
            Results
          </div>
          <div style={{ color: tokens.pollingText }}>Opening keynote · 41%</div>
          <div style={{ background: tokens.pollingTableRowAlternate, color: tokens.pollingText }}>
            Product deep dive · 38%
          </div>
          <div style={{ color: tokens.pollingText }}>Live Q&amp;A · 21%</div>
        </div>
      </div>

      <div className="dyn__tokens">
        {derive(primary, secondary).map(([name, value]) => (
          <span key={name} className="dyn__token">
            <i style={{ background: value }} />
            {name.replace("polling", "")} <b>{value}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
