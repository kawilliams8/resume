import { useState } from "react";
import "./PollingPalettes.css";

/**
 * All six polling palettes from Array's theming system, reimplemented from
 * scratch. Two are computed from the organization's brand colors, two use the
 * system's default blues, and two are black and white. lighten and darken are
 * the same math MUI ships: move each channel toward white, or scale it toward
 * black. Starting values are the system's real defaults.
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
/* light text on dark fills, dark text on light ones, as MUI computes it */
const contrastText = (bg: string) => {
  const [r, g, b] = channels(bg);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 140 ? "#212121" : "#ffffff";
};

/* the system's own defaults, what every client sees before choosing */
const DEFAULT_PRIMARY = "#2f4a62";
const DEFAULT_SECONDARY = "#bfd5ea";

type Tokens = ReadonlyArray<readonly [string, string]>;

export function makePalettes(
  primary: string,
  secondary: string
): Record<string, Tokens> {
  const dynLightBg = lighten(primary, 0.95);
  const dynDarkBg = darken(primary, 0.8);
  const defLightBg = "#f0f4f8";
  const defDarkBg = "#081826";
  return {
    "Dynamic Light": [
      ["pollingAnswer", primary],
      ["pollingBackground", dynLightBg],
      ["pollingCorrectPreInterval", primary],
      ["pollingCorrectPostInterval", secondary],
      ["pollingIncorrectPreInterval", "#838383"],
      ["pollingIncorrectPostInterval", "#bcbcbc"],
      ["pollingText", "#353535"],
      ["pollingTableHeader", primary],
      ["pollingTableRowAlternate", darken(dynLightBg, 0.1)],
      ["pollingSubmitButtonBackground", primary],
      ["pollingMultipleChoiceUnselectedTop", primary],
      ["pollingMultipleChoiceUnselectedBottom", darken(primary, 0.3)],
      ["pollingMultipleChoiceSelectedTop", secondary],
      ["pollingMultipleChoiceSelectedBottom", darken(secondary, 0.3)],
    ],
    "Dynamic Dark": [
      ["pollingAnswer", primary],
      ["pollingBackground", dynDarkBg],
      ["pollingCorrectPreInterval", primary],
      ["pollingCorrectPostInterval", secondary],
      ["pollingIncorrectPreInterval", "#838383"],
      ["pollingIncorrectPostInterval", "#bcbcbc"],
      ["pollingText", "#ffffff"],
      ["pollingTableHeader", primary],
      ["pollingTableRowAlternate", lighten(dynDarkBg, 0.1)],
      ["pollingSubmitButtonBackground", primary],
      ["pollingMultipleChoiceUnselectedTop", lighten(primary, 0.3)],
      ["pollingMultipleChoiceUnselectedBottom", primary],
      ["pollingMultipleChoiceSelectedTop", lighten(secondary, 0.3)],
      ["pollingMultipleChoiceSelectedBottom", secondary],
    ],
    "Default Light": [
      ["pollingAnswer", DEFAULT_PRIMARY],
      ["pollingBackground", defLightBg],
      ["pollingCorrectPreInterval", DEFAULT_PRIMARY],
      ["pollingCorrectPostInterval", DEFAULT_SECONDARY],
      ["pollingIncorrectPreInterval", "#838383"],
      ["pollingIncorrectPostInterval", "#bcbcbc"],
      ["pollingText", "#353535"],
      ["pollingTableHeader", DEFAULT_PRIMARY],
      ["pollingTableRowAlternate", darken(defLightBg, 0.1)],
      ["pollingSubmitButtonBackground", DEFAULT_PRIMARY],
      ["pollingMultipleChoiceUnselectedTop", DEFAULT_PRIMARY],
      ["pollingMultipleChoiceUnselectedBottom", darken(DEFAULT_PRIMARY, 0.3)],
      ["pollingMultipleChoiceSelectedTop", DEFAULT_SECONDARY],
      ["pollingMultipleChoiceSelectedBottom", darken(DEFAULT_SECONDARY, 0.3)],
    ],
    "Default Dark": [
      ["pollingAnswer", DEFAULT_SECONDARY],
      ["pollingBackground", defDarkBg],
      ["pollingCorrectPreInterval", DEFAULT_SECONDARY],
      ["pollingCorrectPostInterval", DEFAULT_PRIMARY],
      ["pollingIncorrectPreInterval", "#838383"],
      ["pollingIncorrectPostInterval", "#bcbcbc"],
      ["pollingText", "#ffffff"],
      ["pollingTableHeader", DEFAULT_PRIMARY],
      ["pollingTableRowAlternate", lighten(defDarkBg, 0.1)],
      ["pollingSubmitButtonBackground", DEFAULT_PRIMARY],
      ["pollingMultipleChoiceUnselectedTop", lighten(DEFAULT_PRIMARY, 0.3)],
      ["pollingMultipleChoiceUnselectedBottom", DEFAULT_PRIMARY],
      ["pollingMultipleChoiceSelectedTop", lighten(DEFAULT_SECONDARY, 0.3)],
      ["pollingMultipleChoiceSelectedBottom", DEFAULT_SECONDARY],
    ],
    "B&W Light": [
      ["pollingAnswer", "#353535"],
      ["pollingBackground", "#ffffff"],
      ["pollingCorrectPreInterval", "#353535"],
      ["pollingCorrectPostInterval", "#696969"],
      ["pollingIncorrectPreInterval", "#aeaeae"],
      ["pollingIncorrectPostInterval", "#d3d3d3"],
      ["pollingText", "#353535"],
      ["pollingTableHeader", "#353535"],
      ["pollingTableRowAlternate", darken("#ffffff", 0.1)],
      ["pollingSubmitButtonBackground", "#353535"],
      ["pollingMultipleChoiceUnselectedTop", "#969595"],
      ["pollingMultipleChoiceUnselectedBottom", "#5e5e5e"],
      ["pollingMultipleChoiceSelectedTop", "#5e5e5e"],
      ["pollingMultipleChoiceSelectedBottom", "#000000"],
    ],
    "B&W Dark": [
      ["pollingAnswer", "#ffffff"],
      ["pollingBackground", "#353535"],
      ["pollingCorrectPreInterval", "#ffffff"],
      ["pollingCorrectPostInterval", "#a6a6a6"],
      ["pollingIncorrectPreInterval", "#4e4e4e"],
      ["pollingIncorrectPostInterval", "#686868"],
      ["pollingText", "#ffffff"],
      ["pollingTableHeader", "#212121"],
      ["pollingTableRowAlternate", lighten("#353535", 0.1)],
      ["pollingSubmitButtonBackground", "#bdbdbd"],
      ["pollingMultipleChoiceUnselectedTop", "#ededed"],
      ["pollingMultipleChoiceUnselectedBottom", "#b6b6b6"],
      ["pollingMultipleChoiceSelectedTop", "#535252"],
      ["pollingMultipleChoiceSelectedBottom", "#9a9999"],
    ],
  };
}

