/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      backgroundColor: {
        'primary': '#16161A',
        'card': '#242629'
        
      },

      backgroundImage: {
        'rectangle': 'linear-gradient(90deg, #2CB67D 0%, #7F5AF0 100%)'
      },

      colors: {

        paragraph: '#94A1B2',
        'purple-primary': '#7F5AF0;',
        'green-elipse' : '#2CB67D',
        'purple-elipse' : '#5E43B3',
        'background': '#16161A'
      },

      boxShadow: {
        'cards': '0px 16px 32px rgba(0, 0, 0, 0.8)'
      },

      width: {

        dzampo: '300px'
      },
      fontFamily: {

        inter: ['Inter'],
        epilogue: ['Epilogue']
      },
      fontSize: {
        heroTitle: ['64px', '80px']
      },
      height: {

        hero: '770px'
      }
    },
  },
  plugins: [],
}
