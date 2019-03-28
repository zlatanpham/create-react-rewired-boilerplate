const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const {
  addWebpackResolve,
  override,
  addBabelPlugin,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addBabelPlugin('styled-components'),
  addWebpackResolve({ alias: { '@': path.resolve(__dirname, 'src') } }),
  config => rewireReactHotLoader(config),
);
