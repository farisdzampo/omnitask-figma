/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      backgroundColor: {
        'primary': '#16161A',
        'purple-primary': '#7F5AF0;'
      },
      width: {

        dzampo: '300px'
      },
      fontFamily: {

        inter: ['Inter']
      },
      height: {

        hero: '770px'
      }
    },
  },
  plugins: [],
}
