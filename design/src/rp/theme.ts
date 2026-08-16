import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * Design system for Racer & Pacer.
 *
 * Color scales:
 *   green.50–900  — forest greens (overrides Chakra default green)
 *   green.lt      — #86efac, bright accent for use on dark green backgrounds
 *   earth.50–900  — warm beige/bark tones
 *   amber.50–900  — saturated gold (accent.amber = amber.500)
 *   stone.50–900  — neutral grays
 *   accent.amber      — #c8960c, warm gold (= amber.500)
 *   accent.terracotta — #c0634c, warm red-brown
 */

const config = defineConfig({
  globalCss: {
    body: {
      bg: "{colors.earth.50}",
      color: "{colors.stone.700}",
    },
  },
  theme: {
    tokens: {
      colors: {
        green: {
          50:  { value: "#f2f7f2" },
          100: { value: "#deeede" },
          200: { value: "#bddcbd" },
          300: { value: "#93c493" },
          400: { value: "#4a8c4b" },
          500: { value: "#2c5f2d" },
          600: { value: "#234d24" },
          700: { value: "#1b3a1c" }, // darkest forest
          800: { value: "#132813" },
          900: { value: "#0a150b" },
          lt:  { value: "#86efac" }, // bright accent for dark backgrounds
        },
        earth: {
          50:  { value: "#faf8f5" },
          100: { value: "#f0ebe3" },
          200: { value: "#e0d5c5" },
          300: { value: "#c9b99a" },
          400: { value: "#b09870" },
          500: { value: "#8b6914" },
          600: { value: "#6b5010" },
          700: { value: "#4d3a0c" },
          800: { value: "#322508" },
          900: { value: "#1a1204" },
        },
        stone: {
          50:  { value: "#f8f8f7" },
          100: { value: "#efefed" },
          200: { value: "#e0deda" },
          300: { value: "#c8c5bf" },
          400: { value: "#a8a49c" },
          500: { value: "#7c786e" },
          600: { value: "#5e5b53" },
          700: { value: "#42403a" },
          800: { value: "#2a2925" },
          900: { value: "#161512" },
        },
        amber: {
          50:  { value: "#f8f2e4" }, // warm off-white, same family as earth.50
          100: { value: "#f0e3bf" }, // light honey, close to earth.100
          200: { value: "#e3c87e" }, // soft gold
          300: { value: "#d1a83c" }, // richer gold, still organic
          400: { value: "#bb8e16" }, // deep gold
          500: { value: "#c8960c" }, // = accent.amber
          600: { value: "#a07808" },
          700: { value: "#7a5a06" },
          800: { value: "#584104" },
          900: { value: "#362802" },
        },
        accent: {
          amber:      { value: "#c8960c" }, // = amber.500
          terracotta: { value: "#c0634c" },
          sky:        { value: "#1b7fc4" }, // Colorado bluebird sky
        },
      },

      fonts: {
        heading: { value: `'Playfair Display', Georgia, serif` },
        body:    { value: `'DM Sans', -apple-system, sans-serif` },
        mono:    { value: `'DM Mono', monospace` },
      },

      radii: {
        card:  { value: "20px" },
        input: { value: "10px" },
        btn:   { value: "12px" },
        pill:  { value: "100px" },
      },

      shadows: {
        card: {
          value:
            "0 1px 3px rgba(27,58,28,0.04), 0 8px 32px rgba(27,58,28,0.08), 0 0 0 1px rgba(27,58,28,0.02)",
        },
      },
    },

    semanticTokens: {
      colors: {
        // Page backgrounds
        "page.bg":        { value: "{colors.earth.50}" },
        "page.bg.subtle": { value: "{colors.earth.100}" },
        "border.subtle":  { value: "{colors.earth.200}" },

        // Text hierarchy
        "text.heading": { value: "{colors.green.700}" },
        "text.body":    { value: "{colors.stone.700}" },
        "text.muted":   { value: "{colors.stone.500}" },
        "text.faint":   { value: "{colors.stone.300}" },

        // Green scale aliases
        "green.primary": { value: "{colors.green.500}" },
        "green.dark":    { value: "{colors.green.700}" },
        "green.mid":     { value: "{colors.green.400}" },
        "green.light":   { value: "{colors.green.lt}" },

        // Accents
        "accent.bark": { value: "{colors.earth.500}" },
      },
    },

    // ── Layer styles ──────────────────────────────────────────────────────────
    layerStyles: {
      card: {
        bg: "white",
        border: "1px solid",
        borderColor: "{colors.earth.200}",
        borderRadius: "20px",
        boxShadow:
          "0 1px 3px rgba(27,58,28,0.04), 0 8px 32px rgba(27,58,28,0.08), 0 0 0 1px rgba(27,58,28,0.02)",
        overflow: "hidden",
        position: "relative",
      },
      surface: {
        bg: "{colors.earth.100}",
        border: "1px solid",
        borderColor: "{colors.earth.200}",
        borderRadius: "12px",
      },
      dark: {
        bg: "{colors.green.700}",
        color: "white",
      },
    },

    // ── Text styles ───────────────────────────────────────────────────────────
    textStyles: {
      eyebrow: {
        fontFamily: "mono",
        fontSize: "11px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "{colors.green.500}",
      },
      tag: {
        fontFamily: "mono",
        fontSize: "10px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        borderRadius: "100px",
        px: "10px",
        py: "4px",
      },
      "card-label": {
        fontFamily: "mono",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "{colors.stone.300}",
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
