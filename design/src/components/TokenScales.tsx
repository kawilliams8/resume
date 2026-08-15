import { system } from "../rp/theme";
import "./TokenScales.css";

/**
 * Renders Racer & Pacer's color scales by asking its real theme for every
 * value — nothing here is retyped, so the page cannot show a palette the app
 * does not ship. Same rule as the Demo source panels.
 */
const STOPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "lt"];
const SCALES = ["green", "earth", "amber", "stone"];
const ACCENTS = ["accent.amber", "accent.terracotta", "accent.sky"];

const token = (path: string): string | undefined => {
  const v = system.token(`colors.${path}`);
  return typeof v === "string" && v.startsWith("#") ? v : undefined;
};

/** Relative luminance, for choosing legible label text per swatch. */
const dark = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.35;
};

export function TokenScales() {
  return (
    <div className="scales">
      {SCALES.map((name) => {
        const stops = STOPS.map((s) => ({ stop: s, hex: token(`${name}.${s}`) })).filter(
          (x): x is { stop: string; hex: string } => !!x.hex
        );
        return (
          <div className="scale" key={name}>
            <span className="scale__name">{name}</span>
            <div className="scale__row">
              {stops.map(({ stop, hex }) => (
                <span
                  key={stop}
                  className={"swatch" + (dark(hex) ? " swatch--dark" : "")}
                  style={{ background: hex }}
                  title={`${name}.${stop} ${hex}`}
                >
                  {stop}
                </span>
              ))}
            </div>
          </div>
        );
      })}
      <div className="scale">
        <span className="scale__name">accent</span>
        <div className="scale__row">
          {ACCENTS.map((path) => {
            const hex = token(path);
            return hex ? (
              <span
                key={path}
                className={"swatch swatch--wide" + (dark(hex) ? " swatch--dark" : "")}
                style={{ background: hex }}
                title={`${path} ${hex}`}
              >
                {path.split(".")[1]}
              </span>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
