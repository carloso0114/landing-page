module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightGreen: {
          100: '#2BE2A0',
          200:  '#2BE2A9',
        },
        darkBlue:'#00004F',
      },
      fontFamily: {
        'konnect': ['konnect'],
      },
      fontSize: {
        '7.5xl': '5.25rem',
      }
    },
  },
  plugins: [],
}
