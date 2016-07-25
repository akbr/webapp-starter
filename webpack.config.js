var path = require("path")
var webpack = require("webpack")
var pkg = require("./package.json")

module.exports = {
  entry: {
    app: ['./src/app.js'],
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: path.resolve("bin"),
    publicPath: "/bin/",
    filename: 'app.bundle.js'
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
 }