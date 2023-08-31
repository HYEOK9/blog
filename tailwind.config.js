/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        18: "4.5rem",
        window: 800,
      },
      height: {
        0.25: "0.0625rem",
        18: "4.5rem",
        window: 560,
      },
      padding: {
        0.8: "0.2rem",
      },
      zIndex: {
        header: 1001,
        dock: 1001,
        dragBox: 10,
        subMenu: 1000,
        background: -10,
        loading: 9999,
      },
      backgroundColor: {
        header: "rgba(27,27,29,0.3)",
        "navy-400": "var(--color-navy-light)",
        "navy-500": "var(--color-navy)",
        "navy-600": "var(--color-navy-deep)",
        "button-red": "#ff5f56",
        "button-yellow": "#ffbd2e",
        "button-green": "#27c93f",
      },
      borderColor: {
        "button-red": "#e0443e",
        "button-yellow": "#dea123",
        "button-green": "#1aab29",
      },
      keyframes: {
        fullWidth: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fade: "fade-in 0.1s linear",
        homeProgress: "fullWidth 2.5s ease",
        homeFade: "fade-in 3.5s linear",
      },
    },
  },
  plugins: [],
};
