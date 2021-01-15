const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  corePlugins: {
    transitionProperty: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'tic-tac-toe-pattern': "url('~assets/svg/tic-tac-toe.svg')",
        'tic-tac-toe-2-pattern': "url('~assets/svg/tic-tac-toe-2.svg')",
      }),
    },
    fontFamily: {
      title: ['MADEEvolveSansEVO'],
      body: ['MADEEvolveSans'],
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
      'drop-shadow': 'drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5))',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      cyan: '#64faa6',
      cyandark: '#00afa6',
      magenta: '#480825',
      magentadark: '#95002c',
    },
    backgroundColor: (defaultTheme) => ({
      primary: '#GGGGGG',
      primarydark: '#111111',
      secondary: '#FFFFFF',
      'secondary-dark': '#000000',
      info: '#000000',
    }),
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
      filter: ['dark'],
    },
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
  plugins: [
    require('tailwindcss-filters'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.transform-3d': {
          '--tw-translate-x': '0',
          '--tw-translate-y': '0',
          '--tw-translate-z': '0',
          '--tw-rotate': '0',
          '--tw-skew-x': '0',
          '--tw-skew-y': '0',
          '--tw-scale-x': '1',
          '--tw-scale-y': '1',

          transform:
            'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
