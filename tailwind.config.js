/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        22: "5.5rem",
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
        modal: 8888,
        loading: 9999,
      },
      backgroundColor: {
        "light-bg": "rgba(255,255,255,0.7)",
        "header-dark": "rgba(27,27,29,0.3)",
        "navy-400": "var(--color-navy-light)",
        "navy-500": "var(--color-navy)",
        "navy-600": "var(--color-navy-deep)",
        "button-red": "#ff5f56",
        "button-yellow": "#ffbd2e",
        "button-green": "#27c93f",
        "blue-main": "var(--color-blue)",
        "night-shift": "rgb(255, 163, 57)",
        "white-transparent": "var(--color-white-transparent)",
      },
      borderColor: {
        "button-red": "#e0443e",
        "button-yellow": "#dea123",
        "button-green": "#1aab29",
        "blue-main": "var(--color-blue)",
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
        "bounce-twice": {
          "0%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "33%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "66%": {
            transform: "translateY(-1%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "17%, 50%, 80%, 100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        "right-left": {
          "0%, 100%": { transform: "translateX(-20%)" },
          "80%": { transform: "translateX(0)" },
        },
        "left-right": {
          "0%, 100%": { transform: "translateX(20%)" },
          "80%": { transform: "translateX(0)" },
        },
        "night-shift": {
          "0%": { backgroundColor: "rgba(255, 163, 57, 0.001)" },
          "100%": { backgroundColor: "rgba(255, 163, 57, 0.2)" },
        },
        "true-tone": {
          "0%": { backgroundColor: "rgba(255, 163, 57, 0.001)" },
          "100%": { backgroundColor: "rgba(255, 163, 57, 0.05)" },
        },
      },
      animation: {
        fade: "fade-in 0.1s linear",
        homeProgress: "fullWidth 2.5s ease",
        homeFade: "fade-in 3.5s linear",
        "bounce-twice": "bounce-twice 1.2s ease-out",
        "right-left": "right-left 0.8s linear infinite",
        "left-right": "left-right 0.8s linear infinite",
        "night-shift": "night-shift 3s linear",
        "true-tone": "true-tone 2s linear",
      },
    },
  },
  plugins: [require("daisyui")],
};
