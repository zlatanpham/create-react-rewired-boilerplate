const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const {
  addWebpackResolve,
  addBabelPlugin,
  override,
  addPostcssPlugins,
} = require('customize-cra');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = override(
  addWebpackResolve({ alias: { '@': path.resolve(__dirname, 'src') } }),
  addBabelPlugin('babel-plugin-styled-components'),
  addPostcssPlugins([require('tailwindcss')('./src/tailwind.js')]),
  config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = (config.plugins || []).concat([
        new PurgecssPlugin({
          paths: glob.sync([path.join(__dirname, 'src/**/*.js')]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ['jsx', 'js'],
            },
          ],
        }),
      ]);
    }
    return config;
  },
  config => rewireReactHotLoader(config),
);
