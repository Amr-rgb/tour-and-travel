module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      lightBlack: '#202336',
      grey: '#7D7987',
      lightGrey: '#848484',
      darkGrey: '#4A4C53',
      orange: '#FB8F1D',
      olive: '#042521',
      lightOlive: '#80918E',
    },
    fontSize: {
      xs: ['.875rem'],
      sm: ['0.9375rem', '26px'],
      base: ['1rem', '28px'],
      lg: ['1.0625rem', '30px'],
      xl: ['1.125rem', '28px'],
      '2xl': ['1.1875rem', '30px'],
      '3xl': ['1.25rem', '34px'],
      '4xl': ['1.375rem'],
      '5xl': ['1.5rem', '36px'],
      '6xl': ['2rem', '42px'],
      '7xl': ['2.125rem', '44px'],
      '8xl': ['2.25rem', '50px'],
      '9xl': ['3rem', '55px'],
      '10xl': ['4rem', '80px'],
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      inter: ['Inter', 'sans-serif'],
      mulish: ['Mulish', 'sans-serif'],
    },
    extend: {
      borderWidth: {
        '.8': '.8px'
      },
      maxWidth: {
        small: '750px',
        large: '970px',
        xlarge: '1180px',
      },
    },
  },
  plugins: [],
}
