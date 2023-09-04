/** @type {import('tailwindcss').Config} */
module.exports = {  
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }, 
      fontSize: {  
        '1x1': '1rem', //15 px (For Captions )
        '1.5x1': '1.5rem', //22.5 px (For Main Text) 
        '2x1': '2rem', //30 px for (Subtitles)
        '4x1': '4rem', // 60px (For Titles)  
        '8x1': '8rem', // 120px (For BIG TITLE)
      }, 
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        'forest-green': '#228B22',
        'jet-black': '#000000',
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')", 
      }
    },
  },
  plugins: [],
};