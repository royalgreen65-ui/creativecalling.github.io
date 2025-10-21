/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#f6f3ef',      // soft parchment
        'muted': '#6b6b60',   // warm gray
        'accent': '#7b5e3c',  // earth brown
        'accent2': '#8aa7a1', // soft green
        'text': '#1f1b16',    // deep charcoal
        'secondary': '#8aa7a1',
      },
      fontFamily: {
        'serif': ['Source Serif 4', 'Georgia', 'Times New Roman', 'serif'],
        'heading': ['Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        'container': '900px',
      },
    },
  },
  plugins: [],
}