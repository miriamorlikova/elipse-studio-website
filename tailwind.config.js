/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#FDF8F3", //body text, main text color
      },

      fontFamily: {
        nanum: ["Nanum Brush Script", "cursive"],
        orbitron: ["Orbitron", "system-ui"],
        montserrat: ["Montserrat", "system-ui"],
      },
      letterSpacing: {
        normal: "0.05em",
        wide: ".08em",
        wider: ".12em",
        widest: ".18em",
      },
      fontSize: {
        xxs: "0.55rem",
        "10xl": "8.5rem",
      },
      content: {
        moon: "url('./assets/moon-bg.jpg')",
      },
      backgroundImage: (theme) => ({
        "moon-home": "url('./src/assets/moon-bg.jpg')",
      }),
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1075px",
      lg: "1250px",
      xl: "1600px",
    },
  },
  plugins: [],
};