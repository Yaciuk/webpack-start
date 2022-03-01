const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  }
};