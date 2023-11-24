/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '100vh': '100vh',
      }
    },
  },
  plugins: [],
}

