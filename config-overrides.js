const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const {
  addWebpackResolve,
  addBabelPlugins,
  override,
  addPostcssPlugins,
  useEslintRc,
  addBundleVisualizer,
} = require('customize-cra');

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.js'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelist: ['html', 'body'],
});

module.exports = override(
  addWebpackResolve({
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  }),
  addBabelPlugins('styled-components', [
    'tailwind-components',
    {
      config: './src/tailwind.config.js',
      format: 'auto',
    },
    'react-hot-loader/babel',
  ]),
  useEslintRc(),
  addPostcssPlugins([
    require('tailwindcss')('./src/tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ]),
  process.env.REACT_APP_BUNDLE_VISUALIZER == 1 && addBundleVisualizer(),
  rewireReactHotLoader,
);
