const merge = require('webpack-merge');
const Webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    stats: 'errors-only',
  },
};

module.exports = merge(baseConfig, devConfig);
