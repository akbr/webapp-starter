const path = require('path');

const config = {
	mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve('bin'),
    publicPath: '/bin/',
    filename: 'index.bundle.js'
  }
 }

module.exports = config;
