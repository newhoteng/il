/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#272e71",
        primary: 'var(--color-primary)',
      }
    },
  },
  plugins: [],
}

