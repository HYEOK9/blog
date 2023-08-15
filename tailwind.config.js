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
      keyframes: {
        fullWidth: {
          "0%": { width: 0 },
          "100%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        homeProgress: "fullWidth 1s ease-out",
      },
    },
  },
  plugins: [],
};
