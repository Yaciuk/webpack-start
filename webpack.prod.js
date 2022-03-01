const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: false,
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  }
};