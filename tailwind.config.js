/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 100%), url("/banner.jpeg")'
      },
      backgroundColor: {
        pencil: 'linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)',
        pencil1: '#FF5C5C'
      }
    },
  },
  plugins: [],
}