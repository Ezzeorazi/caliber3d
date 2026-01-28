export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#020617",
        surface: "#1e293b",
        border: "#334155",
        text: "#f1f5f9",
        muted: "#cbd5e1",
        accent: "#f97316",
        "accent-hover": "#ea580c",
        cyan: "#06b6d4",
      },
    },
  },
  plugins: [],
};
