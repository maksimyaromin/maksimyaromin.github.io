module.exports = {
  purge: ['./_site/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'base-100': 'rgba(var(--color-base-100), 1)',
      'base-200': 'rgba(var(--color-base-200), 1)',
      black: 'rgba(var(--color-black), 1)',
      white: 'rgba(var(--color-white), 1)'
    },
    fontFamily: {
      accent: ['Raleway', 'sans-serif'],
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      fontSize: theme => ({
        'base': ['1rem', '1.4'],
        'root': `${theme('variables.fontSize')}px`,
        'root-1.3': `${1.3 * theme('variables.fontSize')}px`,
      }),
      gridTemplateColumns: {
        'achievement': '80px auto',
        'auto': 'auto',
        'layout': '300px auto',
      },
      lineHeight: {
        'extra-extra-tight': '1.1', // (^_^)
        'extra-tight': '1.2',
      },
      maxWidth: theme => ({
        'layout': `${980 / theme('variables.fontSize')}rem`
      }),
      spacing: {
        '15': '3.75rem',
      },
    },
    screens: {
      'xs': { 'max': '479px' },
      'sm': { 'min': '480px', 'max': '599px' },
      'md': { 'min': '600px', 'max': '979px' },
      'lg': { 'min': '980px' },
      'lg-reversed': { 'max': '979px' },
      'print': { 'raw': 'print' },
    },
    variables: {
      fontSize: 16,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
