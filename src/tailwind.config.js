// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#16171A',
      white: '#FFFFFF',
      primary: '#7B16FF',
      secondary: '#24292E',
      purple: {
        100: '#F8F6FD',
        200: '#E8E5FF',
        300: '#DDD9FF',
        400: '#5856D6',
      },
      red: {
        100: '#ea4335',
        200: '#E22F2F',
        500: '#85000C',
      },
      gray: {
        default: '#67717A',
        100: '#FAFAFA',
        200: '#F6F7F8',
        300: '#EBECED',
        400: '#DFE7EF',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions'),
    require('tailwindcss-transform'),
  ],
};
