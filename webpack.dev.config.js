const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Game Deals',
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: 3000,
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        secure: false,
      },
    },
  },
});
