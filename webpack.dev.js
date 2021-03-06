const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge (common, {
  mode: "development",
  devServer: {
    static: './dist',
  },
  devtool: false,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
    publicPath: './',
    clean: true,
  }
});