/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      allrounder: ['Allrounder', 'serif'],
      waukegan: ['Waukegan', 'sans-serif'],
      mango: ['Black Mango', 'serif'],
    },

    extend: {
      backgroundImage: {
        'landing-background': "url('../public/landing-background.webp')",
        'landing-background-out': "url('../public/bg-desktop.png')",
        'landing-background-dark': "url('../public/bg-dark.png')",
        'landing-background-alt': "url('../public/bg.png')",
        'galaso-background': "url('../public/galaso-background.webp')",
        'black-background': "url('../public/black.webp')",
        'rainbow-background': "url('../public/rainbow.webp')",
      },
      colors: {
        black: '#121212',
      },
    },
  },
  plugins: [],
}
