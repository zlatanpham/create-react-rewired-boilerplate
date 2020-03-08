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
  content: [
    {
      raw: '<html><body><div id="root"></div></body></html>',
      extension: 'html',
    },
    './src/**/*.html',
    './src/**/*.js',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = override(
  addWebpackResolve({
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  }),
  addBabelPlugins('styled-components'),
  useEslintRc(),
  addPostcssPlugins([
    require('tailwindcss')('./src/tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ]),
  process.env.REACT_APP_BUNDLE_VISUALIZER == 1 && addBundleVisualizer(),
  rewireReactHotLoader,
);
