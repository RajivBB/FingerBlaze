/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#FF6B6B",      // Vibrant coral-red
        secondary: "#FFD700",    // Bright gold
        tertiary: "#48FF7B",     // Electric green
        accent: "#A020F0",       // Rich purple
        background: "#F0F0F0",   // Light gray background
      },
    },
  },
  plugins: [],
};
