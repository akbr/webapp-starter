var path = require("path")
var webpack = require("webpack")
var pkg = require("./package.json")

var config = {
  entry: {
    index: './src/index.js',
    //vendor: if dependencies are specified,
  },
  output: {
    path: path.resolve("bin"),
    publicPath: "/bin/",
    filename: 'index.bundle.js'
  },
  devtool: "cheap-module-source-map",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
 }

var dependencies = Object.keys(pkg.dependencies)
if (dependencies.length > 0) {
  config.entry.vendor = dependencies
}

module.exports = config