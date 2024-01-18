/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      // 'play': ['Playfair Display','sans'],
      'roboto':['Roboto']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}