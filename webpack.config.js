const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
  },
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    port: 4649,
    contentBase: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    }),
  ],
};

