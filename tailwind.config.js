/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'galaso-background': "url('../public/galaso-background.webp')"
      },
      colors: {
        black: '#121212',
      },
    },
  },
  plugins: [],
}
