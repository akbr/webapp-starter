const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const config = {
  entry: {
    index: './src/index.js',
    //vendor: filled if dependencies are specified in package.json,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  output: {
    path: path.resolve('bin'),
    publicPath: '/bin/',
    filename: 'index.bundle.js'
  }
 }

const dependencies = Object.keys(pkg.dependencies);
if (dependencies.length > 0) {
  config.entry.vendor = dependencies;
};

module.exports = config;
