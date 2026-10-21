/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        elevated: token("elevated"),
        fg: token("fg"),
        muted: token("muted"),
        subtle: token("subtle"),
        accent: {
          DEFAULT: token("accent"),
          strong: token("accent-strong"),
          on: token("on-accent"),
        },
      },
      borderColor: {
        line: "rgb(var(--c-line) / var(--line-alpha))",
        "line-strong": "rgb(var(--c-line) / var(--line-strong-alpha))",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      fontSize: {
        // Fluid display sizes: comfortable on 320px phones, bold on 1920px monitors
        display: ["clamp(2.5rem, 1.6rem + 4.6vw, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
        "heading": ["clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
