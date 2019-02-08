const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',

  devServer: {
      port: 8080,
      contentBase: './dist'
  },

  entry: {
      linkedList: './src/LinkedList/index.js'
  },

  mode: 'development',

  plugins: [
      new HTMLWebpackPlugin({
          template: './src/index.html',
          inject: true,
          chunks: [],
          filename: 'index.html'
      }),
      new HTMLWebpackPlugin({
          template: './src/LinkedList/tmpl.html',
          inject: true,
          chunks: ['linkedList'],
          filename: 'linked-list/index.html'
      })
  ]
};