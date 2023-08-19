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
      },
      height: {
        18: "4.5rem",
      },
      keyframes: {
        fullWidth: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
        fade: {
          "0%": { opacity: 0 },
          "20%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        homeProgress: "fullWidth 2.5s ease",
        fade: "fade 3.5s linear",
      },
    },
  },
  plugins: [],
};
