// Stroomlijn — design tokens als Tailwind extension.
// Drop in jullie tailwind.config.ts onder `theme.extend`.
// Of voeg de losse keys toe als jullie al een eigen extend hebben.

import type { Config } from "tailwindcss";

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Stroomlijn brand
        teal:        { DEFAULT: "#4899A7", deep: "#34707C", soft: "#7FB6C0" },
        gold:        { DEFAULT: "#BD9766", deep: "#9C7B4F", soft: "#E8D9BE" },
        navy:        { DEFAULT: "#1A2E4A", soft: "#2B4566" },
        sand:        { DEFAULT: "#F0EDE4", deep: "#E1DED1" },
        // Surfaces (mappen naar shadcn HSL-tokens via CSS vars in globals.css)
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.028em",
        eyebrow: "0.14em",
      },
      borderRadius: {
        DEFAULT: "10px",
        lg: "14px",
        xl: "20px",
      },
      transitionTimingFunction: {
        flow: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      boxShadow: {
        // warm-getoonde shadows (navy-tinted), zie design system
        sm: "0 2px 6px rgba(26, 46, 74, 0.06)",
        md: "0 8px 20px rgba(26, 46, 74, 0.08)",
        lg: "0 18px 40px rgba(26, 46, 74, 0.12)",
        focus: "0 0 0 3px rgba(72, 153, 167, 0.25)",
      },
    },
  },
};

export default config;
