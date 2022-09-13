/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily:{
        body:['Nunito'],
        Montserrat:['Montserrat']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/img/benin.jpg')",
       // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
