/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--bg)",
        "base-muted": "var(--bg-muted)",
        invert: "var(--bg-invert)",
        surface: "var(--surface)",
        line: "var(--border)",
        content: "var(--text)",
        muted: "var(--text-muted)",
        "content-invert": "var(--text-invert)",
        "muted-invert": "var(--text-invert-muted)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tight2: "-0.02em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,27,45,0.04), 0 4px 16px rgba(15,27,45,0.06)",
        card: "0 2px 8px rgba(15,27,45,0.05), 0 12px 32px rgba(15,27,45,0.08)",
      },
      maxWidth: {
        content: "72rem",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem", lg: "2.5rem" },
      },
    },
  },
  plugins: [],
};
