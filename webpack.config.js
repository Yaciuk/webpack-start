const path = require("path");
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
        /*1. sass-loader turns sass to css, 2. css-loader turns css to 
        common.js, and then 3. style-loader injects styles into the DOM */
      },
    ],
  },
};