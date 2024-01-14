/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        kw: { min: '200px', max: '600px' },
      },
    },
  },
  plugins: [],
}