export default function PollingPalettes() {
  const [paletteName, setPaletteName] = useState("Dynamic Light");
  const [primary, setPrimary] = useState(DEFAULT_PRIMARY);
  const [secondary, setSecondary] = useState(DEFAULT_SECONDARY);

  const palettes = makePalettes(primary, secondary);
  const palette = palettes[paletteName];
  const tokens = Object.fromEntries(palette);
  const isDynamic = paletteName.startsWith("Dynamic");


  return (
    <div className="dyn">
      <p className="dyn__try">
        Try it: pick two brand colors, then a palette. All four screens
        update.
      </p>
      <div className="dyn__inputs">
        <label title="Click to pick a color">
          primary
          <input type="color" value={primary} onChange={(e) => setPrimary(e.target.value)} />
          <b>{primary}</b>
        </label>
        <label title="Click to pick a color">
          secondary
          <input type="color" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
          <b>{secondary}</b>
        </label>
        {!isDynamic && (
          <span className="dyn__note">this palette ignores the brand colors</span>
        )}
      </div>

      <div className="dyn__palettes" role="group" aria-label="Palette">
        {Object.keys(palettes).map((name) => (
          <button
            key={name}
            type="button"
            className={"dyn__pal" + (name === paletteName ? " dyn__pal--on" : "")}
            onClick={() => setPaletteName(name)}
          >
            <i style={{ background: Object.fromEntries(palettes[name]).pollingAnswer }} />
            <i style={{ background: Object.fromEntries(palettes[name]).pollingCorrectPostInterval }} />
            {name}
          </button>
        ))}
      </div>

      <div className="dyn__tokens">
        {palette.map(([name, value]) => (
          <span key={name} className="dyn__token">
            <i style={{ background: value }} />
            {name.replace("polling", "")} <b>{value}</b>
          </span>
        ))}
      </div>

      {/* All four screens recreated from scratch to mirror the real
          product. None of Array's code or assets. Slide artwork belongs to
          the deck, so it stays neutral: the theme colors the chrome. */}
      <div className="dyn__previews">
        <div>
          <p className="dyn__prevlabel">Audience app, live slide</p>
          <div className="dyn__app">
            <div className="dyn__bar">
              <span className="dyn__logo">CLIENT LOGO</span>
              <span className="dyn__avatar" style={{ background: primary }}>KW</span>
            </div>
            <div className="dyn__stage" style={{ background: tokens.pollingBackground }}>
              <div className="dyn__deck">
                <b>Q3 clinical update</b>
                <i style={{ width: "82%" }} />
                <i style={{ width: "64%" }} />
                <i style={{ width: "71%" }} />
              </div>
              <div className="dyn__nav">
                <button type="button" style={{ background: primary, color: contrastText(primary) }}>
                  Previous slide
                </button>
                <button type="button" style={{ background: primary, color: contrastText(primary) }}>
                  Next slide
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="dyn__prevlabel">Audience app, poll question</p>
          <div className="dyn__app">
            <div className="dyn__bar">
              <span className="dyn__logo">CLIENT LOGO</span>
              <span className="dyn__avatar" style={{ background: primary }}>KW</span>
            </div>
            <div className="dyn__stage" style={{ background: tokens.pollingBackground }}>
              <p className="dyn__q" style={{ color: tokens.pollingText }}>
                Which option do you prefer?
              </p>
              {["Option 1", "Option 2", "Option 3"].map((label, i) => {
                const top = i === 1
                  ? tokens.pollingMultipleChoiceSelectedTop
                  : tokens.pollingMultipleChoiceUnselectedTop;
                const bottom = i === 1
                  ? tokens.pollingMultipleChoiceSelectedBottom
                  : tokens.pollingMultipleChoiceUnselectedBottom;
                return (
                  <div
                    key={label}
                    className="dyn__opt"
                    style={{
                      background: `linear-gradient(${top}, ${bottom})`,
                      color: contrastText(top),
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p className="dyn__prevlabel">Results slide, pre vs post</p>
          <div className="dyn__app">
            <div className="dyn__bar">
              <span className="dyn__logo">CLIENT LOGO</span>
              <span className="dyn__avatar" style={{ background: primary }}>KW</span>
            </div>
            <div className="dyn__stage" style={{ background: tokens.pollingBackground }}>
              <p className="dyn__q" style={{ color: tokens.pollingText }}>
                Which option do you prefer?
              </p>
              {[
                { label: "Option 1", correct: true, pre: 55, post: 95 },
                { label: "Option 2", correct: false, pre: 25, post: 5 },
                { label: "Option 3", correct: false, pre: 20, post: 5 },
              ].map((r, i) => (
                <div
                  key={r.label}
                  className="dyn__row"
                  style={{
                    background: i % 2
                      ? tokens.pollingTableRowAlternate
                      : "transparent",
                    color: tokens.pollingText,
                  }}
                >
                  <span>{r.label}</span>
                  {[
                    ["PRE", r.pre, r.correct
                      ? tokens.pollingCorrectPreInterval
                      : tokens.pollingIncorrectPreInterval],
                    ["POST", r.post, r.correct
                      ? tokens.pollingCorrectPostInterval
                      : tokens.pollingIncorrectPostInterval],
                  ].map(([phase, count, color]) => (
                    <span key={phase as string} className="dyn__barline">
                      <b>{count}</b> {phase}
                      <i style={{ width: `${count}%`, background: color as string }} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="dyn__prevlabel">Presenter, live slide</p>
          <div className="dyn__app">
            <div className="dyn__bar">
              <span className="dyn__logo">CLIENT LOGO</span>
              <span className="dyn__avatar" style={{ background: primary }}>KW</span>
            </div>
            <div className="dyn__stage" style={{ background: tokens.pollingBackground }}>
              <div className="dyn__deck">
                <b>Q3 clinical update</b>
                <i style={{ width: "82%" }} />
                <i style={{ width: "64%" }} />
              </div>
              <div className="dyn__notes">
                <span>Speaker notes</span>
                Pause here for the audience vote.
              </div>
              <div className="dyn__nav">
                <button type="button" style={{ background: primary, color: contrastText(primary) }}>
                  Previous slide
                </button>
                <button type="button" style={{ background: primary, color: contrastText(primary) }}>
                  Next slide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
