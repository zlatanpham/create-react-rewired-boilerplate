const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const glob = require('glob-all');
const {
  addWebpackResolve,
  addBabelPlugins,
  override,
  addPostcssPlugins,
  useEslintRc,
} = require('customize-cra');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = override(
  addWebpackResolve({ alias: { '@': path.resolve(__dirname, 'src') } }),
  addBabelPlugins('styled-components', [
    'tailwind-components',
    {
      config: './src/tailwind.js',
      format: 'auto',
    },
  ]),
  useEslintRc(),
  addPostcssPlugins([require('tailwindcss')('./src/tailwind.js')]),
  config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = (config.plugins || []).concat([
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: 'stats.json',
        }),
        new PurgecssPlugin({
          paths: glob.sync([path.join(__dirname, 'src/**/*.js')]),
          // Avoid unapply normalize.css rule for <body>
          whitelist: ['html', 'body'],
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
