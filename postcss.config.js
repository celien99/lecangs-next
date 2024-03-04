module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@tcstory/postcss-px-to-viewport': {
      viewportWidth: 1920,
      unitPrecision: 5,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: true,
    },
  },
};
