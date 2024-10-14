module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        dgrey:'#28283D',
        lightblue:'#4D96A9',
        purple:'#855FB1',
        grey:'#87879D',
        white:'#FAFAFA',
        tblue:'#8FE3F9',
      },
      // backgroundImagef:{
      //   footerbgImage:"url('assets/desktop/image-footer.jpg')"
      // }
    },
  },
  plugins: [],
}
