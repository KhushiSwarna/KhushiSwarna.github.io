import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#071013",
        graphite: "#0e171b",
        panel: "rgba(13, 24, 29, 0.78)",
        line: "rgba(181, 219, 219, 0.16)",
        mint: "#7ddac6",
        ocean: "#5fa8d3",
        coral: "#ff9f7f",
        saffron: "#f6c56b",
        mist: "#d7ecea",
      },
      boxShadow: {
        glow: "0 0 42px rgba(125, 218, 198, 0.16)",
        lift: "0 22px 80px rgba(0, 0, 0, 0.34)",
      },
      backgroundImage: {
        "fine-grid":
          "linear-gradient(rgba(215,236,234,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(215,236,234,.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
