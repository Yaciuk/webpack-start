const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html",
      scriptLoading: "module",
      inject: "body"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
        {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  }
};