var path = require("path")
var webpack = require("webpack")
var pkg = require("./package.json")

module.exports = {
  entry: {
    index: ['./src/index.js'],
    vendor: Object.keys(pkg.dependencies),
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
  }
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
 }